// Theme categories and templates data

const themeData = {
  modern: {
    name: "Modern & Clean",
    description: "Clean, minimalist designs with a focus on typography and whitespace",
    templates: [
      {
        id: "modern-minimal",
        name: "Modern Minimal",
        description: "Clean and minimal with a focus on content",
        thumbnailUrl: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071",
        features: ["Elegant typography", "Plenty of whitespace", "Subtle animations"],
        idealFor: ["Professional services", "Consultants", "Startup companies"]
      },
      {
        id: "modern-corporate",
        name: "Modern Corporate",
        description: "Professional and clean corporate style",
        thumbnailUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
        features: ["Professional layout", "Corporate color schemes", "Clear sections"],
        idealFor: ["Corporations", "Financial services", "Law firms"]
      },
      {
        id: "modern-startup",
        name: "Startup Vibe",
        description: "Energetic and fresh design for startups",
        thumbnailUrl: "https://images.unsplash.com/photo-1523800503107-5bc3ba2a6f81",
        features: ["Bold typography", "Vibrant colors", "Modern illustrations"],
        idealFor: ["Tech startups", "Digital agencies", "Software products"]
      }
    ]
  },
  creative: {
    name: "Creative & Bold",
    description: "Eye-catching designs with unique layouts and vibrant colors",
    templates: [
      {
        id: "creative-bold",
        name: "Bold & Vibrant",
        description: "Eye-catching design with vibrant colors",
        thumbnailUrl: "https://images.unsplash.com/photo-1528372444006-1bfc81acab02",
        features: ["Bold color blocks", "Dynamic layouts", "Scroll animations"],
        idealFor: ["Creative agencies", "Design studios", "Event planners"]
      },
      {
        id: "creative-asymmetric",
        name: "Asymmetric Flow",
        description: "Unique asymmetric layouts with artistic flair",
        thumbnailUrl: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634",
        features: ["Asymmetric layouts", "Artistic elements", "Custom animations"],
        idealFor: ["Artists", "Photographers", "Designers"]
      },
      {
        id: "creative-portfolio",
        name: "Portfolio Showcase",
        description: "Showcase your work with style",
        thumbnailUrl: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5",
        features: ["Gallery layouts", "Custom hover effects", "Portfolio sections"],
        idealFor: ["Freelancers", "Photographers", "Artists"]
      }
    ]
  },
  business: {
    name: "Business & Professional",
    description: "Professional templates optimized for conversions and business growth",
    templates: [
      {
        id: "business-conversion",
        name: "Conversion Pro",
        description: "Optimized for lead generation and conversions",
        thumbnailUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab",
        features: ["Multiple CTAs", "Testimonial showcase", "Trust elements"],
        idealFor: ["SaaS companies", "Marketing agencies", "B2B services"]
      },
      {
        id: "business-local",
        name: "Local Business",
        description: "Perfect for local service businesses",
        thumbnailUrl: "https://images.unsplash.com/photo-1595054121747-5e6d349118d6",
        features: ["Location sections", "Service cards", "Contact methods"],
        idealFor: ["Local shops", "Service providers", "Restaurants"]
      },
      {
        id: "business-sleek",
        name: "Sleek Pro",
        description: "Professional and sophisticated design",
        thumbnailUrl: "https://images.unsplash.com/photo-1497215842964-222b430dc094",
        features: ["Elegant design", "Professional sections", "Corporate feel"],
        idealFor: ["Consultants", "Executive coaches", "Financial services"]
      }
    ]
  },
  ecommerce: {
    name: "eCommerce & Retail",
    description: "Templates designed for selling products and services online",
    templates: [
      {
        id: "ecommerce-product",
        name: "Product Launch",
        description: "Perfect for showcasing and launching products",
        thumbnailUrl: "https://images.unsplash.com/photo-1571867424488-4565932edb41",
        features: ["Product showcases", "Feature highlights", "Purchase CTAs"],
        idealFor: ["Product launches", "Digital products", "Physical goods"]
      },
      {
        id: "ecommerce-boutique",
        name: "Boutique Shop",
        description: "Elegant design for boutique stores",
        thumbnailUrl: "https://images.unsplash.com/photo-1569517282132-25d22f4573e6",
        features: ["Product galleries", "Elegant design", "Shopping sections"],
        idealFor: ["Boutique stores", "Fashion brands", "Luxury products"]
      },
      {
        id: "ecommerce-deals",
        name: "Special Deals",
        description: "Optimized for promotions and special offers",
        thumbnailUrl: "https://images.unsplash.com/photo-1607083206968-13611e3d76db",
        features: ["Discount highlights", "Countdown timers", "Limited offers"],
        idealFor: ["Sales promotions", "Seasonal offers", "Special deals"]
      }
    ]
  },
  personal: {
    name: "Personal & Lifestyle",
    description: "Personal branding templates with charm and character",
    templates: [
      {
        id: "personal-coach",
        name: "Personal Coach",
        description: "Perfect for coaches and mentors",
        thumbnailUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
        features: ["About me sections", "Service packages", "Testimonial gallery"],
        idealFor: ["Life coaches", "Mentors", "Personal trainers"]
      },
      {
        id: "personal-brand",
        name: "Personal Brand",
        description: "Showcase your personal brand with style",
        thumbnailUrl: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea",
        features: ["Personal story", "Brand elements", "Contact sections"],
        idealFor: ["Influencers", "Public speakers", "Authors"]
      },
      {
        id: "personal-blog",
        name: "Lifestyle Blog",
        description: "Share your lifestyle and personal content",
        thumbnailUrl: "https://images.unsplash.com/photo-1495211892979-8da7cc7e2a51",
        features: ["Blog previews", "Social integration", "Subscription forms"],
        idealFor: ["Bloggers", "Content creators", "Social media influencers"]
      }
    ]
  }
};

export default themeData; 