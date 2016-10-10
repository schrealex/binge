import { Component } from '@angular/core';

import { Movie } from "../model/movie";
import { Person } from "../model/person";
import { Media } from "../model/media";

const imageUrl = (size: string, filePath: string) => `http://image.tmdb.org/t/p/${size}${filePath}`;
const dummyPosterUrl = `app/images/movie-reel.jpg`;
const dummyProfileUrl = `app/images/profile-small.jpg`;

@Component({
    moduleId: module.id,
    selector: 'movieUtil'
})

export class Util
{
    getMoviePoster<T extends Media>(media: T): string
    {
        return media.posterPath != null ? imageUrl('w342', media.posterPath) : dummyPosterUrl;
    }

    getMediaPoster<T extends Media>(media: T, size: string): string
    {
        return media.backdropPath != null ? imageUrl(size, media.backdropPath) : dummyPosterUrl;
        // return media.posterPath != null ? imageUrl(size, media.posterPath) : dummyPosterUrl;
    }

    getProfileImage<T extends Person>(person: T, size: string)
    {
        return person.profilePath != null ? imageUrl(size, person.profilePath) : dummyProfileUrl;
    }

    getImageUrl(filePath: string, size: string)
    {
        return imageUrl(size, filePath);
    }
}
