import { Route } from "@angular/router";
import { AuthGuardService } from "../shared/services/auth-guard/auth-guard.service";
import { CreateStoryComponent } from "./create-story/create-story.component";
import { StoryListComponent } from "./story-list/story-list.component";

export let Routes: Array<Route> = [
    {
        path: "",
        redirectTo: "list",
        pathMatch: "full"
    },
    {

        path: "list",
        component: StoryListComponent,
        canActivate: [AuthGuardService]
    },
    {
        path: "create",
        component: CreateStoryComponent,
        canActivate: [AuthGuardService]
    },
    {
        path: ":objective_id/:story_id",
        component: CreateStoryComponent,
        canActivate: [AuthGuardService]
    }
];