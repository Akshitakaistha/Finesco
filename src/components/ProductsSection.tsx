// import React from 'react';
// import { ArrowRight } from 'lucide-react';
// import { Link } from 'react-router-dom';

// const products = [
//   {
//     title: 'Mutual Funds',
//     description: 'Diversified investment solutions for long-term wealth creation with professional management.',
//     image: 'https://images.pexels.com/photos/534216/pexels-photo-534216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
//     link: '/mutual-funds'
//   },
//   {
//     title: 'Bonds',
//     description: 'Fixed income securities offering regular interest payments and capital preservation.',
//     image: 'https://images.pexels.com/photos/6694543/pexels-photo-6694543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
//     link: '/bonds'
//   },
//   {
//     title: 'PMS Services',
//     description: 'Customized portfolio management for high net worth individuals with focused strategies.',
//     image: 'https://images.pexels.com/photos/7621142/pexels-photo-7621142.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
//     link: '/pms'
//   },
//   {
//     title: 'Insurance Solutions',
//     description: 'Comprehensive protection plans for life, health, and assets with tax benefits.',
//     image: 'https://images.pexels.com/photos/7163953/pexels-photo-7163953.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
//     link: '/insurance'
//   },
//   {
//     title: 'Tax Planning',
//     description: 'Strategic approaches to minimize tax liability while maximizing wealth accumulation.',
//     image: 'https://images.pexels.com/photos/4386366/pexels-photo-4386366.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
//     link: '/tax-planning'
//   },
//   {
//     title: 'Retirement Planning',
//     description: 'Structured plans to ensure financial security and comfort during retirement years.',
//     image: 'https://images.pexels.com/photos/7876503/pexels-photo-7876503.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
//     link: '/retirement'
//   },
// ];

// const ProductsSection: React.FC = () => {
//   return (
//     <section id="products" className="section-padding bg-gray-50">
//       <div className="container-custom">
//         <div className="section-title">
//           <h2>Our Products</h2>
//           <p>Comprehensive financial solutions designed to meet your unique needs and goals</p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {products.map((product, index) => (
//             <div 
//               key={index} 
//               className="card group h-full flex flex-col animate-fade-in"
//               style={{ animationDelay: `${index * 0.1}s` }}
//             >
//               <div className="relative overflow-hidden h-56">
//                 <img 
//                   src={product.image} 
//                   alt={product.title} 
//                   className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//                 />
//               </div>
//               <div className="p-6 flex flex-col flex-grow">
//                 <h3 className="text-xl font-bold mb-2">{product.title}</h3>
//                 <p className="text-gray-600 mb-4 flex-grow">{product.description}</p>
//                 <Link 
//                   to={product.link}
//                   className="text-primary-600 font-medium flex items-center hover:text-primary-700 transition-colors"
//                 >
//                   Learn More <ArrowRight size={16} className="ml-1" />
//                 </Link>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProductsSection;

import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const products = [
  {
    title: 'Mutual Funds',
    description: 'Diversified investment solutions for long-term wealth creation with professional management.',
    image: 'https://images.pexels.com/photos/534216/pexels-photo-534216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    link: '/mutual-funds'
  },
  {
    title: 'Bonds',
    description: 'Fixed income securities offering regular interest payments and capital preservation.',
    image: 'https://images.pexels.com/photos/6694543/pexels-photo-6694543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    link: '/bonds'
  },
  {
    title: 'PMS Services',
    description: 'Customized portfolio management for high net worth individuals with focused strategies.',
    image: 'https://images.pexels.com/photos/7621142/pexels-photo-7621142.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    link: '/pms'
  },
  {
    title: 'Insurance Solutions',
    description: 'Comprehensive protection plans for life, health, and assets with tax benefits.',
    image: 'https://images.pexels.com/photos/7163953/pexels-photo-7163953.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    link: '/insurance'
  },
  {
    title: 'Tax Planning',
    description: 'Strategic approaches to minimize tax liability while maximizing wealth accumulation.',
    image: 'https://images.pexels.com/photos/4386366/pexels-photo-4386366.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    link: '/tax-planning'
  },
  {
    title: 'Retirement Planning',
    description: 'Structured plans to ensure financial security and comfort during retirement years.',
    image: 'https://images.pexels.com/photos/7876503/pexels-photo-7876503.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    link: '/retirement'
  },
  {
    title: 'Loans',
    description: 'Flexible loan solutions for personal, business, and educational needs at competitive rates.',
    image: 'https://images.pexels.com/photos/4386374/pexels-photo-4386374.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    link: '/loans'
  },
  {
    title: 'AIF (Alternative Investment Funds)',
    description: 'Access niche investment opportunities with high-return potential through regulated AIFs.',
    image: 'https://images.pexels.com/photos/4386391/pexels-photo-4386391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    link: '/aif'
  },
  {
    title: 'Gold & Silver Investments',
    description: 'Invest in precious metals to hedge against inflation and preserve long-term value.',
    image: 'https://images.pexels.com/photos/342945/pexels-photo-342945.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    link: '/gold-silver'
  },
];

const ProductsSection: React.FC = () => {
  return (
    <section id="products" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="section-title">
          <h2>Our Products</h2>
          <p>Comprehensive financial solutions designed to meet your unique needs and goals</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div 
              key={index} 
              className="card group h-full flex flex-col animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden h-56">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-2">{product.title}</h3>
                <p className="text-gray-600 mb-1 flex-grow">{product.description}</p>
                <Link 
                  to={product.link}
                  className="text-primary-600 font-medium flex items-center hover:text-primary-700 transition-colors"
                >
                  Learn More <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
