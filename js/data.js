/**
 * Sample Data Structure
 * Netflix Clone - Content Data
 * 
 * This file demonstrates the expected data structure
 * for shows and movies in the application.
 * 
 * Use this as reference for API integration or
 * as sample data for development.
 */

const SAMPLE_SHOWS = [
  {
    id: 1,
    title: 'Stranger Things',
    description: 'When a young boy disappears, his friends, family and local police go on a search for him, and uncover a mystery involving secret government experiments.',
    image: 'https://picsum.photos/300/400?random=1',
    year: 2016,
    rating: 9.5,
    episodes: 34,
    seasons: 5,
    genre: ['Drama', 'Horror', 'Sci-Fi'],
    featured: true,
    heroImage: 'https://picsum.photos/1920/1080?random=1',
    heroVideo: 'https://media.w3.org/2010/05/sintel/trailer.mp4',
  },
  {
    id: 2,
    title: 'Breaking Bad',
    description: 'A high school chemistry teacher turned meth producer teams up with a former student.',
    image: 'https://picsum.photos/300/400?random=2',
    year: 2008,
    rating: 9.5,
    episodes: 62,
    seasons: 5,
    genre: ['Crime', 'Drama', 'Thriller'],
    featured: false,
    trending: true,
  },
  {
    id: 3,
    title: 'The Crown',
    description: 'An inside look at the royal family at the height of their reign.',
    image: 'https://picsum.photos/300/400?random=3',
    year: 2016,
    rating: 8.8,
    episodes: 50,
    seasons: 5,
    genre: ['Biography', 'Drama', 'History'],
    featured: false,
    trending: true,
  },
  {
    id: 4,
    title: 'The Mandalorian',
    description: 'After the stories of Jango and Boba Fett, another warrior emerges in the Star Wars universe.',
    image: 'https://picsum.photos/300/400?random=4',
    year: 2019,
    rating: 8.7,
    episodes: 16,
    seasons: 3,
    genre: ['Action', 'Adventure', 'Sci-Fi'],
    featured: false,
    trending: true,
  },
  {
    id: 5,
    title: 'The Witcher',
    description: 'Geralt of Rivia, a mutated monster-hunter for hire, journeys toward his destiny in a turbulent world.',
    image: 'https://picsum.photos/300/400?random=5',
    year: 2019,
    rating: 8.2,
    episodes: 24,
    seasons: 3,
    genre: ['Action', 'Adventure', 'Drama', 'Fantasy'],
    featured: false,
    trending: true,
  },
  {
    id: 6,
    title: 'Ozark',
    description: 'A financial advisor drags his family from Chicago to the Missouri Ozarks, where he must launder money.',
    image: 'https://picsum.photos/300/400?random=6',
    year: 2017,
    rating: 9.0,
    episodes: 44,
    seasons: 4,
    genre: ['Crime', 'Drama', 'Thriller'],
    featured: false,
    trending: true,
  },
  {
    id: 7,
    title: 'Squid Game',
    description: 'Hundreds of cash-strapped contestants accept an invitation to compete in children\'s games for a massive prize.',
    image: 'https://picsum.photos/300/400?random=7',
    year: 2021,
    rating: 8.0,
    episodes: 9,
    seasons: 2,
    genre: ['Action', 'Drama', 'Mystery', 'Thriller'],
    featured: false,
    newRelease: true,
  },
  {
    id: 8,
    title: 'Wednesday',
    description: 'Wednesday Addams is sent to Nevermore Academy to master her psychic powers while solving a mystery.',
    image: 'https://picsum.photos/300/400?random=8',
    year: 2022,
    rating: 8.1,
    episodes: 8,
    seasons: 1,
    genre: ['Comedy', 'Crime', 'Fantasy', 'Mystery'],
    featured: false,
    newRelease: true,
  },
];

const USER_PROFILE = {
  id: 'user-123',
  username: 'john_doe',
  email: 'john@example.com',
  avatar: 'https://i.pravatar.cc/40?img=1',
  subscriptionTier: 'premium',
  subscriptionExpiry: '2025-12-31',
  watchHistory: [1, 2, 3],
  favoriteShows: [1, 5],
  continueWatching: [
    { showId: 2, episode: 8, season: 3, progress: 65 },
    { showId: 4, episode: 5, season: 2, progress: 30 },
  ],
  preferences: {
    language: 'en',
    subtitles: true,
    autoPlay: true,
    quality: '1080p',
    maturityRating: 'R',
  },
  downloadedContent: [1, 3],
  createdAt: '2023-01-15',
  lastLogin: '2024-05-08',
};

const CAROUSEL_CONFIG = {
  trending: {
    title: 'Trending Now',
    shows: [1, 2, 3, 4, 5, 6],
    autoRefresh: 3600000, // 1 hour
  },
  newReleases: {
    title: 'New & Popular',
    shows: [7, 8],
    autoRefresh: 1800000, // 30 minutes
  },
  top10: {
    title: 'Top 10 in Your Country',
    shows: [1, 2, 3, 4, 5, 6],
    ranking: true,
  },
  continueWatching: {
    title: 'Continue Watching',
    shows: [2, 4],
    personalized: true,
  },
};

const API_ENDPOINTS = {
  // Shows
  getShows: '/api/shows',
  getShowById: '/api/shows/:id',
  getShowDetails: '/api/shows/:id/details',
  getShowEpisodes: '/api/shows/:id/episodes',

  // Users
  getUserProfile: '/api/users/profile',
  updateUserProfile: '/api/users/profile',
  getUserWatchHistory: '/api/users/watch-history',
  addToWatchList: '/api/users/watchlist',
  removeFromWatchList: '/api/users/watchlist/:id',

  // Search
  searchShows: '/api/search',
  getSearchSuggestions: '/api/search/suggestions',

  // Recommendations
  getRecommendations: '/api/recommendations',
  getTrendingShows: '/api/trending',
  getTopRatedShows: '/api/top-rated',

  // Playback
  getPlaybackToken: '/api/playback/token',
  reportPlaybackProgress: '/api/playback/progress',
  getSubtitles: '/api/subtitles/:showId/:episodeId',
};

const ERROR_RESPONSES = {
  notFound: {
    code: 404,
    message: 'Content not found',
    type: 'NOT_FOUND',
  },
  unauthorized: {
    code: 401,
    message: 'Unauthorized access',
    type: 'UNAUTHORIZED',
  },
  forbidden: {
    code: 403,
    message: 'Access forbidden',
    type: 'FORBIDDEN',
  },
  serverError: {
    code: 500,
    message: 'Internal server error',
    type: 'SERVER_ERROR',
  },
  networkError: {
    code: 0,
    message: 'Network connection error',
    type: 'NETWORK_ERROR',
  },
};

// Export data for use in application
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    SAMPLE_SHOWS,
    USER_PROFILE,
    CAROUSEL_CONFIG,
    API_ENDPOINTS,
    ERROR_RESPONSES,
  };
}
