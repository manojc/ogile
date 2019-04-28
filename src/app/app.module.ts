//angular modules
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { HttpModule } from "@angular/http";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

//external modules
import { SharedModule } from "./shared/shared.module";

// components
import { AppComponent } from "./app/app.component";
import { HomeComponent } from "./home/home.component";
import { ErrorPageComponent } from "./error-page/error-page.component";

// providers
import { AngularFireAuth } from "@angular/fire/auth";

// environment file
import { environment } from "../environments/environment";

//routes (always last)
import { Routes } from "./app.routes";

@NgModule({
    imports: [
        ReactiveFormsModule,
        BrowserModule,
        HttpModule,
        BrowserAnimationsModule,
        AngularFireModule.initializeApp(environment.firebase, "ogile_ui"),
        AngularFireDatabaseModule,
        SharedModule,
        RouterModule.forRoot(Routes) //always last
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    declarations: [
        AppComponent,
        HomeComponent,
        ErrorPageComponent
    ],
    providers: [AngularFireAuth],
    bootstrap: [AppComponent]
})
export class AppModule { }