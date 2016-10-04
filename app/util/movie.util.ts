import { Component } from '@angular/core';

import { Movie } from "../model/movie";
import { Person } from "../model/person";

const imageUrl = (size: string, filePath: string) => `http://image.tmdb.org/t/p/${size}/${filePath}`;
const dummyPosterUrl = `app/images/movie-reel.jpg`;
const dummyProfileUrl = `app/images/profile-small.jpg`;


@Component({
    moduleId: module.id,
    selector: 'movieUtil'
})

export class Util
{
    getMoviePoster(movie: Movie)
    {
        return movie.posterPath != null ? imageUrl('w342', movie.posterPath) : dummyPosterUrl;
    }

    getProfileImage(person: Person)
    {
        return person.profilePath != null ? imageUrl('w45', person.profilePath) : dummyProfileUrl;
    }
}