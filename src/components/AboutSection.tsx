import React from 'react';
import { CheckCircle } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container-custom">
        <div className="section-title">
          <h2>About Finesco</h2>
          <p>Understanding our mission and expertise in financial services and training</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <h3 className="text-2xl font-bold mb-4">Empowering Financial Growth & Learning</h3>
            <p className="mb-6 text-gray-600">
              At Finesco, our mission is to simplify finance and make growth accessible to everyone. We believe in 
              providing professional financial services and education that empowers individuals and organizations 
              to achieve their financial goals.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary-500 mt-0.5 mr-2 flex-shrink-0" />
                <p>Tailored investment services that match your financial goals and risk tolerance</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary-500 mt-0.5 mr-2 flex-shrink-0" />
                <p>Expert-led programs designed by industry professionals with decades of experience</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary-500 mt-0.5 mr-2 flex-shrink-0" />
                <p>Every decision driven by trust, transparency, and client success</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/7821740/pexels-photo-7821740.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
              alt="Financial professionals" 
              className="rounded-lg shadow-lg object-cover h-full w-full"
            />
            <div className="absolute -bottom-6 -left-6 bg-primary-500 text-white p-6 rounded-lg shadow-lg hidden md:block">
              <p className="font-bold text-xl">15+ Years</p>
              <p>of Financial Excellence</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;