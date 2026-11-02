<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
</head>

<body>

![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow?logo=javascript)

![Responsive](https://img.shields.io/badge/Responsive-Yes-success)

![License](https://img.shields.io/badge/License-MIT-green)

<p>~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~</p>
  <h1 align="center">
    <span>&#128188;</span> Portfolio React <br />
    Développeuse Web • Data • UX
  </h1>
<p>~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~</p>    

<p>Portfolio développé avec **React** afin de présenter mon parcours, mes compétences et plusieurs études de cas réalisées durant ma formation et mes projets personnels.</p>
<p>L'objectif n'était pas uniquement de créer une vitrine, mais de concevoir une application React maintenable, organisée autour de composants réutilisables et d'une architecture évolutive.</p>
    
  <h2><span>&#128270;</span>Apperçu</h2>
    <p>Le portfolio comprend :</p>
      <ul>
        <li>Une page d'accueil présentant mon profil</li>
        <li>Une page « À propos » retraçant mon parcours</li>
        <li>Une galerie de projets</li>
        <li>Une page de contact</li>
        <li>Une page détaillée pour chaque projet sous forme de mini étude de cas</li>
      </ul>
    <p>Chaque projet présente notamment :</p>
        <ul>
          <li>le contexte</li>
          <li>les objectifs</li>
          <li>la démarche suivie</li>
          <li>les fonctionnalités développées</li>
          <li>une galerie de captures d'écran</li>
        </ul>
    <p>Mon projet fil rouge comprend également :</p>
        <ul>
          <li>les diagrammes UML</li>
          <li>les modèles de données</li>
          <li>les maquettes interactives</li>
        </ul>

  <h2><span>&#128296;</span>Technologies utilisées</h2>
    <h3>Front-end</h3>
      <ul>
          <li>React</li>
          <li>React Router</li>
          <li>JavaScript ES6+</li>
          <li>CSS3 (Flexbox & Grid)</li>
          <li>React Icons</li>
        </ul>
    <h3>Outils</h3>
      <ul>
          <li>Git</li>
          <li>GitHub</li>
          <li>VS Code</li>
          <li>Figma (maquettes)</li>
          <li>StarUml (diagrammes UML)</li>
        </ul>

  <h2><span>&#128194;</span>Architecture</h2>
    src/ <br />
    │ <br />
    ├── assets/ <br />
    ├── components/ <br />
    │   ├── Approach <br />
    │   ├── Card <br />
    │   ├── CardXP <br />
    │   ├── Challenges <br />
    │   ├── Context <br />
    │   ├── Diagram <br />
    │   ├── Feature <br />
    │   ├── Footer <br />
    │   ├── Gallery <br />
    │   ├── GridProject <br />
    │   ├── Header <br />
    │   ├── Hero <br />
    │   ├── LeftSidebar <br />
    │   ├── List <br />
    │   ├── MainContent <br />
    │   ├── McdMld <br />
    │   ├── Model <br />
    │   ├── Objectives <br />
    │   ├── ProjectPreview <br />
    │   ├── RightSidebar <br />
    │   ├── ScrollToTop <br />
    │   └── Skills <br />
    │ <br />
    ├── data/ <br />
    │   ├── pagesData.js <br />
    │   └── projectsData.js <br />
    │ <br />
    ├── pages/ <br />
    │   ├── About <br />
    │   ├── Contact <br />
    │   ├── ErrorPage <br />
    │   ├── Home <br />
    │   ├── ProjectDetails <br />
    │   └── Projects <br />
    │ <br />
    └── App.jsx <br />

  <h2><span>&#128161;</span>Choix techniques</h2>
    <p>Le contenu du portfolio est entièrement piloté par les fichiers :</p>
        <ul>
          <li>pagesData.js</li>
          <li>projectsData.js</li>
        </ul>
    <p>Cette approche permet :</p>
        <ul>
          <li>de séparer les données de l'affichage ;</li>
          <li>de réutiliser les mêmes composants sur plusieurs pages ;</li>
          <li>d'ajouter un nouveau projet sans modifier les composants React.</li>
        </ul>
    <p>Chaque page projet est ainsi générée automatiquement à partir des données.</p>

  <h2><span>&#129535;</span>Principes de développement</h2>
    <p>Lors de ce projet, une attention particulière a été portée à :</p>
        <ul>
          <li>la réutilisation des composants ;</li>
          <li>la séparation des responsabilités ;</li>
          <li>la lisibilité du code ;</li>
          <li>la maintenabilité ;</li>
          <li>le responsive design ;</li>
          <li>l'expérience utilisateur (UX).</li>
        </ul>

   <h2><span>&#128242;</span>Responsive Design</h2>
    <p>Lors de ce projet, une attention particulière a été portée à :</p>
        <ul>
          <li>Desktop</li>
          <li>Tablette</li>
          <li>Mobile</li>
        </ul>

  <h2><span>&#128223;</span>Quelques fonctionnalités</h2>
    <ul>
      <li>Navigation via React Router</li>
      <li>Hero dynamique</li>
      <li>Pages générées depuis des données JavaScript</li>
      <li>Cartes de projets réutilisables</li>
      <li>Galerie d'images responsive</li>
      <li>Présentation des projets sous forme d'étude de cas</li>
      <li>Icônes React Icons</li>
      <li>Composants entièrement réutilisables</li>
    </ul>

  <h2><span>&#128248;</span>Apperçu</h2>
  <p>Page d'accueil</p>
    <img src="./src/assets/gif/accueilPortfolio.gif" width="900">
  <p>Détails du projet E-commerce Symfony</p>
    <img src="./src/assets/gif/detailsProjet.gif" width="900">

  <h2><span>&#128260;</span>Perspectives d'évolution</h2>
    <p>Plusieurs améliorations sont prévues :</p>
      <ul>
        <li>animation des transitions</li>
        <li>mode sombre</li>
        <li>filtres par technologie</li>
        <li>moteur de recherche des projets</li>
        <li>formulaire de contact connecté à un service d'envoi d'e-mails</li>
        <li>internationalisation (FR / EN)</li>
      </ul>

  <h2><span>&#128105;</span>A propos</h2>
    <p>Après plus de vingt ans d'expérience dans le commerce, la restauration et la communication, j'ai choisi de me reconvertir dans le développement d'applications web.</p>
    <p>Mon parcours me permet aujourd'hui de combiner :</p>
      <ul>
        <li>l'écoute des besoins utilisateurs ;</li>
        <li>l'expérience client ;</li>
        <li>le marketing ;</li>
        <li>l'analyse de données ;</li>
        <li>le développement web.</li>
      </ul>

  <h2><span>&#128231;</span>Contact</h2>
    <p>N'hésitez pas à me contacter via LinkedIn.</p>
    <p>Merci pour votre visite !</p>

</body>
</html>