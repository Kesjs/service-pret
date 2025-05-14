// src/App.tsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NosOffres from './pages/NosOffres';
import PretAuto from './components/PretAuto';
import PretImmo from './components/PretImmo';
import PretPerso from './components/PretPerso';
import PretPro from './components/PretPro';
import Header from './components/Header';
import Footer from './components/Footer';
import Breadcrumb from './components/Breadcrumb';


function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/nos-offres" element={<NosOffres />} />
            <Route path="/nos-offres/pret-personnel" element={<PretPersoPage />} />
            <Route path="/nos-offres/pret-immobilier" element={<PretImmoPage />} />
            <Route path="/nos-offres/pret-auto" element={<PretAutoPage />} />
            <Route path="/nos-offres/pret-pro" element={<PretProPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

const PretPersoPage = () => (
  <div>
    <Breadcrumb />
    <PretPerso />
  </div>
);

const PretImmoPage = () => (
  <div>
    <Breadcrumb />
    <PretImmo />
  </div>
);

const PretAutoPage = () => (
  <div>
    <Breadcrumb />
    <PretAuto />
  </div>
);

const PretProPage = () => (
  <div>
    <Breadcrumb />
    <PretPro />
  </div>
);

export default App;
