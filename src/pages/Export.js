import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLandingForm } from '../contexts/LandingFormContext';

const Export = () => {
  const navigate = useNavigate();
  const { formData, generatedPageData } = useLandingForm();
  const [exportOption, setExportOption] = useState('html');
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleExport = () => {
    // In a real implementation, this would generate and download
    // the page in the selected format, or deploy it
    
    // Show success message
    setShowSuccessMessage(true);
    
    // Hide message after 3 seconds
    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 3000);
  };

  const goToPreview = () => {
    navigate('/preview');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-primary-600">OnePage AI</h1>
          <button 
            onClick={goToPreview}
            className="text-gray-600 hover:text-primary-600 transition-colors"
          >
            Back to Preview
          </button>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Export Your Landing Page</h1>
          
          {/* Export Options */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4">Choose Export Option</h2>
            
            <div className="space-y-4">
              {/* HTML Option */}
              <div 
                className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${
                  exportOption === 'html' ? 'border-primary-500 bg-primary-50' : 'border-gray-200 hover:border-primary-300'
                }`}
                onClick={() => setExportOption('html')}
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <input 
                      type="radio" 
                      checked={exportOption === 'html'} 
                      onChange={() => setExportOption('html')}
                      className="text-primary-600 focus:ring-primary-500"
                    />
                  </div>
                  <div className="ml-3">
                    <h3 className="font-medium text-gray-900">Download as HTML</h3>
                    <p className="text-gray-500 text-sm">
                      Get a complete HTML file with all CSS and JavaScript included.
                      Host it anywhere you want.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Firebase Option */}
              <div 
                className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${
                  exportOption === 'firebase' ? 'border-primary-500 bg-primary-50' : 'border-gray-200 hover:border-primary-300'
                }`}
                onClick={() => setExportOption('firebase')}
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <input 
                      type="radio" 
                      checked={exportOption === 'firebase'} 
                      onChange={() => setExportOption('firebase')}
                      className="text-primary-600 focus:ring-primary-500"
                    />
                  </div>
                  <div className="ml-3">
                    <h3 className="font-medium text-gray-900">Deploy to Firebase</h3>
                    <p className="text-gray-500 text-sm">
                      Automatically deploy to Firebase Hosting with a custom subdomain.
                      Requires a Firebase account.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* React Component Option */}
              <div 
                className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${
                  exportOption === 'react' ? 'border-primary-500 bg-primary-50' : 'border-gray-200 hover:border-primary-300'
                }`}
                onClick={() => setExportOption('react')}
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <input 
                      type="radio" 
                      checked={exportOption === 'react'} 
                      onChange={() => setExportOption('react')}
                      className="text-primary-600 focus:ring-primary-500"
                    />
                  </div>
                  <div className="ml-3">
                    <h3 className="font-medium text-gray-900">React Component</h3>
                    <p className="text-gray-500 text-sm">
                      Download as a React component that you can integrate into your existing React project.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Export Button */}
            <div className="mt-8">
              <button 
                onClick={handleExport}
                className="btn btn-primary w-full py-3"
              >
                {exportOption === 'html' && 'Download HTML'}
                {exportOption === 'firebase' && 'Deploy to Firebase'}
                {exportOption === 'react' && 'Download React Component'}
              </button>
              
              {/* Success Message */}
              {showSuccessMessage && (
                <div className="mt-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded-md flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  {exportOption === 'html' && 'HTML file downloaded successfully!'}
                  {exportOption === 'firebase' && 'Successfully deployed to Firebase!'}
                  {exportOption === 'react' && 'React component downloaded successfully!'}
                </div>
              )}
            </div>
          </div>
          
          {/* Share Section */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Share Your Creation</h2>
            <p className="text-gray-600 mb-4">
              You built this page without code. Now share it proudly with the world.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <button className="btn bg-blue-600 text-white hover:bg-blue-700 flex items-center justify-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
                Share on Facebook
              </button>
              <button className="btn bg-sky-500 text-white hover:bg-sky-600 flex items-center justify-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
                Share on Twitter
              </button>
              <button className="btn bg-green-600 text-white hover:bg-green-700 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
                Copy Link
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Export; 