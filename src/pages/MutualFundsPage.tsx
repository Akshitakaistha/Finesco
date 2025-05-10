import React from 'react';
import { ChevronRight, TrendingUp, Shield, BarChart2, PieChart } from 'lucide-react';
import { Link } from 'react-router-dom';

const MutualFundsPage: React.FC = () => {
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
            <span>Mutual Funds</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Mutual Funds</h1>
          <p className="text-xl md:text-2xl text-primary-100 max-w-3xl">
            Professional investment management and diversification for long-term wealth creation
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold mb-6">Why Choose Our Mutual Fund Services?</h2>
            <p className="text-gray-600 mb-8">
              Our mutual fund services provide a professionally managed investment solution that pools money from multiple investors to purchase a diversified portfolio of stocks, bonds, or other securities. This approach offers several key advantages for both new and experienced investors.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="card p-6">
                <TrendingUp className="w-12 h-12 text-primary-500 mb-4" />
                <h3 className="text-xl font-bold mb-3">Professional Management</h3>
                <p className="text-gray-600">
                  Expert fund managers make informed investment decisions based on thorough research and market analysis.
                </p>
              </div>
              <div className="card p-6">
                <Shield className="w-12 h-12 text-primary-500 mb-4" />
                <h3 className="text-xl font-bold mb-3">Risk Management</h3>
                <p className="text-gray-600">
                  Diversification across multiple securities helps reduce investment risk.
                </p>
              </div>
              <div className="card p-6">
                <BarChart2 className="w-12 h-12 text-primary-500 mb-4" />
                <h3 className="text-xl font-bold mb-3">Regular Monitoring</h3>
                <p className="text-gray-600">
                  Continuous portfolio tracking and rebalancing to maintain optimal performance.
                </p>
              </div>
              <div className="card p-6">
                <PieChart className="w-12 h-12 text-primary-500 mb-4" />
                <h3 className="text-xl font-bold mb-3">Diversification</h3>
                <p className="text-gray-600">
                  Access to a wide range of securities and asset classes through a single investment.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold mb-6">Our Mutual Fund Categories</h2>
            <div className="space-y-6">
              <div className="card p-6">
                <h3 className="text-xl font-bold mb-3">Equity Funds</h3>
                <p className="text-gray-600">
                  Investment primarily in stocks for potential long-term capital appreciation. Suitable for investors with a higher risk appetite and longer investment horizon.
                </p>
              </div>
              <div className="card p-6">
                <h3 className="text-xl font-bold mb-3">Debt Funds</h3>
                <p className="text-gray-600">
                  Investment in fixed-income securities for regular income and capital preservation. Ideal for conservative investors seeking stable returns.
                </p>
              </div>
              <div className="card p-6">
                <h3 className="text-xl font-bold mb-3">Hybrid Funds</h3>
                <p className="text-gray-600">
                  Balanced mix of equity and debt investments for moderate returns with reduced risk. Perfect for investors seeking growth with stability.
                </p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="card p-6 mb-8">
              <h3 className="text-xl font-bold mb-4">Start Investing Today</h3>
              <p className="text-gray-600 mb-6">
                Ready to begin your investment journey? Our expert team is here to help you choose the right mutual funds based on your goals.
              </p>
              <a href="https://calendly.com/bavneet-taneja/30min" className="btn btn-primary w-full">Schedule a Consultation</a>
            </div>

            <div className="card p-6">
              <h3 className="text-xl font-bold mb-4">Key Benefits</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-primary-500 mt-1 flex-shrink-0" />
                  <span>Low minimum investment amount</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-primary-500 mt-1 flex-shrink-0" />
                  <span>High liquidity and flexibility</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-primary-500 mt-1 flex-shrink-0" />
                  <span>Tax-efficient investment options</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-primary-500 mt-1 flex-shrink-0" />
                  <span>Transparent fee structure</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-primary-500 mt-1 flex-shrink-0" />
                  <span>Regular portfolio updates</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MutualFundsPage;