import { Injectable } from "@angular/core";
import { Router, CanActivate } from "@angular/router";
import { StorageService } from "../storage/storage.service";
import { User } from "../../models/user.model";

@Injectable()
export class AuthGuardService implements CanActivate {

    constructor(private _Router: Router,
        private _StorageService: StorageService) { }

    public async canActivate(): Promise<boolean> {
        try {
            const user: User = this._StorageService.getItem("user", "local") as User;
            if (!user || !user._id) {
                this._Router.navigate(["/login"]);
                return Promise.resolve(false);
            }
            this._StorageService.setItem("user", user, "local");
            return Promise.resolve(true);
        } catch (error) {
            return Promise.reject(false);
        }
    }
}