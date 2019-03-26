// angular modules
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { HttpModule } from "@angular/http";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

// external modules
import { SharedModule } from "../shared/shared.module";

// components
import { CreateOrganisationComponent } from "./create-organisation/create-organisation.component";

// services
import { OrganisationResolver } from "./resolvers/organisation.resolver";

// routes (always last)
import { Routes } from "./organisation.routes";

@NgModule({
    imports: [
        ReactiveFormsModule,
        HttpModule,
        SharedModule,
        RouterModule.forChild(Routes) //always last
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    declarations: [
        CreateOrganisationComponent
    ],
    providers: [OrganisationResolver],
    bootstrap: [CreateOrganisationComponent]
})
export class OrganisationModule { }