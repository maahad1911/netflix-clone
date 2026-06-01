/**
 * Project Configuration File
 * Netflix Clone - Development Settings
 * 
 * This file contains configuration constants and settings
 * for the Netflix Clone application.
 */

const CONFIG = {
  // Application Settings
  app: {
    name: 'Netflix Clone',
    version: '1.0.0',
    author: 'Development Team',
    description: 'Professional Netflix-like streaming platform UI',
  },

  // API Configuration (Future Use)
  api: {
    baseURL: 'https://api.example.com/v1',
    timeout: 5000,
    retries: 3,
  },

  // Feature Flags
  features: {
    darkMode: false,
    autoPlay: true,
    maturityRatings: true,
    subtitles: true,
    multiLanguage: false,
  },

  // Video Settings
  video: {
    autoplay: true,
    muted: true,
    controls: true,
    preload: 'metadata',
    quality: 'auto', // 'auto', '480p', '720p', '1080p', '4k'
    bitrate: 5000, // kbps
  },

  // UI Settings
  ui: {
    heroHeight: '100vh',
    carouselItemWidth: '280px',
    carouselItemHeight: '400px',
    animationDuration: 300, // ms
    scrollBehavior: 'smooth',
  },

  // Carousel Settings
  carousel: {
    scrollAmount: 300, // pixels
    items: {
      desktop: 6,
      tablet: 4,
      mobile: 2,
    },
    gaps: {
      desktop: '0.5rem',
      tablet: '0.3rem',
      mobile: '0.2rem',
    },
  },

  // Search Settings
  search: {
    minCharacters: 2,
    debounceDelay: 300, // ms
    maxResults: 20,
  },

  // Analytics (Future Use)
  analytics: {
    enabled: true,
    trackingId: 'UA-XXXXXXXXX-X',
    sendBeacon: true,
  },

  // Caching Settings
  cache: {
    enabled: true,
    ttl: 3600000, // 1 hour in ms
  },

  // Responsive Breakpoints
  breakpoints: {
    xs: 0,        // Extra small
    sm: 480,      // Small
    md: 768,      // Medium
    lg: 1024,     // Large
    xl: 1400,     // Extra large
  },

  // Error Messages
  messages: {
    videoNotFound: 'Video not found',
    loadingError: 'Failed to load content',
    networkError: 'Network connection error',
    unsupported: 'Your browser does not support this feature',
  },

  // Logging Settings
  logging: {
    enabled: true,
    level: 'info', // 'debug', 'info', 'warn', 'error'
    console: true,
    remote: false,
  },

  // Development Mode
  isDevelopment: true,
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = CONFIG;
}
