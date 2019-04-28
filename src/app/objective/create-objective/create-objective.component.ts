import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { FormGroup, FormControl, FormArray, Validators } from "@angular/forms";
import { AngularFireDatabase } from "angularfire2/database";
import { User } from "firebase/app";
import { StorageService } from "../../shared/services/storage/storage.service";
import { EventsService, GLOBAL_EVENTS } from "../../shared/services/events.service/events.service";
import { UUID } from "../../shared/models/uuid.model";

@Component({
    selector: "app-create-objective",
    templateUrl: "./create-objective.component.html",
    styleUrls: ["./create-objective.component.css"]
})
export class CreateObjectiveComponent implements OnInit {

    public form: FormGroup;
    public user: User;
    public selectedObjective: any;
    public editMode: boolean;
    public maxWeight: any;

    public constructor(
        private _Router: Router,
        private _ActivatedRoute: ActivatedRoute,
        private _StorageService: StorageService,
        private _EventsService: EventsService,
        private _AngularFireDatabase: AngularFireDatabase
    ) { }

    get keyResults(): FormArray { return this.form.get('keyResults') as FormArray; }

    public ngOnInit(): void {
        this.user = this._StorageService.getItem("user", "local") as User;
        const objectives: any = this._StorageService.getItem("objectives", "local") as any[];
        if (objectives && Object.values(objectives).length) {
            this.maxWeight = Object.values(objectives)
                .reduce((count: number, objective: any): number => {
                    count -= objective.weight
                    return count;
                }, 100);
        } else {
            this.maxWeight = 100;
        }
        if (this._ActivatedRoute.snapshot.params.objective_id) {
            this.editMode = true;
            this.selectedObjective = objectives[this._ActivatedRoute.snapshot.params.objective_id];
            this.maxWeight += this.selectedObjective.weight;
            this.form = new FormGroup({
                name: new FormControl(this.selectedObjective.name, [Validators.required]),
                weight: new FormControl(this.selectedObjective.weight, [Validators.required, Validators.min(1), Validators.max(this.maxWeight)]),
                description: new FormControl(this.selectedObjective.description, [Validators.required]),
                keyResults: new FormArray(this.selectedObjective.keyResults.reduce((array, keyResult) => {
                    array.push(new FormControl(keyResult, [Validators.required]));
                    return array;
                }, []))
            });
        } else {
            this.editMode = false;
            this.form = new FormGroup({
                name: new FormControl(null, [Validators.required]),
                weight: new FormControl(null, [Validators.required, Validators.min(1), Validators.max(this.maxWeight)]),
                description: new FormControl("", [Validators.required]),
                keyResults: new FormArray([new FormControl(null, [Validators.required])])
            });
        }
    }

    public addKeyResult(): any {
        this.keyResults.push(new FormControl(null, [Validators.required]));
    }

    public removeKeyResult(index): any {
        this.keyResults.removeAt(index);
    }

    public async create(): Promise<any> {
        if (this.form.valid) {
            if (this._ActivatedRoute.snapshot.params.objective_id) {
                await this._AngularFireDatabase
                    .database
                    .ref(`objectives/${this.user.uid}/${this.selectedObjective.id}`)
                    .set({ uid: this.user.uid, id: this.selectedObjective.id, ...this.form.value })
            } else {
                const id = UUID.generate();
                await this._AngularFireDatabase
                    .database
                    .ref(`objectives/${this.user.uid}/${id}`)
                    .set({ uid: this.user.uid, id: id, ...this.form.value });
            }
            this._Router.navigate(["/objectives"]);
        }
    }
}
