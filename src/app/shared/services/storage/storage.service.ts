import { Injectable } from "@angular/core";
import { CookieService } from "ngx-cookie-service";

type storageType = "local" | "session" | "cookie";

@Injectable({
    providedIn: "root"
})
export class StorageService {

    public constructor(private _CookieService: CookieService) { }

    public getItem(key: string, storageType: storageType = "cookie"): Object {

        if (!key || !key.trim()) {
            return null;
        }

        if (storageType === "cookie") {
            try {
                return this._CookieService.get(key);
            } catch (error) {
                return null;
            }
        }

        if (!this.checkStorageSupport()) {
            return null;
        }

        let value: any = storageType === "local" ? localStorage.getItem(key) : sessionStorage.getItem(key);

        try {
            value = JSON.parse(value);
        } catch (error) {
            return null;
        }

        return value;
    }

    public setItem(key: string, value: any, storageType: storageType = "cookie"): boolean {

        if (!key || !key.trim()) {
            return false;
        }

        value = value || null;

        if (storageType === "cookie") {
            try {
                this._CookieService.set(key, value);
                return true;
            } catch (error) {
                return false;
            }
        }

        if (!this.checkStorageSupport()) {
            return false;
        }

        try {
            value = JSON.stringify(value);
        } catch (error) { };

        storageType === "local" ? localStorage.setItem(key, value) : sessionStorage.setItem(key, value);
        return true;
    }

    public setKey(key: string, subKey: string, value: any, storageType: storageType = "cookie"): boolean {
        if (!subKey || !value) {
            return false;
        }
        try {
            let data: any = this.getItem(key, storageType);
            data[subKey] = value;
            this.setItem(key, data, storageType);
            return true;
        } catch (error) {
            return false;
        }
    }

    private checkStorageSupport(): boolean {
        return typeof Storage !== "undefined";
    }
}