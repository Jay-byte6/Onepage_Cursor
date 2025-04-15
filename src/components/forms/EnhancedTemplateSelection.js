import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLandingForm } from '../../contexts/LandingFormContext';
import themeData from '../../templates/themes/themeData';

const EnhancedTemplateSelection = () => {
  const { formData, updateFormData } = useLandingForm();
  const [selectedCategory, setSelectedCategory] = useState(formData.themeCategory);
  const [selectedTemplate, setSelectedTemplate] = useState(formData.templateChoice);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    // Select the first template in the category by default
    const firstTemplateId = themeData[category].templates[0].id;
    setSelectedTemplate(firstTemplateId);
    updateFormData({
      themeCategory: category,
      templateChoice: firstTemplateId
    });
  };

  const handleTemplateSelection = (templateId) => {
    setSelectedTemplate(templateId);
    updateFormData({ templateChoice: templateId });
  };

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Choose a Theme Category</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {Object.keys(themeData).map((category) => (
            <div
              key={category}
              className={`
                border-2 rounded-lg p-4 cursor-pointer transition-all
                ${selectedCategory === category ? 'border-primary-500 bg-primary-50' : 'border-gray-200 hover:border-primary-300'}
              `}
              onClick={() => handleCategoryChange(category)}
            >
              <h4 className="font-medium text-lg">{themeData[category].name}</h4>
              <p className="text-sm text-gray-500 mt-1">{themeData[category].description}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Select a Template Design</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {themeData[selectedCategory].templates.map((template) => (
            <motion.div
              key={template.id}
              className={`
                border-2 rounded-lg overflow-hidden cursor-pointer transition-all
                ${selectedTemplate === template.id ? 'border-primary-500 ring-2 ring-primary-200' : 'border-gray-200 hover:border-primary-300'}
              `}
              whileHover={{ y: -5 }}
              onClick={() => handleTemplateSelection(template.id)}
            >
              <div className="h-48 overflow-hidden bg-gray-100">
                <img 
                  src={`${template.thumbnailUrl}?auto=format&fit=crop&w=600&h=300`}
                  alt={template.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h4 className="font-medium text-gray-900">{template.name}</h4>
                <p className="text-sm text-gray-500 mt-1">{template.description}</p>
                
                <div className="mt-3">
                  <h5 className="text-xs font-medium text-gray-700 mb-1">Features</h5>
                  <div className="flex flex-wrap gap-1">
                    {template.features.map((feature, idx) => (
                      <span 
                        key={idx}
                        className="inline-block text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="mt-3">
                  <h5 className="text-xs font-medium text-gray-700 mb-1">Ideal For</h5>
                  <p className="text-xs text-gray-500">{template.idealFor.join(', ')}</p>
                </div>
              </div>
              
              {selectedTemplate === template.id && (
                <div className="p-2 bg-primary-500 text-white text-center">
                  ✓ Selected
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
        <h3 className="font-medium text-gray-900 mb-2">Community Templates</h3>
        <p className="text-sm text-gray-600 mb-3">
          Discover templates created by other users or share your own to earn credits!
        </p>
        <button 
          type="button"
          className="btn bg-gray-100 text-gray-700 hover:bg-gray-200 w-full"
          onClick={() => {/* Navigate to community templates */}}
        >
          Browse Community Templates
        </button>
      </div>
    </div>
  );
};

export default EnhancedTemplateSelection; 