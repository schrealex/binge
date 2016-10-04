export class Person
{
    private _id: number;
    private _creditId: string;
    private _name: string;
    private _profilePath: string;

    constructor(public id: number,
                public creditId: string,
                public name: string,
                public profilePath: string)
    {
        this._id = id;
        this._creditId = creditId;
        this._name = name;
        this._profilePath = profilePath;
    }
}
