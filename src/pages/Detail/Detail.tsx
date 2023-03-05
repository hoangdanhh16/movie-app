import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useGetMovieByIdQuery } from '../../services/MoviesAPI';
import { MovieDetailResType, API_KEY } from '../../types/movie';
import CastList from './CastList';
import './detail.scss';
import VideoList from './VideoList';

const Detail = () => {
  const { id } = useParams();
  const [movieDetail, setMovieDetail] = useState<MovieDetailResType>();

  const { data, isLoading, isSuccess } = useGetMovieByIdQuery({
    id,
    params: {
      api_key: API_KEY
    }
  })

  useEffect(() => {
    if (isSuccess) {
      setMovieDetail(data);
      window.scrollTo(0, 0);
    }
  }, [isSuccess])

  return (
    <>
      {
        movieDetail && (
          <>
            <div className="banner" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500/${movieDetail.backdrop_path || movieDetail.poster_path})` }}></div>
            <div className="mb-3 movie-content container">
              <div className="movie-content__poster">
                <div className="movie-content__poster__img" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500/${movieDetail.poster_path || movieDetail.backdrop_path})` }}></div>
              </div>
              <div className="movie-content__info">
                <h1 className="title">
                  {movieDetail.title}
                </h1>
                <div className="genres">
                  {movieDetail.genres?.slice(0, 5).map((genre, index) => (
                    <span key={index} className="genres__item">{genre.name}</span>
                  ))}
                </div>
                <p className="overview">{movieDetail.overview}</p>
                <div className="cart">
                  <div className="section__header">
                    <h2>Casts</h2>
                  </div>
                  <CastList />
                </div>
              </div>
            </div>
            <div className="container">
              <div className="section mb-3">
                <VideoList />
              </div>
            </div>
          </>
        )
      }
    </>
  )
}

export default Detail