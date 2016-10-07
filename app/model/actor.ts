import { Person } from "./person";

export class Actor extends Person
{
    private _birthday: Date;
    private _placeOfBirth: string;
    private _gender: string;
    private _biography: string;
    private _castId: string;
    private _character: string;
    private _order: number;
    private _adult: boolean;

    constructor(public id: number,
                public imdbId: number,
                public creditId: string,
                public name: string,
                public birthday: Date,
                public placeOfBirth: string,
                public gender: string,
                public profilePath: string,
                public biography: string,
                public castId: string,
                public character: string,
                public order: number,
                public adult: boolean)
    {
        super(id, creditId, name, profilePath);

        this._birthday = birthday;
        this._placeOfBirth = placeOfBirth;
        this._gender = gender;
        this._biography = biography;
        this._castId = castId;
        this._character = character;
        this._order = order;
        this._adult = adult;
    }
}
