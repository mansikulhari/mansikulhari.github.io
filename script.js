document.addEventListener('DOMContentLoaded', function() {
    // Skills Chart
    if (document.getElementById('skillsChart')) {
        const ctx = document.getElementById('skillsChart').getContext('2d');
        const skillsChart = new Chart(ctx, {
            type: 'radar',
            data: {
                labels: ['Python', 'SQL', 'Data Visualization', 'Machine Learning', 'ETL', 'Statistical Analysis'],
                datasets: [{
                    label: 'Skill Level',
                    data: [95, 90, 88, 85, 80, 85],
                    backgroundColor: 'rgba(65, 105, 225, 0.2)',
                    borderColor: 'rgba(65, 105, 225, 1)',
                    pointBackgroundColor: 'rgba(65, 105, 225, 1)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(65, 105, 225, 1)'
                }]
            },
            options: {
                scales: {
                    r: {
                        angleLines: {
                            display: true
                        },
                        suggestedMin: 0,
                        suggestedMax: 100
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    }
                }
            }
        });
    }

    // Create mobile menu toggle button
    const nav = document.querySelector('.navbar');
    const navContent = document.querySelector('.nav-content');
    const menuToggle = document.createElement('div');
    menuToggle.className = 'menu-toggle';
    
    for (let i = 0; i < 3; i++) {
        const span = document.createElement('span');
        menuToggle.appendChild(span);
    }
    
    // Insert menu toggle before nav links
    const navLinks = document.querySelector('.nav-links');
    navContent.insertBefore(menuToggle, navLinks);
    
    // Toggle menu on click
    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });
    
    // Close menu when clicking on a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function() {
            navLinks.classList.remove('active');
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!nav.contains(event.target)) {
            navLinks.classList.remove('active');
        }
    });

    // Smooth scrolling for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 70, // Account for fixed header
                    behavior: 'smooth'
                });
            }
        });
    });

    // Animate progress bars on scroll
    const progressBars = document.querySelectorAll('.progress');
    
    if (progressBars.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.width = entry.target.getAttribute('data-width');
                    }, 200);
                }
            });
        }, { threshold: 0.1 });

        progressBars.forEach(bar => {
            const width = bar.style.width;
            bar.style.width = '0';
            bar.setAttribute('data-width', width);
            observer.observe(bar);
        });
    }
});