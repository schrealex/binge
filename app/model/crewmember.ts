import { Person } from "./person";
import { Image } from "./image";

export class CrewMember extends Person
{
    private _department: string;
    private _job: string;

    constructor(public id: number,
                public imdbId: string,
                public facebookId: string,
                public twitterId: string,
                public creditId: string,
                public name: string,
                public profilePath: string,
                public profiles: Image[],
                public department: string,
                public job: string)
    {
        super(id, imdbId, facebookId, twitterId, creditId, name, profilePath, profiles);

        this._department = department;
        this._job = job;
    }
}
