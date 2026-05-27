import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppFAB from './components/WhatsAppFAB';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import CollectionPage from './pages/CollectionPage';
import PortfolioPage from './pages/PortfolioPage';
import UploadPage from './pages/UploadPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <main className="pt-[72px]">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/collection" element={<CollectionPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/upload" element={<UploadPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppFAB />
    </div>
  );
}

export default App;
