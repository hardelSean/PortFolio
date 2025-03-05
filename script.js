// Add smooth scrolling for nav links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      window.scrollTo({
        top: targetSection.offsetTop - 60,
        behavior: 'smooth'
      });
    });
  });

  // GSAP animations
  gsap.from(".education-item", {
    duration: 1,
    opacity: 0,
    y: 30,
    stagger: 0.3,
    scrollTrigger: {
      trigger: ".education",
      start: "top center"
    }
  });

  gsap.from(".project-card", {
    duration: 1,
    opacity: 0,
    y: 50,
    stagger: 0.2,
    scrollTrigger: {
      trigger: ".projects",
      start: "top center"
    }
  });

  gsap.from(".skill-badge", {
    duration: 0.5,
    opacity: 0,
    scale: 0,
    stagger: 0.1,
    scrollTrigger: {
      trigger: ".skills",
      start: "top center"
    }
  });

  gsap.from(".header .content", {
    duration: 1.5,
    opacity: 0,
    y: 30,
    ease: "power3.out"
  });

  gsap.from(".nav", {
    duration: 1,
    y: -100,
    opacity: 0,
    ease: "power3.out"
  });

  document.querySelectorAll('.code-line').forEach((line, index) => {
    gsap.from(line, {
      duration: 0.5,
      opacity: 0,
      y: 20,
      delay: index * 0.5,
      ease: "power2.out"
    });
  });