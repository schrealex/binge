import { Person } from "./person";

export class Actor extends Person
{
    private _castId: string;
    private _character: string;
    private _order: number;

    constructor(public id: number,
                public creditId: string,
                public name: string,
                public profilePath: string,
                public castId: string,
                public character: string,
                public order: number)
    {
        super(id, creditId, name, profilePath);

        this._castId = castId;
        this._character = character;
        this._order = order;
    }
}
