import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLandingForm } from '../contexts/LandingFormContext';

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
    setIsPreviewMode
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
              Edit
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

      {/* Preview Container */}
      <div className="container mx-auto px-4 py-6">
        <div className="bg-white rounded-lg shadow-md p-4 mb-6">
          <h2 className="text-lg font-medium text-gray-900 mb-2">Preview Your Landing Page</h2>
          <p className="text-gray-600 text-sm mb-2">
            This is how your landing page will look. You can make changes by going back to the editor.
          </p>
          <div className="flex items-center text-sm text-primary-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Template: {formData.templateChoice.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}</span>
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
    </div>
  );
};

export default Preview; 