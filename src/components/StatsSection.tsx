import React from 'react';
import { Users, Database, BarChart, BookOpen } from 'lucide-react';

const stats = [
  {
    value: '130+',
    label: 'Crore Invested',
    icon: <Database className="h-10 w-10 text-white" />,
  },
  {
    value: '250+',
    label: 'Clients',
    icon: <Users className="h-10 w-10 text-white" />,
  },
  {
    value: '10+',
    label: 'Products',
    icon: <BarChart className="h-10 w-10 text-white" />,
  },
  {
    value: '6+',
    label: 'Training Programs',
    icon: <BookOpen className="h-10 w-10 text-white" />,
  },
];

const StatsSection: React.FC = () => {
  return (
    <section className="py-16 bg-primary-600 text-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center p-6 animate-fade-in bg-white "
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4 bg-primary-700 p-4 rounded-full">
                {stat.icon}
              </div>
              <h3 className="text-4xl font-bold mb-2">{stat.value}</h3>
              <p className="text-lg text-indigo-700">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;