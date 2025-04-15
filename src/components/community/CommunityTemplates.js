import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLandingForm } from '../../contexts/LandingFormContext';

const CommunityTemplates = () => {
  const { communityTemplates, useTemplate, userCredits } = useLandingForm();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  // Sample community templates for demonstration (in a real app these would come from the context)
  const sampleTemplates = [
    {
      id: 'com-1',
      name: 'Local Bakery',
      description: 'Perfect for bakeries and pastry shops',
      thumbnailUrl: 'https://images.unsplash.com/photo-1588620257478-62b1e04be043',
      creatorName: 'Emma Smith',
      creatorAvatar: 'https://randomuser.me/api/portraits/women/21.jpg',
      category: 'business',
      usageCount: 124,
      created: '2023-09-15',
      rating: 4.7
    },
    {
      id: 'com-2',
      name: 'Fitness Coach',
      description: 'Ideal for personal trainers and fitness coaches',
      thumbnailUrl: 'https://images.unsplash.com/photo-1594737625785-a6cbdabd333c',
      creatorName: 'Alex Johnson',
      creatorAvatar: 'https://randomuser.me/api/portraits/men/32.jpg',
      category: 'health',
      usageCount: 87,
      created: '2023-10-03',
      rating: 4.5
    },
    {
      id: 'com-3',
      name: 'Wedding Photographer',
      description: 'Elegant template for photography services',
      thumbnailUrl: 'https://images.unsplash.com/photo-1513507086351-1fc4d9b87228',
      creatorName: 'Sarah Williams',
      creatorAvatar: 'https://randomuser.me/api/portraits/women/45.jpg',
      category: 'creative',
      usageCount: 213,
      created: '2023-08-22',
      rating: 4.9
    },
    {
      id: 'com-4',
      name: 'Tech Startup',
      description: 'Modern design for tech companies and startups',
      thumbnailUrl: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4',
      creatorName: 'Mike Chen',
      creatorAvatar: 'https://randomuser.me/api/portraits/men/57.jpg',
      category: 'tech',
      usageCount: 156,
      created: '2023-11-11',
      rating: 4.8
    },
    {
      id: 'com-5',
      name: 'Local Coffee Shop',
      description: 'Cozy design for cafes and coffee shops',
      thumbnailUrl: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24',
      creatorName: 'Jessica Brown',
      creatorAvatar: 'https://randomuser.me/api/portraits/women/33.jpg',
      category: 'business',
      usageCount: 92,
      created: '2023-10-17',
      rating: 4.6
    },
    {
      id: 'com-6',
      name: 'Online Course',
      description: 'Focused on selling educational content',
      thumbnailUrl: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644',
      creatorName: 'David Lee',
      creatorAvatar: 'https://randomuser.me/api/portraits/men/41.jpg',
      category: 'education',
      usageCount: 78,
      created: '2023-09-30',
      rating: 4.4
    },
  ];
  
  // Combine real community templates with sample ones
  const allTemplates = [...communityTemplates, ...sampleTemplates];
  
  // Filter templates based on search and category
  const filteredTemplates = allTemplates.filter(template => {
    const matchesSearch = template.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         template.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || template.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });
  
  // Categories for filtering
  const categories = [
    { id: 'all', name: 'All Templates' },
    { id: 'business', name: 'Business' },
    { id: 'creative', name: 'Creative' },
    { id: 'tech', name: 'Technology' },
    { id: 'health', name: 'Health & Fitness' },
    { id: 'education', name: 'Education' },
  ];
  
  const handleUseTemplate = (templateId) => {
    // In a real app, this would check for credits and use the template
    if (userCredits >= 5) {
      useTemplate(templateId);
    } else {
      alert('You need at least 5 credits to use this template. Please add credits to your account.');
    }
  };
  
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
        <h2 className="text-xl font-bold text-gray-900">Community Templates</h2>
        <p className="text-sm text-gray-600 mt-1">
          Discover and use templates created by the community. You have {userCredits} credits.
        </p>
      </div>
      
      <div className="p-6">
        {/* Search and Filter */}
        <div className="mb-6 flex flex-col md:flex-row gap-4">
          <div className="flex-grow">
            <div className="relative">
              <input
                type="text"
                className="input-field pl-10"
                placeholder="Search templates..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/3">
            <select
              className="input-field"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map(category => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        
        {/* Templates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTemplates.length > 0 ? (
            filteredTemplates.map(template => (
              <motion.div
                key={template.id}
                className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                whileHover={{ y: -5 }}
              >
                <div className="relative h-40 bg-gray-100">
                  <img 
                    src={`${template.thumbnailUrl}?auto=format&fit=crop&w=400&h=200`}
                    alt={template.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-0 left-0 p-2 bg-white bg-opacity-80 rounded-br-lg flex items-center">
                    <img 
                      src={template.creatorAvatar}
                      alt={template.creatorName}
                      className="w-6 h-6 rounded-full mr-1"
                    />
                    <span className="text-xs text-gray-700">{template.creatorName}</span>
                  </div>
                  <div className="absolute top-2 right-2 bg-primary-500 text-white text-xs px-2 py-1 rounded-full">
                    ★ {template.rating}
                  </div>
                </div>
                
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900">{template.name}</h3>
                  <p className="text-sm text-gray-600 mt-1">{template.description}</p>
                  
                  <div className="flex justify-between items-center mt-4">
                    <div className="text-xs text-gray-500">
                      <span>Used {template.usageCount} times</span>
                    </div>
                    <button
                      className="btn bg-primary-100 text-primary-700 hover:bg-primary-200 py-1 px-3 text-sm"
                      onClick={() => handleUseTemplate(template.id)}
                    >
                      Use Template (5 Credits)
                    </button>
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-500">No templates found matching your criteria.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CommunityTemplates; 