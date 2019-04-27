import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError, map, tap, finalize } from "rxjs/operators";
import { XHRBackend, RequestOptions, Request, RequestOptionsArgs, Response, Http, Headers } from "@angular/http";
import { EventsService, GLOBAL_EVENTS } from "../events.service/events.service";

@Injectable()
export class HttpInterceptorService extends Http {
    constructor(private _XHRBackend: XHRBackend,
        private _RequestOptions: RequestOptions,
        private _EventsService: EventsService) {
        super(_XHRBackend, _RequestOptions);
    }

    public request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
        return this.handleResponse(super.request(url, options));
    }

    public get(url: string, options?: RequestOptionsArgs): Observable<Response> {
        this.beforeRequest(url);
        return super.get(url, this.getRequestOptionArgs(options));
    }

    public post(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
        this.beforeRequest(url, body);
        return super.post(url, body, this.getRequestOptionArgs(options));
    }

    public put(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
        this.beforeRequest(url, body);
        return super.put(url, body, this.getRequestOptionArgs(options));
    }

    public delete(url: string, options?: RequestOptionsArgs): Observable<Response> {
        this.beforeRequest(url);
        return super.delete(url, this.getRequestOptionArgs(options));
    }

    public async toModel(httpResponse: Observable<Response>): Promise<any> {
        const response = await httpResponse.toPromise();
        return JSON.parse(JSON.stringify(response));
    }

    private getRequestOptionArgs(options?: RequestOptionsArgs): RequestOptionsArgs {
        if (options == null) {
            options = new RequestOptions();
        }
        if (options.headers == null) {
            options.headers = new Headers();
        }
        options.headers.append("Content-Type", "application/json");

        return options;
    }

    private handleResponse(response: Observable<Response>): Observable<Response> {
        return response.pipe(
            map((response) => { return this.processResponse(response) }),
            catchError(this.onCatch.bind(this)),
            tap(this.onSuccess.bind(this), this.onError.bind(this)),
            finalize(this.afterResponse.bind(this))
        )
    }

    private processResponse(response: Response): any {
        const apiresponse: any = response.json();
        if (!apiresponse || !apiresponse.status) {
            this._EventsService.broadcast(GLOBAL_EVENTS.SHOW_SNACKBAR, apiresponse.messages[0]);
        }

        return apiresponse.data;
    }

    private beforeRequest(url: string, body?: string): void {
        this._EventsService.broadcast(GLOBAL_EVENTS.TOGGLE_LOADER, true);
    }

    private afterResponse(): void {
        this._EventsService.broadcast(GLOBAL_EVENTS.TOGGLE_LOADER, false);
    }

    private onCatch(error: any, caught: Observable<Response>): Observable<Response> {
        this._EventsService.broadcast(GLOBAL_EVENTS.SHOW_SNACKBAR, "Error occurred!");
        return throwError(error);
    }

    private onSuccess(response: any): void {
    }

    private onError(error: any): void {
        console.error(error);
    }
}