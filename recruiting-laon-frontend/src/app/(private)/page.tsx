'use client';

import { api } from "@/services/api";
import { useEffect, useState } from "react";

import { Movie } from "@/models/Movie";
import Slider from "@/components/Slider";

const Home = () => {

    const [movies, setMovies] = useState<Array<Movie>>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const fetchMovies = async () => {
        const response = await api.get("/api/movies");
        setMovies(response.data.data)
    }

    useEffect(() => {
        setIsLoading(true)
        fetchMovies().finally(() => setIsLoading(false))
    }, [])

    return (
        <div className="row">
            <div className="col-12 mb-4">
                <h1>Populares</h1>
            </div>
            {
                isLoading ? (
                    <div className="spinner-grow" role="status">
                        <span className="sr-only">Carregando...</span>
                    </div>
                ) : (
                    <>
                        <Slider title="FILMES" items={movies} imgWidth={240}/>
                    </>
                )
            }
        </div>
    );
}

export default Home