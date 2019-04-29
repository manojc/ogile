import { Component, OnInit, OnDestroy } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import { AngularFireAuth } from "@angular/fire/auth";
import { ChartOptions, ChartType, ChartDataSets } from "chart.js";
import * as pluginDataLabels from "chartjs-plugin-datalabels";
import { Label } from "ng2-charts";
import { User } from "firebase/app";
import { EventsService, GLOBAL_EVENTS } from "../shared/services/events.service/events.service";
import { StorageService } from "../shared/services/storage/storage.service";

@Component({
    selector: "app-home",
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit, OnDestroy {

    public user: User;
    public eventIds: Array<string>;
    public barChartOptions: ChartOptions = { responsive: true };
    public barChartLabels: Label[] = [];
    public barChartType: ChartType = "horizontalBar";
    public barChartLegend = true;
    public barChartPlugins = [];
    public barChartData: ChartDataSets[] = [];

    public constructor(
        private _StorageService: StorageService,
        private _EventsService: EventsService,
        private _AngularFireDatabase: AngularFireDatabase
    ) { }

    public ngOnInit(): void {
        this.user = this._StorageService.getItem("user", "local") as User;
        this.eventIds = [
            this._EventsService.on(GLOBAL_EVENTS.SET_USER, (user: User) => {
                this.user = user;
                this._StorageService.setItem("user", user, "local");
            })
        ];
        this.populateGraph();
    }

    public populateGraph(): void {
        if (!this.user || !this.user.uid) {
            return;
        }

        this._AngularFireDatabase
            .object(`objectives/${this.user.uid}`)
            .valueChanges()
            .subscribe((response: any) => {
                const barChartData = [
                    { data: [], label: "Completed Story Points" },
                    { data: [], label: "Total Story Points" }
                ];
                const barChartLabels = [];
                response = response || {};
                const objectives = Object.values(response).sort((obj1, obj2) => {
                    if (obj1["name"] < obj2["name"]) return -1;
                    if (obj1["name"] > obj2["name"]) return 1;
                    return 0;
                });
                objectives.forEach(objective => {
                    barChartLabels.push(objective["name"]);
                    objective["stories"] = objective["stories"] || {};
                    const totalPoints = Object.values(objective["stories"]).reduce((totalPoints, story) => {
                        totalPoints += story["points"];
                        return totalPoints;
                    }, 0);
                    const completedPoints = Object.values(objective["stories"]).reduce((completedPoints, story) => {
                        story["workLogs"] = story["workLogs"] || [];
                        completedPoints += story["workLogs"].reduce((storyWorkLog, worklog) => {
                            storyWorkLog += worklog;
                            return storyWorkLog;
                        }, 0);
                        return completedPoints;
                    }, 0);
                    barChartData[0].data.push(completedPoints);
                    barChartData[1].data.push(totalPoints);
                });
                this.barChartLabels = barChartLabels;
                this.barChartData = barChartData;
            });
    }

    public ngOnDestroy(): void {
        this.eventIds.forEach((eventId: string) => this._EventsService.off(eventId));
    }
}