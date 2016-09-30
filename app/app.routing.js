"use strict";
var router_1 = require('@angular/router');
var dashboard_component_1 = require("./dashboard.component");
var movies_component_1 = require('./movies.component');
var movie_detail_component_1 = require('./movie-detail.component');
var games_component_1 = require('./games.component');
var movie_add_component_1 = require("./movie-add.component");
var recommendations_component_1 = require("./components/recommendations/recommendations.component");
var appRoutes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: dashboard_component_1.DashboardComponent
    },
    {
        path: 'recommendations',
        component: recommendations_component_1.RecommendationsComponent
    },
    {
        path: 'movies',
        component: movies_component_1.MoviesComponent
    },
    {
        path: 'movie/detail/:title/:id',
        component: movie_detail_component_1.MovieDetailComponent
    },
    {
        path: 'movie/add',
        component: movie_add_component_1.MovieAddComponent
    },
    {
        path: 'games',
        component: games_component_1.GamesComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map