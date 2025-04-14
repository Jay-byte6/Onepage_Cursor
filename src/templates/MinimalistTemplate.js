import React from 'react';

const MinimalistTemplate = ({ formData, pageData }) => {
  const { businessName, location, whatsappNumber } = formData;
  const {
    heroSection,
    aboutSection,
    servicesSection,
    contactSection,
    testimonialSection,
    offerSection,
    tagline
  } = pageData;

  // Function to generate a placeholder image based on business type
  const getPlaceholderImage = () => {
    const businessType = formData.businessType.toLowerCase();
    
    // Use different placeholder images based on business type
    if (businessType === 'bakery') {
      return 'https://images.unsplash.com/photo-1517433367423-c7e5b0f35086?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80';
    } else if (businessType === 'gym') {
      return 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80';
    } else if (businessType === 'coaching') {
      return 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80';
    } else {
      return 'https://images.unsplash.com/photo-1497215842964-222b430dc094?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80';
    }
  };

  // Get hero image
  const heroImage = formData.bannerImage 
    ? URL.createObjectURL(formData.bannerImage) 
    : getPlaceholderImage();

  // Handle WhatsApp click
  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(`Hi ${businessName}! I'm interested in your services.`);
    window.open(`https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt={businessName} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        
        {/* Hero Content */}
        <div className="container mx-auto px-4 relative z-10 text-white">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              {heroSection.headline}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100">
              {heroSection.subheadline}
            </p>
            <div className="mb-8">
              <p className="text-lg italic text-gray-200">{tagline}</p>
            </div>
            <button 
              className="btn bg-white text-gray-900 hover:bg-gray-100 py-3 px-8 text-lg rounded-lg"
              onClick={handleWhatsAppClick}
            >
              {heroSection.cta}
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{aboutSection.title}</h2>
            <div className="w-16 h-1 bg-primary-500 mx-auto mb-8"></div>
            <p className="text-lg text-gray-700 leading-relaxed">
              {aboutSection.content}
            </p>
            <p className="mt-8 text-gray-500">
              Located in <span className="font-medium">{location}</span>
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{servicesSection.title}</h2>
            <div className="w-16 h-1 bg-primary-500 mx-auto mb-8"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesSection.services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-8 text-center">
                <div className="w-16 h-16 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                  {/* Using emoji as icon placeholder */}
                  {['✨', '🌟', '💫', '⭐', '🔥', '💯'][index % 6]}
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.name}</h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{testimonialSection.title}</h2>
            <div className="w-16 h-1 bg-primary-500 mx-auto mb-8"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonialSection.testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-8 shadow-sm">
                <div className="flex items-center mb-4">
                  {/* Star Rating */}
                  <div className="flex mr-2">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`} viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <p className="font-medium">- {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Offer Section */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">{offerSection.title}</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            {offerSection.text}
          </p>
          <button 
            className="btn bg-white text-primary-700 hover:bg-gray-100 py-3 px-8 text-lg rounded-lg"
            onClick={handleWhatsAppClick}
          >
            {offerSection.cta}
          </button>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{contactSection.title}</h2>
            <div className="w-16 h-1 bg-primary-500 mx-auto mb-8"></div>
            <p className="text-lg text-gray-700 mb-8">
              We're located in {contactSection.location}. Get in touch with us today!
            </p>
          </div>
          
          <div className="max-w-xl mx-auto">
            <button 
              onClick={handleWhatsAppClick}
              className="w-full btn bg-green-500 text-white hover:bg-green-600 py-4 flex items-center justify-center text-lg rounded-lg mb-6"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
              WhatsApp Us
            </button>
            
            <div className="text-center mt-8">
              <p className="text-gray-600">© {new Date().getFullYear()} {businessName}. All rights reserved.</p>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Floating Button (Mobile) */}
      <div className="fixed bottom-6 right-6 md:hidden z-50">
        <button
          onClick={handleWhatsAppClick}
          className="h-14 w-14 rounded-full bg-green-500 text-white shadow-lg flex items-center justify-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default MinimalistTemplate; 