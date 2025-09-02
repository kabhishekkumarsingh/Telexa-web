import React from "react";
import { Link } from "react-router-dom";
import {
  Download,
  ArrowRight,
  Zap,
  Shield,
  Users,
  Home,
  Building,
  Wheat,
  Cog,
  Timer,
  Phone,
} from "lucide-react";

const HomePage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 via-white to-blue-100 text-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            {/* Heading */}
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Welcome to{" "}
              <span className="text-[#2196f3]">Telexa Technology</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-600">
              At Telexa Technology, we are committed to making life simpler and
              smarter. As a leading manufacturer of innovative automation
              devices for agriculture, household, and office applications, we
              design solutions that bring convenience, safety, and efficiency to
              your fingertips. Our cutting-edge smart technology empowers you to
              save time, reduce costs, and improve productivity—whether in the
              field, at home, or in the workplace. Together, let’s build a
              smarter tomorrow.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
<Link
  to="/product"
  className="bg-[#1976d2] text-white px-8 py-3 rounded-lg text-lg font-semibold 
             shadow-md hover:bg-[#0d47a1] transition-colors inline-flex items-center"
>
  Learn More
</Link>

            </div>
          </div>
        </div>
      </section>

      {/* Product Categories Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-lg">
          <div className="text-center mb-16 bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-lg">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Automation Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our comprehensive range of automation devices designed
              for modern living and working
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wheat className="text-green-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-4">
                Agriculture Automation
              </h3>
              <p className="text-gray-600">
                Our Agriculture Automation Device allows farmers to control
                their irrigation motors easily from home. With features like
                remote ON/OFF control, overload protection, and dry run
                protection, it ensures the motor runs safely and efficiently.
                The system also provides real-time monitoring of motor status
                and sends instant alerts through a mobile app and automated
                phone call system in case of faults, power cuts, or abnormal
                conditions. This saves farmers valuable time, electricity, and
                resources, while giving them peace of mind and improving overall
                farm productivity.{" "}
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Home className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-4">
                Household Automation
              </h3>
              <p className="text-gray-600">
                Experience the comfort of modern living with our smart home
                automation solutions. From smart home devices, automated
                lighting, and appliance controllers to advanced security
                systems, we provide everything you need for a safer, smarter,
                and more efficient home. Control your appliances remotely,
                schedule routines, save energy, and enjoy the convenience of
                voice and mobile app integration. With Telexa Technology, your
                home becomes more secure, energy-efficient, and
                intelligent—designed for your lifestyle..
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="text-purple-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-4">Office Automation</h3>
              <p className="text-gray-600">
                Boost workplace efficiency with our smart office automation
                solutions. From automated access control, climate management,
                and meeting room systems to productivity enhancement devices, we
                help create a modern, secure, and intelligent office
                environment. With remote monitoring, energy optimization, and
                seamless device integration, Telexa Technology ensures your
                workplace is more efficient, comfortable, and future-ready.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Products */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-lg">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Why Choose Telexa Automation Devices?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our products are designed with cutting-edge technology and built
              to last
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Cog className="text-yellow-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-4">
                Advanced Technology
              </h3>
              <p className="text-gray-600">
                State-of-the-art automation technology with smart sensors and
                AI-powered controls.
              </p>
            </div>

            <div className="text-center bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-red-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-4">Reliable & Durable</h3>
              <p className="text-gray-600">
                Built with high-quality materials and rigorous testing to ensure
                long-lasting performance.
              </p>
            </div>

            <div className="text-center bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Timer className="text-indigo-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-4">Easy Installation</h3>
              <p className="text-gray-600">
                Simple setup process with comprehensive documentation and
                customer support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Service Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-lg">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Complete Customer Support
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                At Telexa, we take great pride in our customer service. Our
                clients are very important to us, and we provide comprehensive
                support throughout your entire journey.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-blue-600 font-semibold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      Product Selection
                    </h4>
                    <p className="text-gray-600">
                      Expert guidance to choose the right automation devices for
                      your needs
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-blue-600 font-semibold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      Installation Support
                    </h4>
                    <p className="text-gray-600">
                      Step-by-step guidance to make installation as seamless as
                      possible
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-blue-600 font-semibold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      Ongoing Maintenance
                    </h4>
                    <p className="text-gray-600">
                      Continuous support and maintenance services for optimal
                      performance
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-lg">
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="text-blue-600" size={40} />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">
                  Customer Support
                </h3>
                <p className="text-gray-600 mb-6">
                  Our dedicated support team is available to assist you with any
                  questions or technical issues you may encounter.
                </p>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <p className="text-sm text-gray-500 italic">
                    "We communicate with you throughout every step of the
                    process"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default HomePage;
