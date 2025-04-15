import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLandingForm } from '../contexts/LandingFormContext';
import CustomizerPanel from '../components/customizer/CustomizerPanel';

// Templates
import MinimalistTemplate from '../templates/MinimalistTemplate';
import BoldVibriantTemplate from '../templates/BoldVibriantTemplate';
import SleekProTemplate from '../templates/SleekProTemplate';
import WhatsAppFirstTemplate from '../templates/WhatsAppFirstTemplate';
import FeminineFlowTemplate from '../templates/FeminineFlowTemplate';

const Preview = () => {
  const navigate = useNavigate();
  const { 
    formData, 
    generatedPageData, 
    generatePageContent,
    setIsPreviewMode,
    customizationMode,
    setCustomizationMode
  } = useLandingForm();

  useEffect(() => {
    // Set preview mode to true
    setIsPreviewMode(true);
    
    // If no generated content exists, create it
    if (!generatedPageData) {
      generatePageContent();
    }
    
    // Clean up when leaving preview
    return () => setIsPreviewMode(false);
  }, [generatedPageData, generatePageContent, setIsPreviewMode]);

  const handleRegenerate = () => {
    generatePageContent();
  };

  const handleExport = () => {
    navigate('/export');
  };

  const handleEdit = () => {
    navigate('/builder');
  };

  const toggleCustomizer = () => {
    setCustomizationMode(!customizationMode);
  };

  const handleSaveAsTemplate = () => {
    // Opens a dialog to save the template (would be implemented in a real app)
    alert('This would open a dialog to name and save your template to your library or community templates.');
  };

  // Render the appropriate template based on user selection
  const renderTemplate = () => {
    if (!generatedPageData) {
      return (
        <div className="flex flex-col items-center justify-center h-64 bg-white rounded-lg shadow-md p-8">
          <div className="animate-spin h-10 w-10 border-4 border-primary-500 rounded-full border-t-transparent mb-4"></div>
          <p className="text-gray-600">Generating your page...</p>
        </div>
      );
    }

    switch (formData.templateChoice) {
      case 'bold-vibrant':
        return <BoldVibriantTemplate formData={formData} pageData={generatedPageData} />;
      case 'sleek-pro':
        return <SleekProTemplate formData={formData} pageData={generatedPageData} />;
      case 'whatsapp-first':
        return <WhatsAppFirstTemplate formData={formData} pageData={generatedPageData} />;
      case 'feminine-flow':
        return <FeminineFlowTemplate formData={formData} pageData={generatedPageData} />;
      case 'modern-minimal':
      case 'modern-corporate':
      case 'modern-startup':
      case 'creative-bold':
      case 'creative-asymmetric':
      case 'creative-portfolio':
      case 'business-conversion':
      case 'business-local':
      case 'business-sleek':
      case 'ecommerce-product':
      case 'ecommerce-boutique':
      case 'ecommerce-deals':
      case 'personal-coach':
      case 'personal-brand':
      case 'personal-blog':
      case 'minimalist-emotion':
      default:
        return <MinimalistTemplate formData={formData} pageData={generatedPageData} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm py-4 sticky top-0 z-20">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-primary-600">OnePage AI</h1>
          <div className="flex space-x-3">
            <button 
              onClick={handleEdit}
              className="btn bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
            >
              Edit Content
            </button>
            <button 
              onClick={toggleCustomizer}
              className={`btn ${
                customizationMode 
                  ? 'bg-secondary-600 text-white hover:bg-secondary-700' 
                  : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
              }`}
            >
              {customizationMode ? 'Hide Customizer' : 'Customize'}
            </button>
            <button 
              onClick={handleRegenerate}
              className="btn bg-white text-primary-600 border border-primary-600 hover:bg-primary-50"
            >
              Regenerate
            </button>
            <button 
              onClick={handleExport}
              className="btn btn-primary"
            >
              Export
            </button>
          </div>
        </div>
      </header>

      {/* Preview Container with Customizer */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Main Preview Panel */}
          <div className={`flex-grow ${customizationMode ? 'md:w-2/3' : 'w-full'}`}>
            <div className="bg-white rounded-lg shadow-md p-4 mb-6">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-lg font-medium text-gray-900 mb-1">Preview Your Landing Page</h2>
                  <p className="text-sm text-gray-600">
                    This is how your landing page will look.
                  </p>
                </div>
                <button
                  onClick={handleSaveAsTemplate}
                  className="btn bg-green-50 text-green-700 border border-green-300 hover:bg-green-100"
                >
                  Save as Template
                </button>
              </div>
            </div>

            {/* Template Preview */}
            <div className="mb-6 bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
              <div className="h-[calc(100vh-220px)] overflow-y-auto">
                {renderTemplate()}
              </div>
            </div>

            {/* Actions */}
            <div className="flex justify-between">
              <button 
                onClick={handleEdit}
                className="btn bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
              >
                Edit Content
              </button>
              <button 
                onClick={handleExport}
                className="btn btn-primary"
              >
                Export Page
              </button>
            </div>
          </div>
          
          {/* Customizer Panel */}
          {customizationMode && (
            <div className="md:w-1/3">
              <CustomizerPanel />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Preview; 