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

    get id(): number
    {
        return this._id;
    }

    set id(value: number)
    {
        this._id = value;
    }

    get creditId(): string
    {
        return this._creditId;
    }

    set creditId(value: string)
    {
        this._creditId = value;
    }

    get name(): string
    {
        return this._name;
    }

    set name(value: string)
    {
        this._name = value;
    }

    get profilePath(): string
    {
        return this._profilePath;
    }

    set profilePath(value: string)
    {
        this._profilePath = value;
    }
}
