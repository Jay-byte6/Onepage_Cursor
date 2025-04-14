import React, { useState } from 'react';

const BUSINESS_TYPES = [
  'Bakery',
  'Gym',
  'Tuition',
  'Coaching',
  'Ecommerce',
  'Services',
  'Others'
];

const BusinessInfoForm = ({ formData, updateFormData }) => {
  const [services, setServices] = useState(formData.services.join(', '));
  
  const handleServiceChange = (e) => {
    setServices(e.target.value);
    const servicesArray = e.target.value.split(',').map(service => service.trim()).filter(Boolean);
    updateFormData({ services: servicesArray });
  };
  
  const handleFileChange = (e, field) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      updateFormData({ [field]: file });
    }
  };
  
  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Business Name*
        </label>
        <input
          type="text"
          className="input-field"
          value={formData.businessName}
          onChange={(e) => updateFormData({ businessName: e.target.value })}
          required
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Logo (Optional)
        </label>
        <div className="flex items-center space-x-4">
          {formData.logo && (
            <div className="h-12 w-12 rounded-md border border-gray-300 flex items-center justify-center overflow-hidden">
              <img 
                src={URL.createObjectURL(formData.logo)} 
                alt="Logo Preview" 
                className="max-h-full max-w-full"
              />
            </div>
          )}
          <input
            type="file"
            className="block w-full text-sm text-gray-500
              file:mr-4 file:py-2 file:px-4
              file:rounded-full file:border-0
              file:text-sm file:font-semibold
              file:bg-primary-50 file:text-primary-700
              hover:file:bg-primary-100"
            accept="image/*"
            onChange={(e) => handleFileChange(e, 'logo')}
          />
        </div>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Tagline (Optional)
        </label>
        <input
          type="text"
          className="input-field"
          placeholder="Leave blank to auto-generate"
          value={formData.tagline}
          onChange={(e) => updateFormData({ tagline: e.target.value })}
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          About Business*
        </label>
        <textarea
          className="input-field h-24"
          value={formData.aboutBusiness}
          onChange={(e) => updateFormData({ aboutBusiness: e.target.value })}
          placeholder="Describe your business, values, and what makes you unique"
          required
        ></textarea>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Location*
          </label>
          <input
            type="text"
            className="input-field"
            placeholder="City or region"
            value={formData.location}
            onChange={(e) => updateFormData({ location: e.target.value })}
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            WhatsApp Contact Number*
          </label>
          <input
            type="tel"
            className="input-field"
            placeholder="+1 234 567 8900"
            value={formData.whatsappNumber}
            onChange={(e) => updateFormData({ whatsappNumber: e.target.value })}
            required
          />
        </div>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Services Offered*
        </label>
        <textarea
          className="input-field"
          placeholder="Enter services separated by commas (e.g., Haircut, Styling, Coloring)"
          value={services}
          onChange={handleServiceChange}
          required
        ></textarea>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Type of Business*
          </label>
          <select
            className="input-field"
            value={formData.businessType}
            onChange={(e) => updateFormData({ businessType: e.target.value })}
            required
          >
            <option value="">Select a business type</option>
            {BUSINESS_TYPES.map((type) => (
              <option key={type} value={type.toLowerCase()}>
                {type}
              </option>
            ))}
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Target Audience*
          </label>
          <input
            type="text"
            className="input-field"
            placeholder="e.g., Mothers, Students, Local Residents"
            value={formData.targetAudience}
            onChange={(e) => updateFormData({ targetAudience: e.target.value })}
            required
          />
        </div>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Banner Image (Optional)
        </label>
        <div>
          {formData.bannerImage && (
            <div className="mb-2 h-32 rounded-md border border-gray-300 flex items-center justify-center overflow-hidden">
              <img 
                src={URL.createObjectURL(formData.bannerImage)} 
                alt="Banner Preview" 
                className="max-h-full max-w-full object-cover"
              />
            </div>
          )}
          <input
            type="file"
            className="block w-full text-sm text-gray-500
              file:mr-4 file:py-2 file:px-4
              file:rounded-full file:border-0
              file:text-sm file:font-semibold
              file:bg-primary-50 file:text-primary-700
              hover:file:bg-primary-100"
            accept="image/*"
            onChange={(e) => handleFileChange(e, 'bannerImage')}
          />
          <p className="text-xs text-gray-500 mt-1">
            Leave empty to use a stock photo based on your business type
          </p>
        </div>
      </div>
    </div>
  );
};

export default BusinessInfoForm; 