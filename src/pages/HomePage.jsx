; import MovieCard from '../components/MovieCard'
import axios from 'axios';
import { useState, useEffect } from 'react';

export default function HomePage() {


    const [movies, setMovies] = useState([]);

    //fetchIndex for movies
    const fetchMovies = () => {
        console.log('Fetching movies...');

        axios
            .get('http://localhost:3000/movies')
            .then((res) => {
                setMovies(res.data)
            })
            .catch((err) => {
                console.log(err);
            });

    };

    //funzione per rendering delle card dei libri nell'html
    const renderMovie = () => {
        return movies.map((movie) => {
            return (
                <div className="col" key={movie.id}>
                    <MovieCard movie={movie} />
                </div>
            );
        });
    }

    //Invocazione chiamata al caricamento del componente in pagina
    useEffect(fetchMovies, []);
    return (
        <>
            <h1 className="text-primary">BoolMovie</h1>
            <h2 className="row row-cols-3">Movies list</h2>
            <div className="row row-cols-3">

                {renderMovie()}
            </div>
        </>
    )



}