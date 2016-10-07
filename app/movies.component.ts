import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

import { Movie } from './model/movie';

import { MovieService } from './service/movie.service';

import { Util } from './util/movie.util';

@Component({
    moduleId: module.id,
    selector: 'movies',
    templateUrl: 'movies.component.html',
    styleUrls: ['movies.component.css']
})

export class MoviesComponent
{
    selectedMovie: Movie = null;
    movies: Movie[] = [];
    searchMovieTitle: string = '';
    movieTitle: string = '';
    adult: boolean = false;

    constructor(private router: Router, private movieService: MovieService)
    {

    }

    searchMovies()
    {
        this.movieTitle = this.searchMovieTitle;
        console.log(this.adult);
        this.movieService.searchMovies(this.movieTitle, this.adult)
            .subscribe(
                movieData =>
                {
                    this.movies = movieData;
                    console.log(this.movies);
                },
                error => console.log('ERROR: ' + error),
                () => console.log('Searching movies with titles containing', this.movieTitle, 'complete.')
            );
        this.searchMovieTitle = '';
    }

    selectMovie(movie: Movie)
    {
        this.selectedMovie = movie;
        console.log(this.selectedMovie);
    }

    getMoviePoster(movie: Movie): string {
        return new Util().getMoviePoster(movie);
    }

    toggleAdult() {
        this.adult = !this.adult;
    }

    // setFavorite(favorite: boolean)
    // {
    //     this.selectedMovie.favorite = favorite;
    //     this.movies[this.movies.indexOf(this.selectedMovie)].favorite = favorite;
    // }

    // onAddFavorite(movie: Movie)
    // {
    //     this.movieService.addFavorite(movie).subscribe();
    // }


    clearMovies()
    {
        this.movies = [];
        this.selectedMovie = null;
    }
}
