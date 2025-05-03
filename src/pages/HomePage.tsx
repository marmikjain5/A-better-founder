import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import IndustryCard from '../components/IndustryCard';

import { ArrowRight, TrendingUp, Users, Award, Clock, Ban as Bank, Factory, ShoppingCart, Coffee, Shirt } from 'lucide-react';

const HomePage: React.FC = () => {
  const industries = [
    {
      title: "Banking",
      description: "Ways you can help the country in your fintech or banking startup.",
      image: "https://tse2.mm.bing.net/th?id=OIP.UvWx7VK585mIHbkfddKTjAHaDu&pid=Api&P=0&h=180",
      link: "/banking",
      icon: <Bank className="h-5 w-5 text-primary-800" />
    },
    {
      title: "Industrial",
      description: "Demolish the monopoly of foreign companies eventually leading to less number of imports for India.",
      image: "http://www.indbiz.gov.in/wp-content/uploads/2020/12/October-factory-output.jpg",
      link: "/industrial",
      icon: <Factory className="h-5 w-5 text-primary-800" />
    },
    {
      title: "FMCG",
      description: "Fast-moving consumer goods market has around 50% international players still we are not doing anything to beat them.",
      image: "https://tse4.mm.bing.net/th?id=OIP.3B86EMcGMO0MYkMhWCF7iwHaEK&pid=Api&P=0&h=180",
      link: "/fmcg",
      icon: <ShoppingCart className="h-5 w-5 text-primary-800" />
    },
    {
      title: "Food",
      description: "We Indians love food,but have you ever thought how many of the food items you buy in the supermarket are made by indian companies?",
      image: "https://www.bbcgoodfoodme.com/wp-content/uploads/2022/08/Angar-Curry-Club-scaled.jpg",
      link: "/food",
      icon: <Coffee className="h-5 w-5 text-primary-800" />
    },
    {
      title: "Clothing",
      description: "This new enthusiasm about wearing cool clothes is good but should we completely rely on the foreign companies for all our trends?",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsI9BaFQA9UOwV8BZZBYa0C5oc8lZ6ki2JNg&s",
      link: "/clothing",
      icon: <Shirt className="h-5 w-5 text-primary-800" />
    }
  ];

  return (
    <div className="page-transition">
      <Hero 
        title="Build Better Businesses for the nation"
        subtitle="We provide specialized guidance for entrepreneurs across banking, industrial, FMCG, food, and clothing sectors to work towards the growth of India."
        background="https://as1.ftcdn.net/v2/jpg/05/62/49/98/1000_F_562499892_L9R1KDYNHKFUlEKWJKWUET3CsZwXEBju.jpg"
      />

      {/* About Section */}
      <section id="about" className="section">
        <div className="container-custom">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="mb-6">Founders are the future of India</h2>
            <p className="text-lg text-neutral-700">
              A Better Founder helps you do things which are going to be better for our nation in terms of economy and growth. We inspire you to be a better patriot and hence a better founder overall.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-primary-50 p-8 rounded-lg">
              <div className="flex flex-col h-full">
                <div className="mb-4">
                  <div className="bg-primary-100 text-primary-800 h-12 w-12 rounded-full flex items-center justify-center mb-4">
                    <TrendingUp className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
                </div>
                <p className="text-neutral-700 flex-grow">
                 To make India self-reliable in every sector and make other countries depend on india as we take on the path to be a global leader.
                </p>
              </div>
            </div>

            <div className="bg-primary-50 p-8 rounded-lg">
              <div className="flex flex-col h-full">
                <div className="mb-4">
                  <div className="bg-primary-100 text-primary-800 h-12 w-12 rounded-full flex items-center justify-center mb-4">
                    <Users className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Our Approach</h3>
                </div>
                <p className="text-neutral-700 flex-grow">
                  We think startups can contribute a lot more to our nation than people working in MNCs. So we help founders do better for the nation by suggesting them the ways they can help the country in.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="bg-neutral-50 section">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="mb-4">Our Industry Expertise</h2>
            <p className="text-lg text-neutral-700 max-w-3xl mx-auto">
              We provide specialized guidance across these key sectors, helping founders navigate industry-specific challenges and opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <IndustryCard 
                key={index}
                title={industry.title}
                description={industry.description}
                image={industry.image}
                link={industry.link}
                icon={industry.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="aspect-video w-full rounded-lg overflow-hidden shadow-lg">
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/ghJJzqiXrZs?si=eztes_dM9NRDN6Wv" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-800 text-white py-20">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="mb-6">Ready to Build a Better Business?</h2>
            <p className="text-xl mb-8">
              Get industry-specific guidance tailored to your unique business needs.
            </p>
            <Link to="/contact" className="btn-accent inline-flex items-center">
              Contact Us Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;