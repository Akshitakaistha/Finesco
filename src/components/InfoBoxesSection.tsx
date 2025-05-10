import React from 'react';
import { TrendingUp, BarChart2, Briefcase, Database } from 'lucide-react';

const infoBoxes = [
  {
    title: 'Retail Investment Boom',
    description: 'Growing interest in financial markets from individual investors worldwide.',
    icon: <TrendingUp size={36} className="text-primary-500" />,
  },
  {
    title: 'Passive Investing Surge',
    description: 'Increasing adoption of index funds and ETFs for long-term wealth creation.',
    icon: <BarChart2 size={36} className="text-primary-500" />,
  },
  {
    title: 'Alternative Assets Popularity',
    description: 'Rising interest in private equity, real estate, and other non-traditional investments.',
    icon: <Briefcase size={36} className="text-primary-500" />,
  },
  {
    title: 'Digital Lending & Fintech Rise',
    description: 'Transformation of lending ecosystem through technology and innovation.',
    icon: <Database size={36} className="text-primary-500" />,
  },
];

const InfoBoxesSection: React.FC = () => {
  return (
    <section id="info-boxes" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {infoBoxes.map((box, index) => (
            <div 
              key={index} 
              className="card p-6 border-t-4 border-primary-500 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4">
                {box.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{box.title}</h3>
              <p className="text-gray-600">{box.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfoBoxesSection;