import { Route } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { ErrorPageComponent } from "./error-page/error-page.component";
import { LoggedInGuardService } from "./shared/services/logged-in-guard/logged-in-guard.service";
import { AuthGuardService } from "./shared/services/auth-guard/auth-guard.service";

export let Routes: Array<Route> = [
    {
        path: "",
        component: HomeComponent,
        canActivate: [AuthGuardService]
    },
    {
        path: "organisation",
        loadChildren: "./organisation/organisation.module#OrganisationModule",
        canActivate: [AuthGuardService]
    },
    {
        path: "login",
        component: LoginComponent,
        canActivate: [LoggedInGuardService]
    },
    {
        path: "register",
        component: RegisterComponent,
        canActivate: [LoggedInGuardService]
    },
    {
        path: "**",
        component: ErrorPageComponent
    }
];