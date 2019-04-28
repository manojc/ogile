import { Route } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { ErrorPageComponent } from "./error-page/error-page.component";
import { LoggedInGuardService } from "./shared/services/logged-in-guard/logged-in-guard.service";
import { AuthGuardService } from "./shared/services/auth-guard/auth-guard.service";

export let Routes: Array<Route> = [
    {
        path: "",
        component: HomeComponent
    },
    {
        path: "objectives",
        loadChildren: "./objective/objective.module#ObjectiveModule",
        canActivate: [AuthGuardService]
    },
    {
        path: "stories",
        loadChildren: "./story/story.module#StoryModule",
        canActivate: [AuthGuardService]
    },
    {
        path: "**",
        component: ErrorPageComponent
    }
];