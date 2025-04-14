import React, { createContext, useContext, useState } from 'react';

const initialFormState = {
  businessName: '',
  logo: null,
  tagline: '',
  aboutBusiness: '',
  location: '',
  services: [],
  whatsappNumber: '',
  businessType: '',
  targetAudience: '',
  bannerImage: null,
  templateChoice: 'minimalist-emotion', // Default template
};

const LandingFormContext = createContext();

export const useLandingForm = () => useContext(LandingFormContext);

export const LandingFormProvider = ({ children }) => {
  const [formData, setFormData] = useState(initialFormState);
  const [currentStep, setCurrentStep] = useState(1);
  const [isPreviewMode, setIsPreviewMode] = useState(false);
  const [generatedPageData, setGeneratedPageData] = useState(null);

  const updateFormData = (updates) => {
    setFormData(prev => ({ ...prev, ...updates }));
  };

  const generateTagline = async () => {
    // This would normally call an API to generate content using GPT or similar
    // For now we'll just use a placeholder
    const placeholderTaglines = [
      `${formData.businessType} that truly understands your needs`,
      `The ${formData.businessType} choice for ${formData.targetAudience}`,
      `Making ${formData.businessType} simple for ${formData.targetAudience}`,
      `${formData.businessName} - Where quality meets affordability`,
      `Transform your experience with our ${formData.businessType} solutions`,
    ];
    
    const randomIndex = Math.floor(Math.random() * placeholderTaglines.length);
    return placeholderTaglines[randomIndex];
  };

  const generatePageContent = async () => {
    // This would connect to a GPT-powered backend
    // For now we'll just use placeholder content
    
    // Generate a tagline if one isn't provided
    let finalTagline = formData.tagline;
    if (!finalTagline || finalTagline.trim() === '') {
      finalTagline = await generateTagline();
    }
    
    const pageContent = {
      heroSection: {
        headline: `Still running your ${formData.businessType} without a website?`,
        subheadline: `Launch a beautiful page in 2 minutes. No tech needed.`,
        cta: "Build My Page Now",
      },
      aboutSection: {
        title: "About Us",
        content: formData.aboutBusiness,
      },
      servicesSection: {
        title: "Our Services",
        services: formData.services.map(service => ({
          name: service,
          description: `Premium ${service} tailored for ${formData.targetAudience}`,
        })),
      },
      contactSection: {
        title: "Get In Touch",
        location: formData.location,
        whatsapp: formData.whatsappNumber,
      },
      testimonialSection: {
        title: "What Our Customers Say",
        testimonials: [
          {
            name: "Jane Doe",
            text: `The best ${formData.businessType} service I've ever used. Highly recommended!`,
            rating: 5,
          },
          {
            name: "John Smith",
            text: `Excellent service and professional staff. ${formData.businessName} is my go-to for all my ${formData.businessType} needs.`,
            rating: 5,
          },
        ],
      },
      offerSection: {
        title: "Special Offer",
        text: `Limited Time: 20% off your first service with ${formData.businessName}!`,
        cta: "Claim Offer",
      },
      tagline: finalTagline,
    };
    
    setGeneratedPageData(pageContent);
    return pageContent;
  };

  const resetForm = () => {
    setFormData(initialFormState);
    setCurrentStep(1);
    setIsPreviewMode(false);
    setGeneratedPageData(null);
  };

  const value = {
    formData,
    updateFormData,
    currentStep,
    setCurrentStep,
    isPreviewMode,
    setIsPreviewMode,
    generateTagline,
    generatePageContent,
    generatedPageData,
    resetForm,
  };

  return (
    <LandingFormContext.Provider value={value}>
      {children}
    </LandingFormContext.Provider>
  );
}; 