import React from 'react';
import { ChevronRight, TrendingUp, PieChart, ShieldCheck, BarChart } from 'lucide-react';
import { Link } from 'react-router-dom';

const AIFPage: React.FC = () => (
  <div>
    <div className="relative bg-primary-600 text-white py-24">
      <div className="absolute inset-0 bg-gradient-to-r from-primary-700 to-primary-500"></div>
      <div className="container-custom relative z-10">
        <div className="flex items-center text-sm mb-4">
          <Link to="/" className="hover:text-primary-100">Home</Link>
          <ChevronRight size={16} className="mx-2" />
          <span>Products</span>
          <ChevronRight size={16} className="mx-2" />
          <span>AIF</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">AIF (Alternative Investment Funds)</h1>
        <p className="text-xl md:text-2xl text-primary-100 max-w-3xl">Exclusive investment opportunities beyond traditional asset classes.</p>
      </div>
    </div>

    <div className="container-custom py-16">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          <h2 className="text-3xl font-bold mb-6">Why Consider AIFs?</h2>
          <p className="text-gray-600 mb-8">AIFs offer diversified exposure to private equity, hedge funds, and other non-traditional investment instruments.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="card p-6">
              <TrendingUp className="w-12 h-12 text-primary-500 mb-4" />
              <h3 className="text-xl font-bold mb-3">High Growth Potential</h3>
              <p className="text-gray-600">Participate in early-stage businesses, private markets, and niche sectors.</p>
            </div>
            <div className="card p-6">
              <PieChart className="w-12 h-12 text-primary-500 mb-4" />
              <h3 className="text-xl font-bold mb-3">Portfolio Diversification</h3>
              <p className="text-gray-600">Reduce market correlation with unique asset exposure.</p>
            </div>
            <div className="card p-6">
              <ShieldCheck className="w-12 h-12 text-primary-500 mb-4" />
              <h3 className="text-xl font-bold mb-3">Professionally Managed</h3>
              <p className="text-gray-600">Access expert-managed strategies with strict regulatory oversight.</p>
            </div>
            <div className="card p-6">
              <BarChart className="w-12 h-12 text-primary-500 mb-4" />
              <h3 className="text-xl font-bold mb-3">Customized Strategies</h3>
              <p className="text-gray-600">Tailored funds focused on specific themes or sectors.</p>
            </div>
          </div>
        </div>
        <div className="lg:col-span-1">
          <div className="card p-6 mb-8">
            <h3 className="text-xl font-bold mb-4">Start Investing in AIFs</h3>
            <p className="text-gray-600 mb-6">Join high-net-worth individuals accessing specialized investment vehicles.</p>
            <a href="https://calendly.com/bavneet-taneja/30min" className="btn btn-primary w-full">Explore AIFs</a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default AIFPage;
