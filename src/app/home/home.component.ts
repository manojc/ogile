import { Component, OnInit, OnDestroy } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import { AngularFireAuth } from "@angular/fire/auth";
import { auth } from "firebase/app";
import { EventsService, GLOBAL_EVENTS } from "../shared/services/events.service/events.service";
import { StorageService } from "../shared/services/storage/storage.service";

@Component({
    selector: "app-home",
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit, OnDestroy {

    public user: auth.UserCredential;
    public eventIds: Array<string>;

    public constructor(
        private _StorageService: StorageService,
        private _EventsService: EventsService) {
    }

    public ngOnInit(): void {
        this.user = this._StorageService.getItem("user", "local") as auth.UserCredential;
        this.bindEvents();
    }

    public ngOnDestroy(): void {
        this.eventIds.forEach((eventId: string) => this._EventsService.off(eventId));
    }

    private bindEvents(): void {
        this.eventIds = [
            this._EventsService.on(GLOBAL_EVENTS.SET_USER, (user: auth.UserCredential) => {
                this.user = user;
                this._StorageService.setItem("user", user, "local");
            })
        ];
    }
}