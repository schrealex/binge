import { Component, Input } from '@angular/core';
import { Person } from "../../model/person";
import { Util } from "../../util/movie.util";

@Component({
    moduleId: module.id,
    selector: 'persons',
    templateUrl: 'persons.component.html',
    styleUrls: ['persons.component.css']
})

export class PersonsComponent {

    @Input() headerTitle: string;
    @Input() persons: Person[];

    constructor() {

    }

    getProfileImage(person: Person): string {
        return new Util().getProfileImage(person);
    }
}