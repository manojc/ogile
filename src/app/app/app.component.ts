import { Component, OnInit, OnDestroy } from "@angular/core";
import { Router } from "@angular/router";
import { MatSnackBar } from "@angular/material";
import { AngularFireAuth } from "@angular/fire/auth";
import { auth, User } from "firebase/app";
import { EventsService, GLOBAL_EVENTS } from "../shared/services/events.service/events.service";
import { StorageService } from "../shared/services/storage/storage.service";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.css"]
})

export class AppComponent implements OnInit, OnDestroy {

    public user: User;
    public showLoader: boolean;
    public eventIds: Array<string>;

    public constructor(
        private _Router: Router,
        private _StorageService: StorageService,
        private _EventsService: EventsService,
        private _MatSnackBar: MatSnackBar,
        private _AngularFireAuth: AngularFireAuth
    ) { }

    public ngOnInit(): void {
        this.bindEvents();
        this.user = this._StorageService.getItem("user", "local") as User;
    }

    public ngOnDestroy(): void {
        this.eventIds.forEach((eventId: string) => this._EventsService.off(eventId));
    }

    public home(): void {
        this._Router.navigate([""]);
    }

    public profile(): void {
        this._Router.navigate(["profile"]);
    }

    public async login(): Promise<void> {
        const userCredential: auth.UserCredential = await this._AngularFireAuth.auth.signInWithPopup(new auth.GoogleAuthProvider())
        this._EventsService.broadcast(GLOBAL_EVENTS.SET_USER, userCredential.user);
    }

    public async logout(): Promise<void> {
        try {
            await this._AngularFireAuth.auth.signOut();
            this._EventsService.broadcast(GLOBAL_EVENTS.SET_USER, null);
            this._Router.navigate([""]);
        } catch (error) {
            console.error(error);
        }
    }

    private bindEvents(): void {
        this.eventIds = [
            this._EventsService.on(GLOBAL_EVENTS.TOGGLE_LOADER, (showLoader: boolean) => {
                this.showLoader = showLoader;
            }),
            this._EventsService.on(GLOBAL_EVENTS.SET_USER, (user: User) => {
                this.user = user;
                this._StorageService.setItem("user", user, "local");
            }),
            this._EventsService.on(GLOBAL_EVENTS.SHOW_SNACKBAR, (message: string) => {
                this._MatSnackBar.open(message, "close", {
                    duration: 3000,
                    horizontalPosition: "right",
                    verticalPosition: "bottom"
                });
            })
        ];
    }
}