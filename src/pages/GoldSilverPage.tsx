import React from 'react';
import { ChevronRight, Gem, Shield, PiggyBank, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const GoldSilverPage: React.FC = () => (
  <div>
    <div className="relative bg-primary-600 text-white py-24">
      <div className="absolute inset-0 bg-gradient-to-r from-primary-700 to-primary-500"></div>
      <div className="container-custom relative z-10">
        <div className="flex items-center text-sm mb-4">
          <Link to="/" className="hover:text-primary-100">Home</Link>
          <ChevronRight size={16} className="mx-2" />
          <span>Products</span>
          <ChevronRight size={16} className="mx-2" />
          <span>Gold & Silver</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Gold & Silver Investments</h1>
        <p className="text-xl md:text-2xl text-primary-100 max-w-3xl">Timeless assets offering stability, security, and inflation protection.</p>
      </div>
    </div>

    <div className="container-custom py-16">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          <h2 className="text-3xl font-bold mb-6">Why Invest in Gold and Silver?</h2>
          <p className="text-gray-600 mb-8">Precious metals have served as safe-haven assets for centuries, maintaining value even in uncertain times.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="card p-6">
              <Gem className="w-12 h-12 text-primary-500 mb-4" />
              <h3 className="text-xl font-bold mb-3">Tangible Value</h3>
              <p className="text-gray-600">Physical assets with intrinsic worth and global recognition.</p>
            </div>
            <div className="card p-6">
              <Shield className="w-12 h-12 text-primary-500 mb-4" />
              <h3 className="text-xl font-bold mb-3">Crisis Hedge</h3>
              <p className="text-gray-600">Protect your wealth during economic instability and inflation.</p>
            </div>
            <div className="card p-6">
              <PiggyBank className="w-12 h-12 text-primary-500 mb-4" />
              <h3 className="text-xl font-bold mb-3">Wealth Preservation</h3>
              <p className="text-gray-600">Maintain purchasing power over time through stable asset classes.</p>
            </div>
            <div className="card p-6">
              <TrendingUp className="w-12 h-12 text-primary-500 mb-4" />
              <h3 className="text-xl font-bold mb-3">Liquidity</h3>
              <p className="text-gray-600">Easily buy or sell in markets globally with minimal friction.</p>
            </div>
          </div>
        </div>
        <div className="lg:col-span-1">
          <div className="card p-6 mb-8">
            <h3 className="text-xl font-bold mb-4">Start Investing in Metals</h3>
            <p className="text-gray-600 mb-6">Diversify your portfolio with gold and silver for long-term resilience.</p>
            <a href="https://calendly.com/bavneet-taneja/30min" className="btn btn-primary w-full">Get Started</a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default GoldSilverPage;
