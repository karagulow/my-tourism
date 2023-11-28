import { Route, Routes } from 'react-router-dom';
import './assets/scss/main.scss';

import { MainLayout } from './layouts/MainLayout';
import { Home } from './pages/Home';
import { TouristPage } from './pages/TouristPage';
import { TouristBonus } from './pages/TouristBonus';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<Home />} />
        <Route path="lk/tourist/">
          <Route path="id" element={<TouristPage />} />
          <Route path="bonus" element={<TouristBonus />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
