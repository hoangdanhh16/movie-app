import { FaPlay } from 'react-icons/fa';
import LazyLoad from 'react-lazyload';
import { Link } from 'react-router-dom';
import { MovieType } from '../../types/movie';
import Button from '../button/Button';
import './movie-card.scss';
import { LazyLoadImage } from 'react-lazy-load-image-component';

interface MovieProps {
    item: MovieType;
}

const MovieCard = ({ item }: MovieProps) => {
    const imgUrl = `https://image.tmdb.org/t/p/w500/${item.poster_path || item.backdrop_path}`;

    return (
        <Link to={`/details/${item.id}`} >
            <div className="movie-card">
                <LazyLoadImage effect='blur' style={{ borderRadius: '2rem'}} src={imgUrl} />
                <Button>
                    <FaPlay />
                </Button>
            </div>
            <h3 style={{ marginBottom: '1rem' }}>{item.title}</h3>
        </Link>
    )
}

export default MovieCard