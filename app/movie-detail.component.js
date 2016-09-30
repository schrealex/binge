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
var movie_1 = require('./model/movie');
var movie_service_1 = require('./service/movie.service');
var MovieDetailComponent = (function () {
    function MovieDetailComponent(movieService) {
        this.movieService = movieService;
        this.addFavorite = new core_1.EventEmitter();
    }
    MovieDetailComponent.prototype.ngOnChanges = function (changes) {
        console.log(changes);
        this.getMovieInformation(this.movie);
    };
    MovieDetailComponent.prototype.getMovieInformation = function (movie) {
        var _this = this;
        this.movieService.getMovieInformation(movie)
            .subscribe(function (movieData) {
            _this.movieInformation = movieData;
            console.log(_this.movieInformation);
        }, function (error) { return console.log('ERROR: ' + error); }, function () { return console.log('Retrieving movie information for', movie.title, 'complete.'); });
    };
    MovieDetailComponent.prototype.onAddFavorite = function () {
        if (this.movie) {
            this.addFavorite.next(this.movie);
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', movie_1.Movie)
    ], MovieDetailComponent.prototype, "movie", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], MovieDetailComponent.prototype, "addFavorite", void 0);
    MovieDetailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'movie-detail',
            templateUrl: 'movie-detail.component.html',
            styleUrls: ['movie.detail.component.css']
        }), 
        __metadata('design:paramtypes', [movie_service_1.MovieService])
    ], MovieDetailComponent);
    return MovieDetailComponent;
}());
exports.MovieDetailComponent = MovieDetailComponent;
//# sourceMappingURL=movie-detail.component.js.map