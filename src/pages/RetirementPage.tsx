import React from 'react';
import { ChevronRight, Clock, Coins, LineChart, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const RetirementPage: React.FC = () => {
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
            <span>Retirement Planning</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Retirement Planning</h1>
          <p className="text-xl md:text-2xl text-primary-100 max-w-3xl">
            Secure your golden years with our comprehensive retirement solutions
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold mb-6">Plan Your Perfect Retirement</h2>
            <p className="text-gray-600 mb-8">
              Our retirement planning services help you build a secure financial future. We create personalized strategies that ensure you maintain your lifestyle and achieve your retirement goals with confidence.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="card p-6">
                <Clock className="w-12 h-12 text-primary-500 mb-4" />
                <h3 className="text-xl font-bold mb-3">Early Planning</h3>
                <p className="text-gray-600">
                  Start early to maximize the power of compounding and build a substantial corpus.
                </p>
              </div>
              <div className="card p-6">
                <Coins className="w-12 h-12 text-primary-500 mb-4" />
                <h3 className="text-xl font-bold mb-3">Regular Income</h3>
                <p className="text-gray-600">
                  Ensure steady post-retirement income through strategic investments.
                </p>
              </div>
              <div className="card p-6">
                <LineChart className="w-12 h-12 text-primary-500 mb-4" />
                <h3 className="text-xl font-bold mb-3">Wealth Growth</h3>
                <p className="text-gray-600">
                  Grow your retirement corpus through diversified investment options.
                </p>
              </div>
              <div className="card p-6">
                <ShieldCheck className="w-12 h-12 text-primary-500 mb-4" />
                <h3 className="text-xl font-bold mb-3">Financial Security</h3>
                <p className="text-gray-600">
                  Protect your savings with risk-managed investment strategies.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold mb-6">Retirement Solutions</h2>
            <div className="space-y-6">
              <div className="card p-6">
                <h3 className="text-xl font-bold mb-3">Pension Plans</h3>
                <p className="text-gray-600">
                  Regular income through annuity and pension schemes for a comfortable retirement.
                </p>
              </div>
              <div className="card p-6">
                <h3 className="text-xl font-bold mb-3">Retirement Funds</h3>
                <p className="text-gray-600">
                  Specialized mutual funds designed for long-term retirement savings.
                </p>
              </div>
              <div className="card p-6">
                <h3 className="text-xl font-bold mb-3">Senior Citizen Schemes</h3>
                <p className="text-gray-600">
                  Government-backed investment options with attractive returns for retirees.
                </p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="card p-6 mb-8">
              <h3 className="text-xl font-bold mb-4">Plan Your Retirement</h3>
              <p className="text-gray-600 mb-6">
                Let our experts help you create a retirement plan that ensures financial independence.
              </p>
              <a href="https://calendly.com/bavneet-taneja/30min" className="btn btn-primary w-full">Start Planning</a>
            </div>

            <div className="card p-6">
              <h3 className="text-xl font-bold mb-4">Key Features</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-primary-500 mt-1 flex-shrink-0" />
                  <span>Customized planning</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-primary-500 mt-1 flex-shrink-0" />
                  <span>Regular income options</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-primary-500 mt-1 flex-shrink-0" />
                  <span>Tax-efficient solutions</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-primary-500 mt-1 flex-shrink-0" />
                  <span>Inflation protection</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-primary-500 mt-1 flex-shrink-0" />
                  <span>Wealth preservation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RetirementPage;