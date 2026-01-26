# Portfolio - Sean Hardel

![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?style=for-the-badge&logo=tailwind-css)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-Latest-purple?style=for-the-badge&logo=framer)

Bienvenue sur le dépôt de mon portfolio professionnel 2026. Ce projet a été entièrement refondu pour démontrer mes compétences en développement web moderne, notamment sur l'écosystème React/Next.js.

👉 **[Voir le site en ligne](https://hardelsean.github.io/portfolio/)**

## 🚀 Fonctionnalités

- **Design Moderne & Responsive** : Interface "Dark Mode" épurée, adaptée à tous les écrans.
- **Animations Fluides** : Utilisation de `framer-motion` pour des transitions douces au défilement.
- **Architecture Scalable** : Séparation stricte des données (`data/`) et de l'UI (`components/`).
- **Performance** : Optimisé avec Next.js (App Router) et Tailwind CSS v4.
- **Type-Safe** : Codebase 100% TypeScript pour une robustesse maximale.

## 🛠️ Stack Technique

- **Framework** : [Next.js 16](https://nextjs.org/) (App Router)
- **Langage** : [TypeScript](https://www.typescriptlang.org/)
- **Style** : [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations** : [Framer Motion](https://www.framer.com/motion/)
- **Icônes** : [Lucide React](https://lucide.dev/)
- **Déploiement** : GitHub Pages (Static Export)

## 📂 Structure du Projet

```bash
├── app/                # Pages et Layouts (Next.js App Router)
├── components/         # Composants Réutilisables (Hero, Projects, Navbar...)
├── data/               # Données du site (C'est ici qu'on modifie le contenu !)
│   └── portfolio.ts    # Fichier unique contenant tout le texte et les liens
├── public/             # Images et fichiers statiques
```

## 💻 Installation & Développement

Pour lancer ce projet localement :

1.  **Cloner le dépôt**
    ```bash
    git clone https://github.com/hardelsean/portfolio.git
    cd portfolio
    ```

2.  **Installer les dépendances**
    ```bash
    npm install
    ```

3.  **Lancer le serveur de développement**
    ```bash
    npm run dev
    ```
    Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## 📦 Déploiement (GitHub Pages)

Le projet est configuré pour générer un site statique (`output: 'export'`).

```bash
# Générer le build statique dans le dossier 'out/'
npm run build
```

---
*Développé par Sean Hardel - 2026*