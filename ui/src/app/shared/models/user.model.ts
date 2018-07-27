import { FormGroup, FormControl, Validators } from '@angular/forms';

export class User {
    public name: string;
    public username: string;
    public email: string;
    public city: string;
    public password: string;
    public repeatPassword: string;

    public static get form(): FormGroup {
        return new FormGroup({
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

}