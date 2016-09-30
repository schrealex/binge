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
var movie_1 = require('../model/movie');
var movie_information_1 = require("../model/movie-information");
var api_authentication_service_1 = require('./api-authentication.service');
var apiKey = 'f16bfeb0210b43f1f12d8d4ccc114ee9';
var baseUrl = ' https://api.themoviedb.org/3';
var movieUrl = baseUrl + "/movie/550?api_key=" + apiKey;
var addToFavoritesUrl = function (sessionId) { return (baseUrl + "/account/{account_id}/favorite?api_key=" + apiKey + "&session_id=" + sessionId); };
var favoriteMoviesUrl = function (sessionId) { return (baseUrl + "/account/{account_id}/favorite/movies?api_key=" + apiKey + "&session_id=" + sessionId); };
var discoverMoviesUrl = baseUrl + "/discover/movie?api_key=" + apiKey;
var searchMoviesUrl = function (title) { return ("http://www.omdbapi.com/?s=" + title); };
var movieInformationUrl = function (imdbId) { return ("http://www.omdbapi.com/?i=" + imdbId); };
var MovieService = (function () {
    function MovieService(http, apiAuthenticationService) {
        this.http = http;
        this.apiAuthenticationService = apiAuthenticationService;
        this.headers = new http_1.Headers({ 'content-type': 'application/json;charset=utf-8' });
    }
    MovieService.prototype.discoverMovies = function () {
        console.log(discoverMoviesUrl);
        return this.http.get(discoverMoviesUrl).map(function (result) {
            return result.json().results;
        })
            .catch(this.handleError);
    };
    MovieService.prototype.addToFavorites = function (movie) {
        var _this = this;
        return this.apiAuthenticationService.getSessionId().flatMap(function (sessionId) {
            console.log(addToFavoritesUrl(sessionId));
            return _this.http.post(addToFavoritesUrl(sessionId), { media_type: "movie", media_id: movie.id, favorite: true }, _this.headers).map(function (result) {
                return result.json();
            })
                .catch(_this.handleError);
        })
            .catch(this.handleError);
    };
    MovieService.prototype.favoriteMovies = function () {
        var _this = this;
        return this.apiAuthenticationService.getSessionId().flatMap(function (sessionId) {
            console.log(favoriteMoviesUrl(sessionId));
            return _this.http.get(favoriteMoviesUrl(sessionId)).map(function (result) {
                return result.json().results;
            })
                .catch(_this.handleError);
        });
        // console.log(favoriteMovies(sessionId));
        // return this.http.get(favoriteMovies(sessionId)).map(result => {
        //         <Movie[]> result.json();
        //         console.log(result);
        //         console.log(result.json());
        //     })
        // .map((movies: Array<any>) =>
        //     {
        //         let result: Array<Movie> = [];
        //         if (movies)
        //         {
        //             movies.forEach((movie) =>
        //             {
        //                 result.push(new Movie(movie.imdbID, movie.Title, movie.Year, movie.Poster, false));
        //             });
        //         }
        //         return result;
        //     }
        // )
        // .catch(this.handleError);
    };
    MovieService.prototype.discoverMoviesFiltered = function () {
        var _this = this;
        var discoveredMovies = [];
        var favoritedMovies = [];
        var filteredMovies = [];
        this.discoverMovies().flatMap(function (response) {
            discoveredMovies = response;
            return _this.favoriteMovies().map(function (response) {
                favoritedMovies = response;
                discoveredMovies.forEach(function (discoveredMovie) {
                    var addMovieToFilteredMovies = true;
                    favoritedMovies.forEach(function (favoriteMovie) {
                        if (discoveredMovie.id == favoriteMovie.id) {
                            console.log(discoveredMovie.title + " == " + favoriteMovie.title);
                            addMovieToFilteredMovies = false;
                        }
                    });
                    if (addMovieToFilteredMovies) {
                        filteredMovies.push(discoveredMovie);
                    }
                });
            });
        }).subscribe(function (response) { return console.log(response); });
        return filteredMovies;
    };
    MovieService.prototype.searchMovies = function (title) {
        console.log(searchMoviesUrl(title));
        return this.http.get(searchMoviesUrl(title)).map(function (result) { return result.json().Search; })
            .map(function (movies) {
            var result = [];
            if (movies) {
                movies.forEach(function (movie) {
                    result.push(new movie_1.Movie(movie.imdbID, movie.Title, movie.Year, movie.Poster, false));
                });
            }
            return result;
        }).catch(this.handleError);
    };
    MovieService.prototype.getMovieInformation = function (movie) {
        console.log(movieInformationUrl(movie.id));
        return this.http.get(movieInformationUrl(movie.id)).map(function (result) { return result.json(); })
            .map(function (m) { return new movie_information_1.MovieInformation(m.imdbID, m.Title, m.Year, m.Genre, m.Runtime, m.Poster, m.Director, m.Writer, m.Actors, m.Plot, m.Metascore, m.imdbRating, m.imdbVotes, m.Type, movie.favorite); })
            .catch(this.handleError);
    };
    MovieService.prototype.handleError = function (error) {
        console.error(error);
        return Rx_1.Observable.throw(error.json().error || 'Server error');
    };
    MovieService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, api_authentication_service_1.ApiAuthenticationService])
    ], MovieService);
    return MovieService;
}());
exports.MovieService = MovieService;
//# sourceMappingURL=movie.service.js.map