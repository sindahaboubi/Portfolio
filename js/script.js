        // Animation pour les services
        document.addEventListener('DOMContentLoaded', function() {
            const servicesSection = document.querySelector('.services-section');
            const serviceCards = document.querySelectorAll('.service-card');
            const projectsSection = document.querySelector('.projects-section');
            const projectCards = document.querySelectorAll('.project-card');
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        if (entry.target.classList.contains('services-section')) {
                            // Animation de la section services
                            entry.target.style.opacity = '1';
                            entry.target.style.transform = 'translateY(0)';
                            
                            // Animation séquentielle des cartes services
                            serviceCards.forEach((card, index) => {
                                setTimeout(() => {
                                    card.style.opacity = '1';
                                    card.style.transform = 'translateY(0)';
                                }, index * 150);
                            });
                        } else if (entry.target.classList.contains('projects-section')) {
                            // Animation de la section projets
                            entry.target.style.opacity = '1';
                            entry.target.style.transform = 'translateY(0)';
                            
                            // Animation séquentielle des cartes projets
                            projectCards.forEach((card, index) => {
                                setTimeout(() => {
                                    card.style.opacity = '1';
                                    card.style.transform = 'translateY(0)';
                                }, index * 200);
                            });
                        }
                    }
                });
            }, { threshold: 0.1 });
            
            // Initial state pour services
            servicesSection.style.opacity = '0';
            servicesSection.style.transform = 'translateY(30px)';
            servicesSection.style.transition = 'all 0.8s ease';
            
            // Initial state pour projets
            projectsSection.style.opacity = '0';
            projectsSection.style.transform = 'translateY(30px)';
            projectsSection.style.transition = 'all 0.8s ease';
            
            observer.observe(servicesSection);
            observer.observe(projectsSection);
            
            // Animation au survol pour les services
            serviceCards.forEach(card => {
                card.addEventListener('mouseenter', () => {
                    card.style.transform = 'translateY(-10px)';
                });
                
                card.addEventListener('mouseleave', () => {
                    if (card.style.opacity === '1') {
                        card.style.transform = 'translateY(0)';
                    }
                });
            });

            // Smooth scroll pour la navigation
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    const target = document.querySelector(this.getAttribute('href'));
                    if (target) {
                        target.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                });
            });
        });
