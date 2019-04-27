import { Component, OnInit, OnDestroy } from "@angular/core";
import { Router } from "@angular/router";
import { MatSnackBar } from "@angular/material";
import { AngularFireDatabase } from "angularfire2/database";
import { AngularFireAuth } from "@angular/fire/auth";
import { User } from "firebase/app";
import { EventsService, GLOBAL_EVENTS } from "../../shared/services/events.service/events.service";
import { StorageService } from "../../shared/services/storage/storage.service";

@Component({
    selector: "app-objective-list",
    templateUrl: "./objective-list.component.html",
    styleUrls: ["./objective-list.component.css"]
})
export class ObjectiveListComponent implements OnInit {

    public displayedColumns: string[];
    public objectives = [];
    public user: User;

    public constructor(
        private _Router: Router,
        private _StorageService: StorageService,
        private _EventsService: EventsService,
        private _MatSnackBar: MatSnackBar,
        private _AngularFireDatabase: AngularFireDatabase,
        private _AngularFireAuth: AngularFireAuth
    ) { }

    public async ngOnInit(): Promise<void> {
        this.user = this._StorageService.getItem("user", "local") as User;
        this.displayedColumns = ["_id", "summary", "keyResults", "stories", "action"];

        this._AngularFireDatabase
            .object(`objectives/${this.user.uid}`)
            .valueChanges()
            .subscribe((response: any[]) => {
                response = response || [];
                this.objectives = Object.values(response).reduce((source, item, index) => {
                    source.push({
                        _id: index + 1,
                        id: item.id,
                        summary: item.name,
                        keyResults: item.keyResults.length,
                        stories: 0
                    })
                    return source;
                }, []);
                this._StorageService.setItem("objectives", response, "local");
            });
    }
}