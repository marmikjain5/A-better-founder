import React from 'react';
import Hero from '../components/Hero';
import IndustrySection from '../components/IndustrySection';

import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';

const FoodPage: React.FC = () => {
 

  const services = [
    "Making you a better founder",
    "Helping you to solve nation's problems",
    "Motivating you tu be a better entrpreneur",
    "Exporting strategies to boost economy",
    "Making India financially independent",
    "Going global in every aspect of business"
  ];

  // Define solutions for the food industry
  const foodSolutions = [
    {
      title: "Strengthening the Agri-Food Supply Chain",
      description: "Source directly from Indian farmers, promote farm-to-fork models.Reduce food waste through better storage, processing, and distribution tech.Impact: Increases farmer incomes, reduces post-harvest losses, boosts rural economy."
    },
    {
      title: "Job Creation Across the Value Chain",
      description: "Employment in food production, packaging, logistics, R&D, and retail.Promotes allied sectors: cold chains, agri-tech, food processing machinery. Impact: Generates jobs in urban and rural sectors alike."
    },
    {
      title: "Localization and Cultural Relevance",
      description: "Make products that foreign brands overlook—e.g., regional snacks, millet-based health bars, Indian-style sauces.Cater to Indian taste preferences and cultural eating habits.Impact: Wins market share by being more relatable and relevant."
    }
  ];

  return (
    <div className="page-transition">
      <Hero 
        title="Food Industry Expertise"
        subtitle="Specialized guidance for food entrepreneurs"
        background="https://www.bbcgoodfoodme.com/wp-content/uploads/2022/08/Angar-Curry-Club-scaled.jpg"
      />

      <section className="section">
        <div className="container-custom">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="mb-6">Build a Successful Food Business</h2>
            <p className="text-lg text-neutral-700">
              The food industry presents unique challenges in product development, safety, scaling, and distribution. Our food industry experts provide guidance to help you navigate regulations, optimize production, and bring innovative food products to market successfully.
            </p>
          </div>
        </div>
      </section>

      <IndustrySection 
        title="Food Innovation & Product Development"
        subtitle="CULINARY EXCELLENCE"
        content="Creating and selling food products that boost nation's economy and beat the foreign monopolies in the sector is not as easy as it seems. A better founder is working towards helping the businesses do these tasks in an easier and efficient manner."
        image="https://bsmedia.business-standard.com/_media/bs/img/article/2021-05/09/full/1620580113-4326.jpg"
        buttonText="Explore more"
        buttonLink="/contact"
        solutions={foodSolutions}
      />
       {/* External Link Section */}
      <section className="py-12 bg-neutral-50">
        <div className="container-custom">
          <div className="text-center">
            <a 
              href="https://www.foodprocessingindia.gov.in/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center text-primary-800 hover:text-accent-500 transition-colors"
            >
              Visit this website to know more about Indian food processing industry
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
            <h2 className="mb-6">Ready to Grow Your Food Business?</h2>
            <p className="text-xl mb-8">
              Get specialized guidance tailored to the unique challenges of the food industry.
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

export default FoodPage;