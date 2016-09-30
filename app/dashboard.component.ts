import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

import { Movie } from './model/movie';
import { MovieService } from './service/movie.service';
import { Observable } from 'rxjs';

const imageUrl = (size: string, filePath: string) => `http://image.tmdb.org/t/p/${size}/${filePath}`;
const dummyPosterUrl = `app/images/movie-reel.jpg`;

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

    getMoviePoster(movie: Movie) {
        return movie.poster_path != '' ? imageUrl('w342', movie.poster_path) : dummyPosterUrl;
    }

    gotoDetail(movie: Movie): void
    {
        let link = ['/movie/detail', movie.title, movie.id];
        console.log(link);
        this.router.navigate(link);
    }
}
