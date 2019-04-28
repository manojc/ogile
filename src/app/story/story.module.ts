// angular modules
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { HttpModule } from "@angular/http";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

// external modules
import { SharedModule } from "../shared/shared.module";

// components
import { CreateStoryComponent } from "./create-story/create-story.component";
import { StoryListComponent } from './story-list/story-list.component';


// routes (always last)
import { Routes } from "./story.routes";

@NgModule({
    imports: [
        ReactiveFormsModule,
        HttpModule,
        SharedModule,
        RouterModule.forChild(Routes) //always last
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    declarations: [
        CreateStoryComponent,
        StoryListComponent
    ],
    providers: [],
    bootstrap: [CreateStoryComponent]
})
export class StoryModule { }