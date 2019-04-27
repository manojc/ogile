import { Injectable } from "@angular/core";
import { Router, CanActivate } from "@angular/router";
import { HttpInterceptorService } from "../http-interceptor/http-interceptor.service";
import { StorageService } from "../storage/storage.service";
import { API_URL } from "../../models/api.url.model";
import { User } from "../../models/user.model";

@Injectable()
export class LoggedInGuardService implements CanActivate {

    constructor(private _Router: Router,
        private _Http: HttpInterceptorService,
        private _StorageService: StorageService) { }

    public async canActivate(): Promise<boolean> {
        try {
            const user: User = this._StorageService.getItem("user", "local") as User;
            if (!user || !user._id) {
                return Promise.resolve(true);
            }
            this._StorageService.setItem("user", user, "local");
            this._Router.navigate(["/"]);
            return Promise.resolve(false);
        } catch (error) {
            return Promise.reject(false);
        }
    }
}