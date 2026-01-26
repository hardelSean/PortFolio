export const portfolioData = {
  personal: {
    name: "Sean Hardel",
    role: "Développeur Web Full Stack",
    bio: "Étudiant en Licence Professionnelle MIAW à La Rochelle, je cherche un stage de 3 mois minimum entre Avril et Août 2026. Passionné par le développement d'applications web et mobile, je suis travailleur et motivé.",
    location: "Saix (86120) / La Rochelle (17000)",
    email: "sean.hardel04@gmail.com",
    phone: "06 66 73 46 00",
    availability: "Avril - Août 2026",
    social: {
      github: "https://github.com/hardelsean",
      linkedin: "https://www.linkedin.com/in/sean-hardel-2b4201355/",
      cv: "/assets/docs/CV.pdf"
    }
  },
  education: [
    {
      degree: "Licence Professionnelle MIAW",
      school: "Université de La Rochelle",
      year: "2025-2026",
      description: "Métiers de l'informatique applications web"
    },
    {
      degree: "BTS SIO option SLAM",
      school: "Lycée Guy Chauvet",
      year: "2023-2025",
      description: "Services Informatiques aux Organisations - Solutions Logicielles et Applications Métiers"
    },
    {
      degree: "Bac Général",
      school: "Lycée Guy Chauvet",
      year: "2021-2022",
      description: "Options : LLCE Anglais + Physique-Chimie"
    }
  ],
  experience: [
    {
      title: "Développeur informatique",
      company: "Altrad Endel, Avoine",
      period: "2025",
      description: "Stage de 2ème année BTS.",
      tasks: [
        "Développement d'applications web",
        "Gestion de bases de données",
        "Implémentation de systèmes d'import de données"
      ],
      stack: ["C#", "KendoUI", "JavaScript", "PHP", "SQL Server", "Git"]
    },
    {
      title: "Développeur informatique",
      company: "Nexti Informatique, Thouars",
      period: "2024",
      description: "Stage de 1ère année BTS.",
      tasks: [
        "Développement d'applications bureau et web",
        "Création de sites web",
        "Gestion de bases de données"
      ],
      stack: ["C#", "JavaScript", "PHP", "SQL Server", "Git"]
    }
  ],
  projects: [
    {
      title: "Agence Ancreo",
      category: "Académique",
      description: "Conception et développement d'un site vitrine immersif pour une agence fictive. Focus sur l'expérience utilisateur (UX) et les interactions GSAP.",
      image: "/assets/img/ancreo-preview.png",
      stack: ["Tailwind", "GSAP", "JS", "Three.js", "Figma"],
      link: "https://agence-ancreo.lpmiaw.univ-lr.fr/",
      repo: null
    },
    {
      title: "Gestion de bibliothèque",
      category: "Académique",
      description: "Application web complète avec système CRUD, gestion des rôles, sécurité et dashboard administrateur.",
      image: "/assets/img/library-dashboard.png",
      emoji: "📚",
      stack: ["Symfony", "PostgreSQL", "Sécurité"],
      link: null,
      repo: "https://github.com/hardelSean/BibliothequeGoldberg"
    },
    {
      title: "To-Do List Mobile",
      category: "Académique",
      description: "Application mobile Android native. Gestion collaborative de tâches avec partage entre équipes et catégories.",
      image: null,
      emoji: "📱",
      stack: ["Java", "Android", "SQLite"],
      link: null,
      repo: null
    },
    {
      title: "Portfolio Professionnel 2026",
      category: "Personnel",
      description: "Conception d'une application web moderne avec Next.js 16 et Tailwind CSS 4. Architecture orientée composants, typage TypeScript rigoureux et animations fluides avec Framer Motion.",
      image: "/assets/img/portfolio-v2.png",
      emoji: "🚀",
      stack: ["Next.js 16", "React 19", "TypeScript", "Tailwind v4", "Framer Motion"],
      link: null,
      repo: "https://github.com/hardelsean/portfolio"
    },
    {
      title: "E-commerce Hardware",
      category: "Personnel",
      description: "Application Fullstack (Monorepo) de vente de composants PC. Gestion des stocks en temps réel via WebSockets (synchro admin/client instantanée), système de panier complet et rôles utilisateurs.",
      image: "/assets/img/ecommerce-platform.png",
      emoji: "🖥️",
      stack: ["Next.js", "Fastify", "TypeScript", "WebSockets", "Tailwind"],
      link: null,
      repo: "https://github.com/hardelSean/hardware-shop"
    }
  ],
  skills: {
    frontend: ["Next.js", "React", "Vue.js", "HTML5/CSS3", "JavaScript", "Design Responsive", "Figma", "Tailwind CSS"],
    backend: ["Symfony", "PHP", "C#", "Java", "Node.js"],
    database: ["PostgreSQL", "SQL Server", "MySQL"],
    tools: ["Git", "GitHub", "GitLab", "WordPress", "UX Design", "Docker"]
  }
};
