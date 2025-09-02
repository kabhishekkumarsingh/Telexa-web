import React, { useState } from 'react';
import { MessageSquare, HelpCircle, FileText, Phone, Mail, MapPin } from 'lucide-react';

const SupportPage = () => {
  const [contactForm, setContactForm] = useState({
    status: '',
    product: '',
    name: '',
    email: '',
    mobile: '',
    address: '',
    warranty: '',
    description: ''
  });

  const statusOptions = [
    'Installation',
    'Technical Support',
    'Product Inquiry',
    'General Query'
  ];

  const productOptions = [
    'Mobile Auto Switch',
    'Mobile Auto Switch-4G',
    'Mobile Auto Switch With Battery',
    'Water Level Controller',
    'water level Automation',
    'Water level Automation-4G'
  ];

  const warrantyOptions = [
    'IN Warranty',
    'OUT Warranty',
    'Not Sure'
  ];

  const faqs = [
    {
      question: "How do I install Telexa devices?",
      answer: "Our devices come with detailed installation guides. For complex installations, our technical team provides remote assistance or on-site support."
    },
    {
      question: "What SIM cards are compatible?",
      answer: "Our devices work with any standard SIM card from major telecom providers. The device automatically detects and configures the network settings."
    },
    {
      question: "How many users can operate one device?",
      answer: "Up to 6 users can simultaneously operate our devices, making them perfect for team environments and shared workspaces."
    },
    {
      question: "What happens if there's a fault?",
      answer: "Our devices automatically send callback/SMS notifications when any fault is detected, ensuring quick response and minimal downtime."
    },
    {
      question: "What warranty do you provide?",
      answer: "All our products come with a comprehensive warranty. Check your product documentation for specific warranty terms and conditions."
    }
  ];

  const handleSubmit = () => {
    
    // Validate required fields
    if (!contactForm.status || !contactForm.product || !contactForm.name || !contactForm.mobile || !contactForm.description) {
      alert('Please fill in all required fields');
      return;
    }

    // Create WhatsApp message
    const message = `*New Support Request from Telexa Technology Website*

*Status:* ${contactForm.status}
*Product:* ${contactForm.product}
*Name:* ${contactForm.name}
*Email:* ${contactForm.email}
*Mobile:* ${contactForm.mobile}
*Address:* ${contactForm.address}
*Warranty Status:* ${contactForm.warranty}

*Description:*
${contactForm.description}

---
This message was sent from Telexa Technology Support Form`;

    // Replace with your WhatsApp number (include country code without +)
    const whatsappNumber = '918989954333'; // Replace with your actual WhatsApp number
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
    
    // Reset form
    setContactForm({
      status: '',
      product: '',
      name: '',
      email: '',
      mobile: '',
      address: '',
      warranty: '',
      description: ''
    });
    
    alert('Your message is being sent to WhatsApp. Please continue the conversation there.');
  };

  return (
    <div className="min-h-screen">
     
      {/* Support Options */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-4">Phone Support</h3>
              <p className="text-gray-600 mb-4">Call us for immediate assistance</p>
              <p className="text-blue-600 font-semibold">+91 8989954333</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="text-green-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-4">WhatsApp Support</h3>
              <p className="text-gray-600 mb-4">Chat with us on WhatsApp</p>
              <p className="text-green-600 font-semibold">+91 8989954333</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="text-purple-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-4">Email Support</h3>
              <p className="text-gray-600 mb-4">Send us your queries</p>
              <p className="text-purple-600 font-semibold">support@telexatech.com</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            {/* Rocket Icon Header */}
            <div className=" px-8 py-6 text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Drop Us a Message</h2>
            </div>

            {/* Form */}
            <div className="p-8 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Select Status *
                  </label>
                  <select
                    required
                    value={contactForm.status}
                    onChange={(e) => setContactForm({...contactForm, status: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                  >
                    <option value="">Select Status</option>
                    {statusOptions.map((status, index) => (
                      <option key={index} value={status}>{status}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Select Product *
                  </label>
                  <select
                    required
                    value={contactForm.product}
                    onChange={(e) => setContactForm({...contactForm, product: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                  >
                    <option value="">Select Product</option>
                    {productOptions.map((product, index) => (
                      <option key={index} value={product}>{product}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={contactForm.name}
                    onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={contactForm.email}
                    onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Mobile Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={contactForm.mobile}
                    onChange={(e) => setContactForm({...contactForm, mobile: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your mobile number"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Address
                  </label>
                  <input
                    type="text"
                    value={contactForm.address}
                    onChange={(e) => setContactForm({...contactForm, address: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your address"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Select Warranty Type
                </label>
                <select
                  value={contactForm.warranty}
                  onChange={(e) => setContactForm({...contactForm, warranty: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                >
                  <option value="">Select Warranty Type</option>
                  {warrantyOptions.map((warranty, index) => (
                    <option key={index} value={warranty}>{warranty}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Complain Description *
                </label>
                <textarea
                  required
                  rows="6"
                  value={contactForm.description}
                  onChange={(e) => setContactForm({...contactForm, description: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Describe your issue or query in detail"
                ></textarea>
              </div>

              <div className="text-center">
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="bg-red-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-600 transition-colors"
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Common questions about Telexa Technology products</p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-lg font-semibold mb-2 text-gray-800">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SupportPage;