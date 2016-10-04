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
}
