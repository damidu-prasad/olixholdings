import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { DataProvider, useData } from './context/DataContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AIChatbot from './components/AIChatbot';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import ProductsPage from './pages/ProductsPage';
import CareersPage from './pages/CareersPage';
import ContactPage from './pages/ContactPage';
import BookPage from './pages/BookPage';
import AdminLogin from './admin/AdminLogin';
import AdminLayout from './admin/AdminLayout';
import Dashboard from './admin/pages/Dashboard';
import HeroEditor from './admin/pages/HeroEditor';
import StatsEditor from './admin/pages/StatsEditor';
import ServicesManager from './admin/pages/ServicesManager';
import ProductsManager from './admin/pages/ProductsManager';
import IndustriesManager from './admin/pages/IndustriesManager';
import ReviewsManager from './admin/pages/ReviewsManager';
import JobsManager from './admin/pages/JobsManager';
import BookingsManager from './admin/pages/BookingsManager';
import ContactsManager from './admin/pages/ContactsManager';
import './App.css';
import './admin/admin.css';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
};

const AdminGuard = ({ children }) => {
  const { isAdmin } = useData();
  return isAdmin ? children : <AdminLogin />;
};

function AppRoutes() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');

  useEffect(() => {
    document.title = isAdminRoute
      ? 'Admin Panel — Olix Holdings'
      : 'Olix Holdings | Next-Gen AI Automation Agency';
  }, [isAdminRoute]);

  return (
    <>
      <ScrollToTop />
      {isAdminRoute ? (
        <Routes>
          <Route path="/admin" element={<AdminGuard><AdminLayout /></AdminGuard>}>
            <Route index element={<Dashboard />} />
            <Route path="hero" element={<HeroEditor />} />
            <Route path="stats" element={<StatsEditor />} />
            <Route path="services" element={<ServicesManager />} />
            <Route path="products" element={<ProductsManager />} />
            <Route path="industries" element={<IndustriesManager />} />
            <Route path="reviews" element={<ReviewsManager />} />
            <Route path="jobs" element={<JobsManager />} />
            <Route path="bookings" element={<BookingsManager />} />
            <Route path="contacts" element={<ContactsManager />} />
          </Route>
        </Routes>
      ) : (
        <div className="app-container">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/careers" element={<CareersPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/book" element={<BookPage />} />
            </Routes>
          </main>
          <Footer />
          <AIChatbot />
        </div>
      )}
    </>
  );
}

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
