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
var router_1 = require('@angular/router');
var movie_service_1 = require('./service/movie.service');
var MoviesComponent = (function () {
    function MoviesComponent(router, movieService) {
        this.router = router;
        this.movieService = movieService;
        this.selectedMovie = null;
        this.movies = [];
        this.searchMovieTitle = '';
        this.movieTitle = '';
    }
    MoviesComponent.prototype.searchMovies = function () {
        var _this = this;
        this.movieTitle = this.searchMovieTitle;
        this.movieService.searchMovies(this.movieTitle)
            .subscribe(function (movieData) {
            _this.movies = movieData;
            console.log(_this.movies);
        }, function (error) { return console.log('ERROR: ' + error); }, function () { return console.log('Searching movies with titles containing', _this.movieTitle, 'complete.'); });
        this.searchMovieTitle = '';
    };
    MoviesComponent.prototype.selectMovie = function (movie) {
        this.selectedMovie = movie;
        console.log(this.selectedMovie);
    };
    // setFavorite(favorite: boolean)
    // {
    //     this.selectedMovie.favorite = favorite;
    //     this.movies[this.movies.indexOf(this.selectedMovie)].favorite = favorite;
    // }
    // onAddFavorite(movie: Movie)
    // {
    //     this.movieService.addFavorite(movie).subscribe();
    // }
    MoviesComponent.prototype.clearMovies = function () {
        this.movies = [];
        this.selectedMovie = null;
    };
    MoviesComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'movies',
            templateUrl: 'movies.component.html',
            styleUrls: ['movies.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, movie_service_1.MovieService])
    ], MoviesComponent);
    return MoviesComponent;
}());
exports.MoviesComponent = MoviesComponent;
//# sourceMappingURL=movies.component.js.map