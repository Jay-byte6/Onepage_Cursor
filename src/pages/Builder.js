import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLandingForm } from '../contexts/LandingFormContext';

// Components
import BusinessInfoForm from '../components/forms/BusinessInfoForm';
import EnhancedTemplateSelection from '../components/forms/EnhancedTemplateSelection';
import FormNavigation from '../components/forms/FormNavigation';

const Builder = () => {
  const navigate = useNavigate();
  const { 
    currentStep, 
    setCurrentStep, 
    formData, 
    updateFormData, 
    generatePageContent 
  } = useLandingForm();

  const handleNext = () => {
    if (currentStep === 2) {
      // Last step, generate page content and navigate to preview
      generatePageContent().then(() => {
        navigate('/preview');
      });
    } else {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    } else {
      navigate('/');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-primary-600">OnePage AI</h1>
          <nav>
            <button 
              onClick={() => navigate('/')}
              className="text-gray-600 hover:text-primary-600"
            >
              Cancel
            </button>
          </nav>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          {/* Progress Indicator */}
          <div className="mb-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className={`h-8 w-8 rounded-full flex items-center justify-center ${
                  currentStep >= 1 ? 'bg-primary-600 text-white' : 'bg-gray-200 text-gray-500'
                }`}>
                  1
                </div>
                <div className={`h-1 w-12 ${
                  currentStep >= 2 ? 'bg-primary-600' : 'bg-gray-200'
                }`}></div>
                <div className={`h-8 w-8 rounded-full flex items-center justify-center ${
                  currentStep >= 2 ? 'bg-primary-600 text-white' : 'bg-gray-200 text-gray-500'
                }`}>
                  2
                </div>
              </div>
              <div className="text-sm font-medium text-gray-500">
                Step {currentStep} of 2
              </div>
            </div>
          </div>

          {/* Form Title */}
          <h1 className="text-3xl font-bold mb-6">
            {currentStep === 1 ? 'Business Information' : 'Choose a Template'}
          </h1>

          {/* Form Content */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            {currentStep === 1 ? (
              <BusinessInfoForm formData={formData} updateFormData={updateFormData} />
            ) : (
              <EnhancedTemplateSelection />
            )}
          </div>

          {/* Navigation */}
          <FormNavigation 
            onBack={handleBack} 
            onNext={handleNext} 
            currentStep={currentStep}
            isLastStep={currentStep === 2}
          />
        </div>
      </div>
    </div>
  );
};

export default Builder; 