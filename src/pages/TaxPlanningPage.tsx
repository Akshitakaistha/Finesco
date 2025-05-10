import React from 'react';
import { ChevronRight, Calculator, FileText, TrendingDown, PieChart } from 'lucide-react';
import { Link } from 'react-router-dom';

const TaxPlanningPage: React.FC = () => {
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
            <span>Tax Planning</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Tax Planning</h1>
          <p className="text-xl md:text-2xl text-primary-100 max-w-3xl">
            Strategic solutions to optimize your tax liability and maximize savings
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold mb-6">Comprehensive Tax Planning Services</h2>
            <p className="text-gray-600 mb-8">
              Our tax planning services help you navigate complex tax regulations and identify opportunities for tax savings. We develop personalized strategies to minimize your tax burden while ensuring compliance with all applicable laws.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="card p-6">
                <Calculator className="w-12 h-12 text-primary-500 mb-4" />
                <h3 className="text-xl font-bold mb-3">Tax Assessment</h3>
                <p className="text-gray-600">
                  Detailed analysis of your financial situation to identify tax-saving opportunities.
                </p>
              </div>
              <div className="card p-6">
                <FileText className="w-12 h-12 text-primary-500 mb-4" />
                <h3 className="text-xl font-bold mb-3">Compliance</h3>
                <p className="text-gray-600">
                  Ensure adherence to tax laws while maximizing available deductions.
                </p>
              </div>
              <div className="card p-6">
                <TrendingDown className="w-12 h-12 text-primary-500 mb-4" />
                <h3 className="text-xl font-bold mb-3">Tax Optimization</h3>
                <p className="text-gray-600">
                  Strategic planning to reduce tax liability through legal methods.
                </p>
              </div>
              <div className="card p-6">
                <PieChart className="w-12 h-12 text-primary-500 mb-4" />
                <h3 className="text-xl font-bold mb-3">Investment Planning</h3>
                <p className="text-gray-600">
                  Tax-efficient investment strategies to maximize after-tax returns.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold mb-6">Tax Planning Strategies</h2>
            <div className="space-y-6">
              <div className="card p-6">
                <h3 className="text-xl font-bold mb-3">Tax-Saving Investments</h3>
                <p className="text-gray-600">
                  Investment options under Section 80C and other tax-saving schemes.
                </p>
              </div>
              <div className="card p-6">
                <h3 className="text-xl font-bold mb-3">Income Structuring</h3>
                <p className="text-gray-600">
                  Optimize your income structure to minimize tax impact while maximizing take-home earnings.
                </p>
              </div>
              <div className="card p-6">
                <h3 className="text-xl font-bold mb-3">Estate Planning</h3>
                <p className="text-gray-600">
                  Strategic planning for wealth transfer with minimal tax implications.
                </p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="card p-6 mb-8">
              <h3 className="text-xl font-bold mb-4">Start Tax Planning</h3>
              <p className="text-gray-600 mb-6">
                Get expert guidance on optimizing your tax strategy and maximizing savings.
              </p>
              <a href="https://calendly.com/bavneet-taneja/30min" className="btn btn-primary w-full">Book a Consultation</a>
            </div>

            <div className="card p-6">
              <h3 className="text-xl font-bold mb-4">Key Benefits</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-primary-500 mt-1 flex-shrink-0" />
                  <span>Reduced tax liability</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-primary-500 mt-1 flex-shrink-0" />
                  <span>Legal compliance</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-primary-500 mt-1 flex-shrink-0" />
                  <span>Maximized deductions</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-primary-500 mt-1 flex-shrink-0" />
                  <span>Strategic investments</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-primary-500 mt-1 flex-shrink-0" />
                  <span>Expert guidance</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaxPlanningPage;