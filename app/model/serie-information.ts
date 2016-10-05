import { MediaInformation } from "./media-information";
import { Genre } from "./genre";

export class SerieInformation extends MediaInformation
{
    private _inProduction: boolean;
    private _createdBy: any[];
    private _networks: any[];
    private _numberOfEpisodes: number;
    private _numberOfSeasons: number;
    private _seasons: any[];
    private _episodeRuntime: number[],;
    private _firstAirDate: Date;
    private _lastAirDate: Date;
    private _status: string;
    private _type: string;
    private _favorite: boolean;

    constructor(
                public id: number,
                public title: string,
                public originalTitle: string,
                public genres: Genre[],
                public posterPath: string,
                public backdropPath: string,
                public plot: string,
                public rating: number,
                public votes: number,
                public favorite: boolean = false,
                public inProduction: boolean,
                public createdBy: any[],
                public networks: any[],
                public numberOfEpisodes: number,
                public numberOfSeasons: number,
                public seasons: any[],
                public episodeRuntime: number[],
                public firstAirDate: Date,
                public lastAirDate: Date,
                public status: string,
                public type: string)
    {
        super(id, title, originalTitle, genres, posterPath, backdropPath, plot, rating, votes, favorite);

        this._inProduction = inProduction;
        this._createdBy = createdBy;
        this._networks = networks;
        this._numberOfEpisodes = numberOfEpisodes;
        this._numberOfSeasons = numberOfSeasons;
        this._seasons = seasons;
        this._episodeRuntime = episodeRuntime;
        this._firstAirDate = firstAirDate;
        this._lastAirDate = lastAirDate;
        this._status = status;
        this._type = type;
    }
}
