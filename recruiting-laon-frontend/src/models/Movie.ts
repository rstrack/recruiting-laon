import { Genre } from "./Genre"

export type Movie = {
    id: string
    original_title: string
    title: string
    year: string
    duration: string
    overview: string
    cast: string
    awards: string
    director: string
    imdb_rating: string
    poster_url: string
    trailer_url: string
    genres: Array<Genre>
}