//angular modules
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { HttpModule } from "@angular/http";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

//external modules
import { SharedModule } from "./shared/shared.module";

//components
import { AppComponent } from "./app/app.component";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { ErrorPageComponent } from "./error-page/error-page.component";

//routes (always last)
import { Routes } from "./app.routes";

@NgModule({
    imports: [
        ReactiveFormsModule,
        BrowserModule,
        HttpModule,
        BrowserAnimationsModule,
        SharedModule,
        RouterModule.forRoot(Routes) //always last
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent,
        ErrorPageComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }