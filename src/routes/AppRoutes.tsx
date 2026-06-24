import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Home from '../pages/Home';
import ServicesPage from '../pages/ServicesPage';
import AboutPage from '../pages/AboutPage';
import ContactPage from '../pages/Contact';
import ProcessPage from '../pages/ProcessPage';
import WhyChooseUsPage from '../pages/WhyChooseUsPage';
import NotFound from '../pages/NotFound';
import ScrollToTop from "../components/ScrollToTop";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Navbar />
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/process" element={<ProcessPage />} />
        <Route path="/benefits" element={<WhyChooseUsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}