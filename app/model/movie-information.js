"use strict";
var MovieInformation = (function () {
    function MovieInformation(imdbID, title, year, genre, runtime, poster, director, writer, actors, plot, metascore, imdbRating, imdbVotes, type, favorite) {
        if (favorite === void 0) { favorite = false; }
        this.imdbID = imdbID;
        this.title = title;
        this.year = year;
        this.genre = genre;
        this.runtime = runtime;
        this.poster = poster;
        this.director = director;
        this.writer = writer;
        this.actors = actors;
        this.plot = plot;
        this.metascore = metascore;
        this.imdbRating = imdbRating;
        this.imdbVotes = imdbVotes;
        this.type = type;
        this.favorite = favorite;
    }
    return MovieInformation;
}());
exports.MovieInformation = MovieInformation;
//# sourceMappingURL=movie-information.js.map