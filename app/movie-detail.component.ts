import { Component, EventEmitter, Input, Output, SimpleChange } from '@angular/core';

import { Movie } from './model/movie';
import { MovieInformation } from "./model/movie-information";
import { MovieService } from './service/movie.service';

@Component({
    moduleId: module.id,
    selector: 'movie-detail',
    templateUrl: 'movie-detail.component.html',
    styleUrls: ['movie.detail.component.css']
})

export class MovieDetailComponent
{
    @Input() movie: Movie;
    @Output() addFavorite = new EventEmitter();

    // @Output() favorite: EventEmitter<any> = new EventEmitter();

    movieInformation: MovieInformation;

    constructor(private movieService: MovieService)
    {

    }

    ngOnChanges(changes: SimpleChange)
    {
        console.log(changes);
        this.getMovieInformation(this.movie);
    }

    getMovieInformation(movie: Movie)
    {
        this.movieService.getMovieInformation(movie)
            .subscribe(
                movieData =>
                {
                    this.movieInformation = movieData;
                    console.log(this.movieInformation);
                },
                error => console.log('ERROR: ' + error),
                () => console.log('Retrieving movie information for', movie.title, 'complete.')
            );
    }

    onAddFavorite() {
        if(this.movie) {
            this.addFavorite.next(this.movie);
        }
    }

    // setFavorite(isFavorite: boolean)
    // {
    //     this.movieInformation.favorite = isFavorite;
    //     this.favorite.emit(isFavorite);
    // }
}
