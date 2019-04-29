import { Component, OnInit, OnDestroy } from "@angular/core";
import { Router } from "@angular/router";
import { MatSnackBar } from "@angular/material";
import { AngularFireDatabase } from "angularfire2/database";
import { AngularFireAuth } from "@angular/fire/auth";
import { User } from "firebase/app";
import { EventsService, GLOBAL_EVENTS } from "../../shared/services/events.service/events.service";
import { StorageService } from "../../shared/services/storage/storage.service";

@Component({
    selector: "app-story-list",
    templateUrl: "./story-list.component.html",
    styleUrls: ["./story-list.component.css"]
})
export class StoryListComponent implements OnInit {

    public displayedColumns: string[];
    public stories = [];
    public totalPoints = 0;
    public totalWorkLog = 0;
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
        this.displayedColumns = ["_id", "summary", "objective", "keyResult", "points", "workLog", "action"];
        this._AngularFireDatabase
            .object(`objectives/${this.user.uid}`)
            .valueChanges()
            .subscribe((response: any) => {
                this.totalPoints = 0;
                this.totalWorkLog = 0;
                response = response || {};
                const all_stories = Object.values(response).reduce((source: any[], item, index) => {
                    item["stories"] = item["stories"] || [];
                    return [...source, ...Object.values(item["stories"])];
                }, []);
                this.stories = Object.values(all_stories)
                    .sort((obj1, obj2) => {
                        if (obj1["name"] < obj2["name"]) return -1;
                        if (obj1["name"] > obj2["name"]) return 1;
                        return 0;
                    })
                    .reduce((source, item, index) => {
                        this.totalPoints += item.points;
                        this.totalWorkLog = (item.workLogs || []).reduce((sum, item) => { return sum += item }, this.totalWorkLog);
                        source.push({
                            _id: index + 1,
                            id: item.id,
                            summary: item.name,
                            oid: item.selectedObjective,
                            objective: response[item.selectedObjective].name,
                            keyResult: item.selectedKeyResult,
                            points: item.points,
                            workLog: (item.workLogs || []).reduce((sum, item) => { return sum += item }, 0)
                        })
                        return source;
                    }, []);
                this._StorageService.setItem("objectives", response, "local");
            });
    }
}