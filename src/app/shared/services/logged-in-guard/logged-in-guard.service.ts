import { Injectable } from "@angular/core";
import { Router, CanActivate } from "@angular/router";
import { HttpInterceptorService } from "../http-interceptor/http-interceptor.service";
import { StorageService } from "../storage/storage.service";

@Injectable()
export class LoggedInGuardService implements CanActivate {

    constructor(private _Router: Router,
        private _Http: HttpInterceptorService,
        private _StorageService: StorageService) { }

    public async canActivate(): Promise<boolean> {
        try {
            const user: any = this._StorageService.getItem("user", "local");
            if (!user || !user.uid) {
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