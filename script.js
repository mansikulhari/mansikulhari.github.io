document.addEventListener('DOMContentLoaded', function() {
    // Skills Chart with improved styling and animations
    if (document.getElementById('skillsChart')) {
        const ctx = document.getElementById('skillsChart').getContext('2d');
        
        // Set up Chart.js global defaults
        Chart.defaults.font.family = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, sans-serif';
        Chart.defaults.font.size = 14;
        
        const skillsChart = new Chart(ctx, {
            type: 'radar',
            data: {
                labels: ['Python', 'SQL', 'Data Visualization', 'Machine Learning', 'ETL', 'Statistical Analysis'],
                datasets: [{
                    label: 'Skill Level',
                    data: [95, 90, 88, 85, 80, 85],
                    backgroundColor: 'rgba(133, 183, 255, 0.3)',
                    borderColor: 'rgba(90, 148, 229, 1)',
                    borderWidth: 2,
                    pointBackgroundColor: 'rgba(90, 148, 229, 1)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(90, 148, 229, 1)',
                    pointRadius: 5,
                    pointHoverRadius: 7
                }]
            },
            options: {
                scales: {
                    r: {
                        angleLines: {
                            display: true,
                            color: 'rgba(0, 0, 0, 0.1)'
                        },
                        grid: {
                            color: 'rgba(0, 0, 0, 0.05)'
                        },
                        pointLabels: {
                            font: {
                                size: 12,
                                weight: '600'
                            }
                        },
                        ticks: {
                            display: false,
                            backdropColor: 'transparent'
                        },
                        suggestedMin: 0,
                        suggestedMax: 100
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        backgroundColor: 'rgba(255, 255, 255, 0.9)',
                        titleColor: '#333',
                        bodyColor: '#333',
                        titleFont: {
                            weight: 'bold'
                        },
                        bodyFont: {
                            size: 13
                        },
                        padding: 12,
                        cornerRadius: 8,
                        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                        borderColor: 'rgba(0,0,0,0.05)',
                        borderWidth: 1,
                        displayColors: false,
                        callbacks: {
                            label: function(context) {
                                return context.raw + '%';
                            }
                        }
                    }
                },
                animation: {
                    duration: 2000,
                    easing: 'easeOutQuart'
                }
            }
        });
    }
    
    // Add skill level percentages to progress bars
    document.querySelectorAll('.skill-item').forEach(item => {
        const progress = item.querySelector('.progress');
        const width = progress.style.width;
        const span = item.querySelector('span');
        span.setAttribute('data-value', width);
    });
    
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
        
        // Animate the hamburger menu
        const spans = menuToggle.querySelectorAll('span');
        if (navLinks.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });
    
    // Close menu when clicking on a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function() {
            navLinks.classList.remove('active');
            
            // Reset hamburger menu
            const spans = menuToggle.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!nav.contains(event.target)) {
            navLinks.classList.remove('active');
            
            // Reset hamburger menu
            const spans = menuToggle.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
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
                } else {
                    // Reset when out of view for re-animation
                    entry.target.style.width = '0';
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
    
    // Animate sections on scroll
    const animateSections = document.querySelectorAll('.about, .skills, .projects, .certifications, .contact');
    
    if (animateSections.length > 0) {
        const sectionObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.1 });
        
        animateSections.forEach(section => {
            section.style.opacity = '0';
            section.style.transform = 'translateY(20px)';
            section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            sectionObserver.observe(section);
        });
    }
    
    // Add browser detection
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    if (isSafari) {
        document.body.classList.add('safari');
    }
    
    // Add active class to current section in navigation
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-links a');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === `#${current}`) {
                item.classList.add('active');
            }
        });
    });
});