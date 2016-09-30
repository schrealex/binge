export getMoviePoster(movie: Movie)
{
    return movie.posterPath != '' ? imageUrl('w342', movie.posterPath) : dummyPosterUrl;
}