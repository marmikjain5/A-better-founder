import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import BankingPage from './pages/BankingPage';
import IndustrialPage from './pages/IndustrialPage';
import FmcgPage from './pages/FmcgPage';
import FoodPage from './pages/FoodPage';
import ClothingPage from './pages/ClothingPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow pt-16">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/banking" element={<BankingPage />} />
            <Route path="/industrial" element={<IndustrialPage />} />
            <Route path="/fmcg" element={<FmcgPage />} />
            <Route path="/food" element={<FoodPage />} />
            <Route path="/clothing" element={<ClothingPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;