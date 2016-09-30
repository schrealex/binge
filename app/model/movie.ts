export class Movie {
    constructor(
        public id: number,
        public title: string,
        public release_date: Date,
        public poster_path: string,
        public overview: string,
        public favorite: boolean = false
    )
    {

    }
}
