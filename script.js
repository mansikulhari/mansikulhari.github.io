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