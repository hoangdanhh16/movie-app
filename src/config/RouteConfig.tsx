import { Route, Routes } from 'react-router-dom';
import Detail from '../pages/Detail/Detail';
import NowPlaying from '../pages/NowPlaying/NowPlaying';
import TopRated from '../pages/TopRated/TopRated';

const RouteConfig = () => {
  return (
    <Routes>
      <Route path='/details/:id' element={<Detail />} />
      <Route path='/top-rated' element={<TopRated />} />
      <Route path='/' element={<NowPlaying />} />
    </Routes>
  )
}

export default RouteConfig