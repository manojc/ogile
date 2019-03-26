import { Component, OnInit, OnDestroy } from "@angular/core";
import { Router } from "@angular/router";
import { MatSnackBar } from "@angular/material";
import { HttpInterceptorService } from "../shared/services/http-interceptor/http-interceptor.service";
import { EventsService, GLOBAL_EVENTS } from "../shared/services/events.service/events.service";
import { StorageService } from "../shared/services/storage/storage.service";
import { API_URL } from "../shared/models/api.url.model";
import { User } from "../shared/models/user.model";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.css"]
})

export class AppComponent implements OnInit, OnDestroy {

    public user: User;
    public showLoader: boolean;
    public eventIds: Array<string>;

    public constructor(private _Router: Router,
        private _Http: HttpInterceptorService,
        private _StorageService: StorageService,
        private _EventsService: EventsService,
        private _MatSnackBar: MatSnackBar) {
    }

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

    public login(): void {
        this._Router.navigate([!!this.user ? "" : "login"]);
    }

    public logout(): void {
        try {
            this.user = null;
            this._StorageService.setItem("user", null, "local");
            this._Router.navigate(["/login"]);
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
            }),
            this._EventsService.on(GLOBAL_EVENTS.SHOW_SNACKBAR, (message: string) => {
                this._MatSnackBar.open(message, "close", {
                    duration: 3000,
                    horizontalPosition: "right",
                    verticalPosition: "bottom"
                });
            }),
            this._EventsService.on(GLOBAL_EVENTS.SET_ORGANISATION, () => {
                this.user = this._StorageService.getItem("user", "local") as User;
            })
        ];
    }
}