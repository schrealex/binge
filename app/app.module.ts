import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { DashboardComponent }  from './dashboard.component';
import { RecommendationsComponent }  from './components/recommendations/recommendations.component';
import { MoviesComponent }  from './movies.component';
import { MovieAddComponent }  from './movie-add.component';
import { MovieDetailComponent } from './movie-detail.component';
import { GamesComponent } from './games.component';

import { ApiAuthenticationService } from './service/api-authentication.service';
import { MovieService } from './service/movie.service';

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
        RecommendationsComponent,
        MoviesComponent,
        MovieAddComponent,
        MovieDetailComponent,
        GamesComponent,
        DateFormatPipe
    ],
    providers: [
        ApiAuthenticationService,
        MovieService
    ],
    bootstrap: [AppComponent]
})

export class AppModule
{

}
