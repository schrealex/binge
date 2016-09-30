"use strict";
var Movie = (function () {
    function Movie(id, title, release_date, poster_path, overview, favorite) {
        if (favorite === void 0) { favorite = false; }
        this.id = id;
        this.title = title;
        this.release_date = release_date;
        this.poster_path = poster_path;
        this.overview = overview;
        this.favorite = favorite;
    }
    return Movie;
}());
exports.Movie = Movie;
//# sourceMappingURL=movie.js.map