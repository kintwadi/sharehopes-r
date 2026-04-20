import React from 'react';
import { BrowserRouter, Routes, Route, useNavigate, useLocation, Location, NavigateFunction } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { AboutPage } from './pages/AboutPage';
import { ActivitiesPage } from './pages/ActivitiesPage';
import { VolunteerPage } from './pages/VolunteerPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { TermsPage } from './pages/TermsPage';
import { CookiePage } from './pages/CookiePage';
import { ScrollToTop } from './components/ScrollToTop';

export default function App() {

  const navigate = useNavigate();
  
  const location = useLocation(); 

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const redirectPath = params.get('redirect');
    if (redirectPath) {
      // Clean up URL and navigate
      window.history.replaceState(null, '', redirectPath);
      navigate(redirectPath, { replace: true });
    }
  }, [location, navigate]);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="activities" element={<ActivitiesPage />} />
          <Route path="volunteer" element={<VolunteerPage />} />
          <Route path="privacy" element={<PrivacyPage />} />
          <Route path="terms" element={<TermsPage />} />
          <Route path="cookies" element={<CookiePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
function useEffect(arg0: () => void, arg1: (NavigateFunction | Location<any>)[]) {
  throw new Error('Function not implemented.');
}

