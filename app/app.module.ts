import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { DashboardComponent }  from './dashboard.component';
import { CarouselComponent }  from './components/carousel/carousel.component';
import { GenresComponent }  from './components/genres/genres.component';
import { PersonsComponent }  from './components/persons/persons.component';
import { RecommendationsComponent }  from './components/recommendations/recommendations.component';
import { MediaRecommendationsComponent } from "./components/recommendations/media.recommendations.component";
import { MoviesComponent } from './movies.component';
import { MovieAddComponent }  from './movie-add.component';
import { MovieDetailComponent } from './movie-detail.component';
import { SeriesComponent } from './components/series/series.component';
import { SerieDetailComponent } from './components/series/serie-detail.component';
import { PersonDetailComponent } from './components/persons/details/person-detail.component';
import { GamesComponent } from './games.component';

import { ApiAuthenticationService } from './service/api-authentication.service';
import { MediaService } from './service/media.service';
import { MovieService } from './service/movie.service';
import { SerieService } from './service/serie.service';
import { ActorService } from './service/actors.service';

import { DateFormatPipe } from "./util/date-format.pipe";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing
    ],
    declarations: [
        AppComponent,
        DashboardComponent,
        CarouselComponent,
        GenresComponent,
        PersonsComponent,
        RecommendationsComponent,
        MediaRecommendationsComponent,
        MoviesComponent,
        MovieAddComponent,
        MovieDetailComponent,
        SeriesComponent,
        SerieDetailComponent,
        PersonDetailComponent,
        GamesComponent,
        DateFormatPipe
    ],
    providers: [
        ApiAuthenticationService,
        MediaService,
        MovieService,
        SerieService,
        ActorService
    ],
    bootstrap: [AppComponent]
})

export class AppModule
{

}
