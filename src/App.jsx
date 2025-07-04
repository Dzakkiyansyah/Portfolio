import { useEffect, useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import AnimatedBackground from './components/common/AnimatedBackground';
import LoadingScreen from './components/common/LoadingScreen';
import MaintenanceWrapper from './components/layout/MaintenanceWrapper';
import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage'; 

// --- PUSAT KONTROL MAINTENANCE ---
const maintenanceConfig = {
  about: true,
};

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Timer untuk simulasi loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  // Tampilkan loading screen jika state `loading` masih true
  if (loading) {
    return <LoadingScreen />;
  }

  // Setelah loading selesai, tampilkan aplikasi dengan router
  return (
    <Router>
      <div className="relative font-inter">
        <AnimatedBackground />
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

          {/* Rute "Catch-all" untuk halaman Not Found */}
          {/* BARIS INI DITAMBAHKAN DI PALING BAWAH */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
