import './App.scss';

import { BrowserRouter } from 'react-router-dom';
import Header from './components/header/Header';
import RouteConfig from './config/RouteConfig';

function App() {
  return (
    <BrowserRouter>
        <Header />
        <RouteConfig />
    </BrowserRouter>
  );
}

export default App;
