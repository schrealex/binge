import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

import { Serie } from "../../model/serie";
import { SerieInformation } from "../../model/serie-information";

import { MediaService } from '../../service/media.service';
import { SerieService } from '../../service/serie.service';

import { Util } from '../../util/movie.util';
import { Media } from "../../model/media";

@Component({
    moduleId: module.id,
    selector: 'series',
    templateUrl: 'series.component.html',
    styleUrls: ['series.component.css']
})

export class SeriesComponent
{
    selectedSerie: Serie = null;
    series: Media[] = [];
    searchSeriesTitle: string = '';
    seriesTitle: string = '';

    serieInformation: SerieInformation;

    constructor(private router: Router, private mediaService: MediaService)
    {

    }

    searchSeries()
    {
        this.seriesTitle = this.searchSeriesTitle;
        this.mediaService.searchMedia<Media>(this.searchSeriesTitle, 'tv')
            .subscribe(
                seriesData =>
                {
                    this.series = seriesData;
                },
                error => console.log('ERROR: ' + error),
                () => console.log('Searching series with titles containing', this.seriesTitle, 'complete.')
            );
        this.searchSeriesTitle = '';
    }

    getSerieInformation(serie: Serie)
    {
        this.mediaService.getMediaInformation<Serie, SerieInformation>(serie, 'tv')
            .subscribe(
                serieData =>
                {
                    this.serieInformation = serieData;
                    console.log(this.serieInformation);
                },
                error => console.log('ERROR: ' + error),
                () => console.log('Retrieving serie information for', serie.title, 'complete.')
            );
    }

    selectSerie(serie: Serie)
    {
        this.selectedSerie = serie;
        console.log(this.selectedSerie);
    }

    getSeriePoster(serie: Serie): string {
        return new Util().getMoviePoster(serie);
    }

    clearMovies()
    {
        this.series = [];
        this.selectedSerie = null;
    }
}
