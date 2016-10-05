import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";

import 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { Observable } from 'rxjs/Rx';

const apiKey = 'f16bfeb0210b43f1f12d8d4ccc114ee9';
const baseUrl = 'https://api.themoviedb.org/3';
const movieDbUrl = 'https://www.themoviedb.org';

const username = 'CE_REAL';
const password = 'SiNGInfeGOnEiDEcTOPU';

const requestTokenUrl = `${baseUrl}/authentication/token/new?api_key=${apiKey}`;
const userPermissionUrl = (requestToken) => `${movieDbUrl}/authenticate/${requestToken}`;
const validateWithLoginUrl = (requestToken) => `${baseUrl}/authentication/token/validate_with_login?api_key=${apiKey}&username=${username}&password=${password}&request_token=${requestToken}`;
const sessionIdUrl = (requestToken) => `${baseUrl}/authentication/session/new?api_key=${apiKey}&request_token=${requestToken}`;

@Injectable()
export class ApiAuthenticationService
{
    constructor(private http: Http)
    {

    }

    getSessionId(): Observable<any> {
        return this.authenticate();
    }

    authenticate(): Observable<any>
    {
        return this.http.get(requestTokenUrl).flatMap(response => {
            // return this.http.get(userPermissionUrl(response.json().request_token)).flatMap(response => {
            console.log(validateWithLoginUrl(response.json().request_token));
            return this.http.get(validateWithLoginUrl(response.json().request_token)).flatMap(response => {
                return this.http.get(sessionIdUrl(response.json().request_token)).map(response => {
                    return response.json().session_id;
                })
                .catch(this.handleError);
            })
            .catch(this.handleError);
        })
        .catch(this.handleError);
    }

    private handleError(error: Response)
    {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
