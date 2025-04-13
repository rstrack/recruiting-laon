'use client'

import Image from "next/image"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"

import TrailerModal from "@/components/TrailerModal"
import { Movie } from "@/models/Movie"
import { api } from "@/services/api"
import { toHoursAndMinutes } from "@/utils/toHoursAndMinutes"

const Movies = () => {
    const params = useParams()
    const id = params.id

    const [movie, setMovie] = useState<Movie | null>()
    const [isLoading, setIsLoading] = useState(false)
    const [isTrailerModalOpen, setIsTrailerModalOpen] = useState(false)

    const getMovie = async () => {
        try {
            const response = await api.get(`/api/movies/${id}`);
            setMovie(response.data.data)
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        setIsLoading(true)
        getMovie().finally(() => setIsLoading(false))
    }, [])

    return ( 
        isLoading || !movie ? (
            <div className="spinner-grow" role="status">
                <span className="sr-only">Carregando...</span>
            </div>
        ) : (
            <>
                <div className="row gx-5">
                    <div className="col-12 col-sm-6 col-lg-3 d-grid gap-3">
                        <Image 
                            src={movie.poster_url}
                            width={300}
                            height={450}
                            alt={movie.title + " poster"}
                            className="w-100 h-auto"
                            style={{ objectFit: 'cover' }}
                        />
                        <button role="button" 
                            className="btn btn-block btn-primary rounded-1 mb-4"
                            onClick={() => setIsTrailerModalOpen(true)}
                        >
                            Assistir Trailer
                        </button>
                    </div>

                    <div className="col-12 col-sm-6 col-lg-9">
                        <div className="row">
                            <h1>{movie.title}</h1>
                            <p className="text-tertiary mb-1"><b>Título original:</b> {movie.original_title}</p>
                            <p className="text-tertiary mb-1"><b>Ano:</b> {movie.year}</p>
                            <p className="text-tertiary mb-1"><b>Duração:</b> {toHoursAndMinutes(movie.duration)}</p>
                            <div className="col-12 mt-2 mb-4">
                                {
                                    movie.genres.map((genre, i) => (
                                        <span className="badge fw-normal rounded-pill border border-1 text-white py-2 px-3 me-2" key={i}>{genre.description}</span>
                                    ))
                                }
                            </div>
                            <div className="col-12">
                                Sinopse
                                <hr className="h-line mt-1"/>
                            </div>

                            <div className="col-12 text-tertiary mb-4">
                                {movie.overview}
                            </div>

                            <div className="col-6">
                                Elenco
                                <hr className="h-line mt-1"/>
                            </div>

                            <div className="col-6">
                                Prêmios
                                <hr className="h-line mt-1"/>
                            </div>

                            <div className="col-6 text-tertiary mb-4">
                                {movie.cast}
                            </div>

                            <div className="col-6 text-tertiary mb-4">
                                {movie.awards}
                            </div>

                            <div className="col-6">
                                Diretor
                                <hr className="h-line mt-1"/>
                            </div>

                            <div className="col-6">
                                Avaliações
                                <hr className="h-line mt-1"/>
                            </div>

                            <div className="col-6 text-tertiary mb-4">
                                {movie.director}
                            </div>

                            <div className="col-6 text-tertiary mb-4">
                                IMDb: {movie.imdb_rating}
                            </div>
                        </div>
                    </div>
                    
                </div>
                <TrailerModal show={isTrailerModalOpen} onClose={() => setIsTrailerModalOpen(false)} url={movie.trailer_url}/>
            </>
        )
    )
}

export default Movies;