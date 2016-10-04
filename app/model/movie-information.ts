import { Genre } from "./genre";
import { Actor } from "./actor";
import { CrewMember } from "./crewmember";

export class MovieInformation
{
    private _id: number;
    private _imdbId: number;
    private _title: string;
    private _originalTitle: string;
    private _releaseDate: Date;
    private _genres: Genre[];
    private _runtime: number;
    private _posterPath: string;
    private _backdropPath: string;
    private _director: CrewMember[];
    private _writer: CrewMember[];
    private _actors: Actor[];
    private _plot: string;
    private _tagline: string;
    private _rating: number;
    private _votes: number;
    private _favorite: boolean;

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
        this._id = id;
        this._imdbId = imdbId;
        this._title = title;
        this._originalTitle = originalTitle;
        this._releaseDate = releaseDate;
        this._genres = genres;
        this._runtime = runtime;
        this._posterPath = posterPath;
        this._backdropPath = backdropPath;
        this._director = director;
        this._writer = writer;
        this._actors = actors;
        this._plot = plot;
        this._tagline = tagline;
        this._rating = rating;
        this._votes = votes;
        this._favorite = favorite;
    }

    get id(): number
    {
        return this._id;
    }

    set id(value: number)
    {
        this._id = value;
    }

    get imdbId(): number
    {
        return this._imdbId;
    }

    set imdbId(value: number)
    {
        this._imdbId = value;
    }

    get title(): string
    {
        return this._title;
    }

    set title(value: string)
    {
        this._title = value;
    }

    get originalTitle(): string
    {
        return this._originalTitle;
    }

    set originalTitle(value: string)
    {
        this._originalTitle = value;
    }

    get releaseDate(): Date
    {
        return this._releaseDate;
    }

    set releaseDate(value: Date)
    {
        this._releaseDate = value;
    }

    get genres(): Genre[]
    {
        return this._genres;
    }

    set genres(value: Array)
    {
        this._genres = value;
    }

    get runtime(): number
    {
        return this._runtime;
    }

    set runtime(value: number)
    {
        this._runtime = value;
    }

    get posterPath(): string
    {
        return this._posterPath;
    }

    set posterPath(value: string)
    {
        this._posterPath = value;
    }

    get backdropPath(): string
    {
        return this._backdropPath;
    }

    set backdropPath(value: string)
    {
        this._backdropPath = value;
    }

    get director(): CrewMember[]
    {
        return this._director;
    }

    set director(value: Array)
    {
        this._director = value;
    }

    get writer(): CrewMember[]
    {
        return this._writer;
    }

    set writer(value: Array)
    {
        this._writer = value;
    }

    get actors(): Actor[]
    {
        return this._actors;
    }

    set actors(value: Array)
    {
        this._actors = value;
    }

    get plot(): string
    {
        return this._plot;
    }

    set plot(value: string)
    {
        this._plot = value;
    }

    get tagline(): string
    {
        return this._tagline;
    }

    set tagline(value: string)
    {
        this._tagline = value;
    }

    get rating(): number
    {
        return this._rating;
    }

    set rating(value: number)
    {
        this._rating = value;
    }

    get votes(): number
    {
        return this._votes;
    }

    set votes(value: number)
    {
        this._votes = value;
    }

    get favorite(): boolean
    {
        return this._favorite;
    }

    set favorite(value: boolean)
    {
        this._favorite = value;
    }
}
