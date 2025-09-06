// Initialiser GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Attendre que le DOM soit chargé
document.addEventListener('DOMContentLoaded', function() {
  // Add smooth scrolling for nav links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      
      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 60, // Ajustez le décalage si nécessaire
          behavior: 'smooth'
        });
      }
    });
  });

  // GSAP animations
  // Animation pour la barre de navigation
  gsap.from(".nav", {
    duration: 1,
    y: -100,
    opacity: 0,
    ease: "power3.out"
  });

  // Animation pour le contenu d'en-tête
  gsap.from(".header .header-text", {
    duration: 1.5,
    opacity: 0,
    y: 30,
    ease: "power3.out"
  });

  // Animations pour les sections au scroll
  // Formation
  gsap.from("#formation .education-item", {
    duration: 1,
    opacity: 0,
    y: 30,
    stagger: 0.3,
    scrollTrigger: {
      trigger: "#formation",
      start: "top center+=100"
    }
  });

  // Experiences
  gsap.from("#experiences .education-item", {
    duration: 1,
    opacity: 0,
    y: 30,
    stagger: 0.3,
    scrollTrigger: {
      trigger: "#experiences",
      start: "top center+=100"
    }
  });

  // Projets académiques et personnels
  gsap.from("#projets .project-card", {
    duration: 1,
    opacity: 0,
    y: 50,
    stagger: 0.2,
    scrollTrigger: {
      trigger: "#projets",
      start: "top center+=100"
    }
  });

  // Compétences
  gsap.fromTo(
    ".skill-badge",
    {
      autoAlpha: 0,
      y: 20,
    },
    {
      autoAlpha: 1,
      y: 0,
      duration: 0.5,
      stagger: 0.1, // Ajoutez un délai entre chaque badge
      ease: "power2.out",
      scrollTrigger: {
        trigger: "#competences", // Changez le déclencheur
        start: "top center+=100",
      },
    }
  );

  // Veille technologique
  gsap.from(".veille-card", {
    duration: 1,
    opacity: 0,
    y: 30,
    stagger: 0.3,
    scrollTrigger: {
      trigger: "#veille",
      start: "top center+=100"
    }
  });

  // Animation des lignes de code
  document.querySelectorAll('.code-line').forEach((line, index) => {
    gsap.from(line, {
      duration: 0.5,
      opacity: 0,
      y: 20,
      delay: index * 0.5,
      ease: "power2.out"
    });
  });

  // Effet de surlignement pour la navigation
  const sections = document.querySelectorAll('section, header');
  const navLinks = document.querySelectorAll('nav ul li a');

  window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.clientHeight;
      if (pageYOffset >= sectionTop) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
});