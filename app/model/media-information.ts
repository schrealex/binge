import { Genre } from "./genre";
import { Actor } from "./actor";
import { CrewMember } from "./crewmember";

export class MediaInformation
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
}
