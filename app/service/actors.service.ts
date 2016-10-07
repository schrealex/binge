import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { Observable } from 'rxjs/Rx';

import 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { Person } from "../model/person";
import { Actor } from "../model/actor";
import { Image } from "../model/image";

const apiKey = 'f16bfeb0210b43f1f12d8d4ccc114ee9';
const baseUrl = 'https://api.themoviedb.org/3';

const personDetailsUrl = (personId) => `${baseUrl}/person/${personId}?api_key=${apiKey}`;
const personExternalIdsUrl = (personId) => `${baseUrl}/person/${personId}/external_ids?api_key=${apiKey}`;
const personImagesUrl = (personId) => `${baseUrl}/person/${personId}/images?api_key=${apiKey}`;

@Injectable()
export class ActorService
{
    constructor(private http: Http)
    {

    }

    getPersonDetails<T extends Person>(personId: number): Observable<T>
    {
        console.log(personDetailsUrl(personId));
        return this.http.get(personDetailsUrl(personId)).flatMap(response => {
            let p = response.json();
            let gender = p.gender == '0' ? 'female' : 'male';
            let actor:Actor = new Actor(p.id, p.imdb_id, '', '', '', p.name, p.birthday, p.place_of_birth, gender,
                p.profile_path, [], p.biography, '', '', 0, p.adult);

            return this.http.get(personExternalIdsUrl(personId)).flatMap(response =>
            {
                actor.imdbId = response.json().imdb_id;

                return this.http.get(personImagesUrl(personId)).map(response =>
                {
                    this.mapImagesToImageArray(response.json().profiles, actor.profiles);
                    return actor;
                });
            });
        })
        .catch(this.handleError);
    }

    private mapImagesToImageArray(images: any[], array: Image[]): void
    {
        images.forEach(image => {
            array.push(new Image(image.aspect_ratio, image.width, image.height, image.file_path));
        });
    }

    private handleError(error: Response)
    {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
