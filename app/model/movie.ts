import { Genre } from "./genre";

export class Movie
{
    private _id: number;
    private _title: string;
    private _releaseDate: Date;
    private _posterPath: string;
    private _backdropPath: string;
    private _plot: string;
    private _genres: Genre[];
    private _rating: number;
    private _votes: number;
    private _favorite: boolean = false;

    constructor(public id: number,
                public title: string,
                public releaseDate: Date,
                public posterPath: string,
                public backdropPath: string,
                public plot: string,
                public genres: Genre[],
                public rating: number,
                public votes: number,
                public favorite: boolean = false)
    {
        this._id = id;
        this._title = title;
        this._releaseDate = releaseDate;
        this._posterPath = posterPath;
        this._backdropPath = backdropPath;
        this._plot = plot
        this._genres = genres;
        this._rating = rating;
        this._votes = votes;
        this._favorite = favorite;
    }

    public get id(): number
    {
        return this._id;
    }

    public set id(value: number)
    {
        this._id = value;
    }

    public get title(): string
    {
        return this._title;
    }

    public set title(value: string)
    {
        this._title = value;
    }

    public get releaseDate(): Date
    {
        return this._releaseDate;
    }

    public set releaseDate(value: Date)
    {
        this._releaseDate = value;
    }

    public get posterPath(): string
    {
        return this._posterPath;
    }

    public set posterPath(value: string)
    {
        this._posterPath = value;
    }

    public get backdropPath(): string
    {
        return this._backdropPath;
    }

    public set backdropPath(value: string)
    {
        this._backdropPath = value;
    }

    public get plot(): string
    {
        return this._plot;
    }

    public set plot(value: string)
    {
        this._plot = value;
    }

    public get genres(): number[]
    {
        return this._genres;
    }

    public set genres(value: Array)
    {
        this._genres = value;
    }

    public get rating(): number
    {
        return this._rating;
    }

    public set rating(value: number)
    {
        this._rating = value;
    }

    public get votes(): number
    {
        return this._votes;
    }

    public set votes(value: number)
    {
        this._votes = value;
    }

    public get favorite(): boolean
    {
        return this._favorite;
    }

    public set favorite(value: boolean)
    {
        this._favorite = value;
    }
}
