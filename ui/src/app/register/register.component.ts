import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormGroup } from "@angular/forms";
import { User } from "../shared/models/user.model";
import { HttpInterceptorService } from "../shared/services/http-interceptor/http-interceptor.service";
import { API_URL } from "../shared/models/api.url.model";
import { StorageService } from "../shared/services/storage/storage.service";
import { EventsService, GLOBAL_EVENTS } from "../shared/services/events.service/events.service";

@Component({
    selector: "app-register",
    templateUrl: "./register.component.html",
    styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {

    public form: FormGroup;
    public user: User;
    public passwordMatching: boolean = true;

    public constructor(private _Http: HttpInterceptorService,
        private _StorageService: StorageService,
        private _Router: Router,
        private _EventsService: EventsService) { }

    public ngOnInit(): void {
        this.form = User.registrationForm;
    }

    public copyEmailAsUsername(control: HTMLInputElement): void {
        if (!control) {
            return;
        }

        if (control.checked && this.form.controls.email.valid) {
            this.form.controls.username.setValue(this.form.value.email);
        }
    }

    public async register(): Promise<any> {
        if (this.form.valid && this.form.dirty && this.form.touched) {
            try {
                const httpResponse = this._Http.post(API_URL.REGISTER_USER, this.form.value);
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