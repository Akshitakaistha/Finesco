import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import MutualFundsPage from './pages/MutualFundsPage';
import BondsPage from './pages/BondsPage';
import PMSPage from './pages/PMSPage';
import InsurancePage from './pages/InsurancePage';
import TaxPlanningPage from './pages/TaxPlanningPage';
import RetirementPage from './pages/RetirementPage';
import FooterSection from './components/FooterSection';
import LoansPage from './pages/LoansPage';
import AIFPage from './pages/AIFPage';
import GoldSilverPage from './pages/GoldSilverPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/mutual-funds" element={<MutualFundsPage />} />
          <Route path="/bonds" element={<BondsPage />} />
          <Route path="/pms" element={<PMSPage />} />
          <Route path="/insurance" element={<InsurancePage />} />
          <Route path="/tax-planning" element={<TaxPlanningPage />} />
          <Route path="/" element={<RetirementPage />} />
          <Route path="/loans" element={<LoansPage />} />
          <Route path="/aif" element={<AIFPage />} />
          <Route path="/gold-silver" element={<GoldSilverPage />} />
        </Routes>
        <FooterSection />
      </div>
    </Router>
  );
}

export default App