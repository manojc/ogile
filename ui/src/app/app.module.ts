//angular modules
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from "@angular/router";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CookieService } from 'ngx-cookie-service';
import { LayoutModule } from '@angular/cdk/layout';
import { 
    MatButtonModule, 
    MatIconModule,
    MatListModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatSidenavModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    MatProgressBarModule
} from '@angular/material';

//external modules

//components
import { AppComponent } from './app/app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ErrorPageComponent } from './error-page/error-page.component';

//services
import { HttpInterceptorService } from './shared/services/http-interceptor/http-interceptor.service';
import { StorageService } from './shared/services/storage/storage.service';

//pipes

//routes (always last)
import { Routes } from './app.routes';

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatSidenavModule,
        LayoutModule,
        MatButtonModule,
        MatIconModule,
        MatListModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatCardModule,
        MatProgressBarModule,
        //always last
        RouterModule.forRoot(Routes)
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent,
        ErrorPageComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    providers: [
        CookieService,
        StorageService,
        HttpInterceptorService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }