import { Injectable } from '@angular/core';
import { Headers, Http, Response } from "@angular/http";

import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';

import { Actor } from "../model/actor";
import { CrewMember } from "../model/crewmember";
import { MediaInformation } from "../model/media-information";
import { Serie } from '../model/serie';

import { ApiAuthenticationService } from './api-authentication.service';
import { Movie } from "../model/movie";
import { Media } from "../model/media";
import { SerieInformation } from "../model/serie-information";

const apiKey = 'f16bfeb0210b43f1f12d8d4ccc114ee9';
const baseUrl = ' https://api.themoviedb.org/3';

const addToFavoritesUrl = (sessionId) => `${baseUrl}/account/{account_id}/favorite?api_key=${apiKey}&session_id=${sessionId}`;
const favoriteMoviesUrl = (sessionId) => `${baseUrl}/account/{account_id}/favorite/movies?api_key=${apiKey}&session_id=${sessionId}`;
const discoverMoviesUrl = `${baseUrl}/discover/movie?api_key=${apiKey}`;

const searchMediaUrl = (query, type) => `${baseUrl}/search/${type}?api_key=${apiKey}&query=${query}`;
const mediaInformationUrl = (mediaId, type) => `${baseUrl}/${type}/${mediaId}?api_key=${apiKey}`;
const movieCreditsUrl = (movieId) => `${baseUrl}/movie/${movieId}/credits?api_key=${apiKey}`;

@Injectable()
export class MediaService
{
    private headers = new Headers({'content-type': 'application/json;charset=utf-8'});

    constructor(private http: Http, private apiAuthenticationService: ApiAuthenticationService)
    {

    }

    searchMedia<T extends Media>(title: string, type: string): Observable<T[]>
    {
        console.log(searchMediaUrl(title, type));
        return this.http.get(searchMediaUrl(title, type)).map(result => result.json().results as T[])
            .map(type == 'movie' ? this.mapResponseToMovies() : this.mapResponseToSeries()).catch(this.handleError);
    }

    getMediaInformation<T extends Media, S extends MediaInformation>(media: T, type: string): Observable<S>
    {
        console.log(mediaInformationUrl(media.id, type));

        return this.http.get(mediaInformationUrl(media.id, type)).map(response => {
            let m = response.json();
            console.log(m);
            let mi: MediaInformation  = new MediaInformation(m.id, m.title, m.original_title, m.genres, m.poster_path,
                m.backdrop_path, m.overview, m.vote_average, m.vote_count, media.favorite)

            if(type == 'tv') {
                let si: SerieInformation = <SerieInformation> mi;
                si.title = m.name;
                si.originalTitle = m.original_name;
                si.inProduction = m.in_production;
                si.createdBy = m.created_by;
                si.networks = m.networks;
                si.numberOfEpisodes = m.number_of_episodes;
                si.numberOfSeasons = m.number_of_seasons;
                si.seasons = m.seasons;
                si.episodeRuntime = m.episode_run_time;
                si.firstAirDate = m.first_air_date;
                si.lastAirDate = m.last_air_date;
                si.status = m.status;
                si.type = m.type;
                return si;
            }

            // console.log(movieCreditsUrl(movie.id));
            // return this.http.get(movieCreditsUrl(movie.id)).map(response => response.json()).map((m: any) => {
            //     m.cast.forEach((a) =>
            //     {
            //         mi.actors.push(new Actor(a.id, a.credit_id, a.name, a.profile_path, a.cast_id, a.character, a.order));
            //     });
            //     m.crew.forEach((c) =>
            //     {
            //         if(c.department == 'Directing') {
            //             mi.director.push(new CrewMember(c.id, c.credit_id, c.name, c.profile_path, c.department, c.job));
            //         }
            //     });
            //     m.crew.forEach((c) =>
            //     {
            //         if(c.department == 'Writing') {
            //             mi.writer.push(new CrewMember(c.id, c.credit_id, c.name, c.profile_path, c.department, c.job));
            //         }
            //     });
            //     return mi;
            // })
            // .catch(this.handleError);
        })
        .catch(this.handleError);
    }

    private mapResponseToMovies(): any {
        return (movies: Array<any>) =>
        {
            let response: Array<Movie> = [];
            if (movies)
            {
                movies.forEach((movie) =>
                {
                    response.push(new Movie(movie.id, movie.title, movie.original_title, movie.release_date,
                        movie.poster_path, movie.backdrop_path, movie.overview, movie.genre_ids, movie.vote_average,
                        movie.vote_average, false));
                });
            }
            return response;
        }
    }

    private mapResponseToSeries(): any {
        return (series: Array<any>) =>
        {
            let response: Array<Serie> = [];
            if (series)
            {
                series.forEach(serie =>
                {
                    response.push(new Serie(serie.id, serie.name, serie.orginal_name, serie.first_air_date,
                        serie.poster_path, serie.backdrop_path, serie.overview, serie.genre_ids, serie.vote_average,
                        serie.vote_average, false));
                });
            }
            return response;
        }
    }

    private handleError(error: Response)
    {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
