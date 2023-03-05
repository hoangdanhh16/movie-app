import { useEffect, useState } from 'react';
import 'react-loading-skeleton/dist/skeleton.css';
import ErrorMessage from '../../components/error-message/ErrorMessage';
import MovieList from '../../components/movie-list/MovieList';
import SkeletonLoading from '../../components/skeleton-loading/SkeletonLoading';
import { useLazyGetNowPlayingMoviesQuery } from '../../services/MoviesAPI';
import { API_KEY, MovieResType, MovieType } from '../../types/movie';

const NowPlaying = () => {
    const [getNowPlaying, { isLoading, isError }] = useLazyGetNowPlayingMoviesQuery();
    const [listMovies, setListMovies] = useState<MovieType[]>([]);
    const [page, setPage] = useState<number>(1);
    const [totalPages, setTotalPages] = useState<number>(0);
    const [errorMsg, seterrorMsg] = useState<string>('');

    useEffect(() => {
        getNowPlaying({
            api_key: API_KEY,
            page
        }).unwrap().then((res: MovieResType) => {
            setListMovies([...listMovies, ...res.results]);
            setTotalPages(res.total_pages);
        }).catch((err) => seterrorMsg(err.data.status_message))
    }, [page]);

    if (isError) return <ErrorMessage message={errorMsg} />;

    return (
        <>
            {isLoading
                ?
                <SkeletonLoading />
                : <MovieList listMovies={listMovies} setPage={setPage} totalPages={totalPages} page={page} />}

        </>
    )
}

export default NowPlaying