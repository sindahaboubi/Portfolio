document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('project-modal');
    const closeModal = document.getElementById('modal-close');
    const modalSecondaryBtn = document.querySelector('.modal-btn-secondary');
    
    const planifyMeButton = document.querySelector('.project-card:first-child .project-button');
    
    if (planifyMeButton) {
        planifyMeButton.addEventListener('click', function() {
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    }
    
    function closeModalFunction() {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
        
    if (closeModal) {
        closeModal.addEventListener('click', closeModalFunction);
    }
    
    if (modalSecondaryBtn) {
        modalSecondaryBtn.addEventListener('click', closeModalFunction);
    }
    
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModalFunction();
        }
    });
    
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModalFunction();
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('project-modal');
    const closeModal = document.getElementById('modal-close');
    const modalSecondaryBtn = document.querySelector('.modal-btn-secondary');
    const modalContainer = document.querySelector('.modal-container');
    const modalContent = document.querySelector('.modal-content');
    
    const planifyMeButton = document.querySelector('.project-card:first-child .project-button');
    
    if (planifyMeButton) {
        planifyMeButton.addEventListener('click', function() {
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
            
            setTimeout(() => {
                modalContent.classList.add('animated');
            }, 100);
        });
    }
    
    function closeModalFunction() {
        modalContent.classList.remove('animated');
        modalContainer.classList.add('closing');
        
        setTimeout(() => {
            modal.classList.remove('active');
            modalContainer.classList.remove('closing');
            document.body.style.overflow = '';
        }, 400);
    }
        
    if (closeModal) {
        closeModal.addEventListener('click', closeModalFunction);
    }
    
    if (modalSecondaryBtn) {
        modalSecondaryBtn.addEventListener('click', closeModalFunction);
    }
    
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModalFunction();
        }
    });
    
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModalFunction();
        }
    });
    
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

const cvolutionModal = document.getElementById('cvolution-modal');
const closeCVolutionModal = document.getElementById('cvolution-modal-close');
const cvolutionButton = document.getElementById('cvolution-btn');
const cvolutionModalSecondaryBtn = cvolutionModal.querySelector('.modal-btn-secondary');

if (cvolutionButton) {
    cvolutionButton.addEventListener('click', function() {
        cvolutionModal.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        setTimeout(() => {
            cvolutionModal.querySelector('.modal-content').classList.add('animated');
        }, 100);
    });
}

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

cvolutionModal.addEventListener('click', function(e) {
    if (e.target === cvolutionModal) {
        closeCVolutionModalFunction();
    }
});

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && cvolutionModal.classList.contains('active')) {
        closeCVolutionModalFunction();
    }
});

const memomeModal = document.getElementById('memome-modal');
const closeMemomeModal = document.getElementById('memome-modal-close');
const memomeButton = document.querySelector('.project-card:nth-child(3) .project-button');
const memomeModalSecondaryBtn = memomeModal.querySelector('.modal-btn-secondary');

if (memomeButton) {
    memomeButton.id = 'memome-btn';
    
    memomeButton.addEventListener('click', function() {
        memomeModal.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        setTimeout(() => {
            memomeModal.querySelector('.modal-content').classList.add('animated');
        }, 100);
    });
}

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

memomeModal.addEventListener('click', function(e) {
    if (e.target === memomeModal) {
        closeMemomeModalFunction();
    }
});

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && memomeModal.classList.contains('active')) {
        closeMemomeModalFunction();
    }
});

const ticktaskModal = document.getElementById('ticktask-modal');
const closeTicktaskModal = document.getElementById('ticktask-modal-close');
const ticktaskButton = document.querySelector('.project-card:nth-child(4) .project-button');
const ticktaskModalSecondaryBtn = ticktaskModal.querySelector('.modal-btn-secondary');

if (ticktaskButton) {
    ticktaskButton.id = 'ticktask-btn';
    
    ticktaskButton.addEventListener('click', function() {
        ticktaskModal.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        setTimeout(() => {
            ticktaskModal.querySelector('.modal-content').classList.add('animated');
        }, 100);
    });
}

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

ticktaskModal.addEventListener('click', function(e) {
    if (e.target === ticktaskModal) {
        closeTicktaskModalFunction();
    }
});

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && ticktaskModal.classList.contains('active')) {
        closeTicktaskModalFunction();
    }
});

const appstorageModal = document.getElementById('appstorage-modal');
const closeAppstorageModal = document.getElementById('appstorage-modal-close');
const appstorageButton = document.querySelector('.project-card:nth-child(5) .project-button');
const appstorageModalSecondaryBtn = appstorageModal.querySelector('.modal-btn-secondary');

if (appstorageButton) {
    appstorageButton.id = 'appstorage-btn';
    
    appstorageButton.addEventListener('click', function() {
        appstorageModal.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        setTimeout(() => {
            appstorageModal.querySelector('.modal-content').classList.add('animated');
        }, 100);
    });
}

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

appstorageModal.addEventListener('click', function(e) {
    if (e.target === appstorageModal) {
        closeAppstorageModalFunction();
    }
});

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && appstorageModal.classList.contains('active')) {
        closeAppstorageModalFunction();
    }
});

const tunisiahopeModal = document.getElementById('tunisiahope-modal');
const closeTunisiahopeModal = document.getElementById('tunisiahope-modal-close');
const tunisiahopeButton = document.getElementById('tunisiahope-btn');
const tunisiahopeModalSecondaryBtn = tunisiahopeModal.querySelector('.modal-btn-secondary');

if (tunisiahopeButton) {
    tunisiahopeButton.addEventListener('click', function() {
        tunisiahopeModal.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        setTimeout(() => {
            tunisiahopeModal.querySelector('.modal-content').classList.add('animated');
        }, 100);
    });
}

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

tunisiahopeModal.addEventListener('click', function(e) {
    if (e.target === tunisiahopeModal) {
        closeTunisiahopeModalFunction();
    }
});

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && tunisiahopeModal.classList.contains('active')) {
        closeTunisiahopeModalFunction();
    }
});

const pharmahouseModal = document.getElementById('pharmahouse-modal');
const closePharmahouseModal = document.getElementById('pharmahouse-modal-close');
const pharmahouseButton = document.getElementById('pharmahouse-btn');
const pharmahouseModalSecondaryBtn = pharmahouseModal.querySelector('.modal-btn-secondary');

if (pharmahouseButton) {
    pharmahouseButton.addEventListener('click', function() {
        pharmahouseModal.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        setTimeout(() => {
            pharmahouseModal.querySelector('.modal-content').classList.add('animated');
        }, 100);
    });
}

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

pharmahouseModal.addEventListener('click', function(e) {
    if (e.target === pharmahouseModal) {
        closePharmahouseModalFunction();
    }
});

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && pharmahouseModal.classList.contains('active')) {
        closePharmahouseModalFunction();
    }
});

const projiroModal = document.getElementById('projiro-modal');
const closeProjiroModal = document.getElementById('projiro-modal-close');
const projiroButton = document.getElementById('projiro-btn');
const projiroModalSecondaryBtn = projiroModal.querySelector('.modal-btn-secondary');

    
    projiroButton.addEventListener('click', function() {
        projiroModal.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        setTimeout(() => {
            projiroModal.querySelector('.modal-content').classList.add('animated');
        }, 100);
    });

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

const stageModal = document.getElementById('stage-modal');
const closeStageModal = document.getElementById('stage-modal-close');
const stageButton = document.querySelector('.project-card:nth-child(9) .project-button');
const stageModalSecondaryBtn = stageModal.querySelector('.modal-btn-secondary');

if (stageButton) {
    stageButton.id = 'stage-btn';
    
    stageButton.addEventListener('click', function() {
        stageModal.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        setTimeout(() => {
            stageModal.querySelector('.modal-content').classList.add('animated');
        }, 100);
    });
}

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

document.addEventListener('DOMContentLoaded', function() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const languageBars = entry.target.querySelectorAll('.language-fill');
                languageBars.forEach(bar => {
                    bar.style.width = '0';
                    setTimeout(() => {
                        bar.style.width = bar.getAttribute('data-width') || bar.style.width;
                    }, 100);
                });
            }
        });
    }, { threshold: 0.5 });

    const languagesSection = document.getElementById('languages');
    if (languagesSection) {
        observer.observe(languagesSection);
    }
    
    document.querySelectorAll('.language-fill').forEach(bar => {
        const computedWidth = window.getComputedStyle(bar).width;
        bar.setAttribute('data-width', computedWidth);
        bar.style.width = '0';
    });
});
async function loadServicesData() {
    try {
        const response = await fetch('data/services.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const servicesData = await response.json();
        return servicesData;
    } catch (error) {
        console.error('Erreur lors du chargement des services:', error);
        return {
            services: [{
                title: "Service par défaut",
                icon: "fa-solid fa-cog",
                items: ["Service non disponible"]
            }]
        };
    }
}

async function generateServicesCards() {
    const servicesGrid = document.querySelector('.services-grid');
    
    const servicesData = await loadServicesData();
    
    const firstRow = document.createElement('div');
    firstRow.className = 'services-row';
    
    const secondRow = document.createElement('div');
    secondRow.className = 'services-row centered';
    
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
    
    servicesGrid.innerHTML = '';
    servicesGrid.appendChild(firstRow);
    servicesGrid.appendChild(secondRow);
}


document.addEventListener('DOMContentLoaded', generateServicesCards);

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navbar");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-menu a").forEach(link => {
    link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    });
});

document.addEventListener('click', function(event) {
    const dropdowns = document.getElementsByClassName('dropdown-content');
    for (let i = 0; i < dropdowns.length; i++) {
        const openDropdown = dropdowns[i];
        if (openDropdown.style.display === 'block' && !event.target.matches('.dropbtn')) {
            openDropdown.style.display = 'none';
        }
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                const targetPosition = targetSection.offsetTop - 80;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                const hamburger = document.querySelector('.hamburger');
                const nav = document.querySelector('.nav');
                if (hamburger.classList.contains('active')) {
                    hamburger.classList.remove('active');
                    nav.classList.remove('active');
                }
            }
        });
    });
    
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.nav');
    
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            this.classList.toggle('active');
            nav.classList.toggle('active');
        });
    }
});

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

window.addEventListener('load', checkScroll);
window.addEventListener('scroll', checkScroll);

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

        document.addEventListener('DOMContentLoaded', function() {
            const sections = document.querySelectorAll('section, main');
            sections.forEach(section => {
                section.classList.add('section-transition');
            });
            
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };
            
            const observer = new IntersectionObserver(function(entries, observer) {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('section-visible');
                        
                        if (entry.target.id === 'projets') {
                            const projectCards = document.querySelectorAll('.project-card');
                            projectCards.forEach(card => {
                                card.classList.add('visible');
                            });
                        }
                    }
                });
            }, observerOptions);
            
            sections.forEach(section => {
                observer.observe(section);
            });
            
            window.addEventListener('scroll', function() {
                const header = document.querySelector('.header');
                if (window.scrollY > 50) {
                    header.classList.add('scrolled');
                } else {
                    header.classList.remove('scrolled');
                }
                
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
            
            const hamburger = document.querySelector('.hamburger');
            if (hamburger) {
                hamburger.addEventListener('click', function() {
                    this.classList.toggle('active');
                    document.querySelector('.nav').classList.toggle('active');
                });
            }
        });

const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTop.classList.add('show');
    } else {
        backToTop.classList.remove('show');
    }
});

const sections = document.querySelectorAll('.section');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('section-visible');
        }
    });
}, {
    threshold: 0.2
});

sections.forEach(section => observer.observe(section));


async function loadSkillsData() {
    try {
        const response = await fetch('data/competences.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const skillsData = await response.json();
        return skillsData;
    } catch (error) {
        console.error('Erreur lors du chargement des compétences:', error);
        return null;
    }
}

function createSkillItem(skill) {
    const skillItem = document.createElement('div');
    skillItem.className = 'skill-item';
    
    const skillLogo = document.createElement('div');
    skillLogo.className = 'skill-logo';
    
    if (skill.isEmoji) {
        skillLogo.textContent = skill.icon;
    } else {
        const img = document.createElement('img');
        img.src = skill.icon;
        img.alt = skill.name;
        skillLogo.appendChild(img);
    }
    
    const skillName = document.createElement('span');
    skillName.className = 'skill-name';
    skillName.textContent = skill.name;
    
    skillItem.appendChild(skillLogo);
    skillItem.appendChild(skillName);
    
    return skillItem;
}

function createSkillCategory(categoryData, categoryKey) {
    const skillCategory = document.createElement('div');
    skillCategory.className = 'skill-category';
    
    const categoryHeader = document.createElement('div');
    categoryHeader.className = 'category-header';
    
    const categoryTitle = document.createElement('h3');
    categoryTitle.className = 'category-title';
    categoryTitle.textContent = categoryData.title;
    
    categoryHeader.appendChild(categoryTitle);
    
    const skillsScroll = document.createElement('div');
    skillsScroll.className = 'skills-scroll';
    
    const scrollContent = document.createElement('div');
    scrollContent.className = 'scroll-content';
    
    categoryData.skills.forEach(skill => {
        const skillItem = createSkillItem(skill);
        scrollContent.appendChild(skillItem);
    });
    
    skillsScroll.appendChild(scrollContent);
    skillCategory.appendChild(categoryHeader);
    skillCategory.appendChild(skillsScroll);
    
    return skillCategory;
}

async function generateSkillsSection() {
    const skillsData = await loadSkillsData();
    
    if (!skillsData) {
        console.error('Impossible de charger les données des compétences');
        return;
    }
    
    const skillsContainer = document.querySelector('.skills-container');
    
    if (!skillsContainer) {
        console.error('Container des compétences non trouvé');
        return;
    }
    
    skillsContainer.innerHTML = '';
    
    skillsData.skillsLayout.forEach(rowConfig => {
        const skillsRow = document.createElement('div');
        skillsRow.className = rowConfig.centerRow ? 'skills-row center-row' : 'skills-row';
        
        rowConfig.categories.forEach(categoryKey => {
            const categoryData = skillsData.technicalSkills[categoryKey];
            if (categoryData) {
                const categoryElement = createSkillCategory(categoryData, categoryKey);
                skillsRow.appendChild(categoryElement);
            }
        });
        
        skillsContainer.appendChild(skillsRow);
    });
}

document.addEventListener('DOMContentLoaded', function() {
    generateServicesCards();
    
    generateSkillsSection();
    
});
async function loadExperiencesData() {
    try {
        const response = await fetch('data/experiences.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const experiencesData = await response.json();
        return experiencesData;
    } catch (error) {
        console.error('Erreur lors du chargement des expériences:', error);
        return null;
    }
}

function createExperienceItem(experience) {
    const timelineItem = document.createElement('div');
    timelineItem.className = 'timeline-item';
    
    let descriptionHTML;
    if (experience.type === 'list') {
        descriptionHTML = `
            <ul>
                ${experience.description.map(item => `<li>${item}</li>`).join('')}
            </ul>
        `;
    } else {
        descriptionHTML = experience.description;
    }
    
    timelineItem.innerHTML = `
        <div class="timeline-dot"></div>
        <div class="timeline-content">
            <div class="experience-header">
                <div>
                    <div class="experience-title">${experience.title}</div>
                    <div class="experience-company">${experience.company}</div>
                </div>
                <div class="experience-period">${experience.period}</div>
            </div>
            <div class="experience-description">
                ${descriptionHTML}
            </div>
        </div>
    `;
    
    return timelineItem;
}

async function generateExperiencesSection() {
    const experiencesData = await loadExperiencesData();
    
    if (!experiencesData) {
        console.error('Impossible de charger les données des expériences');
        return;
    }
    
    const timeline = document.querySelector('.timeline');
    
    if (!timeline) {
        console.error('Timeline container non trouvé');
        return;
    }
    
    timeline.innerHTML = '';
    
    experiencesData.experiences.forEach(experience => {
        const experienceElement = createExperienceItem(experience);
        timeline.appendChild(experienceElement);
    });
}

async function loadFormationsData() {
    try {
        const response = await fetch('data/formations.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const formationsData = await response.json();
        return formationsData;
    } catch (error) {
        console.error('Erreur lors du chargement des formations:', error);
        return null;
    }
}

function createFormationCard(formation) {
    const formationCard = document.createElement('div');
    formationCard.className = 'formation-card';
    
    const statusHTML = formation.status ? 
        `<div class="formation-status">${formation.status}</div>` : '';
    
    formationCard.innerHTML = `
        <div class="formation-header">
            <div class="formation-info">
                <div class="formation-title">${formation.title}</div>
                <div class="formation-school">${formation.school}</div>
            </div>
            <div class="formation-period">${formation.period}</div>
        </div>
        <div class="formation-description">
            ${formation.description}
        </div>
        <div class="formation-footer">
            <div class="formation-level">${formation.level}</div>
            ${statusHTML}
        </div>
    `;
    
    return formationCard;
}

async function generateFormationsSection() {
    const formationsData = await loadFormationsData();
    
    if (!formationsData) {
        console.error('Impossible de charger les données des formations');
        return;
    }
    
    const formationsContainer = document.querySelector('.formations-container');
    
    if (!formationsContainer) {
        console.error('Formations container non trouvé');
        return;
    }
    
    formationsContainer.innerHTML = '';
    
    formationsData.formations.forEach(formation => {
        const formationElement = createFormationCard(formation);
        formationsContainer.appendChild(formationElement);
    });
}

document.addEventListener('DOMContentLoaded', function() {
    generateServicesCards();
    generateSkillsSection();
    generateExperiencesSection(); 
    generateFormationsSection();  
    
});
async function loadCompetencesData() {
    try {
        const response = await fetch('data/competences.json');
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        return await response.json();
    } catch (error) {
        console.error('Erreur lors du chargement des compétences:', error);
        return null;
    }
}

async function generatePersonalSkills() {
    const competencesData = await loadCompetencesData();
    if (!competencesData || !competencesData.personalSkills) return;

    const skillsGrid = document.querySelector('.soft-skills-grid');
    skillsGrid.innerHTML = '';

    competencesData.personalSkills.skills.forEach(skill => {
        const skillCard = document.createElement('div');
        skillCard.className = 'soft-skill-card';
        skillCard.textContent = skill;
        skillsGrid.appendChild(skillCard);
    });
}

document.addEventListener('DOMContentLoaded', generatePersonalSkills);
async function loadLanguagesData() {
    try {
        const response = await fetch('data/langues.json');
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        return await response.json();
    } catch (error) {
        console.error('Erreur lors du chargement des langues:', error);
        return { languages: [] };
    }
}

async function generateLanguagesSection() {
    const data = await loadLanguagesData();
    const languageList = document.querySelector('.language-list');
    languageList.innerHTML = '';

    data.languages.forEach(lang => {
        const languageItem = document.createElement('div');
        languageItem.className = 'language-item';

        languageItem.innerHTML = `
            <div class="language-name">
                <span>${lang.name}</span>
            </div>
            <div class="language-bar">
                <div class="language-fill" data-width="${lang.level}" style="width: 0;"></div>
            </div>
        `;

        languageList.appendChild(languageItem);
    });

    const languagesSection = document.getElementById('languages');
    if (languagesSection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const fills = entry.target.querySelectorAll('.language-fill');
                    fills.forEach(bar => {
                        setTimeout(() => {
                            bar.style.width = bar.dataset.width;
                        }, 100);
                    });
                }
            });
        }, { threshold: 0.5 });

        observer.observe(languagesSection);
    }
}

document.addEventListener('DOMContentLoaded', generateLanguagesSection);

  const cursor = document.querySelector(".cursor");
  const follower = document.querySelector(".cursor-follower");

  let mouseX = 0, mouseY = 0;
  let posX = 0, posY = 0;

  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursor.style.top = `${mouseY}px`;
    cursor.style.left = `${mouseX}px`;
  });

  function animateFollower() {
    posX += (mouseX - posX) * 0.15; 
    posY += (mouseY - posY) * 0.15;
    follower.style.top = `${posY}px`;
    follower.style.left = `${posX}px`;
    requestAnimationFrame(animateFollower);
  }

  animateFollower();


// Fermer le menu quand on clique sur un lien
document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => {
    document.querySelector('.hamburger').classList.remove('active');
    document.querySelector('.nav').classList.remove('active');
  });
});

// Gestion des sous-menus en version mobile
document.querySelectorAll('.dropdown > a').forEach(dropdownLink => {
  dropdownLink.addEventListener('click', function(e) {
    if (window.innerWidth <= 968) {
      e.preventDefault();
      this.parentElement.classList.toggle('active');
    }
  });
});

// Gestion du défilement tactile pour les compétences
function initSkillsTouchScroll() {
  const skillsScrolls = document.querySelectorAll('.skills-scroll');
  
  skillsScrolls.forEach(scroll => {
    let isDown = false;
    let startX;
    let scrollLeft;
    
    scroll.addEventListener('mousedown', (e) => {
      if (window.innerWidth < 969) {
        isDown = true;
        startX = e.pageX - scroll.offsetLeft;
        scrollLeft = scroll.scrollLeft;
      }
    });
    
    scroll.addEventListener('mouseleave', () => {
      isDown = false;
    });
    
    scroll.addEventListener('mouseup', () => {
      isDown = false;
    });
    
    scroll.addEventListener('mousemove', (e) => {
      if (!isDown || window.innerWidth >= 969) return;
      e.preventDefault();
      const x = e.pageX - scroll.offsetLeft;
      const walk = (x - startX) * 2;
      scroll.scrollLeft = scrollLeft - walk;
    });
    
    // Gestion du tactile pour mobile
    scroll.addEventListener('touchstart', (e) => {
      if (window.innerWidth < 969) {
        startX = e.touches[0].pageX - scroll.offsetLeft;
        scrollLeft = scroll.scrollLeft;
      }
    }, { passive: true });
    
    scroll.addEventListener('touchmove', (e) => {
      if (window.innerWidth >= 969) return;
      const x = e.touches[0].pageX - scroll.offsetLeft;
      const walk = (x - startX) * 2;
      scroll.scrollLeft = scrollLeft - walk;
    }, { passive: true });
  });
}

// Appeler cette fonction après avoir généré les compétences
document.addEventListener('DOMContentLoaded', function() {
  // ... votre code existant ...
  
  // Initialiser le défilement tactile après le chargement des compétences
  setTimeout(initSkillsTouchScroll, 1000);
});

// Modal pour ArtSpace
const artspaceModal = document.getElementById('artspace-modal');
const closeArtspaceModal = document.getElementById('artspace-modal-close');
const artspaceButton = document.getElementById('artspace-btn');
const artspaceModalSecondaryBtn = artspaceModal.querySelector('.modal-btn-secondary');

if (artspaceButton) {
    artspaceButton.addEventListener('click', function() {
        artspaceModal.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        setTimeout(() => {
            artspaceModal.querySelector('.modal-content').classList.add('animated');
        }, 100);
    });
}

function closeArtspaceModalFunction() {
    artspaceModal.querySelector('.modal-content').classList.remove('animated');
    artspaceModal.querySelector('.modal-container').classList.add('closing');
    
    setTimeout(() => {
        artspaceModal.classList.remove('active');
        artspaceModal.querySelector('.modal-container').classList.remove('closing');
        document.body.style.overflow = '';
    }, 400);
}

if (closeArtspaceModal) {
    closeArtspaceModal.addEventListener('click', closeArtspaceModalFunction);
}

if (artspaceModalSecondaryBtn) {
    artspaceModalSecondaryBtn.addEventListener('click', closeArtspaceModalFunction);
}

artspaceModal.addEventListener('click', function(e) {
    if (e.target === artspaceModal) {
        closeArtspaceModalFunction();
    }
});

// Modal pour Projet d'intégration Voyage
const voyageModal = document.getElementById('voyage-modal');
const closeVoyageModal = document.getElementById('voyage-modal-close');
const voyageButton = document.getElementById('voyage-btn');
const voyageModalSecondaryBtn = voyageModal.querySelector('.modal-btn-secondary');

if (voyageButton) {
    voyageButton.addEventListener('click', function() {
        voyageModal.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        setTimeout(() => {
            voyageModal.querySelector('.modal-content').classList.add('animated');
        }, 100);
    });
}

function closeVoyageModalFunction() {
    voyageModal.querySelector('.modal-content').classList.remove('animated');
    voyageModal.querySelector('.modal-container').classList.add('closing');
    
    setTimeout(() => {
        voyageModal.classList.remove('active');
        voyageModal.querySelector('.modal-container').classList.remove('closing');
        document.body.style.overflow = '';
    }, 400);
}

if (closeVoyageModal) {
    closeVoyageModal.addEventListener('click', closeVoyageModalFunction);
}

if (voyageModalSecondaryBtn) {
    voyageModalSecondaryBtn.addEventListener('click', closeVoyageModalFunction);
}

voyageModal.addEventListener('click', function(e) {
    if (e.target === voyageModal) {
        closeVoyageModalFunction();
    }
});

// Gestion de la touche Escape pour les nouveaux modals
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        if (artspaceModal.classList.contains('active')) {
            closeArtspaceModalFunction();
        }
        if (voyageModal.classList.contains('active')) {
            closeVoyageModalFunction();
        }
    }
});
// Gestion du menu hamburger
const nav = document.querySelector('.nav');
const navLinks = document.querySelectorAll('.nav a');
const dropdowns = document.querySelectorAll('.dropdown');

// Toggle du menu
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    nav.classList.toggle('active');
    document.body.classList.toggle('nav-open');
});

// Fermeture en cliquant sur un lien
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (!link.parentElement.classList.contains('dropdown')) {
            hamburger.classList.remove('active');
            nav.classList.remove('active');
            document.body.classList.remove('nav-open');
        }
    });
});

// Gestion des dropdowns
dropdowns.forEach(dropdown => {
    dropdown.addEventListener('click', (e) => {
        e.preventDefault();
        dropdown.classList.toggle('active');
    });
});
document.querySelectorAll('.nav a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            const headerOffset = 80; // hauteur du header
            const elementPosition = targetSection.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});
