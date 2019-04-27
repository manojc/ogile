import { Component, OnInit, OnDestroy } from "@angular/core";
import { Router } from "@angular/router";
import { MatSnackBar } from "@angular/material";
import { AngularFireDatabase } from "angularfire2/database";
import { AngularFireAuth } from "@angular/fire/auth";
import { auth } from "firebase/app";
import { EventsService, GLOBAL_EVENTS } from "../../shared/services/events.service/events.service";
import { StorageService } from "../../shared/services/storage/storage.service";

const ELEMENT_DATA = [
    { id: 1, summary: "Hydrogen", keyResults: 1.0079, stories: "H", actions: "" },
    { id: 2, summary: "Helium", keyResults: 4.0026, stories: "He", actions: "" },
    { id: 3, summary: "Lithium", keyResults: 6.941, stories: "Li", actions: "" },
    { id: 4, summary: "Beryllium", keyResults: 9.0122, stories: "Be", actions: "" },
    { id: 5, summary: "Boron", keyResults: 10.811, stories: "B", actions: "" },
    { id: 6, summary: "Carbon", keyResults: 12.0107, stories: "C", actions: "" },
    { id: 7, summary: "Nitrogen", keyResults: 14.0067, stories: "N", actions: "" },
    { id: 8, summary: "Oxygen", keyResults: 15.9994, stories: "O", actions: "" },
    { id: 9, summary: "Fluorine", keyResults: 18.9984, stories: "F", actions: "" },
    { id: 10, summary: "Neon", keyResults: 20.1797, stories: "Ne", actions: "" },
];

@Component({
    selector: "app-objective-list",
    templateUrl: "./objective-list.component.html",
    styleUrls: ["./objective-list.component.css"]
})
export class ObjectiveListComponent implements OnInit {

    public displayedColumns: string[];
    public dataSource = [];

    public constructor(
        private _Router: Router,
        private _StorageService: StorageService,
        private _EventsService: EventsService,
        private _MatSnackBar: MatSnackBar,
        private _AngularFireDatabase: AngularFireDatabase,
        private _AngularFireAuth: AngularFireAuth
    ) { }

    public ngOnInit() {
        this.displayedColumns = ["id", "summary", "keyResults", "stories", "action"];
        this.dataSource = ELEMENT_DATA;
    }

    public showDetails(objective: any): any {
        console.log(objective);
    }
}