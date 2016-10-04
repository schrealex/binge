import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { Movie } from './model/movie';

import { MovieService } from './service/movie.service';

import { Util } from "./util/movie.util";

@Component({
    moduleId: module.id,
    selector: 'dashboard',
    templateUrl: 'dashboard.component.html',
    // styleUrls: ['dashboard.component.css']
})

export class DashboardComponent implements OnInit
{
    movies: Observable<Movie[]>;

    constructor(private router: Router, private movieService: MovieService, title: Title)
    {
        title.setTitle('B I N G E / dashboard')
    }

    ngOnInit(): void
    {
        this.movies = this.movieService.favoriteMovies();
    }

    getMoviePoster(movie: Movie): string {
        return new Util().getMoviePoster(movie);
    }

    gotoDetail(movie: Movie): void
    {
        let link = ['/movie/detail', movie.title, movie.id];
        console.log(link);
        this.router.navigate(link);
    }
}
