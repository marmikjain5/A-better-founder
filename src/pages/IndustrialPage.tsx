import React from 'react';
import Hero from '../components/Hero';
import IndustrySection from '../components/IndustrySection';

import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';

const IndustrialPage: React.FC = () => {
 

  const services = [
    "Making you a better founder",
    "Helping you to solve nation's problems",
    "Motivating you tu be a better entrpreneur",
    "Exporting strategies to boost economy",
    "Making India financially independent",
    "Going global in every aspect of business"
  ];

  const manufacturingSolutions = [
    {
      title: "Building India as a Global Manufacturing Hub",
      description: "India’s low labor cost + improving infrastructure = competitive advantage.With global firms diversifying away from China (China+1 strategy), Indian startups can seize the opportunity.Impact: Attracts FDI, boosts exports, and strengthens India’s brand."
    },
    {
      title: "Technology Adaptation & Innovation",
      description: " Invest in R&D to develop locally viable industrial solutions—automation, IoT-enabled systems, clean energy tech.Tailor machines to local usage conditions (power fluctuations, lower-maintenance needs).Impact: More efficient and affordable than foreign imports."
    },
    {
      title: "Government Collaboration and B2B Integration",
      description: "Partner with public-sector units, defense, and infrastructure projects.Supply to Indian corporates seeking to localize their vendor base.Impact: Locks in institutional customers and reduces reliance on MNCs."
    },
    {
      title: "Cost competitiveness",
      description: "Lower manufacturing costs = lower product prices without sacrificing quality.Use indigenous raw materials and optimize logistics for better margins.Impact: Undercuts foreign products while meeting the same specs."
    }
  ];

  

  return (
    <div className="page-transition">
      <Hero 
        title="Industrial & Manufacturing Expertise"
        subtitle="Specialized guidance for industrial sector entrepreneurs"
        background="http://www.indbiz.gov.in/wp-content/uploads/2020/12/October-factory-output.jpg"
      />

      <section className="section">
        <div className="container-custom">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="mb-6">Transform Your Industrial Business</h2>
            <p className="text-lg text-neutral-700">
              In today's competitive industrial landscape, efficiency, innovation, and sustainability are critical to success. Our team of industrial experts provides tailored guidance to help your manufacturing business optimize operations, implement cutting-edge technologies, and achieve sustainable growth.
            </p>
          </div>
        </div>
      </section>

      <IndustrySection 
        title="Manufacturing Excellence"
        subtitle=""
        content="Manufacturing processes that boost nation's economy and beat the foreign monopolies in the sector is not as easy as it seems. A better founder is working towards helping the businesses do these tasks in an easier and efficient manner."
        image="https://businessbar.net/wp-content/uploads/2023/03/54-1024x1024.png"
        buttonText="Explore more"
        buttonLink="/contact"
        industry="Manufacturing"
        solutions={manufacturingSolutions}
      />

      {/* External Link Section */}
      <section className="py-12 bg-neutral-50">
        <div className="container-custom">
          <div className="text-center">
            <a 
              href="https://www.ibef.org/industry/manufactur-presentation" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center text-primary-800 hover:text-accent-500 transition-colors"
            >
              Visit this website to know more about Indian manufacturing industry
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
            <h2 className="mb-6">Ready to Transform Your Industrial Business?</h2>
            <p className="text-xl mb-8">
              Get specialized guidance tailored to the unique challenges of the industrial and manufacturing sector.
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

export default IndustrialPage;