// DOM Elements
const mobileMenuBtn = document.querySelector('.mobile-menu');
const mobileNav = document.querySelector('.mobile-nav');
const mobileMenuPanel = document.querySelector('.mobile-menu-panel');
const connectBtn = document.querySelector('.connect-btn');
const mobileSocialLinks = document.querySelector('.mobile-social-links');

// Show mobile navigation on page load
document.addEventListener('DOMContentLoaded', () => {
    if (window.innerWidth <= 768) {
        mobileNav.classList.add('active');
    }
});

// Toggle mobile menu panel
mobileMenuBtn.addEventListener('click', () => {
    mobileMenuPanel.classList.toggle('active');
    // Update ARIA attributes
    const isExpanded = mobileMenuPanel.classList.contains('active');
    mobileMenuBtn.setAttribute('aria-expanded', isExpanded);
});

// Toggle social links
connectBtn.addEventListener('click', () => {
    if (window.innerWidth <= 768) {
        mobileSocialLinks.classList.toggle('active');
    } else {
        const isVisible = socialLinks.style.display === 'block';
        socialLinks.style.display = isVisible ? 'none' : 'block';
    }
    // Update ARIA attributes
    connectBtn.setAttribute('aria-expanded', 
        mobileSocialLinks.classList.contains('active'));
});

// Close mobile menu panel when clicking outside
document.addEventListener('click', (event) => {
    if (!event.target.closest('.mobile-menu') && 
        !event.target.closest('.mobile-menu-panel')) {
        mobileMenuPanel.classList.remove('active');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
    }
});

// Handle window resize
window.addEventListener('resize', () => {
    if (window.innerWidth <= 768) {
        mobileNav.classList.add('active');
    } else {
        mobileNav.classList.remove('active');
        mobileMenuPanel.classList.remove('active');
        mobileSocialLinks.classList.remove('active');
    }
});

// Add smooth scrolling to all links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
            // Close mobile menu panel after clicking a link
            if (window.innerWidth <= 768) {
                mobileMenuPanel.classList.remove('active');
            }
        }
    });
});