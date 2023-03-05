import { createApi } from '@reduxjs/toolkit/query/react';
import { MovieDetailResType, MovieResType, ReqGetDetailType, ReqGetListType } from '../types/movie';
import { baseQuery } from './baseQuery';

export const MoviesAPI = createApi({
    reducerPath: 'MoviesAPI',
    baseQuery,
    endpoints: (builder) => ({
        getNowPlayingMovies: builder.query<MovieResType, ReqGetListType>({
            query: (params) => ({
                url: '/movie/now_playing',
                params
            })
        }),
        getTopRatedMovies: builder.query<MovieResType, ReqGetListType>({
            query: (params) => ({
                url: '/movie/top_rated',
                params
            })
        }),
        getMovieById: builder.query({
            query: ({ params, id }) => ({
                url: `/movie/${id}`,
                params
            })
        }),
        getCredits: builder.query({
            query: ({ params, id }) => ({
                url: `/movie/${id}/credits`,
                params
            })
        }),
        getVideos: builder.query({
            query: ({ params, id }) => ({
                url: `/movie/${id}/videos`,
                params
            })
        }),
        searchMovies: builder.query({
            query: (params) => ({
                url: '/search/movie',
                params
            })
        })
    })
});

export const { useLazyGetNowPlayingMoviesQuery, useLazyGetTopRatedMoviesQuery, useLazySearchMoviesQuery, useGetMovieByIdQuery, useGetCreditsQuery, useGetVideosQuery } = MoviesAPI;