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
  themeCategory: 'modern', // Default theme category
  customizations: {
    colors: {
      primary: '#0ea5e9',
      secondary: '#d946ef',
      accent: '#f59e0b',
      background: '#ffffff',
      text: '#111827'
    },
    fonts: {
      heading: 'Poppins',
      body: 'Inter'
    },
    animations: {
      hero: 'fade',
      sections: 'slideUp',
      buttons: 'pulse'
    },
    layout: {
      heroStyle: 'centered',
      serviceLayout: 'grid',
      testimonialStyle: 'cards',
      footerStyle: 'standard'
    },
    graphics: {
      style: 'minimal',
      icons: 'outlined',
      illustrations: true
    }
  }
};

const LandingFormContext = createContext();

export const useLandingForm = () => useContext(LandingFormContext);

export const LandingFormProvider = ({ children }) => {
  const [formData, setFormData] = useState(initialFormState);
  const [currentStep, setCurrentStep] = useState(1);
  const [isPreviewMode, setIsPreviewMode] = useState(false);
  const [generatedPageData, setGeneratedPageData] = useState(null);
  const [userCredits, setUserCredits] = useState(10); // New user credits state
  const [savedTemplates, setSavedTemplates] = useState([]); // User's saved templates
  const [communityTemplates, setCommunityTemplates] = useState([]); // Community shared templates
  const [customizationMode, setCustomizationMode] = useState(false); // For toggling customization panel

  const updateFormData = (updates) => {
    setFormData(prev => ({ ...prev, ...updates }));
  };

  const updateCustomization = (category, property, value) => {
    setFormData(prev => ({
      ...prev,
      customizations: {
        ...prev.customizations,
        [category]: {
          ...prev.customizations[category],
          [property]: value
        }
      }
    }));
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

  // New function to save template to community
  const saveTemplateToLibrary = (templateName, isPublic = false) => {
    const newTemplate = {
      id: `template-${Date.now()}`,
      name: templateName,
      createdAt: new Date().toISOString(),
      formData: { ...formData },
      pageData: { ...generatedPageData },
      isPublic: isPublic,
      creatorId: 'current-user-id', // In a real app, this would be the actual user ID
      usageCount: 0
    };
    
    setSavedTemplates(prev => [...prev, newTemplate]);
    
    if (isPublic) {
      setCommunityTemplates(prev => [...prev, newTemplate]);
    }
    
    return newTemplate.id;
  };

  // New function to use a community template
  const useTemplate = (templateId) => {
    const template = [...savedTemplates, ...communityTemplates].find(t => t.id === templateId);
    
    if (template) {
      // Award credits to creator if template is from community
      if (template.creatorId !== 'current-user-id' && template.isPublic) {
        // In a real app, this would send a request to the backend to credit the creator
        // Here we just increment the usage count
        setCommunityTemplates(prev => 
          prev.map(t => t.id === templateId ? { ...t, usageCount: t.usageCount + 1 } : t)
        );
      }
      
      // Load the template settings
      setFormData({ ...template.formData });
      setGeneratedPageData({ ...template.pageData });
      
      return true;
    }
    
    return false;
  };

  // Add or remove user credits
  const updateUserCredits = (amount) => {
    setUserCredits(prev => prev + amount);
  };

  const resetForm = () => {
    setFormData(initialFormState);
    setCurrentStep(1);
    setIsPreviewMode(false);
    setGeneratedPageData(null);
    setCustomizationMode(false);
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
    userCredits,
    updateUserCredits,
    savedTemplates,
    communityTemplates,
    saveTemplateToLibrary,
    useTemplate,
    customizationMode,
    setCustomizationMode,
    updateCustomization
  };

  return (
    <LandingFormContext.Provider value={value}>
      {children}
    </LandingFormContext.Provider>
  );
}; 