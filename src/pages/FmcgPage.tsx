import React from 'react';
import Hero from '../components/Hero';
import IndustrySection from '../components/IndustrySection';

import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';

const FmcgPage: React.FC = () => {
 
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
      title: " Rural Market Development",
      description: <>
        <div className="mb-4">
        FMCG startups catering to rural needs (e.g., affordable hygiene, food, health products).Setting up micro-distribution networks using local retailers and women-led SHGs.
Impact: Increases rural income and consumer empowerment.
        </div>
      
      </>
    },
    {
      title: "Exporting Indian FMCG Products",
      description: "Ayurveda, herbal, organic food, spices, and natural skincare have global appeal.Startups can target Indian diaspora and health-conscious consumers worldwide. Impact: Strengthens Brand India in global wellness and food markets.."
    },
    {
      title: "Leveraging E-commerce and D2C Models",
      description: " Selling globally via Amazon, Flipkart, or own websites.Using storytelling around Indian tradition and sustainability to appeal to international buyers. Impact: Competes globally without heavy physical retail investment.."
    },
    {
      title: "Trust and Transparency",
      description: "Using clean-label ingredients, ethical sourcing, and clear brand messaging.Capitalizing on consumer pushback against foreign brand dominance and artificial products.Impact: Builds loyalty, especially among Gen Z and millennials."
    }
      
  ];

  return (
    <div className="page-transition">
      <Hero 
        title="Fast-Moving Consumer Goods Expertise"
        subtitle="Specialized guidance for FMCG entrepreneurs"
        background="https://uniquefragrances.com/wp-content/uploads/2023/08/banner-fmcg-3.jpg"
      />

      <section className="section">
        <div className="container-custom">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="mb-6">Build a Successful FMCG Brand</h2>
            <p className="text-lg text-neutral-700">
              In the competitive world of fast-moving consumer goods, understanding consumer behavior, creating compelling products, and mastering distribution are key to success. Our FMCG experts provide guidance to help you build and scale consumer brands that stand out in the marketplace.
            </p>
          </div>
        </div>
      </section>

      <IndustrySection 
        title="Take your FMCG startup to new heights"
        subtitle="INNOVATION STRATEGY"
        content="Creating and selling FMCG products that boost nation's economy and beat the foreign monopolies in the sector is not as easy as it seems. A better founder is working towards helping the businesses do these tasks in an easier and efficient manner."
        image="https://cdn.finshots.app/images/2023/10/India-s-top-FMCG-.png"
        buttonText="Explore more"
        buttonLink="/contact"
         solutions={financialSolutions}
      />

       {/* External Link Section */}
      <section className="py-12 bg-neutral-50">
        <div className="container-custom">
          <div className="text-center">
            <a 
              href="https://www.morningstar.in/posts/34911/how-global-brands-are-making-it-big-in-india.aspx" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center text-primary-800 hover:text-accent-500 transition-colors"
            >
              Visit this website to know more about Indian FMCG industry
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
            <h2 className="mb-6">Ready to Scale Your FMCG Brand?</h2>
            <p className="text-xl mb-8">
              Get specialized guidance tailored to the unique challenges of the consumer goods industry.
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

export default FmcgPage;