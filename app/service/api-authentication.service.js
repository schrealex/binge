"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require("@angular/http");
require('rxjs/Rx');
require('rxjs/add/operator/map');
var Rx_1 = require('rxjs/Rx');
var apiKey = 'f16bfeb0210b43f1f12d8d4ccc114ee9';
var baseUrl = 'https://api.themoviedb.org/3';
var movieDbUrl = 'https://www.themoviedb.org';
var username = 'CE_REAL';
var password = 'SiNGInfeGOnEiDEcTOPU';
var requestTokenUrl = baseUrl + "/authentication/token/new?api_key=" + apiKey;
var userPermissionUrl = function (requestToken) { return (movieDbUrl + "/authenticate/" + requestToken); };
var validateWithLoginUrl = function (requestToken) { return (baseUrl + "/authentication/token/validate_with_login?api_key=" + apiKey + "&username=" + username + "&password=" + password + "&request_token=" + requestToken); };
var sessionIdUrl = function (requestToken) { return (baseUrl + "/authentication/session/new?api_key=" + apiKey + "&request_token=" + requestToken); };
var ApiAuthenticationService = (function () {
    function ApiAuthenticationService(http) {
        this.http = http;
        this.requestToken = '';
        this.sessionId = '';
    }
    ApiAuthenticationService.prototype.getSessionId = function () {
        return this.authenticate();
    };
    ApiAuthenticationService.prototype.authenticate = function () {
        var _this = this;
        return this.http.get(requestTokenUrl).flatMap(function (response) {
            // return this.http.get(userPermissionUrl(response.json().request_token)).flatMap(response => {
            console.log(validateWithLoginUrl(response.json().request_token));
            return _this.http.get(validateWithLoginUrl(response.json().request_token)).flatMap(function (response) {
                return _this.http.get(sessionIdUrl(response.json().request_token)).map(function (response) {
                    return response.json().session_id;
                })
                    .catch(_this.handleError);
            })
                .catch(_this.handleError);
        })
            .catch(this.handleError);
    };
    ApiAuthenticationService.prototype.handleError = function (error) {
        console.error(error);
        return Rx_1.Observable.throw(error.json().error || 'Server error');
    };
    ApiAuthenticationService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ApiAuthenticationService);
    return ApiAuthenticationService;
}());
exports.ApiAuthenticationService = ApiAuthenticationService;
//# sourceMappingURL=api-authentication.service.js.map