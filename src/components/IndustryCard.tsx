import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface IndustryCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  icon?: React.ReactNode;
}

const IndustryCard: React.FC<IndustryCardProps> = ({ 
  title, 
  description, 
  image, 
  link,
  icon
}) => {
  return (
    <div className="card group h-full flex flex-col">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        {icon && (
          <div className="absolute bottom-4 left-4 bg-white p-2 rounded-full">
            {icon}
          </div>
        )}
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-neutral-600 mb-6 flex-grow">{description}</p>
        <Link 
          to={link} 
          className="flex items-center text-primary-800 font-medium hover:text-accent-500 transition-colors group-hover:text-accent-500"
        >
          Learn more 
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
};

export default IndustryCard;