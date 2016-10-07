import { Component, OnInit  } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Params } from '@angular/router';

import { Person } from "../../../model/person";

import { Util } from "../../../util/movie.util";

import { ActorService } from "../../../service/actors.service";

@Component({
    moduleId: module.id,
    selector: 'person-detail',
    templateUrl: 'person-detail.component.html',
    // styleUrls: ['person-detail.component.css']
})

export class PersonDetailComponent<T extends Person> implements  OnInit
{
    person: T;

    constructor(private actorService: ActorService, private route: ActivatedRoute, private title: Title)
    {

    }

    ngOnInit(): void
    {
        console.log(this.route.params);
        this.route.params.forEach((params: Params) => {
            let id = +params['id'];
            let name = params['name'];

            this.getPersonDetails(id);
            this.title.setTitle(`B I N G E / ${name} details`);
        });
    }

    getPersonDetails(personId: number)
    {
        this.actorService.getPersonDetails(personId)
            .subscribe(
                personDetailData =>
                {
                    console.log(personDetailData);
                    this.person = <T>personDetailData;
                    console.log(this.person);
                },
                error => console.log('ERROR: ' + error),
                () => console.log('Retrieving person details for', personId, 'complete.')
            );
    }

    getProfileImage(person: T, size: string): string {
        return new Util().getProfileImage(person, size);
    }
}
