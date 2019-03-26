import { FormGroup, FormControl, Validators } from "@angular/forms";

export class User {
    public _id?: string;
    public organisationIds: Array<string>;
    public username: string;
    public name: string;
    public email: string
    public password: string;
    public isAdmin: boolean;
    public additionalInfo?: Array<any>;

    public static get registrationForm(): FormGroup {
        return new FormGroup({
            name: new FormControl("", [
                Validators.required
            ]),
            username: new FormControl("", [
                Validators.required,
                Validators.minLength(5)
            ]),
            email: new FormControl("", [
                Validators.required,
                Validators.email
            ]),
            password: new FormControl("", [
                Validators.required,
                Validators.minLength(6),
            ]),
            repeatPassword: new FormControl("", [
                Validators.required,
            ])
        });
    }

    public static get loginForm(): FormGroup {
        return new FormGroup({
            username: new FormControl("", [
                Validators.required
            ]),
            password: new FormControl("", [
                Validators.required
            ])
        });
    }
}