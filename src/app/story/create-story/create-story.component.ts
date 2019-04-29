import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { FormGroup, FormControl, FormArray, Validators } from "@angular/forms";
import { AngularFireDatabase } from "angularfire2/database";
import { User } from "firebase/app";
import { StorageService } from "../../shared/services/storage/storage.service";
import { EventsService, GLOBAL_EVENTS } from "../../shared/services/events.service/events.service";
import { UUID } from "../../shared/models/uuid.model";

@Component({
    selector: "app-create-story",
    templateUrl: "./create-story.component.html",
    styleUrls: ["./create-story.component.css"]
})
export class CreateStoryComponent implements OnInit {

    public form: FormGroup;
    public user: User;
    public selectedStory: any;
    public editMode: boolean;
    public ddlObjectives: any[];
    public ddlKeyResults: any[];

    public constructor(
        private _Router: Router,
        private _ActivatedRoute: ActivatedRoute,
        private _StorageService: StorageService,
        private _EventsService: EventsService,
        private _AngularFireDatabase: AngularFireDatabase
    ) { }

    get workLogs(): FormArray { return this.form.get('workLogs') as FormArray; }

    public ngOnInit(): void {
        this.user = this._StorageService.getItem("user", "local") as User;
        const objectives: any = this._StorageService.getItem("objectives", "local") as any[];
        this.ddlObjectives = Object.values(objectives).map((objective: any) => {
            return {
                value: objective.id,
                text: objective.name
            };
        });
        this.ddlKeyResults = Object.values(objectives)[0]["keyResults"];
        if (this._ActivatedRoute.snapshot.params.objective_id && this._ActivatedRoute.snapshot.params.story_id) {
            this.editMode = true;
            this.selectedStory = objectives[this._ActivatedRoute.snapshot.params.objective_id].stories[this._ActivatedRoute.snapshot.params.story_id];
            this.form = new FormGroup({
                name: new FormControl(this.selectedStory.name, [Validators.required]),
                selectedObjective: new FormControl({ value: this.selectedStory.selectedObjective, disabled: this.editMode }, Validators.required),
                selectedKeyResult: new FormControl({ value: this.selectedStory.selectedKeyResult, disabled: this.editMode }, Validators.required),
                points: new FormControl(this.selectedStory.points, [Validators.required, Validators.min(1), Validators.max(40)]),
                description: new FormControl(this.selectedStory.description, [Validators.required]),
                workLogs: new FormArray((this.selectedStory.workLogs || []).reduce((array, workLog) => {
                    array.push(new FormControl(workLog, [Validators.required, Validators.min(1), Validators.max(40)]));
                    return array;
                }, []))
            });
        } else {
            this.editMode = false;
            this.form = new FormGroup({
                name: new FormControl(null, [Validators.required]),
                selectedObjective: new FormControl(this.ddlObjectives[0].value, [Validators.required]),
                selectedKeyResult: new FormControl(this.ddlKeyResults[0], [Validators.required]),
                points: new FormControl(null, [Validators.required, Validators.min(1), Validators.max(40)]),
                description: new FormControl(null, [Validators.required]),
                workLogs: new FormArray([])
            });
        }
    }

    public addWorkLogs(): any {
        this.workLogs.push(new FormControl(null, [Validators.required]));
    }

    public removeWorkLogs(index): any {
        this.workLogs.removeAt(index);
    }

    public async create(): Promise<any> {
        if (this.form.valid) {
            if (this._ActivatedRoute.snapshot.params.objective_id && this._ActivatedRoute.snapshot.params.story_id) {
                await this._AngularFireDatabase
                    .database
                    .ref(`objectives/${this.user.uid}/${this._ActivatedRoute.snapshot.params.objective_id}/stories/${this._ActivatedRoute.snapshot.params.story_id}`)
                    .set({ uid: this.user.uid, id: this._ActivatedRoute.snapshot.params.story_id, ...this.selectedStory, ...this.form.value })
            } else {
                const id = UUID.generate();
                await this._AngularFireDatabase
                    .database
                    .ref(`objectives/${this.user.uid}/${this.form.value.selectedObjective}/stories/${id}`)
                    .set({ uid: this.user.uid, id: id, ...this.selectedStory, ...this.form.value });
            }
            this._Router.navigate(["/stories"]);
        }
    }
}
