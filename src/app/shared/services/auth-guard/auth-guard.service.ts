import { Injectable } from "@angular/core";
import { Router, CanActivate } from "@angular/router";
import { StorageService } from "../storage/storage.service";

@Injectable()
export class AuthGuardService implements CanActivate {

    constructor(private _Router: Router,
        private _StorageService: StorageService) { }

    public async canActivate(): Promise<boolean> {
        try {
            const user = this._StorageService.getItem("user", "local");
            this._StorageService.setItem("user", user, "local");
            return Promise.resolve(true);
        } catch (error) {
            return Promise.reject(false);
        }
    }
}