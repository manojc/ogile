import { Route } from "@angular/router";
import { AuthGuardService } from "../shared/services/auth-guard/auth-guard.service";
import { CreateObjectiveComponent } from "./create-objective/create-objective.component";
import { ObjectiveListComponent } from "./objective-list/objective-list.component";

export let Routes: Array<Route> = [
    {
        path: "",
        redirectTo: "list",
        pathMatch: "full"
    },
    {

        path: "list",
        component: ObjectiveListComponent,
        canActivate: [AuthGuardService]
    },
    {
        path: "create",
        component: CreateObjectiveComponent,
        canActivate: [AuthGuardService]
    },
    {
        path: ":objective_id",
        component: CreateObjectiveComponent,
        canActivate: [AuthGuardService]
    }
];