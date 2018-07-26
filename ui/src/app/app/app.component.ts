import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { StorageService } from '../shared/services/storage/storage.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

    public user: any;

    public constructor(private _StorageService: StorageService,
        private _Router: Router) {
        this.user = this._StorageService.getItem("user", "local");
    }

    public ngOnInit(): void {
    }

    public goToLogin(): void {
        this._Router.navigate([!!this.user ? '' : 'login']);
    }

    public goToRegister(): void {
        this._Router.navigate([!!this.user ? '' : 'register']);
    }
}