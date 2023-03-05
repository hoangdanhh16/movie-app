export const API_KEY = '795ec4dbc4dc3e8d59673f95d2721d56';

export interface MovieResType {
    page: number;
    results: MovieType[];
    dates?: DateType;
    total_pages: number;
    total_results: number;
}

interface DateType {
    maximum: string;
    minimum: string;
}

export interface MovieType {
    poster_path: string;
    adult: boolean;
    overview: string;
    release_date: string
    genre_ids: number[];
    id: number;
    original_title: string;
    original_language: string;
    title: string;
    backdrop_path: string;
    popularity: number;
    vote_count: number;
    video: boolean;
    vote_average: number;
}

export interface ReqGetListType {
    api_key: string;
    page?: number;
    language?: string;
    region?: string;
}

export interface MovieDetailResType {
    adult: boolean;
    backdrop_path: string;
    belongs_to_collection: any;
    budget: number;
    genres: GenreType[];
    homepage: string;
    id: number;
    imdb_id: string;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    production_companies: CompanyType;
    production_countries: CountryType;
    release_date: string;
    revenue: number;
    runtime: number;
    spoken_languages: LanguageType
    status: string;
    tagline: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

export interface LanguageType {
    iso_639_1: string;
    name: string;
}

export interface CountryType {
    iso_3166_1: string;
    name: string;
}

export interface CompanyType {
    name: string;
    id: number;
    logo_path: string;
    origin_country: string;
}

export interface GenreType {
    id: string;
    name: string;
}

export interface ReqGetDetailType {
    api_key: string;
    language: string;
    append_to_response: string;
    id: number;
}

export interface CastType {
    adult: boolean;
    gender: number;
    id: number;
    known_for_department: string;
    name: string;
    original_name: string;
    popularity: number;
    profile_path: string;
    cast_id: number;
    character: string;
    credit_id: string;
    order: number;
}

export interface CrewType {
    adult: boolean;
    gender: number;
    id: number;
    known_for_department: string;
    name: string;
    original_name: string;
    popularity: number;
    profile_path: string;
    credit_id: string;
    department: string;
    job: string;
}

export interface CastResType {
    id: number;
    cast: CastType[];
    crew: CrewType[];
}

export interface VideoType {
    iso_639_1: string;
    iso_3166_1: string;
    name: string;
    key: string;
    site: string;
    size: number;
    type: string;
    official: boolean;
    published_at: string;
    id: string;
}