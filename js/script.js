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

