/**
 * Netflix Clone - Main JavaScript
 * Author: Development Team
 * Version: 1.0.0
 * Description: Interactive functionality for Netflix-like streaming platform
 */

// ===== DOM Elements =====
const navbar = document.querySelector('.navbar');
const searchInput = document.querySelector('.search-input');
const carousels = document.querySelectorAll('.carousel');
const videoModal = document.getElementById('videoModal');
const modalVideo = document.getElementById('modalVideo');

// ===== Navbar Scroll Effect =====
/**
 * Add scrolled class to navbar when user scrolls down
 */
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ===== Search Functionality =====
/**
 * Search for shows/movies
 */
searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        const searchTerm = searchInput.value.trim();
        if (searchTerm) {
            console.log('Searching for:', searchTerm);
            // Add API call here for real search functionality
        }
    }
});

// ===== Carousel Navigation =====
/**
 * Scroll carousel left or right
 * @param {Event} event - The click event
 * @param {number} direction - Direction to scroll (-1 for left, 1 for right)
 */
function scrollCarousel(event, direction) {
    const button = event.target;
    const container = button.parentElement;
    const carousel = container.querySelector('.carousel');
    
    // Scroll amount
    const scrollAmount = 300;
    
    if (direction === -1) {
        carousel.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
        });
    } else {
        carousel.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    }
}

// ===== Video Modal Functions =====
/**
 * Open video modal and play trailer
 */
function playVideo() {
    if (videoModal) {
        videoModal.classList.add('show');
        modalVideo.play();
        document.body.style.overflow = 'hidden';
    }
}

/**
 * Close video modal
 */
function closeVideo() {
    if (videoModal) {
        videoModal.classList.remove('show');
        modalVideo.pause();
        document.body.style.overflow = 'auto';
    }
}

// ===== Modal Close Handlers =====
/**
 * Close modal when clicking outside of video
 */
videoModal?.addEventListener('click', (e) => {
    if (e.target === videoModal) {
        closeVideo();
    }
});

/**
 * Close modal with Escape key
 */
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeVideo();
    }
});

// ===== Play Button Handlers on Carousel Items =====
/**
 * Add click handlers to all play buttons
 */
document.querySelectorAll('.play-btn').forEach(button => {
    button.addEventListener('click', (e) => {
        e.stopPropagation();
        playVideo();
    });
});

// ===== Carousel Item Click Handlers =====
/**
 * Add click handlers to carousel items
 */
document.querySelectorAll('.carousel-item').forEach(item => {
    item.addEventListener('click', () => {
        console.log('Clicked on show/movie item');
        // Show details modal or navigate to detail page
    });
});

// ===== Touch Support for Mobile =====
/**
 * Add touch support for mobile carousel navigation
 */
let touchStartX = 0;
let touchEndX = 0;

document.querySelectorAll('.carousel').forEach(carousel => {
    carousel.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, false);

    carousel.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, false);

    /**
     * Handle swipe gesture on carousel
     */
    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;

        if (Math.abs(diff) > swipeThreshold) {
            const direction = diff > 0 ? 1 : -1;
            const scrollAmount = 250;
            
            carousel.scrollBy({
                left: scrollAmount * direction,
                behavior: 'smooth'
            });
        }
    }
});

// ===== Navigation Link Active State =====
/**
 * Update active navigation link based on scroll position
 */
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        // Remove active class from all links
        document.querySelectorAll('.nav-link').forEach(l => {
            l.classList.remove('active');
        });
        // Add active class to clicked link
        link.classList.add('active');
    });
});

// ===== User Avatar Dropdown (Placeholder) =====
/**
 * Handle user avatar click
 */
document.querySelector('.user-avatar')?.addEventListener('click', () => {
    console.log('User avatar clicked - show profile menu');
    // Add dropdown menu functionality here
});

// ===== Page Load Optimization =====
/**
 * Initialize page when DOM is ready
 */
document.addEventListener('DOMContentLoaded', () => {
    console.log('Netflix Clone loaded successfully');
    
    // Lazy load images for better performance
    if ('IntersectionObserver' in window) {
        lazyLoadImages();
    }
});

/**
 * Lazy load images using Intersection Observer
 */
function lazyLoadImages() {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ===== Utility Functions =====
/**
 * Format view count
 * @param {number} count - Number of views
 * @returns {string} Formatted view count
 */
function formatViewCount(count) {
    if (count >= 1000000) {
        return (count / 1000000).toFixed(1) + 'M';
    } else if (count >= 1000) {
        return (count / 1000).toFixed(1) + 'K';
    }
    return count;
}

/**
 * Debounce function for scroll and resize events
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in milliseconds
 * @returns {Function} Debounced function
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// ===== Accessibility Improvements =====
/**
 * Add keyboard navigation support
 */
document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        const focused = document.activeElement;
        
        // Trigger play on button focus
        if (focused.classList.contains('play-btn')) {
            playVideo();
        }
    }
});

// ===== Console Logging for Debugging =====
console.log('Netflix Clone v1.0.0 - Loaded');
console.log('Environment:', process.env?.NODE_ENV || 'development');
