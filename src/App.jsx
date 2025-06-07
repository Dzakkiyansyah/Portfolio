// src/App.jsx
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Impor Komponen Halaman
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';

// Impor Komponen Pendukung
import LoadingScreen from './components/common/LoadingScreen';
import MaintenanceWrapper from './components/layout/MaintenanceWrapper';

// --- PUSAT KONTROL MAINTENANCE ---
const maintenanceConfig = {
  about: false, // ganti menjadi `true` untuk memperbaiki halaman About
};

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <Router>
      <div className="font-inter">
        <Routes>
          {/* Rute untuk Halaman Utama */}
          <Route path="/" element={<HomePage />} />
          
          {/* Rute untuk Halaman About, dibungkus dengan MaintenanceWrapper */}
          <Route 
            path="/about" 
            element={
              <MaintenanceWrapper isUnderMaintenance={maintenanceConfig.about}>
                <AboutPage />
              </MaintenanceWrapper>
            } 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;