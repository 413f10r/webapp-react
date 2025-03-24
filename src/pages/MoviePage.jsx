
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

//uso del compoennte ReviewCard
import ReviewCard from '../components/ReviewCard';

export default function MoviePage() {
    //Estrazione dinformazione dall'url del sito
    //http:localhost:3000/movie/2
    const { id } = useParams(); //2

    //Crreazione varibaile reattiva
   const [movie, setMovie] = useState({});

    //Chiamata fetch Show
    const fetchMovie = () => {
        axios
            .get(`http://localhost:3000/movies/${id}`)
            .then((res) => setMovie(res.data))
            .catch((error) => console.log(error));
    }; 

    //Invocazione chiamata al caricamento del componente in pagina
    useEffect(fetchMovie, [id]);

    //Rendering html delle reviews
    const renderReviews = () => {
        return movie.reviews?.map((review) => {
            return <ReviewCard key={review.id} review={review} />;
        });
    };

    return (
        <>
            <h1>{movie?.title}</h1>
            <img src={movie?.image} alt={movie?.title} />
            {/* qui andrà la pagina di dettaglio del prodotto */}

            <section>
                <h4>Our community reviews</h4>
                {renderReviews()}
            </section>
        </>
    );
}