// ---------------------------
// Initialiser GSAP ScrollTrigger
// ---------------------------
gsap.registerPlugin(ScrollTrigger);

// ---------------------------
// Animation barre de navigation et header
// ---------------------------
gsap.from(".nav", {
  duration: 1,
  y: -100,
  opacity: 0,
  ease: "power3.out"
});

gsap.from(".header .header-text", {
  duration: 1.5,
  opacity: 0,
  y: 30,
  ease: "power3.out"
});

// ---------------------------
// Fonction utilitaire : Animation des items d'une section
// ---------------------------
function animateSectionItems(sectionSelector, itemSelector, options = {}) {
  const items = document.querySelectorAll(`${sectionSelector} ${itemSelector}`);
  if (!items.length) return;

  gsap.from(items, {
    duration: options.duration || 1,
    opacity: 0,
    y: options.y || 30,
    stagger: options.stagger || 0.3,
    scrollTrigger: {
      trigger: sectionSelector,
      start: options.start || "top center+=100"
    }
  });
}

// ---------------------------
// Animations des sections
// ---------------------------
// Pour la version française
animateSectionItems("#formation", ".education-item");
animateSectionItems("#experiences", ".education-item");
animateSectionItems("#projets", ".project-card", { y: 50, stagger: 0.2 });
animateSectionItems("#competences", ".skills-category");

// Pour la version anglaise
animateSectionItems("#education", ".education-item");
animateSectionItems("#experience", ".education-item");
animateSectionItems("#projects", ".project-card", { y: 50, stagger: 0.2 });
animateSectionItems("#skills", ".skills-category");

// ---------------------------
// Fonction utilitaire : Animation des badges (skills)
// ---------------------------
function animateBadges(containerSelector, options = {}) {
  document.querySelectorAll(containerSelector).forEach(container => {
    const badges = container.querySelectorAll(".skill-badge");
    if (!badges.length) return;

    gsap.fromTo(
      badges,
      {
        autoAlpha: 0,
        y: options.y || 20,
        scale: options.scale || 1
      },
      {
        autoAlpha: 1,
        y: 0,
        scale: 1,
        duration: options.duration || 0.5,
        stagger: options.stagger || 0.1,
        ease: options.ease || "power2.out",
        scrollTrigger: {
          trigger: container.closest('.education-item, .project-card, .skills-category') || container,
          start: options.start || "top 85%"
        }
      }
    );
  });
}

// Animation badges compétences et projets/expériences
animateBadges(".skills-category");
animateBadges("#experiences .skills", { scale: 0.8, duration: 0.4, stagger: 0.08, ease: "back.out(1.2)" });
animateBadges("#experience .skills", { scale: 0.8, duration: 0.4, stagger: 0.08, ease: "back.out(1.2)" });
animateBadges("#projets .skills", { scale: 0.8, duration: 0.4, stagger: 0.08, ease: "back.out(1.2)" });
animateBadges("#projects .skills", { scale: 0.8, duration: 0.4, stagger: 0.08, ease: "back.out(1.2)" });

// ---------------------------
// Animation lignes de code
// ---------------------------
document.querySelectorAll('.code-line').forEach((line, index) => {
  gsap.from(line, {
    duration: 0.5,
    opacity: 0,
    y: 20,
    delay: index * 0.5,
    ease: "power2.out"
  });
});

// ---------------------------
// Surlignement navigation au scroll
// ---------------------------
const sections = document.querySelectorAll('section, header');
const navLinks = document.querySelectorAll('nav ul li a:not(.lang-switch a)');

function highlightNav() {
  let current = '';
  sections.forEach(section => {
    const offset = window.innerWidth < 768 ? 80 : 100;
    if (pageYOffset >= section.offsetTop - offset) current = section.id;
  });

  navLinks.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
  });
}

window.addEventListener('scroll', highlightNav);
window.addEventListener('resize', highlightNav);