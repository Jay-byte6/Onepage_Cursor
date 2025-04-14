import React from 'react';

const FormNavigation = ({ onBack, onNext, currentStep, isLastStep }) => {
  return (
    <div className="flex justify-between">
      <button
        type="button"
        onClick={onBack}
        className="btn bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
      >
        {currentStep === 1 ? 'Cancel' : 'Back'}
      </button>
      <button
        type="button"
        onClick={onNext}
        className="btn btn-primary"
      >
        {isLastStep ? 'Generate Page' : 'Continue'}
      </button>
    </div>
  );
};

export default FormNavigation; 