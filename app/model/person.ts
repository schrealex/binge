import { Image } from "./image";

export class Person
{
    private _id: number;
    private _imdbId: string;
    private _facebookId: string;
    private _twitterId: string;
    private _creditId: string;
    private _name: string;
    private _profilePath: string;
    private _profiles: Image[];

    constructor(public id: number,
                public imdbId: string,
                public facebookId: string,
                public twitterId: string,
                public creditId: string,
                public name: string,
                public profilePath: string,
                public profiles: Image[])
    {
        this._id = id;
        this._imdbId = imdbId;
        this._facebookId = facebookId;
        this._twitterId = twitterId;
        this._creditId = creditId;
        this._name = name;
        this._profilePath = profilePath;
        this._profiles = profiles;
    }
}
