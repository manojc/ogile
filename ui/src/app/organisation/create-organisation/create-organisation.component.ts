import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { FormGroup } from "@angular/forms";
import { HttpInterceptorService } from "../../shared/services/http-interceptor/http-interceptor.service";
import { API_URL } from "../../shared/models/api.url.model";
import { Organisation } from "../../shared/models/organisation.model";
import { StorageService } from "../../shared/services/storage/storage.service";
import { EventsService, GLOBAL_EVENTS } from "../../shared/services/events.service/events.service";
import { User } from "../../shared/models/user.model";

@Component({
	selector: "app-create-organisation",
	templateUrl: "./create-organisation.component.html",
	styleUrls: ["./create-organisation.component.css"]
})
export class CreateOrganisationComponent implements OnInit {

	public form: FormGroup;
	public organisation: Organisation;
	public user: User;
	public isReadOnly: boolean = true;

	public constructor(private _Http: HttpInterceptorService,
		private _Router: Router,
		private _route: ActivatedRoute,
		private _StorageService: StorageService,
		private _EventsService: EventsService, ) { }

	public ngOnInit(): void {
		this.user = this._StorageService.getItem("user", "local") as User;
		this.organisation = this._route.snapshot.data.organisation || null;
		this.isReadOnly = this.user && this.user.organisationIds && this.user.organisationIds.length &&
			this.organisation && this.organisation._id &&
			this.user.organisationIds.indexOf(this.organisation._id) <= -1;
		console.log(this.isReadOnly);
		this.form = Organisation.createForm;
		if (this.organisation) {
			Organisation.setForm(this.form, this.organisation);
		}
	}

	public async create(): Promise<any> {
		if (this.form.valid && this.form.dirty && this.form.touched) {
			try {
				let request = this.form.value;
				request.adminId = this.user._id;
				request.userIds = request.userIds || [];
				if (request.userIds.indexOf(this.user._id) <= -1) {
					request.userIds.push(this.user._id);
				}
				const httpResponse = this._Http.post(API_URL.CREATE_ORGANISATION, request);
				const organisation: Organisation = await this._Http.toModel(httpResponse);
				if (organisation && organisation._id) {
					this._StorageService.setKey("user", "organisationId", organisation._id, "local");
					this._StorageService.setKey("user", "isAdmin", true, "local");
					this._EventsService.broadcast(GLOBAL_EVENTS.SET_ORGANISATION);
					this._Router.navigate(["/"]);
				}
			} catch (error) {
				console.error(error);
			}
		}
	}

}
