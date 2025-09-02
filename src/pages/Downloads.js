import React, { useState } from 'react';
import { Download, Smartphone, Monitor, FileText } from 'lucide-react';
import apps from '../data/AppData';
import catalogs from '../data/Catalogs';

const Downloads = () => {
  



const handleDownload = (link) => {
  const a = document.createElement("a");
  a.href = link;
  a.download = link.split("/").pop(); // file name
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
};

  return (
    <div className="min-h-screen bg-gray-50">
     

      {/* Mobile Apps Section */}
      <section className="py-8 sm:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Mobile Applications</h2>
            <p className="text-gray-600 text-sm sm:text-base">Download our mobile apps for enhanced functionality</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
            {apps.map((app) => {
              return (
                <div key={app.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
                  {/* App Image */}
                  <div className="h-48 sm:h-56 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                    <img 
                      src={app.image} 
                      alt={app.name} 
                      className="w-full h-full object-cover object-center"
                      loading="lazy"/>
                  </div>
                  
                  {/* App Content */}
                  <div className="p-6 sm:p-8 flex flex-col flex-grow">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">{app.name}</h3>
                    <p className="text-gray-600 mb-6 text-sm sm:text-base leading-relaxed flex-grow">
                      {app.description}
                    </p>
                    <button 
                      onClick={() => handleDownload(app.name)}
                      className={`w-full sm:w-auto bg-${app.color}-600 text-white px-6 py-3 rounded-lg hover:bg-${app.color}-700 transition-colors duration-200 font-medium`}
                    >
                      Download App
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Catalogs Section */}
      <section className="py-8 sm:py-12 lg:py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Catalogs</h2>
            <p className="text-gray-600 text-sm sm:text-base">Download user manuals and technical documentation</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {catalogs.map((catalog) => {
              const IconComponent = catalog.icon;
              return (
                <div key={catalog.id} className="bg-white rounded-lg shadow-lg border border-gray-200 p-4 sm:p-6 text-center hover:shadow-xl transition-shadow duration-300">
                  <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-${catalog.color}-100 rounded-lg flex items-center justify-center mx-auto mb-3 sm:mb-4`}>
                    <IconComponent className={`text-${catalog.color}-600`} size={24} />
                  </div>
                  <h3 className="text-xs sm:text-sm font-semibold text-gray-900 mb-3 sm:mb-4 leading-tight min-h-[2.5rem] sm:min-h-[3rem] flex items-center justify-center">
                    {catalog.name}
                  </h3>
                  <button 
                    onClick={() => handleDownload(catalog.link)}
                    className={`w-full bg-${catalog.color}-600 text-white px-3 sm:px-4 py-2 rounded-lg hover:bg-${catalog.color}-700 transition-colors duration-200 flex items-center justify-center space-x-2 text-xs sm:text-sm`}
                  >
                    <Download size={14} />
                    <span>Download</span>
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Downloads;