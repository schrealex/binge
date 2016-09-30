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
var platform_browser_1 = require('@angular/platform-browser');
var router_1 = require('@angular/router');
var movie_service_1 = require('../../service/movie.service');
var imageUrl = function (size, filePath) { return ("http://image.tmdb.org/t/p/" + size + "/" + filePath); };
var dummyPosterUrl = "app/images/movie-reel.jpg";
var RecommendationsComponent = (function () {
    function RecommendationsComponent(router, movieService, title) {
        this.router = router;
        this.movieService = movieService;
        // movies: Observable<Movie[]>;
        this.movies = [];
        this.addedMovie = '';
        this.mouseOver = false;
        this.addedToFavorites = false;
        title.setTitle('B I N G E / recommendations');
    }
    RecommendationsComponent.prototype.ngOnInit = function () {
        this.getDiscoverMoviesFiltered();
    };
    RecommendationsComponent.prototype.getDiscoverMoviesFiltered = function () {
        this.movies = this.movieService.discoverMoviesFiltered();
    };
    RecommendationsComponent.prototype.getMoviePoster = function (movie) {
        return movie.poster_path != '' ? imageUrl('w342', movie.poster_path) : dummyPosterUrl;
    };
    RecommendationsComponent.prototype.gotoDetail = function (movie) {
        var link = ['/movie/detail', movie.title, movie.id];
        console.log(link);
        this.router.navigate(link);
    };
    RecommendationsComponent.prototype.displayMouseOver = function () {
        this.mouseOver = !this.mouseOver;
    };
    RecommendationsComponent.prototype.addToFavorites = function (movie) {
        var _this = this;
        this.movieService.addToFavorites(movie).subscribe(function (response) {
            if (response.status_code == 12) {
                _this.addedToFavorites = true;
                _this.addedMovie = movie.title;
                console.log(movie.title + " added to favorites");
                _this.getDiscoverMoviesFiltered();
            }
        });
    };
    RecommendationsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'recommendations',
            templateUrl: 'recommendations.component.html',
            styleUrls: ['recommendations.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, movie_service_1.MovieService, platform_browser_1.Title])
    ], RecommendationsComponent);
    return RecommendationsComponent;
}());
exports.RecommendationsComponent = RecommendationsComponent;
//# sourceMappingURL=recommendations.component.js.map