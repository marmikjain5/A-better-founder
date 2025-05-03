import React from 'react';
import Hero from '../components/Hero';
import IndustrySection from '../components/IndustrySection';
import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';

const BankingPage: React.FC = () => {
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
      title: "Financial inclusion",
      description: <>
        <div className="mb-4">
          Problem: Millions of Indians, especially in rural areas, are still unbanked or underbanked.  How you can help: Build simple, low-cost digital banking, wallets, or micro-loan platforms.Offer services in regional languages with minimal paperwork (using Aadhaar/KYC).Enable savings, insurance, and credit access for first-time users. Impact: When more people are financially included, overall consumption, investment, and savings grow → leading to GDP growth.
        </div>
        
      </>
    },
    {
      title: "SME and MSME Support",
      description: "Problem: Small businesses face massive problems getting credit or managing money.  How you can help:Provide invoice discounting, or cash flow management tools.Use alternative credit scoring models (e.g., transaction history, GST filings) rather than just CIBIL scores.Help small businesses access working capital easily and affordably.  Impact: MSMEs are 30%+ of India's GDP. Empowering them boosts employment, production, and exports."
    },
    {
      title: "Digital and Cashless Economy",
      description: "Problem: High cash usage increases black money, inefficiencies, and leakages.  How you can help:Promote UPI-based payments, QR-code acceptance, or frictionless online transactions.Educate users and merchants on the benefits of digital money.  Impact: Transparency improves. Government tax revenues increase. Faster velocity of money in the economy."
    },
    {
      title: "Financial literacy",
      description: "How you can help: Educate users, especially young Indians and rural citizens, about saving, investing, and responsible borrowing.  Impact: Smarter financial decisions at mass scale → more stable and prosperous households → stronger economy long-term.."
    }
  ];

  return (
    <div className="page-transition">
      <Hero 
        title="Banking & Financial Services"
        subtitle="Guidance for banking and financial services entrepreneurs to become a nationalist."
        background="https://imgengine.khaleejtimes.com/khaleejtimes/import/images/KrFrOLk4qMy8AR6vKzEQHPz9RLM.jpg?width=1200&format=auto"
      />

      <section className="section">
        <div className="container-custom">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="mb-6">Transform Your Financial Business</h2>
            <p className="text-lg text-neutral-700">
             Make a healthy transformation from self-centric to nation-centric as it doesn't just help the economy but all the other citizens that live here. Make strong decisions for a stronger future.
            </p>
          </div>
        </div>
      </section>

      <IndustrySection 
        title="Financial Innovation & Growth"
        subtitle="BANKING SOLUTIONS"
        content="In today's rapidly evolving financial landscape, innovation is key to staying competitive. We help banking entrepreneurs identify opportunities for growth, develop cutting-edge financial products, and implement digital transformation strategies that drive business success while maintaining regulatory compliance."
        image="https://bbamantra.com/wp-content/uploads/2016/08/Indian-Financial-System-1024x614.jpg"
        buttonText="Explore Solutions"
        industry="Banking"
        solutions={financialSolutions}
      />

      {/* External Link Section */}
      <section className="py-12 bg-neutral-50">
        <div className="container-custom">
          <div className="text-center">
            <a 
              href="https://www.ibef.org/industry/banking-india" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center text-primary-800 hover:text-accent-500 transition-colors"
            >
              Visit this website to know more about Indian finance industry
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
            <h2 className="mb-6">Ready to Transform Your Banking Business?</h2>
            <p className="text-xl mb-8">
              Get specialized guidance to be a patriot like noone else.
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

export default BankingPage;