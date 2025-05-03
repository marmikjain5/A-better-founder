import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SolutionsModal from './SolutionsModal';

interface IndustrySectionProps {
  title: string;
  subtitle: string;
  content: string;
  image: string;
  buttonText?: string;
  buttonLink?: string;
  reversed?: boolean;
  industry: string;
  solutions: Array<{ title: string; description: string; }>;
}

const IndustrySection: React.FC<IndustrySectionProps> = ({
  title,
  subtitle,
  content,
  image,
  buttonText = "Learn more",
  reversed = false,
  industry,
  solutions
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="py-16">
      <div className="container-custom">
        <div className={`flex flex-col ${reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12`}>
          <div className="lg:w-1/2">
            <div className="h-full overflow-hidden rounded-lg shadow-lg">
              <img 
                src={image} 
                alt={title} 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="lg:w-1/2 flex flex-col justify-center">
            <div className="animate-slide-up">
              <h3 className="text-accent-500 font-medium mb-2">{subtitle}</h3>
              <h2 className="text-3xl font-bold mb-6">{title}</h2>
              
              <div className="prose max-w-none mb-8 text-neutral-700">
                <p>{content}</p>
              </div>
              
              <button 
                onClick={() => setIsModalOpen(true)}
                className="btn-primary inline-flex items-center"
              >
                {buttonText}
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <SolutionsModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        solutions={solutions}
        industry={industry}
      />
    </div>
  );
};

export default IndustrySection;