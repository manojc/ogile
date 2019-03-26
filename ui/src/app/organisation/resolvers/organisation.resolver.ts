import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { HttpInterceptorService } from "../../shared/services/http-interceptor/http-interceptor.service";
import { Organisation } from "../../shared/models/organisation.model";
import { User } from "../../shared/models/user.model";
import { API_URL } from "../../shared/models/api.url.model";

@Injectable()
export class OrganisationResolver implements Resolve<Organisation> {

    constructor(private _Http: HttpInterceptorService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<Organisation> {
        const url = API_URL.GET_ORGANISATION.replace("${organisationId}", route.params.organisationId);
        const httpResponse = this._Http.get(url);
        return this._Http.toModel(httpResponse);
    }
}