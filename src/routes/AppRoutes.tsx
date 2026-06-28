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
import StoreLocator from "../pages/storeLocators";
import Franchise from '../pages/GetFranchise';
import Careers from '../pages/Careers';
import Contact from '../pages/Contact';
import Terms from '../pages/Terms';
import PrivacyPolicy from '../pages/PrivacyPolicy';
import FAQ from '../pages/FAQ';
import Pricing from '../pages/Pricing';
import { services } from '../data/Services';
import Blog from '../pages/Blog';
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
        <Route path="/store" element={<StoreLocator />} />
        <Route path="/franchise" element={<Franchise />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/FAQ" element={<FAQ />} />
        <Route path="/blog" element={<Blog />} />
<Route path="/Pricing" element={<Pricing services={services} />} />

      </Routes>
    </BrowserRouter>
  );
}