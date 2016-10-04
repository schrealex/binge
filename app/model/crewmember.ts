import { Person } from "./person";

export class CrewMember extends Person
{
    private _department: string;
    private _job: string;

    constructor(public id: number,
                public creditId: string,
                public name: string,
                public profilePath: string,
                public department: string,
                public job: string)
    {
        super(id, creditId, name, profilePath);

        this._department = department;
        this._job = job;
    }
}
