import { Component, OnInit } from '@angular/core';
import { StorageService } from '../shared/services/storage/storage.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

    public user: any;

    public constructor(private _StorageService: StorageService) {
        this.user = this._StorageService.getItem("user", "local");
    }

    public ngOnInit(): void {
    }

}