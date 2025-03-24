import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import HomeScreen from '../pages/modules/home/HomeScreen';
import Header from '../components/common/layout/header/Header';
import Footer from '../components/common/layout/footer/Footer';
import AgendaOfActivitiesScreen from '../pages/modules/Business/AgendaOfActivitiesScreen';
import MainWrapperCustom from '../components/common/page/custom/MainWrapperCustom';
import DiscoverEcuadorTravelScreen from '../pages/modules/Business/DiscoverEcuadorTravelScreen';
import CatalogScreen from '../pages/modules/Business/CatalogScreen';
import PackagesScreen from '../pages/modules/Business/PackagesScreen';
import ContactScreen from '../pages/modules/Business/ContactScreen';
import ScrollToTop from '../components/common/page/scroll/ScrollToTop';
import NotFoundScreen from '../pages/errors/404/NotFoundScreen';
import CommercialProposalScreen from '../pages/modules/Business/CommercialProposalScreen';

const AppRouter: React.FC = () => {
  return (
    <Router
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <ScrollToTop />
      <div className="bg-white">
        <Header />
        <MainWrapperCustom>
          <main>
            <Routes>
              <Route path="/" element={<Navigate to="/home" />} />
              <Route path="/home" element={<HomeScreen />} />
              <Route
                path="/agenda-activities"
                element={<AgendaOfActivitiesScreen />}
              />
              <Route
                path="/discover-Ecuador-travel"
                element={<DiscoverEcuadorTravelScreen />}
              />
              <Route path="/catalog" element={<CatalogScreen />} />
              <Route
                path="/commercial-proposal"
                element={<CommercialProposalScreen />}
              />
              <Route path="/packages" element={<PackagesScreen />} />
              <Route path="/contact" element={<ContactScreen />} />
              <Route path="*" element={<NotFoundScreen />} />
            </Routes>
          </main>
        </MainWrapperCustom>
        <Footer />
      </div>
    </Router>
  );
};

export default AppRouter;
