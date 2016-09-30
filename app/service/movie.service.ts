import { Injectable } from '@angular/core';
import { Headers, Http, Response } from "@angular/http";

import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';

import { Movie } from '../model/movie';
import { MovieInformation } from "../model/movie-information";

import { ApiAuthenticationService } from './api-authentication.service';

const apiKey = 'f16bfeb0210b43f1f12d8d4ccc114ee9';
const baseUrl = ' https://api.themoviedb.org/3';

const movieUrl = `${baseUrl}/movie/550?api_key=${apiKey}`;

const addToFavoritesUrl = (sessionId) => `${baseUrl}/account/{account_id}/favorite?api_key=${apiKey}&session_id=${sessionId}`;
const favoriteMoviesUrl = (sessionId) => `${baseUrl}/account/{account_id}/favorite/movies?api_key=${apiKey}&session_id=${sessionId}`;
const discoverMoviesUrl = `${baseUrl}/discover/movie?api_key=${apiKey}`;

const searchMoviesUrl = (title) => `http://www.omdbapi.com/?s=${title}`;
const movieInformationUrl = (imdbId) => `http://www.omdbapi.com/?i=${imdbId}`;

@Injectable()
export class MovieService
{
    private headers = new Headers({'content-type': 'application/json;charset=utf-8'});

    constructor(private http: Http, private apiAuthenticationService: ApiAuthenticationService)
    {

    }

    discoverMovies(): Observable<Movie[]>
    {
        console.log(discoverMoviesUrl);
        return this.http.get(discoverMoviesUrl).map(result =>
        {
            return <Movie[]> result.json().results;
        })
        .catch(this.handleError);
    }

    addToFavorites(movie: Movie): Observable<any> {
        return this.apiAuthenticationService.getSessionId().flatMap(sessionId =>
        {
            console.log(addToFavoritesUrl(sessionId));
            return this.http.post(addToFavoritesUrl(sessionId), {media_type: "movie", media_id: movie.id, favorite: true}, this.headers).map(result =>
            {
                return result.json();
            })
            .catch(this.handleError);
        })
        .catch(this.handleError);
    }

    favoriteMovies(): Observable<Movie[]>
    {
        return this.apiAuthenticationService.getSessionId().flatMap(sessionId =>
        {
            console.log(favoriteMoviesUrl(sessionId));
            return this.http.get(favoriteMoviesUrl(sessionId)).map(result =>
            {
                return <Movie[]> result.json().results;
            })
            .catch(this.handleError);
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
    }

    discoverMoviesFiltered(): Movie[]
    {
        let discoveredMovies: Movie[] = [];
        let favoritedMovies: Movie[] = [];
        let filteredMovies: Movie[] = [];
        this.discoverMovies().flatMap(response => {
            discoveredMovies = response;
            return this.favoriteMovies().map(response => {
                favoritedMovies = response;

                discoveredMovies.forEach(function(discoveredMovie) {
                    let addMovieToFilteredMovies: boolean = true;
                    favoritedMovies.forEach(function(favoriteMovie) {
                        if(discoveredMovie.id == favoriteMovie.id) {
                            console.log(discoveredMovie.title + " == " + favoriteMovie.title);
                            addMovieToFilteredMovies = false;
                        }
                    });
                    if(addMovieToFilteredMovies) {
                        filteredMovies.push(discoveredMovie);
                    }
                });
            });
        }).subscribe(response => console.log(response));


        return filteredMovies;
    }

    searchMovies(title: string): Observable<Movie[]>
    {
        console.log(searchMoviesUrl(title));
        return this.http.get(searchMoviesUrl(title)).map(result => <Movie[]> result.json().Search)
            .map((movies: Array<any>) =>
                {
                    let result: Array<Movie> = [];
                    if (movies)
                    {
                        movies.forEach((movie) =>
                        {
                            result.push(new Movie(movie.imdbID, movie.Title, movie.Year, movie.Poster, false));
                        });
                    }
                    return result;
                }
            ).catch(this.handleError);
    }

    getMovieInformation(movie: Movie): Observable<MovieInformation>
    {
        console.log(movieInformationUrl(movie.id));

        return this.http.get(movieInformationUrl(movie.id)).map(result => result.json())
            .map((m: any) => new MovieInformation(m.imdbID, m.Title, m.Year, m.Genre, m.Runtime, m.Poster, m.Director,
                m.Writer, m.Actors, m.Plot, m.Metascore, m.imdbRating, m.imdbVotes, m.Type, movie.favorite))
            .catch(this.handleError);
    }

    private handleError(error: Response)
    {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
