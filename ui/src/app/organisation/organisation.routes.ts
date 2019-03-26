import { Route } from "@angular/router";
import { AuthGuardService } from "../shared/services/auth-guard/auth-guard.service";
import { CreateOrganisationComponent } from "./create-organisation/create-organisation.component";
import { OrganisationResolver } from "./resolvers/organisation.resolver";

export let Routes: Array<Route> = [
    {
        path: "",
        redirectTo: "/list",
        pathMatch: "full"
    },
    {
        path: "list",
        component: CreateOrganisationComponent,
        canActivate: [AuthGuardService]
    },
    {
        path: "create",
        component: CreateOrganisationComponent,
        canActivate: [AuthGuardService]
    },
    {
        path: ":organisationId",
        component: CreateOrganisationComponent,
        resolve: {
            organisation: OrganisationResolver
        },
        canActivate: [AuthGuardService]
    }
];