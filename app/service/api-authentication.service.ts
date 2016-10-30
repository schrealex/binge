import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";

import 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { Observable } from 'rxjs/Rx';
import { Configuration } from "../model/configuration";
import { ConfigurationService } from "./configuration.service";

// const apiKey = 'f16bfeb0210b43f1f12d8d4ccc114ee9';
const baseUrl = 'https://api.themoviedb.org/3';
const movieDbUrl = 'https://www.themoviedb.org';

// const username = 'CE_REAL';
// const password = 'SiNGInfeGOnEiDEcTOPU';

const requestTokenUrl = (apiKey) => `${baseUrl}/authentication/token/new?api_key=${apiKey}`;
const userPermissionUrl = (apiKey, requestToken) => `${movieDbUrl}/authenticate/${requestToken}`;
const validateWithLoginUrl = (apiKey, username, password, requestToken) => `${baseUrl}/authentication/token/validate_with_login?api_key=${apiKey}&username=${username}&password=${password}&request_token=${requestToken}`;
const sessionIdUrl = (apiKey, requestToken) => `${baseUrl}/authentication/session/new?api_key=${apiKey}&request_token=${requestToken}`;

@Injectable()
export class ApiAuthenticationService
{
    private apiKey = '';
    private username = '';
    private password = '';

    constructor(private http: Http, private configurationService: ConfigurationService)
    {

    }

    getSessionId(): Observable<any> {
        this.configurationService.getConfiguration().subscribe(configurationData => {
            this.apiKey = configurationData.apiKey;
            this.username = configurationData.username;
            this.password = configurationData.password;
        });
        return this.authenticate();
    }

    authenticate(): Observable<any>
    {
        return this.http.get(requestTokenUrl(this.apiKey)).flatMap(response => {
            console.log(validateWithLoginUrl(this.apiKey, this.username, this.password, response.json().request_token));
            return this.http.get(validateWithLoginUrl(this.apiKey, this.username, this.password, response.json().request_token)).flatMap(response => {
                return this.http.get(sessionIdUrl(this.apiKey, response.json().request_token)).map(response => {
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
