import React from 'react';
import { User, Code, Award, Users, Shield, Zap, Globe, Phone, Wifi } from 'lucide-react';   

        
const AboutPage = () => {
  const features = [
    { 
      icon: <Users className="text-blue-600" size={32} />, 
      title: "Multi-User Support", 
      description: "Up to 6 users can operate our devices simultaneously" 
    },
    { 
      icon: <Wifi className="text-blue-600" size={32} />, 
      title: "Universal Compatibility", 
      description: "Works with any SIM card for maximum flexibility" 
    },
    { 
      icon: <Phone className="text-blue-600" size={32} />, 
      title: "Smart Notifications", 
      description: "Callback/SMS alerts on any fault or issue" 
    },
    { 
      icon: <Globe className="text-blue-600" size={32} />, 
      title: "Made in India", 
      description: "Proudly manufactured in India with world-class quality" 
    }
  ];

  const whyChooseUs = [
    "We provide best products",
    "Our prices are competitive and fair", 
    "Our products are easy to operate",
    "We provide best service",
    "Callback/SMS on any fault",
    "6 users can operate this device",
    "Work with any sim",
    "Products are manufactured in India"
  ];

  return (
 <div className="min-h-screen">

  {/* About Telexa Technology */}
  <section className="py-20 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          About Telexa Technology
        </h2>
        <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
          At Telexa Technology, we believe that technology should serve a practical purpose:
          to make everyday life simpler, safer, and more efficient. In a world where we rely
          on machines and gadgets, we are dedicated to harnessing the latest advancements
          to create innovative products that genuinely help people. We are constantly working
          to develop solutions that address real-world challenges in a unique and effective way.
        </p>
      </div>

      {/* Mission & Vision */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition duration-300">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h3>
          <p className="text-gray-600 leading-relaxed">
            Our mission is to engineer and manufacture high-quality, user-friendly smart technology
            that empowers our customers. We focus on creating reliable and robust products that
            automate essential tasks, protect valuable equipment, and conserve resources like time and energy.
          </p>
        </div>
        <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition duration-300">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Vision</h3>
          <p className="text-gray-600 leading-relaxed">
            We aim to be a leading Indian brand in smart automation solutions, recognized for our commitment
            to innovation, quality, and customer satisfaction. We envision a future where our technology is
            an integral part of homes, farms, and industries across the country, making complex operations
            manageable from anywhere.
          </p>
        </div>
      </div>
    </div>
  </section>

  {/* Key Features */}
  <section className="py-20 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Product Features
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Advanced technology solutions designed for real-world applications
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              {feature.icon}
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>

  {/* Why Choose Us */}
  <section className="py-20 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Why Choose Us?
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          We stand out in the market with our commitment to quality, affordability, and customer satisfaction
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {whyChooseUs.map((reason, index) => (
          <div key={index} className="flex items-start bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition">
            <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1 mr-3">
              <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="text-gray-700 font-medium">{reason}</p>
          </div>
        ))}
      </div>
    </div>
  </section>

  {/* Values Section */}
  <section className="py-20 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Our Core Values
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          The principles that drive our innovation and service excellence
        </p>
      </div>
      
      {/* Values Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Innovation */}
        <div className="text-center bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition">
          <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow">
            <Zap className="text-white" size={32} />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Innovation</h3>
          <p className="text-gray-600 leading-relaxed">
            We continuously develop innovative ideas using the latest technology to
            create products that serve humanity.
          </p>
        </div>
        
        {/* Quality */}
        <div className="text-center bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition">
          <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow">
            <Award className="text-white" size={32} />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Quality</h3>
          <p className="text-gray-600 leading-relaxed">
            We provide the best products with competitive pricing, ensuring value
            for money and reliability.
          </p>
        </div>
        
        {/* Customer Focus */}
        <div className="text-center bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition">
          <div className="w-16 h-16 bg-indigo-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow">
            <Users className="text-white" size={32} />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Customer Focus</h3>
          <p className="text-gray-600 leading-relaxed">
            We prioritize ease of operation and provide excellent service with
            smart fault detection and notifications.
          </p>
        </div>

      </div>
    </div>
  </section>
</div>

  );
};

export default AboutPage;