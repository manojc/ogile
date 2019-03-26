import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { HttpInterceptorService } from "../shared/services/http-interceptor/http-interceptor.service";
import { EventsService, GLOBAL_EVENTS } from "../shared/services/events.service/events.service";
import { StorageService } from "../shared/services/storage/storage.service";
import { API_URL } from "../shared/models/api.url.model";
import { User } from "../shared/models/user.model";

@Component({
    selector: "app-login",
    templateUrl: "./login.component.html",
    styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
    public form: FormGroup;
    public user: User;

    public constructor(private _Http: HttpInterceptorService,
        private _StorageService: StorageService,
        private _Router: Router,
        private _EventsService: EventsService) {
    }

    public ngOnInit(): void {
        this.form = User.loginForm;
    }

    public async login(): Promise<void> {
        if (this.form.valid && this.form.dirty && this.form.touched) {
            try {
                const httpResponse = this._Http.post(API_URL.LOGIN_USER, this.form.value);
                const user: User = await this._Http.toModel(httpResponse);
                if (!!user && !!user._id) {
                    this._EventsService.broadcast(GLOBAL_EVENTS.SET_USER, user);
                    this._StorageService.setItem("user", user, "local");
                    this._Router.navigate([!!user["organisationId"] ? "/" : "/organisation/create"]);
                }
            } catch (error) {
                console.error(error);
            }
        }
    }
}