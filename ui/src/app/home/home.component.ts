import { Component, OnInit } from '@angular/core';
import { StorageService } from '../shared/services/storage/storage.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    public user: any;

    public constructor(private _StorageService: StorageService,
        private _Router: Router) {
        this.user = this._StorageService.getItem("user", "local");
        if (!this.user || !this.user.id) {
            this._Router.navigate(["login"]);
        }
    }

    public ngOnInit(): void {
    }
}