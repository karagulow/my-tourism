import { Route, Routes } from 'react-router-dom';
import './assets/scss/main.scss';

import { MainLayout } from './layouts/MainLayout';
import { Home } from './pages/Home';
import { TouristPage } from './pages/TouristPage';
import { TouristBonus } from './pages/TouristBonus';
import { TouristBooking } from './pages/TouristBooking';
import { TouristReviews } from './pages/TouristReviews';
import { TouristRegulation } from './pages/TouristRegulation';
import { TouristChat } from './pages/TouristChat';
import { TouristInfo } from './pages/TouristInfo';
import { GuidePage } from './pages/GuidePage';
import { GuideProfile } from './pages/GuideProfile';
import { GuideTeam } from './pages/GuideTeam';
import { GuideNotifications } from './pages/GuideNotifications';
import { GuideNotificationsSettings } from './pages/GuideNotificationsSettings';
import { GuideTours } from './pages/GuideTours';
import { GuideBooking } from './pages/GuideBooking';
import { GuidePayments } from './pages/GuidePayments';
import { GuideTravelers } from './pages/GuideTravelers';
import { GuideRegulation } from './pages/GuideRegulation';
import { GuideRequest } from './pages/GuideRequest';
import { GuideReviews } from './pages/GuideReviews';
import { GuideHistory } from './pages/GuideHistory';
import { GuideDetails } from './pages/GuideDetails';
import { CreateTour } from './pages/CreateTour';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<Home />} />
        <Route path="lk/tourist/">
          <Route path="id" element={<TouristPage />} />
          <Route path="bonus" element={<TouristBonus />} />
          <Route path="booking" element={<TouristBooking />} />
          <Route path="reviews" element={<TouristReviews />} />
          <Route path="regulation" element={<TouristRegulation />} />
          <Route path="chat" element={<TouristChat />} />
          <Route path="personal" element={<TouristInfo />} />
        </Route>
        <Route path="lk/guide/">
          <Route path="id" element={<GuidePage />} />
          <Route path="profile" element={<GuideProfile />} />
          <Route path="team" element={<GuideTeam />} />
          <Route path="notifications" element={<GuideNotifications />} />
          <Route
            path="notifications-settings"
            element={<GuideNotificationsSettings />}
          />
          <Route path="tours" element={<GuideTours />} />
          <Route path="booking" element={<GuideBooking />} />
          <Route path="payments" element={<GuidePayments />} />
          <Route path="travelers" element={<GuideTravelers />} />
          <Route path="regulation" element={<GuideRegulation />} />
          <Route path="request" element={<GuideRequest />} />
          <Route path="reviews" element={<GuideReviews />} />
          <Route path="history" element={<GuideHistory />} />
          <Route path="details" element={<GuideDetails />} />
          <Route path="create-tour" element={<CreateTour />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
