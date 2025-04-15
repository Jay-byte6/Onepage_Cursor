import React, { useState } from 'react';
import { useLandingForm } from '../../contexts/LandingFormContext';
import ColorPicker from './ColorPicker';
import FontSelector from './FontSelector';
import AnimationSelector from './AnimationSelector';
import LayoutOptions from './LayoutOptions';
import GraphicsSelector from './GraphicsSelector';

const CustomizerPanel = () => {
  const { formData, updateCustomization } = useLandingForm();
  const [activeTab, setActiveTab] = useState('colors');

  const tabs = [
    { id: 'colors', label: 'Colors', icon: '🎨' },
    { id: 'fonts', label: 'Typography', icon: 'Aa' },
    { id: 'animations', label: 'Animations', icon: '✨' },
    { id: 'layout', label: 'Layout', icon: '📏' },
    { id: 'graphics', label: 'Graphics', icon: '🖼️' },
  ];

  // Placeholder component to use until we implement the real components
  const PlaceholderComponent = ({ type }) => (
    <div className="p-4 border border-gray-200 rounded-lg bg-gray-50">
      <p className="text-gray-500 text-center py-4">
        {type} Customization Options - Coming Soon
      </p>
    </div>
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case 'colors':
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-gray-900">Color Scheme</h3>
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Primary Color
                </label>
                <div className="flex items-center">
                  <div 
                    className="h-8 w-8 rounded-md mr-2"
                    style={{ backgroundColor: formData.customizations.colors.primary }}
                  ></div>
                  <input
                    type="color"
                    value={formData.customizations.colors.primary}
                    onChange={(e) => updateCustomization('colors', 'primary', e.target.value)}
                    className="h-8"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Secondary Color
                </label>
                <div className="flex items-center">
                  <div 
                    className="h-8 w-8 rounded-md mr-2"
                    style={{ backgroundColor: formData.customizations.colors.secondary }}
                  ></div>
                  <input
                    type="color"
                    value={formData.customizations.colors.secondary}
                    onChange={(e) => updateCustomization('colors', 'secondary', e.target.value)}
                    className="h-8"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Accent Color
                </label>
                <div className="flex items-center">
                  <div 
                    className="h-8 w-8 rounded-md mr-2"
                    style={{ backgroundColor: formData.customizations.colors.accent }}
                  ></div>
                  <input
                    type="color"
                    value={formData.customizations.colors.accent}
                    onChange={(e) => updateCustomization('colors', 'accent', e.target.value)}
                    className="h-8"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Background Color
                </label>
                <div className="flex items-center">
                  <div 
                    className="h-8 w-8 rounded-md mr-2 border border-gray-300"
                    style={{ backgroundColor: formData.customizations.colors.background }}
                  ></div>
                  <input
                    type="color"
                    value={formData.customizations.colors.background}
                    onChange={(e) => updateCustomization('colors', 'background', e.target.value)}
                    className="h-8"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Text Color
                </label>
                <div className="flex items-center">
                  <div 
                    className="h-8 w-8 rounded-md mr-2"
                    style={{ backgroundColor: formData.customizations.colors.text }}
                  ></div>
                  <input
                    type="color"
                    value={formData.customizations.colors.text}
                    onChange={(e) => updateCustomization('colors', 'text', e.target.value)}
                    className="h-8"
                  />
                </div>
              </div>
            </div>
            
            <div className="mt-6">
              <h4 className="text-md font-medium text-gray-800 mb-2">Color Presets</h4>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { name: 'Modern Blue', primary: '#0ea5e9', secondary: '#3b82f6', accent: '#f59e0b' },
                  { name: 'Vibrant Purple', primary: '#8b5cf6', secondary: '#ec4899', accent: '#f43f5e' },
                  { name: 'Earthy Green', primary: '#059669', secondary: '#10b981', accent: '#84cc16' },
                  { name: 'Sleek Gray', primary: '#475569', secondary: '#64748b', accent: '#f97316' },
                  { name: 'Bold Red', primary: '#dc2626', secondary: '#e11d48', accent: '#f97316' },
                  { name: 'Soft Pastel', primary: '#6366f1', secondary: '#c084fc', accent: '#f472b6' },
                ].map((preset, idx) => (
                  <button
                    key={idx}
                    className="p-2 border border-gray-200 rounded-md hover:bg-gray-50"
                    onClick={() => {
                      updateCustomization('colors', 'primary', preset.primary);
                      updateCustomization('colors', 'secondary', preset.secondary);
                      updateCustomization('colors', 'accent', preset.accent);
                    }}
                  >
                    <div className="flex space-x-1 mb-1 justify-center">
                      <div 
                        className="h-4 w-4 rounded-full" 
                        style={{ backgroundColor: preset.primary }}
                      ></div>
                      <div 
                        className="h-4 w-4 rounded-full" 
                        style={{ backgroundColor: preset.secondary }}
                      ></div>
                      <div 
                        className="h-4 w-4 rounded-full" 
                        style={{ backgroundColor: preset.accent }}
                      ></div>
                    </div>
                    <p className="text-xs text-center text-gray-700">{preset.name}</p>
                  </button>
                ))}
              </div>
            </div>
          </div>
        );
        
      case 'fonts':
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-gray-900">Typography</h3>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Heading Font
              </label>
              <select
                className="input-field"
                value={formData.customizations.fonts.heading}
                onChange={(e) => updateCustomization('fonts', 'heading', e.target.value)}
              >
                <option value="Poppins">Poppins</option>
                <option value="Montserrat">Montserrat</option>
                <option value="Playfair Display">Playfair Display</option>
                <option value="Roboto">Roboto</option>
                <option value="Merriweather">Merriweather</option>
                <option value="Open Sans">Open Sans</option>
              </select>
              <p className="mt-1 text-sm text-gray-500">
                Sample: <span style={{ fontFamily: formData.customizations.fonts.heading }}>This is a heading text</span>
              </p>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Body Font
              </label>
              <select
                className="input-field"
                value={formData.customizations.fonts.body}
                onChange={(e) => updateCustomization('fonts', 'body', e.target.value)}
              >
                <option value="Inter">Inter</option>
                <option value="Roboto">Roboto</option>
                <option value="Open Sans">Open Sans</option>
                <option value="Lato">Lato</option>
                <option value="Source Sans Pro">Source Sans Pro</option>
                <option value="Nunito Sans">Nunito Sans</option>
              </select>
              <p className="mt-1 text-sm text-gray-500" style={{ fontFamily: formData.customizations.fonts.body }}>
                This is a sample of body text that would appear on your landing page, showing what your selected font looks like in paragraphs.
              </p>
            </div>
            
            <div className="bg-gray-50 p-3 rounded-md mt-4">
              <h4 className="font-medium text-gray-800 mb-2">Font Pairings</h4>
              <div className="space-y-2">
                {[
                  { name: 'Modern Clean', heading: 'Poppins', body: 'Inter' },
                  { name: 'Classic Elegant', heading: 'Playfair Display', body: 'Source Sans Pro' },
                  { name: 'Professional', heading: 'Montserrat', body: 'Open Sans' },
                  { name: 'Friendly', heading: 'Nunito Sans', body: 'Lato' }
                ].map((pair, idx) => (
                  <button
                    key={idx}
                    className="w-full p-2 text-left border border-gray-200 rounded-md hover:bg-white"
                    onClick={() => {
                      updateCustomization('fonts', 'heading', pair.heading);
                      updateCustomization('fonts', 'body', pair.body);
                    }}
                  >
                    <p className="font-medium text-sm text-gray-800">{pair.name}</p>
                    <div className="flex justify-between mt-1 text-xs">
                      <span style={{ fontFamily: pair.heading }}>{pair.heading}</span>
                      <span style={{ fontFamily: pair.body }}>{pair.body}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        );
        
      case 'animations':
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-gray-900">Animations</h3>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Hero Animation
              </label>
              <select
                className="input-field"
                value={formData.customizations.animations.hero}
                onChange={(e) => updateCustomization('animations', 'hero', e.target.value)}
              >
                <option value="fade">Fade In</option>
                <option value="slideUp">Slide Up</option>
                <option value="slideLeft">Slide From Left</option>
                <option value="slideRight">Slide From Right</option>
                <option value="zoom">Zoom In</option>
                <option value="none">No Animation</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Section Animations
              </label>
              <select
                className="input-field"
                value={formData.customizations.animations.sections}
                onChange={(e) => updateCustomization('animations', 'sections', e.target.value)}
              >
                <option value="slideUp">Slide Up</option>
                <option value="fade">Fade In</option>
                <option value="stagger">Staggered Reveal</option>
                <option value="parallax">Parallax Scroll</option>
                <option value="none">No Animation</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Button Animations
              </label>
              <select
                className="input-field"
                value={formData.customizations.animations.buttons}
                onChange={(e) => updateCustomization('animations', 'buttons', e.target.value)}
              >
                <option value="pulse">Pulse</option>
                <option value="scale">Scale</option>
                <option value="bounce">Bounce</option>
                <option value="glow">Glow</option>
                <option value="none">No Animation</option>
              </select>
            </div>
            
            <div className="bg-gray-50 p-3 rounded-md mt-4">
              <h4 className="font-medium text-gray-800 mb-2">Animation Presets</h4>
              <div className="space-y-2">
                {[
                  { name: 'Subtle Professional', hero: 'fade', sections: 'slideUp', buttons: 'scale' },
                  { name: 'Dynamic & Bold', hero: 'slideLeft', sections: 'stagger', buttons: 'bounce' },
                  { name: 'Smooth & Elegant', hero: 'zoom', sections: 'parallax', buttons: 'glow' },
                  { name: 'Minimal', hero: 'fade', sections: 'fade', buttons: 'none' }
                ].map((preset, idx) => (
                  <button
                    key={idx}
                    className="w-full p-2 text-left border border-gray-200 rounded-md hover:bg-white"
                    onClick={() => {
                      updateCustomization('animations', 'hero', preset.hero);
                      updateCustomization('animations', 'sections', preset.sections);
                      updateCustomization('animations', 'buttons', preset.buttons);
                    }}
                  >
                    <p className="font-medium text-sm">{preset.name}</p>
                    <p className="text-xs text-gray-500 mt-1">
                      Hero: {preset.hero}, Sections: {preset.sections}, Buttons: {preset.buttons}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          </div>
        );
        
      case 'layout':
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-gray-900">Layout Options</h3>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Hero Style
              </label>
              <select
                className="input-field"
                value={formData.customizations.layout.heroStyle}
                onChange={(e) => updateCustomization('layout', 'heroStyle', e.target.value)}
              >
                <option value="centered">Centered</option>
                <option value="leftAlign">Left Aligned</option>
                <option value="rightAlign">Right Aligned</option>
                <option value="splitScreen">Split Screen</option>
                <option value="fullWidth">Full Width</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Service Layout
              </label>
              <select
                className="input-field"
                value={formData.customizations.layout.serviceLayout}
                onChange={(e) => updateCustomization('layout', 'serviceLayout', e.target.value)}
              >
                <option value="grid">Grid</option>
                <option value="list">List</option>
                <option value="cards">Cards</option>
                <option value="features">Feature Blocks</option>
                <option value="columns">Columns</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Testimonial Style
              </label>
              <select
                className="input-field"
                value={formData.customizations.layout.testimonialStyle}
                onChange={(e) => updateCustomization('layout', 'testimonialStyle', e.target.value)}
              >
                <option value="cards">Cards</option>
                <option value="quotes">Quote Blocks</option>
                <option value="carousel">Carousel</option>
                <option value="masonry">Masonry Grid</option>
                <option value="minimalist">Minimalist</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Footer Style
              </label>
              <select
                className="input-field"
                value={formData.customizations.layout.footerStyle}
                onChange={(e) => updateCustomization('layout', 'footerStyle', e.target.value)}
              >
                <option value="standard">Standard</option>
                <option value="minimal">Minimal</option>
                <option value="expanded">Expanded</option>
                <option value="centered">Centered</option>
                <option value="modern">Modern</option>
              </select>
            </div>
            
            <div className="bg-gray-50 p-3 rounded-md mt-4">
              <h4 className="font-medium text-gray-800 mb-2">Layout Presets</h4>
              <div className="space-y-2">
                {[
                  { name: 'Modern Business', heroStyle: 'splitScreen', serviceLayout: 'grid', testimonialStyle: 'carousel', footerStyle: 'modern' },
                  { name: 'Clean Minimal', heroStyle: 'centered', serviceLayout: 'cards', testimonialStyle: 'minimalist', footerStyle: 'minimal' },
                  { name: 'Bold Impact', heroStyle: 'fullWidth', serviceLayout: 'features', testimonialStyle: 'quotes', footerStyle: 'expanded' },
                  { name: 'Classic Professional', heroStyle: 'leftAlign', serviceLayout: 'columns', testimonialStyle: 'cards', footerStyle: 'standard' }
                ].map((preset, idx) => (
                  <button
                    key={idx}
                    className="w-full p-2 text-left border border-gray-200 rounded-md hover:bg-white"
                    onClick={() => {
                      updateCustomization('layout', 'heroStyle', preset.heroStyle);
                      updateCustomization('layout', 'serviceLayout', preset.serviceLayout);
                      updateCustomization('layout', 'testimonialStyle', preset.testimonialStyle);
                      updateCustomization('layout', 'footerStyle', preset.footerStyle);
                    }}
                  >
                    <p className="font-medium text-sm">{preset.name}</p>
                    <p className="text-xs text-gray-500 mt-1 truncate">
                      Hero: {preset.heroStyle}, Services: {preset.serviceLayout}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          </div>
        );
        
      case 'graphics':
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-gray-900">Graphics & Visuals</h3>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Graphic Style
              </label>
              <select
                className="input-field"
                value={formData.customizations.graphics.style}
                onChange={(e) => updateCustomization('graphics', 'style', e.target.value)}
              >
                <option value="minimal">Minimal</option>
                <option value="illustrated">Illustrated</option>
                <option value="photos">Photographic</option>
                <option value="3d">3D Elements</option>
                <option value="geometric">Geometric</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Icon Style
              </label>
              <select
                className="input-field"
                value={formData.customizations.graphics.icons}
                onChange={(e) => updateCustomization('graphics', 'icons', e.target.value)}
              >
                <option value="outlined">Outlined</option>
                <option value="filled">Filled</option>
                <option value="duotone">Duotone</option>
                <option value="colorful">Colorful</option>
                <option value="gradient">Gradient</option>
              </select>
            </div>
            
            <div className="flex items-center mt-3">
              <input
                type="checkbox"
                id="use-illustrations"
                checked={formData.customizations.graphics.illustrations}
                onChange={(e) => updateCustomization('graphics', 'illustrations', e.target.checked)}
                className="h-4 w-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
              />
              <label htmlFor="use-illustrations" className="ml-2 block text-sm text-gray-700">
                Include illustrations in sections
              </label>
            </div>
            
            <div className="mt-4 p-4 bg-gray-50 rounded-md">
              <h4 className="font-medium text-gray-800 mb-3">Demo Background Visuals</h4>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { name: 'Abstract Wave', url: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809' },
                  { name: 'Gradient Mesh', url: 'https://images.unsplash.com/photo-1557682250-33bd709cbe85' },
                  { name: 'Geometric', url: 'https://images.unsplash.com/photo-1550859492-d5da9d8e45f3' },
                  { name: 'Particles', url: 'https://images.unsplash.com/photo-1520121401995-928cd50d4e27' },
                  { name: 'Clean Lines', url: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab' },
                  { name: 'Soft Shapes', url: 'https://images.unsplash.com/photo-1607804678474-77d545da9402' }
                ].map((bg, idx) => (
                  <div key={idx} className="aspect-video rounded-md overflow-hidden cursor-pointer hover:ring-2 hover:ring-primary-500">
                    <img 
                      src={`${bg.url}?auto=format&fit=crop&w=200&h=120`}
                      alt={bg.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
        
      default:
        return <PlaceholderComponent type={activeTab} />;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="px-4 py-3 bg-gray-50 border-b border-gray-200">
        <h2 className="text-lg font-medium text-gray-900">Template Customizer</h2>
        <p className="text-sm text-gray-600">
          Customize your landing page with these powerful options
        </p>
      </div>
      
      <div className="flex border-b border-gray-200">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`
              flex-1 py-3 px-1 text-sm font-medium text-center transition-colors
              ${activeTab === tab.id 
                ? 'text-primary-600 border-b-2 border-primary-500' 
                : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
              }
            `}
            onClick={() => setActiveTab(tab.id)}
          >
            <span className="block text-lg mb-1">{tab.icon}</span>
            <span>{tab.label}</span>
          </button>
        ))}
      </div>
      
      <div className="p-4">
        {renderTabContent()}
      </div>
    </div>
  );
};

export default CustomizerPanel; 