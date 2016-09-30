export class MovieInformation {
    constructor(
        public imdbID: number,
        public title: string,
        public year: number,
        public genre: string,
        public runtime: string,
        public poster: string,
        public director: string,
        public writer: string,
        public actors: string,
        public plot: string,
        public metascore: number,
        public imdbRating: number,
        public imdbVotes: number,
        public type: string,
        public favorite: boolean = false
    )
    {

    }
}
