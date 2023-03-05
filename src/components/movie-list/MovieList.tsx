import { debounce } from 'lodash';
import React, { Suspense, useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useLazySearchMoviesQuery } from '../../services/MoviesAPI';
import { API_KEY, MovieType } from '../../types/movie';
import Button from '../button/Button';
import './movie-list.scss';

const MovieCard = React.lazy(() => import('../movie-card/MovieCard'))

interface MovieListProps {
  listMovies: MovieType[];
  setPage: (setValueFunc: (value: number) => number) => void;
  page: number;
  totalPages: number;
}

const MovieList = ({ listMovies, setPage, page, totalPages }: MovieListProps) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [list, setList] = useState<MovieType[]>([]);
  const [search, { isLoading: isSearchLoading }] = useLazySearchMoviesQuery();
  const [value, setValue] = useState<string>(searchParams.get('search') ?? '');

  const debounceFn = useMemo(() => debounce((value) => {
    searchParams.set('search', value);
    setSearchParams(searchParams);
    if (!value) {
      searchParams.delete('search');
      setSearchParams(searchParams);
    }
  }, 500), []);

  const handleSearch = (value: string) => {
    setValue(value);
    debounceFn(value);
  }


  useEffect(() => {
    if (searchParams.get('search')) {
      search({
        api_key: API_KEY,
        query: searchParams.get('search')
      }).unwrap().then((res) => {
        setList(res.results)
      })
    }
  }, [searchParams.get('search')])


  return (
    <>
      <div className="movie__search">
        <input
          type="text"
          placeholder="Search film..."
          value={value}
          onChange={(e) => handleSearch(e.target.value)}
        />
      </div>
      <div className="movie-grid">
        {searchParams.get('search') ? list.map((item: MovieType, index: number) => <MovieCard item={item} key={index} />) : listMovies.map((item: MovieType, index: number) => <MovieCard item={item} key={index} />)}
      </div>
      {
        !searchParams.get('search') && (page < totalPages) && (
          <div className="movie-grid__loadmore">
            <Button className="small" onClick={() => setPage((page) => page + 1)}>Load more</Button>
          </div>
        )
      }
    </>
  )
}


export default MovieList;