import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  title: string;
  subtitle: string;
  background?: string;
  showButtons?: boolean;
  buttons?: {
    primary?: {
      text: string;
      link: string;
    };
    secondary?: {
      text: string;
      link: string;
    };
  };
}

const Hero: React.FC<HeroProps> = ({ 
  title, 
  subtitle, 
  background = "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", 
  showButtons = true,
  buttons = {
    primary: {
      text: "Get Started",
      link: "/contact"
    },
    secondary: {
      text: "Learn More",
      link: "#about"
    }
  }
}) => {
  return (
    <div className="relative pt-16 overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ 
          backgroundImage: `url(${background})`,
          filter: 'brightness(0.3)'
        }}
      ></div>
      <div className="relative min-h-[70vh] flex items-center">
        <div className="container-custom">
          <div className="max-w-2xl animate-fade-in">
            <h1 className="text-white mb-6 leading-tight">{title}</h1>
            <p className="text-xl text-neutral-100 mb-8">{subtitle}</p>
            
            {showButtons && (
              <div className="flex flex-col sm:flex-row gap-4">
                {buttons.primary && (
                  <Link to={buttons.primary.link} className="btn-accent">
                    {buttons.primary.text}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                )}
                
                {buttons.secondary && (
                  <Link to={buttons.secondary.link} className="btn-outline border-white text-white hover:bg-white/10">
                    {buttons.secondary.text}
                  </Link>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;