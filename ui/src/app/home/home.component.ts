import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { StorageService } from "../shared/services/storage/storage.service";
import { User } from "../shared/models/user.model";

@Component({
    selector: "app-home",
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {

    public user: User;

    public constructor(private _StorageService: StorageService,
        private _Router: Router) {
        this.user = this._StorageService.getItem("user", "local") as User;
        if (!this.user || !this.user._id) {
            this._Router.navigate(["login"]);
        }
    }

    public ngOnInit(): void {
    }
}