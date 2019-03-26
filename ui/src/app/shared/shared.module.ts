//angular modules
import { CommonModule } from "@angular/common";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

//external modules
import { LayoutModule } from "@angular/cdk/layout";
import { MatMenuModule, MatButtonModule, MatIconModule, MatListModule, MatFormFieldModule, MatToolbarModule, MatSidenavModule, MatInputModule, MatCheckboxModule, MatSelectModule, MatCardModule, MatProgressBarModule, MatSnackBarModule } from "@angular/material";

//services
import { CookieService } from "ngx-cookie-service";
import { HttpInterceptorService } from "./services/http-interceptor/http-interceptor.service";
import { StorageService } from "./services/storage/storage.service";
import { EventsService } from "./services/events.service/events.service";
import { LoggedInGuardService } from "./services/logged-in-guard/logged-in-guard.service";
import { AuthGuardService } from "./services/auth-guard/auth-guard.service";

@NgModule({
    imports: [
        CommonModule,
        LayoutModule,
        MatToolbarModule,
        MatSidenavModule,
        MatButtonModule,
        MatIconModule,
        MatListModule,
        MatFormFieldModule,
        MatInputModule,
        MatCheckboxModule,
        MatSelectModule,
        MatCardModule,
        MatProgressBarModule,
        MatSnackBarModule,
        MatMenuModule
    ],
    declarations: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    providers: [
        CookieService,
        StorageService,
        HttpInterceptorService,
        EventsService,
        LoggedInGuardService,
        AuthGuardService
    ],
    exports: [
        CommonModule,
        LayoutModule,
        LayoutModule,
        MatToolbarModule,
        MatSidenavModule,
        MatButtonModule,
        MatIconModule,
        MatListModule,
        MatFormFieldModule,
        MatInputModule,
        MatCheckboxModule,
        MatSelectModule,
        MatCardModule,
        MatProgressBarModule,
        MatSnackBarModule,
        MatMenuModule
    ]
})
export class SharedModule { }