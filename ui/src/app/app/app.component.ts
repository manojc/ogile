import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { StorageService } from '../shared/services/storage/storage.service';
import { EventsService, GLOBAL_EVENTS } from '../shared/services/events.service/events.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

    public user: any;
    public showLoader: boolean;

    public constructor(private _StorageService: StorageService,
        private _Router: Router,
        private _EventsService: EventsService) {
        this.user = this._StorageService.getItem("user", "local");
    }

    public ngOnInit(): void {
        this._EventsService.on(GLOBAL_EVENTS.TOGGLE_LOADER, (showLoader: boolean) => {
            this.showLoader = showLoader;
        });
    }

    public goToLogin(): void {
        this._Router.navigate([!!this.user ? '' : 'login']);
    }

    public goToRegister(): void {
        this._Router.navigate([!!this.user ? '' : 'register']);
    }
}