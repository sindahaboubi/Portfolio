// Fonctionnalité pour le modal du projet
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('project-modal');
    const closeModal = document.getElementById('modal-close');
    const modalSecondaryBtn = document.querySelector('.modal-btn-secondary');
    
    // Trouver le bouton "Voir projet" du premier projet (PlanifyMe)
    const planifyMeButton = document.querySelector('.project-card:first-child .project-button');
    
    // Ouvrir le modal quand on clique sur le bouton du premier projet
    if (planifyMeButton) {
        planifyMeButton.addEventListener('click', function() {
            modal.classList.add('active');
            document.body.style.overflow = 'hidden'; // Empêcher le défilement
        });
    }
    
    // Fermer le modal
    function closeModalFunction() {
        modal.classList.remove('active');
        document.body.style.overflow = ''; // Rétablir le défilement
    }
        
    if (closeModal) {
        closeModal.addEventListener('click', closeModalFunction);
    }
    
    if (modalSecondaryBtn) {
        modalSecondaryBtn.addEventListener('click', closeModalFunction);
    }
    
    // Fermer le modal en cliquant à l'extérieur
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModalFunction();
        }
    });
    
    // Fermer avec la touche Échap
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModalFunction();
        }
    });
});

// Modifiez votre code JavaScript existant comme suit:

document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('project-modal');
    const closeModal = document.getElementById('modal-close');
    const modalSecondaryBtn = document.querySelector('.modal-btn-secondary');
    const modalContainer = document.querySelector('.modal-container');
    const modalContent = document.querySelector('.modal-content');
    
    // Trouver le bouton "Voir projet" du premier projet (PlanifyMe)
    const planifyMeButton = document.querySelector('.project-card:first-child .project-button');
    
    // Ouvrir le modal quand on clique sur le bouton du premier projet
    if (planifyMeButton) {
        planifyMeButton.addEventListener('click', function() {
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
            
            // Activer les animations des éléments du modal
            setTimeout(() => {
                modalContent.classList.add('animated');
            }, 100);
        });
    }
    
    // Fermer le modal
    function closeModalFunction() {
        modalContent.classList.remove('animated');
        modalContainer.classList.add('closing');
        
        setTimeout(() => {
            modal.classList.remove('active');
            modalContainer.classList.remove('closing');
            document.body.style.overflow = '';
        }, 400); // Correspond à la durée de l'animation de sortie
    }
        
    if (closeModal) {
        closeModal.addEventListener('click', closeModalFunction);
    }
    
    if (modalSecondaryBtn) {
        modalSecondaryBtn.addEventListener('click', closeModalFunction);
    }
    
    // Fermer le modal en cliquant à l'extérieur
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModalFunction();
        }
    });
    
    // Fermer avec la touche Échap
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModalFunction();
        }
    });
    
    // Lightbox pour les screenshots
    const screenshots = document.querySelectorAll('.modal-screenshot');
    const lightbox = document.createElement('div');
    lightbox.className = 'screenshot-lightbox';
    lightbox.innerHTML = `
        <span class="lightbox-close">×</span>
        <img class="lightbox-image" src="" alt="Agrandissement capture d'écran">
    `;
    document.body.appendChild(lightbox);
    
    const lightboxImage = lightbox.querySelector('.lightbox-image');
    const lightboxClose = lightbox.querySelector('.lightbox-close');
    
    screenshots.forEach(screenshot => {
        screenshot.addEventListener('click', function() {
            lightboxImage.src = this.src;
            lightbox.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });
    
    lightboxClose.addEventListener('click', function() {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    });
    
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            lightbox.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
    
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && lightbox.classList.contains('active')) {
            lightbox.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
});


// Ajoutez ce code dans votre section JavaScript existante

// Fonctionnalité pour le modal CVolution
const cvolutionModal = document.getElementById('cvolution-modal');
const closeCVolutionModal = document.getElementById('cvolution-modal-close');
const cvolutionButton = document.getElementById('cvolution-btn');
const cvolutionModalSecondaryBtn = cvolutionModal.querySelector('.modal-btn-secondary');

// Ouvrir le modal CVolution
if (cvolutionButton) {
    cvolutionButton.addEventListener('click', function() {
        cvolutionModal.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        // Activer les animations des éléments du modal
        setTimeout(() => {
            cvolutionModal.querySelector('.modal-content').classList.add('animated');
        }, 100);
    });
}

// Fermer le modal CVolution
function closeCVolutionModalFunction() {
    cvolutionModal.querySelector('.modal-content').classList.remove('animated');
    cvolutionModal.querySelector('.modal-container').classList.add('closing');
    
    setTimeout(() => {
        cvolutionModal.classList.remove('active');
        cvolutionModal.querySelector('.modal-container').classList.remove('closing');
        document.body.style.overflow = '';
    }, 400);
}

if (closeCVolutionModal) {
    closeCVolutionModal.addEventListener('click', closeCVolutionModalFunction);
}

if (cvolutionModalSecondaryBtn) {
    cvolutionModalSecondaryBtn.addEventListener('click', closeCVolutionModalFunction);
}

// Fermer le modal en cliquant à l'extérieur
cvolutionModal.addEventListener('click', function(e) {
    if (e.target === cvolutionModal) {
        closeCVolutionModalFunction();
    }
});

// Fermer avec la touche Échap
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && cvolutionModal.classList.contains('active')) {
        closeCVolutionModalFunction();
    }
});


// Fonctionnalité pour le modal MemoMe
const memomeModal = document.getElementById('memome-modal');
const closeMemomeModal = document.getElementById('memome-modal-close');
const memomeButton = document.querySelector('.project-card:nth-child(3) .project-button'); // 3ème projet = MemoMe
const memomeModalSecondaryBtn = memomeModal.querySelector('.modal-btn-secondary');

// Ajouter un ID au bouton MemoMe pour le cibler plus facilement
if (memomeButton) {
    memomeButton.id = 'memome-btn';
    
    // Ouvrir le modal MemoMe
    memomeButton.addEventListener('click', function() {
        memomeModal.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        // Activer les animations des éléments du modal
        setTimeout(() => {
            memomeModal.querySelector('.modal-content').classList.add('animated');
        }, 100);
    });
}

// Fermer le modal MemoMe
function closeMemomeModalFunction() {
    memomeModal.querySelector('.modal-content').classList.remove('animated');
    memomeModal.querySelector('.modal-container').classList.add('closing');
    
    setTimeout(() => {
        memomeModal.classList.remove('active');
        memomeModal.querySelector('.modal-container').classList.remove('closing');
        document.body.style.overflow = '';
    }, 400);
}

if (closeMemomeModal) {
    closeMemomeModal.addEventListener('click', closeMemomeModalFunction);
}

if (memomeModalSecondaryBtn) {
    memomeModalSecondaryBtn.addEventListener('click', closeMemomeModalFunction);
}

// Fermer le modal en cliquant à l'extérieur
memomeModal.addEventListener('click', function(e) {
    if (e.target === memomeModal) {
        closeMemomeModalFunction();
    }
});

// Fermer avec la touche Échap
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && memomeModal.classList.contains('active')) {
        closeMemomeModalFunction();
    }
});


// Fonctionnalité pour le modal TickTask
const ticktaskModal = document.getElementById('ticktask-modal');
const closeTicktaskModal = document.getElementById('ticktask-modal-close');
const ticktaskButton = document.querySelector('.project-card:nth-child(4) .project-button'); // 4ème projet = TickTask
const ticktaskModalSecondaryBtn = ticktaskModal.querySelector('.modal-btn-secondary');

// Ajouter un ID au bouton TickTask pour le cibler plus facilement
if (ticktaskButton) {
    ticktaskButton.id = 'ticktask-btn';
    
    // Ouvrir le modal TickTask
    ticktaskButton.addEventListener('click', function() {
        ticktaskModal.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        // Activer les animations des éléments du modal
        setTimeout(() => {
            ticktaskModal.querySelector('.modal-content').classList.add('animated');
        }, 100);
    });
}

// Fermer le modal TickTask
function closeTicktaskModalFunction() {
    ticktaskModal.querySelector('.modal-content').classList.remove('animated');
    ticktaskModal.querySelector('.modal-container').classList.add('closing');
    
    setTimeout(() => {
        ticktaskModal.classList.remove('active');
        ticktaskModal.querySelector('.modal-container').classList.remove('closing');
        document.body.style.overflow = '';
    }, 400);
}

if (closeTicktaskModal) {
    closeTicktaskModal.addEventListener('click', closeTicktaskModalFunction);
}

if (ticktaskModalSecondaryBtn) {
    ticktaskModalSecondaryBtn.addEventListener('click', closeTicktaskModalFunction);
}

// Fermer le modal en cliquant à l'extérieur
ticktaskModal.addEventListener('click', function(e) {
    if (e.target === ticktaskModal) {
        closeTicktaskModalFunction();
    }
});

// Fermer avec la touche Échap
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && ticktaskModal.classList.contains('active')) {
        closeTicktaskModalFunction();
    }
});


// Fonctionnalité pour le modal AppStorage
const appstorageModal = document.getElementById('appstorage-modal');
const closeAppstorageModal = document.getElementById('appstorage-modal-close');
const appstorageButton = document.querySelector('.project-card:nth-child(5) .project-button'); // 5ème projet = AppStorage
const appstorageModalSecondaryBtn = appstorageModal.querySelector('.modal-btn-secondary');

// Ajouter un ID au bouton AppStorage pour le cibler plus facilement
if (appstorageButton) {
    appstorageButton.id = 'appstorage-btn';
    
    // Ouvrir le modal AppStorage
    appstorageButton.addEventListener('click', function() {
        appstorageModal.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        // Activer les animations des éléments du modal
        setTimeout(() => {
            appstorageModal.querySelector('.modal-content').classList.add('animated');
        }, 100);
    });
}

// Fermer le modal AppStorage
function closeAppstorageModalFunction() {
    appstorageModal.querySelector('.modal-content').classList.remove('animated');
    appstorageModal.querySelector('.modal-container').classList.add('closing');
    
    setTimeout(() => {
        appstorageModal.classList.remove('active');
        appstorageModal.querySelector('.modal-container').classList.remove('closing');
        document.body.style.overflow = '';
    }, 400);
}

if (closeAppstorageModal) {
    closeAppstorageModal.addEventListener('click', closeAppstorageModalFunction);
}

if (appstorageModalSecondaryBtn) {
    appstorageModalSecondaryBtn.addEventListener('click', closeAppstorageModalFunction);
}

// Fermer le modal en cliquant à l'extérieur
appstorageModal.addEventListener('click', function(e) {
    if (e.target === appstorageModal) {
        closeAppstorageModalFunction();
    }
});

// Fermer avec la touche Échap
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && appstorageModal.classList.contains('active')) {
        closeAppstorageModalFunction();
    }
});


// Fonctionnalité pour le modal TunisiaHope
const tunisiahopeModal = document.getElementById('tunisiahope-modal');
const closeTunisiahopeModal = document.getElementById('tunisiahope-modal-close');
const tunisiahopeButton = document.getElementById('tunisiahope-btn');
const tunisiahopeModalSecondaryBtn = tunisiahopeModal.querySelector('.modal-btn-secondary');

// Ouvrir le modal TunisiaHope
if (tunisiahopeButton) {
    tunisiahopeButton.addEventListener('click', function() {
        tunisiahopeModal.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        // Activer les animations des éléments du modal
        setTimeout(() => {
            tunisiahopeModal.querySelector('.modal-content').classList.add('animated');
        }, 100);
    });
}

// Fermer le modal TunisiaHope
function closeTunisiahopeModalFunction() {
    tunisiahopeModal.querySelector('.modal-content').classList.remove('animated');
    tunisiahopeModal.querySelector('.modal-container').classList.add('closing');
    
    setTimeout(() => {
        tunisiahopeModal.classList.remove('active');
        tunisiahopeModal.querySelector('.modal-container').classList.remove('closing');
        document.body.style.overflow = '';
    }, 400);
}

if (closeTunisiahopeModal) {
    closeTunisiahopeModal.addEventListener('click', closeTunisiahopeModalFunction);
}

if (tunisiahopeModalSecondaryBtn) {
    tunisiahopeModalSecondaryBtn.addEventListener('click', closeTunisiahopeModalFunction);
}

// Fermer le modal en cliquant à l'extérieur
tunisiahopeModal.addEventListener('click', function(e) {
    if (e.target === tunisiahopeModal) {
        closeTunisiahopeModalFunction();
    }
});

// Fermer avec la touche Échap
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && tunisiahopeModal.classList.contains('active')) {
        closeTunisiahopeModalFunction();
    }
});

// Fonctionnalité pour le modal PharmaHouse
const pharmahouseModal = document.getElementById('pharmahouse-modal');
const closePharmahouseModal = document.getElementById('pharmahouse-modal-close');
const pharmahouseButton = document.getElementById('pharmahouse-btn');
const pharmahouseModalSecondaryBtn = pharmahouseModal.querySelector('.modal-btn-secondary');

// Ouvrir le modal PharmaHouse
if (pharmahouseButton) {
    pharmahouseButton.addEventListener('click', function() {
        pharmahouseModal.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        // Activer les animations des éléments du modal
        setTimeout(() => {
            pharmahouseModal.querySelector('.modal-content').classList.add('animated');
        }, 100);
    });
}

// Fermer le modal PharmaHouse
function closePharmahouseModalFunction() {
    pharmahouseModal.querySelector('.modal-content').classList.remove('animated');
    pharmahouseModal.querySelector('.modal-container').classList.add('closing');
    
    setTimeout(() => {
        pharmahouseModal.classList.remove('active');
        pharmahouseModal.querySelector('.modal-container').classList.remove('closing');
        document.body.style.overflow = '';
    }, 400);
}

if (closePharmahouseModal) {
    closePharmahouseModal.addEventListener('click', closePharmahouseModalFunction);
}

if (pharmahouseModalSecondaryBtn) {
    pharmahouseModalSecondaryBtn.addEventListener('click', closePharmahouseModalFunction);
}

// Fermer le modal en cliquant à l'extérieur
pharmahouseModal.addEventListener('click', function(e) {
    if (e.target === pharmahouseModal) {
        closePharmahouseModalFunction();
    }
});

// Fermer avec la touche Échap
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && pharmahouseModal.classList.contains('active')) {
        closePharmahouseModalFunction();
    }
});
// Fonctionnalité pour le modal ProJiro
const projiroModal = document.getElementById('projiro-modal');
const closeProjiroModal = document.getElementById('projiro-modal-close');
const projiroButton = document.getElementById('projiro-btn');
const projiroModalSecondaryBtn = projiroModal.querySelector('.modal-btn-secondary');

    
    // Ouvrir le modal ProJiro
    projiroButton.addEventListener('click', function() {
        projiroModal.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        setTimeout(() => {
            projiroModal.querySelector('.modal-content').classList.add('animated');
        }, 100);
    });

// Fermer le modal ProJiro
function closeProjiroModalFunction() {
    projiroModal.querySelector('.modal-content').classList.remove('animated');
    projiroModal.querySelector('.modal-container').classList.add('closing');
    
    setTimeout(() => {
        projiroModal.classList.remove('active');
        projiroModal.querySelector('.modal-container').classList.remove('closing');
        document.body.style.overflow = '';
    }, 400);
}

if (closeProjiroModal) {
    closeProjiroModal.addEventListener('click', closeProjiroModalFunction);
}

if (projiroModalSecondaryBtn) {
    projiroModalSecondaryBtn.addEventListener('click', closeProjiroModalFunction);
}

projiroModal.addEventListener('click', function(e) {
    if (e.target === projiroModal) {
        closeProjiroModalFunction();
    }
});

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && projiroModal.classList.contains('active')) {
        closeProjiroModalFunction();
    }
});

// Fonctionnalité pour le modal Stage de perfectionnement
const stageModal = document.getElementById('stage-modal');
const closeStageModal = document.getElementById('stage-modal-close');
const stageButton = document.querySelector('.project-card:nth-child(9) .project-button'); // 9ème projet = Stage
const stageModalSecondaryBtn = stageModal.querySelector('.modal-btn-secondary');

// Ajouter un ID au bouton Stage
if (stageButton) {
    stageButton.id = 'stage-btn';
    
    // Ouvrir le modal Stage
    stageButton.addEventListener('click', function() {
        stageModal.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        setTimeout(() => {
            stageModal.querySelector('.modal-content').classList.add('animated');
        }, 100);
    });
}

// Fermer le modal Stage
function closeStageModalFunction() {
    stageModal.querySelector('.modal-content').classList.remove('animated');
    stageModal.querySelector('.modal-container').classList.add('closing');
    
    setTimeout(() => {
        stageModal.classList.remove('active');
        stageModal.querySelector('.modal-container').classList.remove('closing');
        document.body.style.overflow = '';
    }, 400);
}

if (closeStageModal) {
    closeStageModal.addEventListener('click', closeStageModalFunction);
}

if (stageModalSecondaryBtn) {
    stageModalSecondaryBtn.addEventListener('click', closeStageModalFunction);
}

stageModal.addEventListener('click', function(e) {
    if (e.target === stageModal) {
        closeStageModalFunction();
    }
});

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && stageModal.classList.contains('active')) {
        closeStageModalFunction();
    }
});

// Animation des barres de compétences linguistiques
document.addEventListener('DOMContentLoaded', function() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const languageBars = entry.target.querySelectorAll('.language-fill');
                languageBars.forEach(bar => {
                    // Réinitialiser l'animation
                    bar.style.width = '0';
                    setTimeout(() => {
                        bar.style.width = bar.getAttribute('data-width') || bar.style.width;
                    }, 100);
                });
            }
        });
    }, { threshold: 0.5 });

    // Observer la section des langues
    const languagesSection = document.getElementById('languages');
    if (languagesSection) {
        observer.observe(languagesSection);
    }
    
    // Définir les largeurs initiales pour les barres de langue
    document.querySelectorAll('.language-fill').forEach(bar => {
        const computedWidth = window.getComputedStyle(bar).width;
        bar.setAttribute('data-width', computedWidth);
        bar.style.width = '0'; // Commencer à 0 pour l'animation
    });
});


// services.js
const servicesData = {
    "services": [
        {
            "title": "Test logiciel (QA)",
             "icon": "fa-solid fa-check", 
            "items": [
                "Tests fonctionnels manuels pour applications web et mobile",
                "Rédaction de cas de test, plans de tests et rapports d'anomalies",
                "Tests automatisés avec Selenium",
                "Suivi des bugs via Jira"
            ]
        },
        {
            "title": "Développement Web",
            "icon": "fa-solid fa-code",
            "items": [
                "Conception et création d'applications web",
                "Développement front et back-end",
                "Utilisation de bases de données"
            ]
        },
        {
            "title": "Développement Mobile",
            "icon": "fa-solid fa-mobile-screen",
            "items": [
                "Conception et développement d'applications Android avec Android Studio"
            ]
        },
        {
            "title": "Architectures",
            "icon": "fa-solid fa-sitemap",
            "items": [
                "Conception d'architectures microservices et MVC",
                "Création et consommation de Web Services REST/SOAP"
            ]
        },
        {
            "title": "Gestion de projets",
            "icon": "fa-solid fa-tasks",
            "items": [
                "Suivi de projets avec SCRUM et méthode Cascade",
                "Organisation des tâches avec Jira"
            ]
        }
    ]
};

// Fonction pour générer les cartes de services
function generateServicesCards() {
    const servicesGrid = document.querySelector('.services-grid');
    
    // Première ligne (3 cartes)
    const firstRow = document.createElement('div');
    firstRow.className = 'services-row';
    
    // Deuxième ligne (2 cartes centrées)
    const secondRow = document.createElement('div');
    secondRow.className = 'services-row centered';
    
    // Ajouter les cartes aux lignes appropriées
    servicesData.services.forEach((service, index) => {
        const serviceCard = document.createElement('div');
        serviceCard.className = 'service-card';
            
    serviceCard.innerHTML = `
        <h3><i class="${service.icon}" style="margin-right: 10px;"></i>${service.title}</h3>
        <ul class="service-list">
            ${service.items.map(item => `<li>${item}</li>`).join('')}
        </ul>
    `;
            
        if (index < 3) {
            firstRow.appendChild(serviceCard);
        } else {
            secondRow.appendChild(serviceCard);
        }
    });
    
    // Vider le contenu existant et ajouter les nouvelles lignes
    servicesGrid.innerHTML = '';
    servicesGrid.appendChild(firstRow);
    servicesGrid.appendChild(secondRow);
}

// Exécuter la génération des services quand le DOM est chargé
document.addEventListener('DOMContentLoaded', generateServicesCards);


const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navbar");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

// Fermer menu quand on clique sur un lien
document.querySelectorAll(".nav-menu a").forEach(link => {
    link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    });
});
// Fermer le menu déroulant en cliquant ailleurs
document.addEventListener('click', function(event) {
    const dropdowns = document.getElementsByClassName('dropdown-content');
    for (let i = 0; i < dropdowns.length; i++) {
        const openDropdown = dropdowns[i];
        if (openDropdown.style.display === 'block' && !event.target.matches('.dropbtn')) {
            openDropdown.style.display = 'none';
        }
    }
});


// Animation de navigation fluide
document.addEventListener('DOMContentLoaded', function() {
    // Sélectionner tous les liens de navigation
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    
    // Ajouter un écouteur d'événement à chaque lien
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Obtenir l'ID de la cible à partir de l'attribut href
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                // Calculer la position de la section cible
                const targetPosition = targetSection.offsetTop - 80; // Ajuster pour le header
                
                // Animation fluide vers la section
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Fermer le menu hamburger si ouvert (optionnel)
                const hamburger = document.querySelector('.hamburger');
                const nav = document.querySelector('.nav');
                if (hamburger.classList.contains('active')) {
                    hamburger.classList.remove('active');
                    nav.classList.remove('active');
                }
            }
        });
    });
    
    // Gestion du menu hamburger (si vous voulez le garder)
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.nav');
    
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            this.classList.toggle('active');
            nav.classList.toggle('active');
        });
    }
});


// Animation d'apparition des sections au scroll
function checkScroll() {
    const sections = document.querySelectorAll('section');
    const windowHeight = window.innerHeight;
    
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        
        if (sectionTop < windowHeight * 0.75) {
            section.classList.add('visible');
        }
    });
}

// Vérifier la position au chargement et au défilement
window.addEventListener('load', checkScroll);
window.addEventListener('scroll', checkScroll);

// faire apparaître la section Skills au scroll
const skillsSection = document.querySelector('.skills-section');
window.addEventListener('scroll', () => {
    const sectionPos = skillsSection.getBoundingClientRect().top;
    const screenPos = window.innerHeight / 1.2;

    if(sectionPos < screenPos){
        skillsSection.querySelectorAll('.skill-category').forEach(cat => {
            cat.style.opacity = 1;
            cat.style.transform = 'translateY(0)';
        });
    }
});



        // Script pour les animations de navigation
        document.addEventListener('DOMContentLoaded', function() {
            // Ajouter la classe de transition à toutes les sections
            const sections = document.querySelectorAll('section, main');
            sections.forEach(section => {
                section.classList.add('section-transition');
            });
            
            // Observer pour l'animation des sections
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };
            
            const observer = new IntersectionObserver(function(entries, observer) {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('section-visible');
                        
                        // Animation spécifique pour les cartes de projet
                        if (entry.target.id === 'projets') {
                            const projectCards = document.querySelectorAll('.project-card');
                            projectCards.forEach(card => {
                                card.classList.add('visible');
                            });
                        }
                    }
                });
            }, observerOptions);
            
            // Observer chaque section
            sections.forEach(section => {
                observer.observe(section);
            });
            
            // Gestion du scroll pour le header et la navigation active
            window.addEventListener('scroll', function() {
                const header = document.querySelector('.header');
                if (window.scrollY > 50) {
                    header.classList.add('scrolled');
                } else {
                    header.classList.remove('scrolled');
                }
                
                // Mise à jour des liens actifs
                const scrollPosition = window.scrollY + 100;
                
                document.querySelectorAll('section').forEach(section => {
                    const sectionTop = section.offsetTop;
                    const sectionHeight = section.offsetHeight;
                    const sectionId = section.getAttribute('id');
                    
                    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                        document.querySelectorAll('.nav a').forEach(link => {
                            link.classList.remove('active');
                            if (link.getAttribute('href') === '#' + sectionId) {
                                link.classList.add('active');
                            }
                        });
                    }
                });
            });
            
            // Navigation fluide
            document.querySelectorAll('.nav a').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    const targetId = this.getAttribute('href');
                    const targetSection = document.querySelector(targetId);
                    
                    if (targetSection) {
                        window.scrollTo({
                            top: targetSection.offsetTop,
                            behavior: 'smooth'
                        });
                    }
                });
            });
            
            // Animation pour le menu hamburger (si vous l'utilisez)
            const hamburger = document.querySelector('.hamburger');
            if (hamburger) {
                hamburger.addEventListener('click', function() {
                    this.classList.toggle('active');
                    document.querySelector('.nav').classList.toggle('active');
                });
            }
        });
// script.js
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTop.classList.add('show');
    } else {
        backToTop.classList.remove('show');
    }
});


// Sélectionner toutes les sections
const sections = document.querySelectorAll('.section');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('section-visible');
        }
    });
}, {
    threshold: 0.2 // 20% de la section visible pour déclencher
});

// Observer chaque section
sections.forEach(section => observer.observe(section));


