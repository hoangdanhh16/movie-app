import {
    fetchBaseQuery
} from '@reduxjs/toolkit/query';

export const baseQuery = fetchBaseQuery({
    baseUrl: 'https://api.themoviedb.org/3',
    cache: 'no-cache',
});
