import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { HttpInterceptorService } from "../../shared/services/http-interceptor/http-interceptor.service";
import { StorageService } from "../../shared/services/storage/storage.service";
import { EventsService, GLOBAL_EVENTS } from "../../shared/services/events.service/events.service";

@Component({
    selector: "app-create-objective",
    templateUrl: "./create-objective.component.html",
    styleUrls: ["./create-objective.component.css"]
})
export class CreateObjectiveComponent implements OnInit {

    public form: FormGroup;

    public constructor(
        private _Http: HttpInterceptorService,
        private _Router: Router,
        private _route: ActivatedRoute,
        private _StorageService: StorageService,
        private _EventsService: EventsService
    ) { }

    public ngOnInit(): void {
        this.form = new FormGroup({
            name: new FormControl("", [
                Validators.required
            ]),
            description: new FormControl("", [
                Validators.required
            ])
        });
        this.form.setValue({ name: "", description: "" });
    }

    public async create(): Promise<any> {
    }

}
