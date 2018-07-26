import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    public form: FormGroup;
    public user: any;
    public response: any;
    public passwordMatching: boolean = true;


    public constructor() {
        this.form = new FormGroup({
            name: new FormControl('', [
                Validators.required
            ]),
            username: new FormControl('', [
                Validators.required,
                Validators.minLength(5)
            ]),
            email: new FormControl('', [
                Validators.required,
                Validators.email
            ]),
            city: new FormControl('Latur', [
                Validators.required
            ]),
            password: new FormControl('', [
                Validators.required,
                Validators.minLength(6),
            ]),
            repeatPassword: new FormControl('', [
                Validators.required,
            ])
        });
    }

    public ngOnInit(): void {

    }

    public register(): void {
    }
}