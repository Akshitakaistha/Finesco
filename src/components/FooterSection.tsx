import React from 'react';

const FooterSection: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="animate-fade-in">
            <h4 className="text-xl font-bold mb-4 text-white">Finesco</h4>
            <p className="mb-4 text-gray-400">
              Designing the future of finance and learning with the power of our team. We aim to simplify finance and make growth accessible to everyone.
            </p>
            <p className="text-gray-400">
              © {new Date().getFullYear()} Finesco. All rights reserved.
            </p>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <h4 className="text-xl font-bold mb-4 text-white">Useful Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#products" className="text-gray-400 hover:text-white transition-colors">Products</a></li>
              <li><a href="#trainings" className="text-gray-400 hover:text-white transition-colors">Industrial Trainings</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</a></li>
              {/* <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li> */}
            </ul>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h4 className="text-xl font-bold mb-4 text-white">Our Products</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Mutual Funds</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Bonds</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">PMS Services</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Insurance Solutions</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Tax Planning</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Retirement Planning</a></li>
            </ul>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <h4 className="text-xl font-bold mb-4 text-white">Subscribe Newsletter</h4>
            <p className="mb-4 text-gray-400">
              Stay updated with our latest news and offers by subscribing to our newsletter.
            </p>
            <form className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder="Your Email"
                className="px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
      
      <div className="bg-gray-950 py-4">
        <div className="container-custom text-center text-gray-500">
          <p>© {new Date().getFullYear()} Finesco. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;