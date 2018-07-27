import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from '../shared/models/user.model';
import { HttpInterceptorService } from '../shared/services/http-interceptor/http-interceptor.service';
import { API_URL } from '../shared/models/api.url.model';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, OnDestroy {

    public form: FormGroup;
    public passwordMatching: boolean = true;

    public constructor(private _Http: HttpInterceptorService) {}

    public ngOnInit(): void {
        this.form = User.form;
        
    }

    public async register(): Promise<User> {
        if (!this.form.valid || !this.form.dirty || !this.form.touched) {
            return;
        }
        let response: any = await this._Http.post(API_URL.REGISTER_USER, this.form.value).toPromise();
        debugger;
    }

    public ngOnDestroy(): void {
        throw new Error("Method not implemented.");
    }
}