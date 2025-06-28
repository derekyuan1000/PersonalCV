document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS animation library
    AOS.init();

    // Get all filter buttons and certification cards
    const filterButtons = document.querySelectorAll('.filter-btn');
    const certificationCards = document.querySelectorAll('.certification-card');

    // Add click event listeners to filter buttons
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));

            // Add active class to clicked button
            this.classList.add('active');

            // Get the filter value from data-filter attribute
            const filterValue = this.getAttribute('data-filter');

            // Filter the certification cards
            certificationCards.forEach(card => {
                if (filterValue === 'all') {
                    // Show all cards if 'all' filter is selected
                    card.style.display = 'block';
                } else {
                    // Show cards that match the filter, hide others
                    if (card.getAttribute('data-category') === filterValue) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                }
            });
        });
    });

    // Initialize cards with flipping functionality
    const certCards = document.querySelectorAll('.certification-card');
    certCards.forEach(card => {
        card.addEventListener('click', function() {
            this.classList.toggle('flipped');
        });
    });

    // Animated counting for statistics
    function animateStats() {
        const statNumbers = document.querySelectorAll('.stat-number');

        statNumbers.forEach(statElement => {
            const target = parseInt(statElement.getAttribute('data-target'));
            const duration = 2000; // Animation duration in milliseconds
            const increment = target / (duration / 16); // 60fps
            let current = 0;

            const updateCount = () => {
                if (current < target) {
                    current += increment;
                    statElement.textContent = Math.min(Math.ceil(current), target);
                    requestAnimationFrame(updateCount);
                } else {
                    statElement.textContent = target;
                }
            };

            updateCount();
        });
    }

    // Function to check if element is in viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Trigger stat animation when stats section comes into view
    const statsSection = document.querySelector('.achievement-stats');
    const statsAnimated = false;

    function checkStats() {
        if (statsSection && isInViewport(statsSection) && !statsAnimated) {
            animateStats();
            statsAnimated = true;
        }
    }

    // Check on scroll and initial page load
    window.addEventListener('scroll', checkStats);
    checkStats(); // Check on page load

    // Set current year in footer
    document.getElementById('current-year').textContent = new Date().getFullYear();
});
