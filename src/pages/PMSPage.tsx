import React from 'react';
import { ChevronRight, Target, Users, Briefcase, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';

const PMSPage: React.FC = () => {
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
            <span>Portfolio Management Services</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Portfolio Management Services</h1>
          <p className="text-xl md:text-2xl text-primary-100 max-w-3xl">
            Personalized investment strategies for high net worth individuals
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold mb-6">Expert Portfolio Management</h2>
            <p className="text-gray-600 mb-8">
              Our Portfolio Management Services (PMS) offer personalized investment solutions tailored to your specific financial goals, risk tolerance, and investment preferences. Our experienced team of portfolio managers works dedicatedly to maximize your returns while managing risks effectively.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="card p-6">
                <Target className="w-12 h-12 text-primary-500 mb-4" />
                <h3 className="text-xl font-bold mb-3">Customized Strategy</h3>
                <p className="text-gray-600">
                  Investment approach tailored to your unique financial goals and risk profile.
                </p>
              </div>
              <div className="card p-6">
                <Users className="w-12 h-12 text-primary-500 mb-4" />
                <h3 className="text-xl font-bold mb-3">Dedicated Team</h3>
                <p className="text-gray-600">
                  Expert portfolio managers providing personalized attention to your investments.
                </p>
              </div>
              <div className="card p-6">
                <Briefcase className="w-12 h-12 text-primary-500 mb-4" />
                <h3 className="text-xl font-bold mb-3">Active Management</h3>
                <p className="text-gray-600">
                  Continuous monitoring and rebalancing of your portfolio for optimal performance.
                </p>
              </div>
              <div className="card p-6">
                <Settings className="w-12 h-12 text-primary-500 mb-4" />
                <h3 className="text-xl font-bold mb-3">Flexible Solutions</h3>
                <p className="text-gray-600">
                  Multiple investment strategies to choose from based on your preferences.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold mb-6">Our PMS Strategies</h2>
            <div className="space-y-6">
              <div className="card p-6">
                <h3 className="text-xl font-bold mb-3">Large Cap Focus</h3>
                <p className="text-gray-600">
                  Investment in established companies with stable growth and strong market presence.
                </p>
              </div>
              <div className="card p-6">
                <h3 className="text-xl font-bold mb-3">Multi-Cap Growth</h3>
                <p className="text-gray-600">
                  Diversified portfolio across market capitalizations for balanced growth potential.
                </p>
              </div>
              <div className="card p-6">
                <h3 className="text-xl font-bold mb-3">Sector Specific</h3>
                <p className="text-gray-600">
                  Focused investment in specific sectors with high growth potential.
                </p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="card p-6 mb-8">
              <h3 className="text-xl font-bold mb-4">Start Your PMS Journey</h3>
              <p className="text-gray-600 mb-6">
                Let our expert team create a customized portfolio strategy aligned with your wealth goals.
              </p>
              <a href="https://calendly.com/bavneet-taneja/30min" className="btn btn-primary w-full">Schedule a Meeting</a>
            </div>

            <div className="card p-6">
              <h3 className="text-xl font-bold mb-4">PMS Advantages</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-primary-500 mt-1 flex-shrink-0" />
                  <span>Personalized attention</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-primary-500 mt-1 flex-shrink-0" />
                  <span>Professional management</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-primary-500 mt-1 flex-shrink-0" />
                  <span>Regular portfolio reviews</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-primary-500 mt-1 flex-shrink-0" />
                  <span>Transparent reporting</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-primary-500 mt-1 flex-shrink-0" />
                  <span>Risk management</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PMSPage;