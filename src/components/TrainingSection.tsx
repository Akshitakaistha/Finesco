import React from 'react';
import { Calendar, Clock, Download, ExternalLink } from 'lucide-react';

const trainings = [
  {
    name: 'Financial Analyst',
    duration: '3 months',
    lastDate: 'September 30, 2025',
    image: 'https://images.pexels.com/photos/7681324/pexels-photo-7681324.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    brochureLink: '#',
    detailsLink: 'http://139.59.22.82:7000/public-form/681efbcc0634c724e2c7fc38',
  },
  {
    name: 'Business Analyst & Data Science',
    duration: '4 months',
    lastDate: 'October 20, 2025',
    image: 'https://images.pexels.com/photos/6693655/pexels-photo-6693655.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    brochureLink: '#',
    detailsLink: 'http://139.59.22.82:7000/public-form/681efbcc0634c724e2c7fc38',
  },
  {
    name: 'Equity & Derivative Markets',
    duration: '2 months',
    lastDate: 'November 5, 2025',
    image: 'https://images.pexels.com/photos/210607/pexels-photo-210607.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    brochureLink: '#',
    detailsLink: 'http://139.59.22.82:7000/public-form/681efbcc0634c724e2c7fc38',
  },
  {
    name: 'Financial Markets',
    duration: '3 months',
    lastDate: 'October 10, 2025',
    image: 'https://images.pexels.com/photos/4386373/pexels-photo-4386373.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    brochureLink: '#',
    detailsLink: 'http://139.59.22.82:7000/public-form/681efbcc0634c724e2c7fc38',
  },
  {
    name: 'Business Analyst',
    duration: '3 months',
    lastDate: 'September 25, 2025',
    image: 'https://images.pexels.com/photos/7567434/pexels-photo-7567434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    brochureLink: '#',
    detailsLink: 'http://139.59.22.82:7000/public-form/681efbcc0634c724e2c7fc38',
  },
  {
    name: 'Data Science',
    duration: '6 months',
    lastDate: 'December 1, 2025',
    image: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    brochureLink: '#',
    detailsLink: 'http://139.59.22.82:7000/public-form/681efbcc0634c724e2c7fc38',
  },
];

const TrainingSection: React.FC = () => {
  return (
    <section id="trainings" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Industrial Trainings</h2>
          <p className="text-gray-600 mt-2">
            Comprehensive training programs designed by industry experts to enhance your financial skills
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {trainings.map((training, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl overflow-hidden flex flex-col transition-transform hover:scale-[1.01] duration-300"
            >
              <div className="relative h-48">
                <img
                  src={training.image}
                  alt={training.name}
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-3 py-1 rounded-full shadow">
                  Featured
                </span>
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-lg font-semibold mb-3">{training.name}</h3>

                <div className="text-sm text-gray-700 flex flex-col gap-2 mb-4 flex-grow">
                  <div className="flex items-center">
                    <Clock size={16} className="mr-2" />
                    Duration: {training.duration}
                  </div>
                  <div className="flex items-center">
                    <Calendar size={16} className="mr-2" />
                    Last Date: {training.lastDate}
                  </div>
                </div>

                <div className="flex gap-2 mt-auto">
                  <a
                    href={training.brochureLink}
                    className="flex-1 text-sm flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-800 py-2 px-3 rounded"
                  >
                    <Download size={16} className="mr-1" /> Brochure
                  </a>
                  <a
                    href={training.detailsLink}
                    className="flex-1 text-sm flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white py-2 px-3 rounded"
                  >
                    <ExternalLink size={16} className="mr-1" /> Details
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrainingSection;
