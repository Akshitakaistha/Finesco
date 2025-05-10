// import React, { useState, useEffect } from 'react';
// import { Menu, X } from 'lucide-react';
// import { Link, useLocation } from 'react-router-dom';

// const navLinks = [
//   { name: 'Home', href: '/' },
//   { name: 'About Us', href: '#about' },
//   { name: 'Products', href: '#products' },
//   { name: 'Industrial Trainings', href: '#trainings' },
//   { name: 'Contact Us', href: '#contact' },
// ];

// const Navbar: React.FC = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const location = useLocation();

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 50) {
//         setScrolled(true);
//       } else {
//         setScrolled(false);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   const isHomePage = location.pathname === '/';
//   const isDarkBackground = isHomePage && !scrolled;

//   return (
//     <nav 
//       className={`fixed w-full z-50 transition-all duration-300 ${
//         scrolled || !isHomePage ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
//       }`}
//     >
//       <div className="container-custom">
//         <div className="flex items-center justify-between">
//           <Link to="/" className="flex items-center">
//             <span className={`text-2xl font-bold font-heading ${isDarkBackground ? 'text-white' : 'text-primary-600'}`}>
//               Finesco
//             </span>
//           </Link>

//           {/* Desktop menu */}
//           <div className="hidden md:flex space-x-8">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.name}
//                 to={link.href}
//                 className={`font-medium hover:text-primary-500 transition-colors ${
//                   isDarkBackground ? 'text-white' : 'text-gray-700'
//                 }`}
//               >
//                 {link.name}
//               </Link>
//             ))}
//           </div>

//           {/* Mobile menu button */}
//           <div className="md:hidden">
//             <button
//               onClick={toggleMenu}
//               className={`${isDarkBackground ? 'text-white' : 'text-gray-700'} p-2`}
//               aria-label="Toggle menu"
//             >
//               {isOpen ? <X size={24} /> : <Menu size={24} />}
//             </button>
//           </div>
//         </div>

//         {/* Mobile menu */}
//         {isOpen && (
//           <div className="md:hidden bg-white mt-4 rounded-lg shadow-md py-4 px-2 animate-fade-in">
//             <div className="flex flex-col space-y-3">
//               {navLinks.map((link) => (
//                 <Link
//                   key={link.name}
//                   to={link.href}
//                   className="text-gray-700 font-medium px-4 py-2 hover:bg-gray-50 rounded-md"
//                   onClick={() => setIsOpen(false)}
//                 >
//                   {link.name}
//                 </Link>
//               ))}
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '#about' },
  { name: 'Products', href: '#products' },
  { name: 'Industrial Trainings', href: '#trainings' },
  { name: 'Contact Us', href: '#contact' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const isHomePage = location.pathname === '/';
  const isDarkBackground = isHomePage && !scrolled;

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false);
      }
    }
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled || !isHomePage ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <span className={`text-2xl font-bold font-heading ${isDarkBackground ? 'text-white' : 'text-primary-600'}`}>
              Finesco
            </span>
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`font-medium hover:text-primary-500 transition-colors ${
                  isDarkBackground ? 'text-white' : 'text-gray-700'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className={`${isDarkBackground ? 'text-white' : 'text-gray-700'} p-2`}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden bg-white mt-4 rounded-lg shadow-md py-4 px-2 animate-fade-in">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-gray-700 font-medium px-4 py-2 hover:bg-gray-50 rounded-md"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
