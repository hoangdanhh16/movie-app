import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useGetCreditsQuery } from '../../services/MoviesAPI';
import { API_KEY, CastType } from '../../types/movie';

const CastList = () => {
  const { id } = useParams();
  const [casts, setCasts] = useState<CastType[]>([]);
  const { data, isLoading, isSuccess } = useGetCreditsQuery({
    id,
    params: {
      api_key: API_KEY
    }
  })


  useEffect(() => {
    if(isSuccess) {
      setCasts(data.cast.slice(0, 5))
    }
  }, [isSuccess])

  return (
    <div className="casts">
      {
        casts.map((cast, index) => (
          <div className="casts_item" key={index}>
            <div className="casts__item__img" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500/${cast.profile_path})` }}></div>
            <p className="casts__item__name">{cast.name}</p>
          </div>
        ))
      }
    </div>
  )
}

export default CastList