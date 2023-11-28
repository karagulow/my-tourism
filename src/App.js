import { Route, Routes } from 'react-router-dom';
import './assets/scss/main.scss';

import { MainLayout } from './layouts/MainLayout';
import { Home } from './pages/Home';
import { TouristPage } from './pages/TouristPage';
import { TouristBonus } from './pages/TouristBonus';
import { TouristBooking } from './pages/TouristBooking';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<Home />} />
        <Route path="lk/tourist/">
          <Route path="id" element={<TouristPage />} />
          <Route path="bonus" element={<TouristBonus />} />
          <Route path="booking" element={<TouristBooking />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
