import React from 'react';
import { ChevronRight, CreditCard, ShieldCheck, PiggyBank, BarChart } from 'lucide-react';
import { Link } from 'react-router-dom';

const LoansPage: React.FC = () => (
  <div>
    <div className="relative bg-primary-600 text-white py-24">
      <div className="absolute inset-0 bg-gradient-to-r from-primary-700 to-primary-500"></div>
      <div className="container-custom relative z-10">
        <div className="flex items-center text-sm mb-4">
          <Link to="/" className="hover:text-primary-100">Home</Link>
          <ChevronRight size={16} className="mx-2" />
          <span>Products</span>
          <ChevronRight size={16} className="mx-2" />
          <span>Loans</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Loans</h1>
        <p className="text-xl md:text-2xl text-primary-100 max-w-3xl">Tailored loan solutions for your personal and professional needs.</p>
      </div>
    </div>

    <div className="container-custom py-16">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          <h2 className="text-3xl font-bold mb-6">Why Choose Our Loan Services?</h2>
          <p className="text-gray-600 mb-8">We offer a wide range of loan products with competitive rates and flexible repayment options to help you meet your goals.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="card p-6">
              <CreditCard className="w-12 h-12 text-primary-500 mb-4" />
              <h3 className="text-xl font-bold mb-3">Instant Approvals</h3>
              <p className="text-gray-600">Quick and hassle-free loan approval process for eligible customers.</p>
            </div>
            <div className="card p-6">
              <ShieldCheck className="w-12 h-12 text-primary-500 mb-4" />
              <h3 className="text-xl font-bold mb-3">Secure Process</h3>
              <p className="text-gray-600">Fully secure documentation and processing for peace of mind.</p>
            </div>
            <div className="card p-6">
              <PiggyBank className="w-12 h-12 text-primary-500 mb-4" />
              <h3 className="text-xl font-bold mb-3">Flexible EMI Options</h3>
              <p className="text-gray-600">Choose from various repayment plans based on your convenience.</p>
            </div>
            <div className="card p-6">
              <BarChart className="w-12 h-12 text-primary-500 mb-4" />
              <h3 className="text-xl font-bold mb-3">Attractive Interest Rates</h3>
              <p className="text-gray-600">Enjoy low interest rates customized to your credit profile.</p>
            </div>
          </div>
        </div>
        <div className="lg:col-span-1">
          <div className="card p-6 mb-8">
            <h3 className="text-xl font-bold mb-4">Need a Loan?</h3>
            <p className="text-gray-600 mb-6">Apply now and get pre-approved in minutes with our expert loan advisors.</p>
            <a href="https://calendly.com/bavneet-taneja/30min" className="btn btn-primary w-full">Apply Now</a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default LoansPage;
