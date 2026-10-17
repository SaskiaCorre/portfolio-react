import graphPlotlySmall from '../assets/screenshots/graphPlotlySmall.png';
import eShopHomeSmall from '../assets/screenshots/eShopHomeSmall.png';
import network from '../assets/screenshots/network.png';

import cvEnLigne from '../assets/screenshots/cvEnLigne.png';

import averageCustomerSatisfaction from '../assets/images/galleries/graphsPython/averageCustomerSatisfaction.png';
import averageDeliveryTime from '../assets/images/galleries/graphsPython/averageDeliveryTime.png';
import monthlyRevenue from '../assets/images/galleries/graphsPython/monthlyRevenue.png';
import productsRanking from '../assets/images/galleries/graphsPython/productsRanking.png';
import salesByBrand from '../assets/images/galleries/graphsPython/salesByBrand.png';
import salesByChannel from '../assets/images/galleries/graphsPython/salesByChannel.png';
import salesByProduct from '../assets/images/galleries/graphsPython/salesByProduct.png';
import salesByRegion from '../assets/images/galleries/graphsPython/salesByRegion.png';

import confirmOrder from '../assets/images/galleries/appSymfony/confirmOrder.png';
import dashboardAdmin from '../assets/images/galleries/appSymfony/dashboardAdmin.png';
import userAccount from '../assets/images/galleries/appSymfony/userAccount.png';
import userAccountDetails from '../assets/images/galleries/appSymfony/userAccountDetails.png';
import miniShoppingCart from '../assets/images/galleries/appSymfony/miniShoppingCart.png';
import shoppingCart from '../assets/images/galleries/appSymfony/shoppingCart.png';
import useCaseEshop from '../assets/images/galleries/appSymfony/useCaseEshop.png';
import phoneModel from '../assets/images/galleries/appSymfony/phoneModel.png';
import db from '../assets/images/galleries/appSymfony/db.png';
import dbUser from '../assets/images/galleries/appSymfony/dbUser.png';
import userConnected from'../assets/images/galleries/appSymfony/userConnected.png';
import userRegistration from'../assets/images/galleries/appSymfony/userRegistration.png';
import diagActiviteSeConnecter from'../assets/images/galleries/appSymfony/diagActiviteSeConnecter.png';

import compteUtilisateur from '../assets/images/galleries/confReseau/compteUtilisateur.png';
import confServeurWind from '../assets/images/galleries/confReseau/confServeurWind.png';
import confVmGlpi from '../assets/images/galleries/confReseau/confVmGlpi.png';
import creationDossiers from '../assets/images/galleries/confReseau/creationDossiers.png';
import descripIncident from '../assets/images/galleries/confReseau/descripIncident.png';
import dossiersUtilisateurs from '../assets/images/galleries/confReseau/dossiersUtilisateurs.png';
import pingConnexion from '../assets/images/galleries/confReseau/pingConnexion.png';
import sansDroits from '../assets/images/galleries/confReseau/sansDroits.png';
import ticketEnCours from '../assets/images/galleries/confReseau/ticketEnCours.png';
import ticketUtilisateur from '../assets/images/galleries/confReseau/ticketUtilisateur.png';
import topoDhcp from '../assets/images/galleries/confReseau/topoDhcp.png';
import topoLan from '../assets/images/galleries/confReseau/topoLan.png';

import aboutPage from '../assets/images/galleries/portfolioReact/aboutPage.png';
import archi from '../assets/images/galleries/portfolioReact/archi.png'; 
import cardComponent from '../assets/images/galleries/portfolioReact/cardComponent.png'; 
import contactForm from '../assets/images/galleries/portfolioReact/contactForm.png';
import dataModel from '../assets/images/galleries/portfolioReact/dataModel.png'; 
import galleryComponent from '../assets/images/galleries/portfolioReact/galleryComponent.png';
import mcd from '../assets/images/galleries/portfolioReact/mcd.png';
import mld from '../assets/images/galleries/portfolioReact/mld.png';
import modelComponent from '../assets/images/galleries/portfolioReact/modelComponent.png'; 
import projectPreviewComponent from '../assets/images/galleries/portfolioReact/projectPreviewComponent.png'; 
import projectsJS from '../assets/images/galleries/portfolioReact/projectsJS.png'; 
import projectSlug from '../assets/images/galleries/portfolioReact/projectSlug.png'; 
import projectsPage from '../assets/images/galleries/portfolioReact/projectsPage.png'; 
import router from '../assets/images/galleries/portfolioReact/router.png'; 
import routerSmall from '../assets/images/galleries/portfolioReact/routerSmall.png'; 
 

import { ImConnection, ImDatabase } from "react-icons/im";
import { BsCartCheck } from "react-icons/bs";
import { FaStripe, FaUserShield, FaRoute, FaPuzzlePiece, FaDatabase, FaWindows, FaLock, FaNetworkWired } from "react-icons/fa6";
import { MdOutlineDashboardCustomize, MdTerminal, MdOutlineSecurity } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";
import { FaUsersCog, FaGithub, FaServer, FaMobileAlt, FaHistory, FaUserLock } from "react-icons/fa";
import { FiBarChart2, FiPieChart, FiTrendingUp } from "react-icons/fi";
import { IoShieldCheckmark } from "react-icons/io5";
import { RiNetworkFill, RiLuggageCartLine } from "react-icons/ri";
import { GiReceiveMoney } from "react-icons/gi";
import { GrCatalog } from "react-icons/gr";
import { CiStar } from "react-icons/ci";
import { SlArrowDown } from "react-icons/sl";


const PROJECTS = [
// #############################
// GRAPHIQUES PYTHON
// #############################
  {
    slug: "data-analysis",

    // card: {
    //   shortTitle:"Graphiques interactifs | Analyse de données de ventes",
    //   shortStack: "Python",
    //   shortDescription: "Graphismes interactifs",
    // },

    gridTitle: "Analyse de données | Visualisation interactive",
  
    gridDescription: "Explorer et analyser des données de ventes pour faire émerger des tendances et faciliter la prise de décision.",

    title: "Analyse de données de ventes",
    
    // subtitle: "Comment créaliser des diagrammes ?",

    image: graphPlotlySmall,

    hero: {
      title: "Analyses de données de ventes",
      subtitle: "Concevoir des graphiques par extraction de données",
      badges: ["Python", "Pandas", "Plotly"],
      content: "Explorer des données de ventes pour faire émerger des indicateurs utiles à la compréhension de l'activité et les transformer en visualisations interactives.", 
      image: monthlyRevenue,
    },

    shortStack: "Python / Pandas / Plotly",

    // fullStacks: [
    //   {stack: "Python"}, 
    //   {stack: "Pandas"}, 
    //   {stack: "Plotly"}
    // ],
    
    shortDescription: "Analyse visuelle des performances commerciales à partir de données réelles",

    fullDescription: "Les graphiques permettent d'avoir une une vue d'ensemble rapide pour accélérer les prises de décisions",

    category: "Data analysis",

    context: {
      title: "Le Contexte",
      type: "Projet personnel",
      content: "À partir d'un jeu de données de ventes dans un contexte dermo-cosmétique, l'objectif était d'explorer les données, d'en extraire des indicateurs pertinents et de les transformer en visualisations permettant de mieux comprendre l'activité."
    },

    contextCards: [
      {
        title: "Durée",
        content: "2 jours",
      },
      {
        title: "Technologies",
        content: "Python / Pandas / Plotly",
      },
      {
        title: "Niveau",
        content: "Intermédiaire",
      },
      {
        title: "Objectif",
        content: "Analyse et visualisation de données",
      }
    ],

    objective: {
      title: "Objectifs",
      content: "Transformer des données brutes en informations lisibles afin d'identifier des tendances et de faciliter leur interprétation.",
    },

    objectiveCards: [
      {
        title: "Préparer les données",
        content:  "Importer, explorer et nettoyer les données issues du fichier CSV afin de disposer d'un jeu de données exploitable.",
      },
      {
        title: "Analyser les ventes",
        content:  "Explorer les données afin d'identifier des indicateurs et des tendances utiles à la compréhension de l'activité.",
      },
      {
        title: "Visualiser les résultats",
        content: "Créer des graphiques interactifs permettant de rendre les résultats plus lisibles et plus faciles à interpréter.",
      }
    ],

    approach: {
      title: "Ma démarche",
      content: "J'ai abordé le projet comme une analyse de données de bout en bout, de la préparation du fichier source jusqu'à la restitution visuelle des résultats.",
    },

    approachCards: [
      {
        title: "Explorer",
        content: "Découvrir la structure du jeu de données et identifier les informations disponibles avant de commencer l'analyse.",
      },
      {
        title: "Préparer",
        content: "Nettoyer et préparer les données avec Pandas afin de pouvoir les exploiter de manière fiable.",
      },
      {
        title: "Analyser",
        content: "Sélectionner et croiser les informations pertinentes pour faire ressortir des indicateurs et tendances.",
      },
      {
        title: "Restituer",
        content: "Transformer les résultats en visualisations interactives avec Plotly afin de faciliter leur lecture.",
      },
    ],

    feature: {
      title: "Fonctionnalités",
      content: "Le projet propose une analyse visuelle des données permettant d'explorer différents indicateurs liés à l'activité commerciale.",
    },

    featureCards: [
      {
        title: "Import et traitement des données",
        content: "",
        icon: ImDatabase,
      },
      {
        title: "Analyse des indicateurs",
        content: "",
        icon: FiBarChart2,
      },
      {
        title: "Visualisations interactives",
        content: "",
        icon: FiPieChart,
      },
      {
        title: "Lecture des tendances",
        content: "",
        icon: FiTrendingUp,
      },
    ],
        
    skills: {
      title: "Compétences acquises",
      description: "Ce projet m'a permis de :",
      listItems: [
        "structuration des données temporelles",
        "définir les graphiques utiles",
      ],
      icon: SlArrowDown,
    },

    challenges: {
      title: "Challenges",
      description: "Défis relevés avec succès :", 
      listItems: [
        "structuration des données temporelles",
        "définir les graphiques utiles",
      ],
      icon: SlArrowDown,
    },

    dataModel: null,

    dataModelSubtitle: null,

    dataModelCards: null,

    dataModelChoices: null,

    diagram: null,

    diagramCards: null,

    model: null,

    modelCards: null,  

    gallerySection: {
      title: "Screenshots",
      content: "",
    },

    gallery: [
      {
        title: "Note moyenne de chaque produit",
        content: "",
        image: averageCustomerSatisfaction,
        isInGrid: false,
      },
      {
        title: "Note moyenne des délais de livraison",
        content: "", 
        image: averageDeliveryTime,
        isInGrid: true,
      },
      {
        title: "Revenu mensuel",
        content: "",
        image: monthlyRevenue,
        isInGrid: true,
      },
      {
        title: "Classement des produits par vente", 
        content: "",
        image: productsRanking,
        isInGrid: true,
      },
      {
        title: "Ventes par marque",
        content: "", 
        image: salesByBrand,
        isInGrid: false,
      },
      {
        title: "Ventes par canal de distribution",
        content: "", 
        image: salesByChannel,
        isInGrid: false,
      },
      {
        title: "Ventes par produit",
        content: "", 
        image: salesByProduct,
        isInGrid: false,
      },
      {
        title: "Ventes par région",
        content: "",
        objective: "",  
        image: salesByRegion,
        isInGrid: false,
      }
    ],

    conclusion: "",

    github: "https://github.com/SaskiaCorre/data.analysis.graphs",
    gitIcon: FaGithub,

    isFeatured: true,

    isDetailled: true,
  },


// #############################
// E-BOUTIQUE SYMFONY
// #############################
  {
    slug: "e-boutique-symfony",

    gridTitle: "Application e-commerce | Symfony",
    
    gridDescription:  "Développer une application e-commerce complète avec gestion des produits, des catégories, des utilisateurs et de l'administration.",

    title: "Marketplace e-commerce",

    subtitle: "Comment concevoir une boutique en ligne simple à administrer et agréable à utiliser ?",

    image: eShopHomeSmall,

    hero: {
      title: "MaBoutique.com | E-commerce personnalisable",
      subtitle: "Comment concevoir une boutique en ligne simple à administrer et agréable à utiliser",
      badges: ["Symfony", "Twig", "MySQL", "Stripe"],
      content: "Conception d'une application e-commerce complète permettant à un commerçant de gérer ses produits, ses commandes et ses clients depuis une interface sécurisée.",
      image: dashboardAdmin,
      // cta: "Voir le GitHub du projet"
    },

    shortStack: "Symfony",

    // fullStacks:  [
    //   {stack: "Symfony"}, 
    //   {stack: "Twig"}, 
    //   {stack: "MySQL"}, 
    //   {stack: "Stripe"}
    // ],
        
    shortDescription: "Espace client, tableau de bord Administrateur, panier dynamique AJAX, paiement Stripe.",

    fullDescription: "",

    category: "Développement Web",

    context: {
      title: "Le Contexte",
      type: "Projet fil rouge",
      content: "Développement d'une application e-commerce complète et sécurisée sous Symfony & MySQL, pensée comme une vitrine technologique pour les artisans et commerçants.",
      secondContent: "De la conception de la base de données (MCD/MLD) jusqu'à l'UX dynamique JavaScript/AJAX pour un panier sans rechargement), ce projet démontre ma capacité à livrer un produit web robuste, incluant un tunnel de paiement Stripe et un tableau de bord d'administration (EasyAdmin) intuitif.",
    },

    contextCards: [
      {
        title: "Durée",
        content: "7 mois",
      },
      {
        title: "Technology",
        content: "Symfony",
      },
      {
        title: "Niveau",
        content: "Intermédiaire",
      },
      {
        title: "Objectif",
        content: "Architecture MVC",
      }
    ],

    objective: {
      title: "Objectifs",
      content: "Construire une application fluide et fiable",
    },
   
    objectiveCards: [
      {
        title: "Robustesse",
        content: "Créer une architecture robuste",
      },
      {
        title: "UX",
        content: "Mettre l'utilisateur au centre",
      },
      {
        title: "Admin",
        content: "Développer un back-office sécurisé",
      }
    ],
   
    approach: {
      title: "Ma démarche",
      content: "Proposer une vitrine Internet accessible aux Petites Entreprises",
    },

    approachCards: [
      {
        title: "Concevoir",
        content: "Application pensée tant pour le client que pour le gérant",
      },
      {
        title: "Développer",
        content: "Création de la base de données, des entités et leurs relations",
      },
      {
        title: "Tester",
        content: "Réalisation des tests de connectivité et d'authentification",
      },
      // {
      //   title: "Amélioration",
      //   content: "Modifications pour améliorer l'UX",
      // }
    ],
    
    feature: {
      title: "Fonctionnalités développées",
      content:"De l'expérience d'achat à la gestion du catalogue, l'application propose des fonctionnalités pensées pour répondre aux besoins des utilisateurs et de l'administration.",
    },

    featureCards: [
      {
        title: "Authentification sécurisée",
        content: "Gestion des comptes utilisateurs et mots de passe hachés en base de données.",
        icon: ImConnection,
      },
      {
        title: "Panier dynamique",
        content: "Ajout, modification et suppression des produits sans rechargement de la page grâce à AJAX.",
        icon: BsCartCheck,
      },
      {
        title: "Paiement sécurisé",
        content: "Intégration de Stripe pour sécuriser le paiement et le parcours de commande.",
        icon: FaStripe,
      },
      {
        title: "Tableau de bord administrateur",
        content: "Centralisation des outils de gestion nécessaires au suivi et à l'administration de l'application.",
        icon: MdOutlineDashboardCustomize,
      },
      {
        title: "Gestion du catalogue",
        content: "Créer, consulter, modifier et supprimer les produits et leurs informations depuis le tableau de bord administrateur.",
        icon: RxDashboard,

      },
      {
        title: "Gestion Clients",
        content: "Consulter et gérer les comptes utilisateurs depuis l'espace d'administration.",
        icon: FaUsersCog,

      },
      // {
      //   title: "Architecture & Conception :",
      //   content: "Avant de coder, j'ai analysé les besoins métiers pour concevoir les maquettes sur Figma, les diagrammes UML sur StarUML, et modélisé la base de données MySQL via JMerise."
      // },
      // {
      //   title: "Sécurité (Symfony Security) :",
      //   content: "Authentification robuste des utilisateurs, hachage des mots de passe, et sécurisation du compte client ('Mon Compte')."
      // },
      // {
      //   title: "Expérience Utilisateur Dynamique (UX) :",
      //   content: "Pour éviter les rechargements de page intempestifs, j'ai développé des scripts JavaScript natifs (AJAX / Fetch) gérant en temps réel le panier (CRUD complet), les listes de favoris (Wishlist) et le comparateur de produits."
      // },
      // {
      //   title: "Logistique & Paiement :",
      //   content: "Intégration d'un système de livraison avec calcul dynamique des frais de port (3 transporteurs au choix) et d'un tunnel de paiement sécurisé avec l'API Stripe."
      // },
      // {
      //   title: "Back-Office (EasyAdmin) :",
      //   content: "Création d'une interface d'administration épurée permettant au commerçant de gérer ses produits, catégories et visuels en totale autonomie."
      // }
    ],
        
    skills: {
      title: "Compétences acquises",
      description: "Ce projet m'a permis de :",
      listItems: [
        " maîtriser Symfony Security",
        " utiliser Doctrine",
        " concevoir un CRUD",
        " intégrer Stripe",
        " améliorer l'UX",
      ],
      icon: SlArrowDown,
    },

    challenges: {
      title: "Challenges",
      description: "Défis relevés avec succès :", 
      listItems: [
        " sécuriser les routes",
        " gérer les rôles",
        " mettre en place Stripe",
        " structurer Doctrine",
      ],
      icon: SlArrowDown,
    },

    dataModel: {
      title: "Modélisation des données",
      content:"Conception et formalisation de la structure des données de l'application à travers un MCD, un MLD et un schéma complet réalisé avec Looping.",
    },

    dataModelSubtitle: "Quelques choix de conception",

    dataModelCards: [
      {
        title: "Modèle Conceptuel de Données (MCD)",
        image: mcd,
      },
      {
        title: "Modèle Logique de Données (MLD)",
        image: mld,
      },
      {
        title: "Modèle complet",
        image: dataModel,
      },
    ],

    dataModelChoices: [
      {
        icon: GiReceiveMoney,
        title: "Gestion monétaire",
        content: "Les prix sont stockés en centimes sous forme d'entiers afin d'éviter les erreurs de précision et de fiabiliser les calculs de prix et de remises.",
      },
      {
        icon: FaHistory,
        title: "Historisation des commandes",
        content: "Les informations nécessaires à la commande sont conservées au moment de la transaction afin de préserver l'historique indépendamment des modifications ultérieures du catalogue ou du profil client.",
      },
      {
        icon: FaUserLock,
        title: "Utilisateurs",
        content: "Adresse e-mail unique et mot de passe stocké sous forme hachée.",
      },
      {
        icon: GrCatalog,
        title: "Catalogue",
        content: "Les produits sont associés aux catégories et aux collections.",
      },
      {
        icon: CiStar,
        title: "Pilotage éditorial",
        content: "Un produit peut être marqué comme premium depuis le back-office.",
      },
      {
        icon: RiLuggageCartLine,
        title: "Commandes",
        content: "Séparation entre commande, détails de commande, paiement et transporteur.",
      },
      {
        icon: MdOutlineSecurity,
        title: "Sécurité",
        content: "Gestion des accès administrateur et des données utilisateurs.",
      },
    ],

    diagram: {
      title: "Architecture technique",
      content: "Les diagrammes, réalisés avec StarUml, m'ont permis d'établir une architecture cohérente des fonctionnalités.",
    },

    diagramCards: [
      {
        title: "Cas d'utilisation",
        content: "Réalisé en respectant la méthode CRUD, le cas d'utilisation (Use Case) facilite la mise en place des droits utilisateurs",
        image: useCaseEshop,
      },
      {
        title: "Diagramme d'activité : Se connecter",
        content: "Toutes les étapes du Système Informatique pour connecter l'utilisateur à son compte.",
        image: diagActiviteSeConnecter,
      },
    ],

    model: {
      title: "Maquettes",
      content:"Avant le développement, j’ai réalisé une maquette interactive du site sur Figma afin de définir la structure des pages, les parcours utilisateurs et l’ergonomie générale du site.",
    },

    modelCards: [
      {
        title: "Maquette pour téléphone",
        content1: "Objectifs : structurer le catalogue, faciliter la navigation, anticiper les interactions du panier",
        content2: "Chaque écran a été pensé afin de limiter le nombre d'actions nécessaires pour finaliser un achat.",
        image: phoneModel,
        figma: "https://www.figma.com/proto/nZtNDB6IlRGOHR5dmcG8kG/MaBoutique?page-id=0%3A1&node-id=1-2445&t=G8UqJwOrcQ2S1I2k-0&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1%3A2553",
      },
    ], 

    gallerySection: {
      title: "L'application en images",
      content: "",
    }, 

    gallery: [
      {
        title: "Page d'accueil", 
        content: "Le visiteur peut naviguer sur le site, s'inscrire ou se connecter",
        image: eShopHomeSmall,
        isInGrid: false,
      },
      {
        title: "Compte utilisateur", 
        content: "Le tabeau de bord permet à l'utilisateur d'accéder à ses informations et de les modifier à tout moment",
        image: userAccountDetails,
        isInGrid: false,
      },
      {
        title: "Tableau de bord utilisateur", 
        content: "L'utilisateur peut modifier ses données et consulter ses commandes",
        image: userAccount,
        isInGrid: true,
      },
      {
        title: "Panier dynamique", 
        content: "L'utilisateur peut modifier la quantité d'un produit ou le supprimer, ainsi que sélectionner le transporteur selon une liste proposée. A chaque modification, les prix s'ajustent sans rechargement de page.",
        image: shoppingCart,
        isInGrid: true,
      },
      {
        title: "Panier - Icone", 
        content: "Quelque soit la page sur laquelle il navigue, l'utilisateur peut accéder à son panier.",
        image: miniShoppingCart,
        isInGrid: false,
      },
      {
        title: "Confirmation commande", 
        content: "Vérification de la commande avant validation et paiement.",
        image:confirmOrder,
        isInGrid: false,
      },
      {
        title: 'Tableau de bord Administrateur',
        content: "Une gestion facile grâce au tableau ludique.",
        image: dashboardAdmin,
        isInGrid: true,
      },
      {
        title: 'Base de données',
        content: "",
        image: db,
        isInGrid: false,
      },
      {
        title: 'Les utilisateurs enregistrés',
        content: "En base de données, le mot de passe de l'utilisateur apparaît haché.",
        image: dbUser,
        isInGrid: false,
      },
      {
        title: 'Utilisateur connecté',
        content: "",
        image: userConnected,
        isInGrid: false,
      },
      {
        title: 'Créer un compte',
        content: "",
        objective: "", 
        image: userRegistration,
        isInGrid: false,
      }
    ],

    conclusion: "Ce projet m'a permis de consolider mes compétences en backend tout en appliquant une démarche centrée utilisateur héritée de mon parcours en communication et en commerce.",

    github: "https://github.com/SaskiaCorre/eboutique.symfony",
    gitIcon: FaGithub,
    
    isFeatured: true,
    
    isDetailled: true,
  },


// #############################
// TOPOLOGIE LAN / DHCP
// #############################
  {
    slug: "topology-lan",

    gridTitle: "Système & Réseaux | Windows Server",

    gridDescription: "Administrer un environnement Windows Server en configurant Active Directory, les utilisateurs, les groupes et les permissions NTFS.",

    title: "Réseaux LAN",

    subtitle: "",

    image: network,

    hero: {
      title: "Systèmes & Réseaux",
      subtitle: "Comment configurer un réseau interne",
      badges: ["Windows Server", "Active Directory", "Cisco Tracer", "DNS"],
      content: "Mise en place et sécurisation d'une infrastructure Windows Server avec Active Directory, gestion des utilisateurs et groupes, configuration réseau et contrôle des permissions NTFS.",
      image: topoDhcp,
    },

    shortStack: "Windows Server / Linux",

    // fullStacks: [
    //   {title: "Linux"},
    //   {title: "Packet Cisco Tracer"}
    // ],

    shortDescription: "Topologie réseau",

    fullDescription: "",

    category: "Systèmes & Réseaux",

    context: {
      title: "Le Contexte",
      type: "Projet de formation",
      content: "Mise en place, sécurisation et administration d'une infrastructure réseau et système pour la structure RUE25, incluant la gestion d'un serveur Windows en mode Core et le cloisonnement des données par services."
    },

    contextCards: [
      {
        title: "Durée",
        content: "1 semaine",
      },
      {
        title: "Technologies",
        content: "Windows Server Core / PowerShell / AD / NTFS",
      },
      {
        title: "Environnement",
        content: "Serveur Core / CLI",
      },
      {
        title: "Objectif",
        content: "Infrastructure et Sécurité",
      }
    ],

    objective: {
        title: "Objectifs",
        content: "Administrer une infrastructure Windows Server tout en assurant la disponibilité des ressources et la sécurité des accès selon les besoins des différents services.",
    }, 

    objectiveCards: [
      {
        title: "Administrer le serveur",
        content: "Configurer et gérer un serveur Windows Server en mode Core et intervenir sur les incidents liés au réseau et à la résolution DNS.",
      },
      {
        title: "Gérer les accès",
        content: "Mettre en place une segmentation rigoureuse des dossiers partagés (Direction, Commerciaux, Consultants, Comptables) avec des droits NTFS granulaires.",
      },
      {
        title: "Administration Sécurisée",
        content: "Gérer l'annuaire Active Directory (utilisateurs et groupes) et configurer un serveur en mode Core via la ligne de commande et PowerShell.",
      }
    ],

    approach: {
        title: "Ma démarche",
        content: "J'ai abordé le projet comme une intervention d'administration système : diagnostiquer les dysfonctionnements, corriger la configuration puis sécuriser durablement l'infrastructure. en combinant l'utilisation de la ligne de commande (CLI/PowerShell) et le respect des bonnes pratiques d'administration système.",
    },

    approachCards: [ 
      {
        title: "Diagnostiquer",
        content: "Analyser les erreurs, les problèmes de connectivité et les refus d'accès afin d'identifier l'origine des dysfonctionnements.",
      },
      {
        title: "Nettoyage & Restructuration",
        content: "Suppression des comptes obsolètes, réattribution des membres aux groupes AD et prise de possession des dossiers pour éliminer les accès refusés.",
      },
      {
        title: "Sécurisation Avancée",
        content: "Utilisation de la commande icacls pour appliquer des permissions strictes (Modify, Read) et casser l'héritage des dossiers partagés.",
      },
    ],

    feature: {
        title: "Compétences mises en oeuvre",
        content: "Le projet mobilise différentes compétences d'administration système, de gestion des identités, de configuration réseau et de sécurisation des ressources.",
    },

    featureCards: [ 
      {
        title: "Windows Server Core",
        icon: FaWindows,
      },
      {
        title: "Active Directory (AD DS)",
        icon: FaUserShield,
      },
      {
        title: "Permissions NTFS & icacls",
        icon: FaLock,
      },
      {
        title: "Automatisation PowerShell",
        icon: MdTerminal,
      },
      {
        title: "Gestion DNS & Réseau",
        icon: FaNetworkWired,
      },
    ],
        
    skills: {
      title: "Compétences acquises",
      description: "Ce projet m'a permis de :",
      listItems: [
        "",
        "",
      ],
      icon: SlArrowDown,
    },

    challenges: {
      title: "Challenges",
      description: "Défis relevés avec succès :", 
      listItems: [
        "",
        "",
      ],
      icon: SlArrowDown,
    },

    dataModel: null,

    dataModelSubtitle: null,

    dataModelCards: null,

    dataModelChoices: null,

    diagram: null,

    diagramCards: null,

    model: null,

    modelCards: null, 

    gallerySection: {
      title: "Screenshots",
      content: "",
    }, 

    gallery: [
      {
        title: "Compte utilisateur",
        content: "",  
        image: compteUtilisateur,
        isInGrid: true,
      },
      {
        title: "Serveur Windows",
        content: "", 
        image: confServeurWind,
        isInGrid: false,
      },
      {
        title: "Serveur GLPI",
        content: "",  
        image: confVmGlpi,
        isInGrid: false,
      },
      {
        title: "Création des dossiers des utilisateurs",
        content: "", 
        image: creationDossiers,
        isInGrid: true,
      },
      {
        title: "Description de l'incident",
        content: "", 
        image: descripIncident,
        isInGrid: false,
      },
      {
        title: "Dossiers Utilisateurs",
        content: "", 
        image: dossiersUtilisateurs,
        isInGrid: false,
      },
      {
        title: "Connexion",
        content: "", 
        image: pingConnexion,
        isInGrid: false,
      },
      {
        title: "Utilisateur sans droits",
        content: "", 
        image: sansDroits,
        isInGrid: false,
      },
      {
        title: "Ticket en cours",
        content: "", 
        image: ticketEnCours,
        isInGrid: false,
      },
      {
        title: "Ticket utilisateur",
        content: "", 
        image: sansDroits,
        isInGrid: false,
      },
      {
        title: "Topolgie LAN",
        content: "",
        image: topoLan,
        isInGrid: false,
      },
      {
        title: "Topologie DHCP", 
        content: "",
        image: topoDhcp,
        isInGrid: true,
      },
    ],    

    conclusion: "",

    github: "https://github.com/SaskiaCorre/mise_en_reseau_2_LAN",
    gitIcon: FaGithub,

    isFeatured: true,
    
    isDetailled: true,
  },


// #############################
// PORTFOLIO REACT
// #############################
  {
    slug: "portfolio-react",

    gridTitle: "Application portfolio | React & Responsive Design",

    gridDescription: "Concevoir une application évolutive avec un code propre et maintenable, des composants réutilisables et une architecture adaptable aux besoins.",    

    title: "saskiaPerriotMagnanou.com | Application React évolutive",

    // subtitle: "",

    image: null,

    hero: {
      title: "Application React",
      subtitle: "Comment créer une application évolutive et maintenable",
      badges: ["React", "JavaScript", "Responsive"],
      content: "Créer des composants réutilisables pour faire évoluer l'application sans risques de conflit de données",
      image: routerSmall,
    },

    shortStack: "React / Vite",

    // fullStacks: [
    //   {title: "Linux"},
    //   {title: "Packet Cisco Tracer"}
    // ],

    shortDescription: "Application Portfolio",

    fullDescription: "Une application évolutive, responsive et facile à maintenir",

    category: "Développement Web & Déploiement",

    context: {
      title: "Le Contexte",
      type: "Projet personnel",
      content: "Concevoir et développer un portfolio professionnel en React afin de présenter mon parcours, mes compétences et mes projets à travers une expérience utilisateur claire, responsive et cohérente. L'objectif était également de construire une architecture suffisamment flexible pour présenter plusieurs projets sous forme d'études de cas détaillées."
    },

    contextCards: [
      {
        title: "Durée",
        content: "3 mois",
      },
      {
        title: "Technology",
        content: "React / Vite",
      },
      {
        title: "Niveau",
        content: "Intermédiaire",
      },
      {
        title: "Objectif",
        content: "Portfolio professionnel",
      }
    ],

    objective: {
      title: "Objectifs",
      content: "Construire un portfolio qui présente à la fois mon profil, mes compétences techniques et ma capacité à concevoir une application web structurée, maintenable et adaptée aux différents écrans."
    },

    objectiveCards: [
      {
        title: "Valoriser mon parcours",
        content: "Présenter mon profil, ma reconversion et la complémentarité entre mon expérience terrain et mes compétences techniques."
      },
      {
        title: "Présenter mes projets",
        content: "Transformer chaque réalisation en étude de cas afin de mettre en évidence le contexte, les choix techniques, la démarche et les fonctionnalités."
      },
      {
        title: "Démontrer mes compétences",
        content: "Mettre en pratique React, le responsive design, la gestion des données et la conception de composants réutilisables dans un projet concret."
      }
    ],

    approach: {
      title: "Ma démarche",
      content: "J'ai conçu le portfolio comme une véritable application React, en privilégiant une architecture modulaire et la réutilisation des composants. Les contenus des projets sont séparés de leur présentation afin de pouvoir ajouter ou modifier des études de cas sans dupliquer la structure des pages."
    },

    approachCards: [
      {
        title: "Conception de l'architecture",
        content: "Organisation du projet en pages, composants réutilisables, données centralisées et routes dynamiques afin de conserver une structure claire et évolutive."
      },
      {
        title: "Composants réutilisables",
        content: "Création de composants dédiés aux différentes sections des études de cas : Context, Objectives, Approach, Feature, Diagram, Model et Gallery."
      },
      {
        title: "Responsive & UX",
        content: "Conception d'une interface adaptée aux écrans desktop, tablette et mobile, avec une attention particulière portée à la lisibilité, aux espacements et à la navigation."
      }
    ],

    feature: {
      title: "Fonctionnalités",
      content: "Une interface pensée pour être facilement enrichie, avec des composants réutilisables et des contenus de projets gérés dynamiquement."
    },

    featureCards: [
      {
        title: "Routing dynamique",
        icon: FaRoute,
      },
      {
        title: "Composants réutilisables",
        icon: FaPuzzlePiece,
      },
      {
        title: "Données centralisées",
        icon: FaDatabase,
      },
      {
        title: "Design responsive",
        icon: FaMobileAlt,
      },
    ],

    // deployment: {
    //   title: "Déploiement",
    //   description: "Première mise en production de l'application, de la génération du build jusqu'à son accessibilité sur Internet.",
    //   steps: [
    //     {
    //       title: "Build de production",
    //       content: "Génération du dossier dist avec Vite grâce à npm run build.",
    //     },
    //     {
    //       title: "Prévisualisation",
    //       content: "Vérification du comportement du build en local avec npm run preview.",
    //     },
    //     {
    //       title: "Hébergement",
    //       content:  "Mise en ligne des fichiers générés sur la plateforme d'hébergement choisie.",
    //     },
    //     {
    //       title: "Domaine et accès",
    //       content: "Configuration du nom de domaine, du DNS, du HTTPS et des routes de l'application.",
    //     },
    //   ],
    // },

    skills: {
      title: "Acquis",
      description: "Ce projet m'a permis de :",
      listItems: [
        "",
        "",
      ],
      icon: SlArrowDown,
    },

    challenges: {
      title: "Challenges",
      description: "Défis rencontrés", 
      listItems: [
        "",
        "",
      ],
      icon: SlArrowDown,
    },

    dataModel: null,

    dataModelSubtitle: null,

    dataModelCards: null,

    dataModelChoices: null,

    diagram: null,

    diagramCards: null,

    model: null,

    modelCards: null,      

    gallerySection: {
      title: "Apperçu des composants",
      content: "",
    },

    gallery: [
      {
        title: "Architecture",
        content: "",
        image: archi,
        isInGrid: true,
      },
      {
        title: "Carte clicable",
        image: cardComponent,
        isInGrid: false,
      },
      {
        title: "Formulaire de contact",
        content: "", 
        image: contactForm,
        isInGrid: true,
      },
      {
        title: "Gallerie des images",
        content: "",
        image: galleryComponent,
        isInGrid: true,
      },
      {
        title: "Données et présentation séparées",
        content: "Les informations de chaque projet sont centralisées dans projectsData.js, tandis que les composants React assurent leur présentation.",
        image: projectsJS,
        isInGrid: false,
      },
      {
        title: "Composant réutilisable",
        content: "Une même structure permet de générer les différentes sections des études de cas à partir des données propres à chaque projet.", 
        image: projectSlug,
        isInGrid: false,
      },
      {
        title: "Page Projets",
        content: "",
        image: projectsPage,
        isInGrid: false,
      },
      {
        title: "Composant Maquette",
        content: "",
        objective: "",  
        image: modelComponent,
        isInGrid: false,
      },
      {
        title: "Page A propos",
        content: "",
        objective: "",  
        image: aboutPage,
        isInGrid: false,
      },
      {
        title: "Composant Aperçu du projet",
        content: "",
        objective: "",  
        image: projectPreviewComponent,
        isInGrid: false,
      },
      {
        title: "Le router React",
        content: "",
        objective: "",  
        image: router,
        isInGrid: false,
      },
    ],

    conclusion: "",    

    github: "https://github.com/SaskiaCorre/mon.portfolio",
    gitIcon: FaGithub,

    isFeatured: false,
    
    isDetailled: false,
  },


// #############################
// TICKET DE CAISSE PYTHON
// #############################
  // {
  //   slug: "receipt-python-poo",
    
  //   title: "Data Management",

  //   subtitle: "Gestion de caisse",

  //   image: receiptPythonPooSmall,

  //   hero: {
  //     title: "Ticket de caisse avec gestion des vendeurs",
  //     subtitle: "Comment concevoir une application de gestion de ticket de vente",
  //     content: "Gérer les tickets en temps réel",
  //     image: dashboardAdmin,
  //     // cta: "Voir le GitHub du projet"
  //   },

  //   shortStack: "Python POO",

  //   fullStacks: [
  //     {stack: "Python"},
  //     {stack: "POO"},
  //   ],

  //   type: "Projet personnel",

  //   shortDescription: "Ticket de caisse",

  //   fullDescription: "",

  //   contextTitle: "Le contexte",

  //   context: "Projet personnel",

  //   contextItems: [
  //     {
  //       title: "Durée",
  //       content: "3 mois",
  //     },
  //     {
  //       title: "Technology",
  //       content: "Symfony",
  //     },
  //     {
  //       title: "Niveau",
  //       content: "Intermédiaire",
  //     },
  //     {
  //       title: "Objectif",
  //       content: "Architecture MVC",
  //     }
  //   ],

  //   objectiveTitle: "Objectifs",
   
  //   objectives: [
  //     {
  //       title: "Archi",
  //       content: "Créer une architecture robuste",
  //     },
  //     {
  //       title: "Utilisateur",
  //       content: "Mettre l'utilisateur au centre",
  //     },
  //     {
  //       title: "Admin",
  //       content: "Développer un back-office sécurisé",
  //     }
  //   ],
   
  //   approachTitle: "Ma démarche",

  //   approaches: [  // Démarche
  //     {
  //       title: "Besoin",
  //       content: "Une vitrine Internet pour PME",
  //     },
  //     {
  //       title: "Conception UX",
  //       content: "Application pensée tant pour le client que pour le gérant",
  //     },
  //     {
  //       title: "Développement",
  //       content: "Création de la base de données, des entités et leurs relations",
  //     },
  //     {
  //       title: "Tests",
  //       content: "Réalisation des tests de connectivité et d'authentification",
  //     },
  //     {
  //       title: "Amélioration",
  //       content: "Modifications pour améliorer l'UX",
  //     }
  //   ],
    
  //   featureTitle: "Fonctionnalités",

  //   features: [  // Fonctionnalités
  //     {
  //       title: "Connexion",
  //       icon: ImConnection,
  //     },
  //     {
  //       title: "Panier",
  //       icon: BsCartCheck,
  //     },
  //     {
  //       title: "Stripe",
  //       icon: FaStripe,
  //     },
  //     {
  //       title: "Tableau de bord",
  //       icon: MdOutlineDashboardCustomize,
  //     },
  //     {
  //       title: "CRUD Produits",
  //       icon: RxDashboard,

  //     },
  //     {
  //       title: "Gestion Clients",
  //       icon: FaUsersCog,

  //     },
  //     // {
  //     //   title: "Architecture & Conception :",
  //     //   content: "Avant de coder, j'ai analysé les besoins métiers pour concevoir les maquettes sur Figma, les diagrammes UML sur StarUML, et modélisé la base de données MySQL via JMerise."
  //     // },
  //     // {
  //     //   title: "Sécurité (Symfony Security) :",
  //     //   content: "Authentification robuste des utilisateurs, hachage des mots de passe, et sécurisation du compte client ('Mon Compte')."
  //     // },
  //     // {
  //     //   title: "Expérience Utilisateur Dynamique (UX) :",
  //     //   content: "Pour éviter les rechargements de page intempestifs, j'ai développé des scripts JavaScript natifs (AJAX / Fetch) gérant en temps réel le panier (CRUD complet), les listes de favoris (Wishlist) et le comparateur de produits."
  //     // },
  //     // {
  //     //   title: "Logistique & Paiement :",
  //     //   content: "Intégration d'un système de livraison avec calcul dynamique des frais de port (3 transporteurs au choix) et d'un tunnel de paiement sécurisé avec l'API Stripe."
  //     // },
  //     // {
  //     //   title: "Back-Office (EasyAdmin) :",
  //     //   content: "Création d'une interface d'administration épurée permettant au commerçant de gérer ses produits, catégories et visuels en totale autonomie."
  //     // }
  //   ],
    
  //   challenges: [
  //     {
  //       title: "",
  //       content: `Ce projet fil rouge m'a permis de maîtriser l'architecture MVC de Symfony, de centraliser la logique métier dans des Services réutilisables, et de manipuler les bases de données proprement grâce à Doctrine ORM et son QueryBuilder. Il démontre ma capacité à gérer un projet web de sa phase de modélisation jusqu'à la préparation de son plan de déploiement sécurisé.`,
  //     },
  //   ],
  //   skills: ``, 

  //   diagramTitle: "Architecture",

  //   diagrams: [
  //     {
  //       title: "Cas d'utilisation",
  //       choiseTitle: "Pourquoi cette architecture ?",
  //       content1: "Les diagrammes, réalisés avec StarUml, m'ont permis d'établir une architecture cohérente des fonctionnalités.",
  //       content2: "Réalisé en respectant la méthode CRUD, le cas d'utilisation (Use Case) facilite la mise en place des droits utilisateurs",
  //       image: useCaseEshop,
  //     },
  //   ],

  //   modelTitle: "Maquettes",

  //   models: [ // Maquettes
  //     {
  //       title: "Maquette pour téléphone",
  //       content1: "Avant de développer, j'ai réalisé les interfaces sur Figma.",
  //       content2: "Chaque écran a été pensé afin de limiter le nombre d'actions nécessaires pour finaliser un achat.",
  //       image: phoneModel,
  //       figma: "https://www.figma.com/proto/nZtNDB6IlRGOHR5dmcG8kG/MaBoutique?page-id=0%3A1&node-id=1-2445&t=G8UqJwOrcQ2S1I2k-0&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1%3A2553",
  //     },
  //   ], 

  //   galleryTitle: "Screenshots",
    
  //   gallery: [
  //     {
  //       title: "Average Customer Satisfaction",
  //       content: "",
  //       objective: "",  
  //       image: averageCustomerSatisfaction,
  //       isInGrid: true,
  //     },
  //     {
  //       title: "Average Delivery Time", 
  //       content: "",
  //       objective: "", 
  //       image: averageDeliveryTime,
  //       isInGrid: false,
  //     },
  //     {
  //       title: "Monthly Revenue",
  //       content: "",
  //       objective: "",  
  //       image: monthlyRevenue,
  //       isInGrid: false,
  //     },
  //     {
  //       title: "Products Ranking",
  //       content: "",
  //       objective: "",  
  //       image: productsRanking,
  //       isInGrid: true,
  //     },
  //     {
  //       title: "Sales by Brand", 
  //       content: "",
  //       objective: "", 
  //       image: salesByBrand,
  //       isInGrid: false,
  //     },
  //     {
  //       title: "Sales by Channel",
  //       content: "",
  //       objective: "",  
  //       image: salesByChannel,
  //       isInGrid: false,
  //     },
  //     {
  //       title: "Sales by Product", 
  //       content: "",
  //       objective: "", 
  //       image: salesByProduct,
  //       isInGrid: false,
  //     },
  //     {
  //       title: "Sales by Region", 
  //       content: "",
  //       objective: "", 
  //       image: salesByRegion,
  //       isInGrid: true,
  //     }
  //   ],

  //   github: "https://github.com/SaskiaCorre/ticket.caisse.python",

  //   demo: "",

  //   gridDescription: "",

  //   isFeatured: true,
    
  //   isDetailled: true,
  // },


// #############################
// CV en ligne
// #############################
//   {
//     slug: "cv-en-ligne",
//     image: cvEnLigne,
//     title: "CV en ligne | HTML / CSS pur",
//     shortStack: "HTML",
//     fullStacks: [
//       {title:"HTML"},
//       {title:"CSS"}
//     ],
//     type: "web",
//     shortDescription: "CV en ligne",
//     fullDescription: ``,
//     features: [
//       {
//         title: "",
//         content: ""
//       },
//     ],
//     challenges: [
//       {
//         title: "",
//         content: ``,
//       },
//     ],
//     skills: ``, // Compétences
//     diagrams: [
//       {
//         title: "",
//         content: ``,
//         img: "",
//       },
//     ],
//     models: [ // Maquettes
//       {
//         title: "",
//         content: ``,
//         img: "",
//         figma: "",
//       },
//     ],
//     github: "https://github.com/SaskiaCorre/mon.cv.interactif",
//     demo: "",
//     gridTitle: "",
//     gridDescription: "",
//     isFeatured: false,
//   }
]

export default PROJECTS;