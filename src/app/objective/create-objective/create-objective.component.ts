import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { FormGroup } from "@angular/forms";
import { HttpInterceptorService } from "../../shared/services/http-interceptor/http-interceptor.service";
import { API_URL } from "../../shared/models/api.url.model";
import { Objective } from "../../shared/models/objective.model";
import { StorageService } from "../../shared/services/storage/storage.service";
import { EventsService, GLOBAL_EVENTS } from "../../shared/services/events.service/events.service";
import { User } from "../../shared/models/user.model";

@Component({
	selector: "app-create-objective",
	templateUrl: "./create-objective.component.html",
	styleUrls: ["./create-objective.component.css"]
})
export class CreateObjectiveComponent implements OnInit {

	public form: FormGroup;
	public objective: Objective;
	public user: User;
	public isReadOnly: boolean = true;

	public constructor(private _Http: HttpInterceptorService,
		private _Router: Router,
		private _route: ActivatedRoute,
		private _StorageService: StorageService,
		private _EventsService: EventsService, ) { }

	public ngOnInit(): void {
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
				const objective: Objective = await this._Http.toModel(httpResponse);
				if (objective && objective._id) {
					this._StorageService.setKey("user", "ObjectiveId", objective._id, "local");
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
