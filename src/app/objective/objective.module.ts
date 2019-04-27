// angular modules
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { HttpModule } from "@angular/http";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

// external modules
import { SharedModule } from "../shared/shared.module";

// components
import { CreateObjectiveComponent } from "./create-objective/create-objective.component";


// routes (always last)
import { Routes } from "./objective.routes";
import { ObjectiveListComponent } from './objective-list/objective-list.component';

@NgModule({
    imports: [
        ReactiveFormsModule,
        HttpModule,
        SharedModule,
        RouterModule.forChild(Routes) //always last
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    declarations: [
        CreateObjectiveComponent,
        ObjectiveListComponent
    ],
    providers: [],
    bootstrap: [CreateObjectiveComponent]
})
export class ObjectiveModule { }