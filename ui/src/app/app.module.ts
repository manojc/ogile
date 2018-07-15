//angular modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from "@angular/router";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule, MatIconModule, MatListModule } from '@angular/material';

//external modules

//components
import { AppComponent } from './app/app.component';
import { HomeComponent } from './home/home.component';
import { SidenavigationComponent } from './sidenavigation/sidenavigation.component';

//services

//pipes

//routes (always last)
import { Routes } from './app.routes';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatSidenavModule,
        LayoutModule,
        MatButtonModule,
        MatIconModule,
        MatListModule,
        //always last
        RouterModule.forRoot(Routes)
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        SidenavigationComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }