import React from 'react';
import Hero from '../components/Hero';
import IndustrySection from '../components/IndustrySection';

import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';

const ClothingPage: React.FC = () => {
  const services = [
   "Making you a better founder",
    "Helping you to solve nation's problems",
    "Motivating you tu be a better entrpreneur",
    "Exporting strategies to boost economy",
    "Making India financially independent",
    "Going global in every aspect of business"
  ];

 const financialSolutions = [
    {
      title: "Sustainable fashion",
      description: <>
        <div className="mb-4">
         India can lead in affordable sustainable fashion using recycled fabrics or upcycled designs.
          Creating biodegradable or minimal-waste clothing lines.
          Impact: Makes India a leader in ethical fashion and green innovation.
        </div>
      
      </>
    },
    {
      title: "Digital-First Approach",
      description: "Using AI for fashion trends, fit-tech, or personalized shopping.AR/VR for virtual try-ons; blockchain for traceable supply chains."
    },
    {
      title: "Export and International Trade",
      description: " Participating in global fashion weeks and international marketplaces (e.g., Etsy, Amazon Global). Exporting ready-made garments and designerwear to markets like the US, EU, and Middle East. Impact: Brings foreign exchange and enhances trade balances."
    },
    {
      title: "Encouraging Domestic Manufacturing",
      description: "Supports the Make in India initiative.Reduces dependence on imported clothing and raw materials. Impact: Strengthens domestic supply chains and industrial self-reliance."
    }
      
  ];


  return (
    <div className="page-transition">
      <Hero 
        title="Clothing & Apparel Industry Expertise"
        subtitle="Specialized guidance for fashion entrepreneurs and apparel brands"
        background="https://media.fashionnetwork.com/cdn-cgi/image/fit=contain,width=1000,height=1000,format=auto/m/5a3d/7af7/47be/a273/0c30/1e2c/49ee/3133/f454/58ec/58ec.jpeg"
      />

      <section className="section">
        <div className="container-custom">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="mb-6">Build a Successful Fashion Brand</h2>
            <p className="text-lg text-neutral-700">
              The clothing industry combines creativity with complex sourcing, production, and retail challenges. Our fashion industry experts provide guidance to help you build distinctive apparel brands, optimize production, and develop effective retail strategies in this competitive market.
            </p>
          </div>
        </div>
      </section>

      <IndustrySection 
        title="Journey of a fashion brand to the nations's brand "
        subtitle=""
        content="Creating and selling clothing products that boost nation's economy and beat the foreign monopolies in the sector is not as easy as it seems. A better founder is working towards helping the businesses do these tasks in an easier and efficient manner."
        image="https://www.gartexindia.com/wp-content/uploads/2022/04/Market-Cap-of-Textile-industry-in-India-in-US-Billion-dollar-with-estimate-for-2026.jpg"
        buttonText="Explore Solutions"
        buttonLink="/contact"
        solutions={financialSolutions}
      />
       {/* External Link Section */}
      <section className="py-12 bg-neutral-50">
        <div className="container-custom">
          <div className="text-center">
            <a 
              href="https://www.statista.com/topics/5026/apparel-market-in-india/#topicOverview" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center text-primary-800 hover:text-accent-500 transition-colors"
            >
              Visit this website to know more about Indian Apparel industry
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>
      {/* Services Section */}
      <section className="bg-neutral-50 py-20">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">Our Services</h2>
            <p className="text-lg text-neutral-700 max-w-3xl mx-auto">
              To make you A BETTER FOUNDER
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <ul className="space-y-4">
                {services.slice(0, 3).map((service, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-success-100 text-success-600 flex items-center justify-center mt-0.5">
                      <Check className="h-4 w-4" />
                    </div>
                    <span className="ml-3 text-neutral-700">{service}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <ul className="space-y-4">
                {services.slice(3).map((service, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-success-100 text-success-600 flex items-center justify-center mt-0.5">
                      <Check className="h-4 w-4" />
                    </div>
                    <span className="ml-3 text-neutral-700">{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-800 text-white py-20">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="mb-6">Ready to Elevate Your Fashion Brand?</h2>
            <p className="text-xl mb-8">
              Get specialized guidance tailored to the unique challenges of the clothing and apparel industry.
            </p>
            <Link to="/contact" className="btn-accent inline-flex items-center">
              Schedule a Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ClothingPage;