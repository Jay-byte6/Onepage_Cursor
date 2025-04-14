import React from 'react';

const TEMPLATES = [
  {
    id: 'minimalist-emotion',
    name: 'Minimalist Emotion',
    icon: '✨',
    description: 'White space, soft colors, storytelling-led',
    idealFor: 'Tutors, Coaches',
    bgColor: 'bg-neutral-50',
    textColor: 'text-neutral-600',
  },
  {
    id: 'bold-vibrant',
    name: 'Bold & Vibrant',
    icon: '🎉',
    description: 'Color blocks, big CTA, scroll-snap',
    idealFor: 'Boutiques, Events',
    bgColor: 'bg-indigo-50',
    textColor: 'text-indigo-600',
  },
  {
    id: 'sleek-pro',
    name: 'Sleek Pro',
    icon: '💼',
    description: 'Elegant fonts, grayscale + brand colors',
    idealFor: 'Agencies, Freelancers',
    bgColor: 'bg-gray-100',
    textColor: 'text-gray-800',
  },
  {
    id: 'whatsapp-first',
    name: 'WhatsApp First',
    icon: '🟢',
    description: 'Sticky chat button, focus on contact',
    idealFor: 'Local service providers',
    bgColor: 'bg-green-50',
    textColor: 'text-green-600',
  },
  {
    id: 'feminine-flow',
    name: 'Feminine Flow',
    icon: '🌸',
    description: 'Soft curves, gradient pastel tones',
    idealFor: 'Beauty, Health, Moms',
    bgColor: 'bg-pink-50',
    textColor: 'text-pink-600',
  },
];

const TemplateSelection = ({ formData, updateFormData }) => {
  const handleTemplateSelection = (templateId) => {
    updateFormData({ templateChoice: templateId });
  };

  return (
    <div>
      <p className="text-gray-600 mb-4">
        Choose a template style that best fits your business. You can modify colors and layout in the preview.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {TEMPLATES.map((template) => (
          <div
            key={template.id}
            className={`
              border-2 rounded-lg p-4 cursor-pointer transition-all
              ${formData.templateChoice === template.id ? 'border-primary-500 shadow-md' : 'border-gray-200 hover:border-primary-300'}
            `}
            onClick={() => handleTemplateSelection(template.id)}
          >
            <div className="flex items-center space-x-4">
              <div className={`h-12 w-12 ${template.bgColor} ${template.textColor} rounded-full flex items-center justify-center text-xl`}>
                {template.icon}
              </div>
              <div>
                <h3 className="font-medium text-gray-900">{template.name}</h3>
                <p className="text-sm text-gray-500">{template.description}</p>
                <p className="text-xs text-gray-400 mt-1">Ideal for: {template.idealFor}</p>
              </div>
            </div>
            
            {formData.templateChoice === template.id && (
              <div className="mt-3 text-primary-600 text-sm font-medium">
                ✓ Selected
              </div>
            )}
          </div>
        ))}
      </div>
      
      <div className="mt-8 bg-gray-50 p-4 rounded-lg border border-gray-200">
        <h3 className="font-medium text-gray-900 mb-2">Template Features</h3>
        <p className="text-sm text-gray-600 mb-3">
          All templates include these core sections:
        </p>
        <ul className="text-sm text-gray-600 space-y-1">
          <li className="flex items-center">
            <span className="text-primary-500 mr-2">✓</span> Hero section with headline and CTA
          </li>
          <li className="flex items-center">
            <span className="text-primary-500 mr-2">✓</span> About your business (storytelling)
          </li>
          <li className="flex items-center">
            <span className="text-primary-500 mr-2">✓</span> Services offered with visual elements
          </li>
          <li className="flex items-center">
            <span className="text-primary-500 mr-2">✓</span> Location and contact information
          </li>
          <li className="flex items-center">
            <span className="text-primary-500 mr-2">✓</span> Testimonials or social proof
          </li>
          <li className="flex items-center">
            <span className="text-primary-500 mr-2">✓</span> Special offer or promotion section
          </li>
          <li className="flex items-center">
            <span className="text-primary-500 mr-2">✓</span> Fully mobile responsive design
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TemplateSelection; 