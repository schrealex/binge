import { Genre } from "./genre";
import { Actor } from "./actor";
import { CrewMember } from "./crewmember";
import { MediaInformation } from "./media-information";

export class MovieInformation extends MediaInformation
{
    private _imdbId: number;
    private _releaseDate: Date;
    private _runtime: number;
    private _director: CrewMember[];
    private _writer: CrewMember[];
    private _actors: Actor[];
    private _tagline: string;

    constructor(public id: number,
                public imdbId: number,
                public title: string,
                public originalTitle: string,
                public releaseDate: Date,
                public genres: Genre[],
                public runtime: number,
                public posterPath: string,
                public backdropPath: string,
                public director: CrewMember[],
                public writer: CrewMember[],
                public actors: Actor[],
                public plot: string,
                public tagline: string,
                public rating: number,
                public votes: number,
                public favorite: boolean = false)
    {
        super(id, title, originalTitle, genres, posterPath, backdropPath, plot, rating, votes, favorite);

        this._imdbId = imdbId;
        this._releaseDate = releaseDate;
        this._runtime = runtime;
        this._director = director;
        this._writer = writer;
        this._actors = actors;
        this._tagline = tagline;
    }
}
