import React from 'react';
import { ChevronRight, Wallet, Lock, LineChart, BarChart } from 'lucide-react';
import { Link } from 'react-router-dom';

const BondsPage: React.FC = () => {
  return (
    <div>
      {/* Banner Section */}
      <div className="relative bg-primary-600 text-white py-24">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-700 to-primary-500"></div>
        <div className="container-custom relative z-10">
          <div className="flex items-center text-sm mb-4">
            <Link to="/" className="hover:text-primary-100">Home</Link>
            <ChevronRight size={16} className="mx-2" />
            <span>Products</span>
            <ChevronRight size={16} className="mx-2" />
            <span>Bonds</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Bonds</h1>
          <p className="text-xl md:text-2xl text-primary-100 max-w-3xl">
            Secure fixed-income investments for stable returns and capital preservation
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold mb-6">Why Invest in Bonds?</h2>
            <p className="text-gray-600 mb-8">
              Bonds are fixed-income instruments that provide regular interest payments and return of principal at maturity. They offer a reliable source of income and play a crucial role in portfolio diversification.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="card p-6">
                <Wallet className="w-12 h-12 text-primary-500 mb-4" />
                <h3 className="text-xl font-bold mb-3">Regular Income</h3>
                <p className="text-gray-600">
                  Receive predictable interest payments at fixed intervals throughout the bond's term.
                </p>
              </div>
              <div className="card p-6">
                <Lock className="w-12 h-12 text-primary-500 mb-4" />
                <h3 className="text-xl font-bold mb-3">Capital Protection</h3>
                <p className="text-gray-600">
                  Get your principal amount back at maturity, providing security for your investment.
                </p>
              </div>
              <div className="card p-6">
                <LineChart className="w-12 h-12 text-primary-500 mb-4" />
                <h3 className="text-xl font-bold mb-3">Steady Returns</h3>
                <p className="text-gray-600">
                  Enjoy stable returns regardless of market volatility.
                </p>
              </div>
              <div className="card p-6">
                <BarChart className="w-12 h-12 text-primary-500 mb-4" />
                <h3 className="text-xl font-bold mb-3">Portfolio Balance</h3>
                <p className="text-gray-600">
                  Balance your investment portfolio with low-risk fixed-income securities.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold mb-6">Types of Bonds We Offer</h2>
            <div className="space-y-6">
              <div className="card p-6">
                <h3 className="text-xl font-bold mb-3">Government Bonds</h3>
                <p className="text-gray-600">
                  Sovereign bonds backed by the government, offering the highest level of security and tax benefits.
                </p>
              </div>
              <div className="card p-6">
                <h3 className="text-xl font-bold mb-3">Corporate Bonds</h3>
                <p className="text-gray-600">
                  Debt instruments issued by private companies, offering higher yields with moderate risk.
                </p>
              </div>
              <div className="card p-6">
                <h3 className="text-xl font-bold mb-3">Tax-Free Bonds</h3>
                <p className="text-gray-600">
                  Special bonds offering tax-exempt returns, ideal for investors in higher tax brackets.
                </p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="card p-6 mb-8">
              <h3 className="text-xl font-bold mb-4">Explore Bond Investments</h3>
              <p className="text-gray-600 mb-6">
                Let our experts help you build a bond portfolio that matches your income needs and risk profile.
              </p>
              <a href="https://calendly.com/bavneet-taneja/30min" className="btn btn-primary w-full">Get Started</a>
            </div>

            <div className="card p-6">
              <h3 className="text-xl font-bold mb-4">Key Features</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-primary-500 mt-1 flex-shrink-0" />
                  <span>Fixed interest rates</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-primary-500 mt-1 flex-shrink-0" />
                  <span>Guaranteed returns</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-primary-500 mt-1 flex-shrink-0" />
                  <span>Multiple investment options</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-primary-500 mt-1 flex-shrink-0" />
                  <span>Easy liquidation process</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-primary-500 mt-1 flex-shrink-0" />
                  <span>Professional guidance</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BondsPage;