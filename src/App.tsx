import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ScrollToTop } from './components/ScrollToTop';
import Home from './pages/Home';
import ServicePage from './pages/ServicePage';
import About from './pages/About';
import CaseStudies from './pages/CaseStudies';
import Insights from './pages/Insights';
import Contact from './pages/Contact';

// Router basename derives from Vite's base so the app works under the GitHub
// Pages subpath in production and at "/" in dev without a second source of truth.
const basename = import.meta.env.BASE_URL.replace(/\/$/, '') || '/';

export default function App() {
  return (
    <BrowserRouter basename={basename}>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services/:slug" element={<ServicePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/contact" element={<Contact />} />
        {/* Unknown route → home */}
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}