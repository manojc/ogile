import { FormGroup, FormControl, Validators } from "@angular/forms";

export class Organisation {
    public _id?: string;
    public adminId: string;
    public userIds: Array<string>;
    public name: string;
    public description: string;

    public static get createForm(): FormGroup {
        return new FormGroup({
            name: new FormControl("", [
                Validators.required
            ]),
            description: new FormControl("", [
                Validators.required
            ])
        });
    }

    public static setForm(form: FormGroup, organisation: Organisation): void {
        form.setValue({
            name: organisation.name,
            description: organisation.description
        });
    }
}