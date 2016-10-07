import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { Observable } from 'rxjs/Rx';

import 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { Person } from "../model/person";
import { Actor } from "../model/actor";

const apiKey = 'f16bfeb0210b43f1f12d8d4ccc114ee9';
const baseUrl = 'https://api.themoviedb.org/3';

const personDetailsUrl = (personId) => `${baseUrl}/person/${personId}?api_key=${apiKey}`;

@Injectable()
export class ActorService
{
    constructor(private http: Http)
    {

    }

    getPersonDetails<T extends Person>(personId: number): Observable<T>
    {
        console.log(personDetailsUrl(personId));
        return this.http.get(personDetailsUrl(personId)).map(response => {
            let p = response.json();
            let gender = p.gender == '0' ? 'female' : 'male';
            return new Actor(p.id, p.imdb_id, '', p.name, p.birthday, p.place_of_birth, gender, p.profile_path,
                p.biography, '', '', 0, p.adult);
        })
        .catch(this.handleError);
    }

    private handleError(error: Response)
    {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
