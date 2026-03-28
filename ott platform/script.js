// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Auto-scrolling carousels
    initCarousels();

    // CTA button interaction
    const ctaBtn = document.querySelector('.cta-btn');
    if (ctaBtn) {
        ctaBtn.addEventListener('click', function() {
            // Simulate login modal or redirect
            alert('Sign in functionality - Connect to your auth system here!');
        });
    }

    // Movie poster click handlers
    document.querySelectorAll('.movie-poster').forEach(poster => {
        poster.addEventListener('click', function() {
            const movieName = this.dataset.movie || this.querySelector('.poster-overlay')?.textContent || 'Movie';
            // Simulate play trailer
            alert(`Now playing: ${movieName.toUpperCase()}
(Integrate with video player API here)`);
        });
    });

    // Channel card interactions
    document.querySelectorAll('.channel-card').forEach(card => {
        card.addEventListener('click', function() {
            const channelName = this.querySelector('span').textContent;
            alert(`Subscribe to ${channelName}
(Integrate subscription flow here)`);
        });
    });

    // Header scroll effect
    let lastScrollY = window.scrollY;
    window.addEventListener('scroll', () => {
        const header = document.querySelector('.header');
        if (window.scrollY > 100) {
            header.style.background = 'rgba(15, 15, 15, 0.98)';
        } else {
            header.style.background = 'rgba(15, 15, 15, 0.95)';
        }
        
        // Hide/show header on scroll direction (mobile)
        if (window.innerWidth <= 768) {
            if (window.scrollY > lastScrollY && window.scrollY > 100) {
                header.style.transform = 'translateY(-100%)';
            } else {
                header.style.transform = 'translateY(0)';
            }
        }
        lastScrollY = window.scrollY;
    });
});

function initCarousels() {
    const carousels = document.querySelectorAll('.carousel');
    
    carousels.forEach((carousel, index) => {
        let scrollPosition = 0;
        const maxScroll = carousel.scrollWidth - carousel.clientWidth;
        
        // Auto-scroll every 4 seconds
        setInterval(() => {
            scrollPosition += carousel.clientWidth * 0.8;
            if (scrollPosition >= maxScroll) {
                scrollPosition = 0;
            }
            carousel.scrollTo({
                left: scrollPosition,
                behavior: 'smooth'
            });
        }, 4000);
        
        // Touch/swipe support for mobile
        let startX = 0;
        carousel.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
        });
        
        carousel.addEventListener('touchend', (e) => {
            const endX = e.changedTouches[0].clientX;
            const diff = startX - endX;
            
            if (Math.abs(diff) > 50) { // Minimum swipe distance
                if (diff > 0) {
                    // Swipe left - scroll right
                    carousel.scrollLeft += carousel.clientWidth * 0.5;
                } else {
                    // Swipe right - scroll left
                    carousel.scrollLeft -= carousel.clientWidth * 0.5;
                }
            }
        });
    });
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe sections for scroll animations
document.querySelectorAll('.content-section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'all 0.6s ease';
    observer.observe(section);
});