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
var movie_service_1 = require('./service/movie.service');
var imageUrl = function (size, filePath) { return ("http://image.tmdb.org/t/p/" + size + "/" + filePath); };
var dummyPosterUrl = "app/images/movie-reel.jpg";
var DashboardComponent = (function () {
    function DashboardComponent(router, movieService, title) {
        this.router = router;
        this.movieService = movieService;
        title.setTitle('B I N G E / dashboard');
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.movies = this.movieService.favoriteMovies();
    };
    DashboardComponent.prototype.getMoviePoster = function (movie) {
        return movie.poster_path != '' ? imageUrl('w342', movie.poster_path) : dummyPosterUrl;
    };
    DashboardComponent.prototype.gotoDetail = function (movie) {
        var link = ['/movie/detail', movie.title, movie.id];
        console.log(link);
        this.router.navigate(link);
    };
    DashboardComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'dashboard',
            templateUrl: 'dashboard.component.html',
        }), 
        __metadata('design:paramtypes', [router_1.Router, movie_service_1.MovieService, platform_browser_1.Title])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map