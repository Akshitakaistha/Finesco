import React from 'react';
import { ChevronRight, Shield, Heart, Home, Umbrella } from 'lucide-react';
import { Link } from 'react-router-dom';

const InsurancePage: React.FC = () => {
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
            <span>Insurance Solutions</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Insurance Solutions</h1>
          <p className="text-xl md:text-2xl text-primary-100 max-w-3xl">
            Comprehensive protection plans for life, health, and assets
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold mb-6">Protecting What Matters Most</h2>
            <p className="text-gray-600 mb-8">
              Our insurance solutions provide comprehensive coverage to protect you, your loved ones, and your assets. We offer a range of insurance products designed to give you peace of mind and financial security.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="card p-6">
                <Shield className="w-12 h-12 text-primary-500 mb-4" />
                <h3 className="text-xl font-bold mb-3">Life Insurance</h3>
                <p className="text-gray-600">
                  Secure your family's financial future with comprehensive life coverage.
                </p>
              </div>
              <div className="card p-6">
                <Heart className="w-12 h-12 text-primary-500 mb-4" />
                <h3 className="text-xl font-bold mb-3">Health Insurance</h3>
                <p className="text-gray-600">
                  Get quality healthcare without worrying about the expenses.
                </p>
              </div>
              <div className="card p-6">
                <Home className="w-12 h-12 text-primary-500 mb-4" />
                <h3 className="text-xl font-bold mb-3">Property Insurance</h3>
                <p className="text-gray-600">
                  Protect your home and assets against unexpected events.
                </p>
              </div>
              <div className="card p-6">
                <Umbrella className="w-12 h-12 text-primary-500 mb-4" />
                <h3 className="text-xl font-bold mb-3">General Insurance</h3>
                <p className="text-gray-600">
                  Coverage for various risks with flexible policy options.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold mb-6">Insurance Products</h2>
            <div className="space-y-6">
              <div className="card p-6">
                <h3 className="text-xl font-bold mb-3">Term Life Insurance</h3>
                <p className="text-gray-600">
                  Pure life coverage at affordable premiums with high sum assured options.
                </p>
              </div>
              <div className="card p-6">
                <h3 className="text-xl font-bold mb-3">Health Insurance Plans</h3>
                <p className="text-gray-600">
                  Comprehensive health coverage including hospitalization, critical illness, and preventive care.
                </p>
              </div>
              <div className="card p-6">
                <h3 className="text-xl font-bold mb-3">Investment-Linked Insurance</h3>
                <p className="text-gray-600">
                  Combined benefits of insurance protection and investment growth potential.
                </p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="card p-6 mb-8">
              <h3 className="text-xl font-bold mb-4">Get Protected Today</h3>
              <p className="text-gray-600 mb-6">
                Speak with our insurance experts to find the right coverage for your needs.
              </p>
              <a href="https://calendly.com/bavneet-taneja/30min" className="btn btn-primary w-full">Request a Quote</a>
            </div>

            <div className="card p-6">
              <h3 className="text-xl font-bold mb-4">Insurance Benefits</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-primary-500 mt-1 flex-shrink-0" />
                  <span>Financial security</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-primary-500 mt-1 flex-shrink-0" />
                  <span>Tax benefits</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-primary-500 mt-1 flex-shrink-0" />
                  <span>Flexible coverage options</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-primary-500 mt-1 flex-shrink-0" />
                  <span>Easy claim process</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-primary-500 mt-1 flex-shrink-0" />
                  <span>24/7 support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InsurancePage;