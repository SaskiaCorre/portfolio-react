import dashboardAdmin from '../assets/images/galleries/appSymfony/dashboardAdmin.png';
import imgHomeSmallGreen from '../assets/img/imgHomeSmallGreen.png';
import imgHome from '../assets/img/imgHome.png';
import imgAboutDark from '../assets/img/imgAboutDark.png';
import greenPhoneSmall from '../assets/img/greenPhoneSmall.png';
import imgPageProjects from '../assets/img/imgPageProjects.png';
import pageError from '../assets/img/pageError.png';
import { FaGithub } from "react-icons/fa";

const PAGES = {
  home: {
    hero: {
      subtitle: "Bienvenue sur mon portfolio",
      title: "Développeuse UX & Data",
      content: "Forte de 15 ans d'expérience terrain dans le commerce de tourisme, je propose des applications centrées utilisateur grâce à une approche qui combine expérience client, gestion, communication et développement web.",

      cta: "Voir mes projets",
      image : dashboardAdmin, 

      badges: [
      "BTS Communication",
      "Titre Développeuse d'Applications",
    ],
    },

    title: "20 ans d'expérience terrain",

    // subtitle: "Développeuse d'applications web | Orientée Data & UX",

    firstcontent: "Après plusieurs années dans le commerce et la communication, j'ai choisi de me spécialiser dans le développement d'applications web. Cette expérience me permet aujourd'hui de comprendre aussi bien les attentes des utilisateurs que les enjeux métier derrière chaque projet.",
    secondcontent: "À travers ce portfolio, je présente des réalisations mêlant développement web, analyse de données et expérience utilisateur, avec un objectif constant : concevoir des outils utiles, performants et agréables à utiliser.",
    
    mainImage: imgHome,

    experiences: [
      {
        title:"Relation client", 
        content: "15 ans au contact d'une clientèle française et internationale"
      },
      {
        title:"Adaptabilité", 
        content: "Habituée aux pics d'activité et aux environnements exigeants"
      },
      {
        title: "Communication", 
        content: "Comprendre les besoins avant de construire la solution"
      },
      {
        title: "Vision utilisateur",
        content: "Transformer ces besoins en une solution concrète"
      },
    ],

    cta: "Découvrir mes projets",

    ctaTo: [
      {
        slug: "about",
        titlebis: "Pourquoi mon profil est atypique",
        content: "Mon cursus en marketing et mon expérience en commerce enrichissent ma conception UX",
        cta: "Découvrir mon parcours",
        link: "/a-propos",
        image: imgHomeSmallGreen,
      },
      {
        slug: "contact",
        titlebis: "Une idée, un besoin ou une collaboration ?",
        content: "Les meilleurs projets naissent souvent de parcours différents. Échangeons.",
        cta: "Me contacter",
        link: "/contact",
        image: greenPhoneSmall,
      },
      {
        slug: "project",
        cta: "Voir tous mes projets",
        link: "/projets",
      },
    ]
  },

  projects: {
    hero: {
      title: "Mes projets",
      subtitle: "Développement web, conception de l'expérience utilisateur et analyse de données",
      content: "Découvrez mes projets à travers leur contexte, leurs objectifs et ma démarche de conception. Du développement d’applications web à l’analyse de données, chaque projet présente les choix réalisés, les fonctionnalités développées et les solutions mises en œuvre.",
      cta: "Voir mon GitHub",
      image : imgPageProjects,
      github: "https://github.com/SaskiaCorre",
      gitIcon: FaGithub, 
    },

    // title: "Mes projets",

    // subtitle: "Je conçois des applications pensées pour l'utilisateur, appuyées par l'analyse de données et une logique métier concrète.",

    // firstcontent: "Repo, README, maquettes, etc.",
    // secondcontent: "Découvrez le back-end de mes projets",

    // cta:"Voir le projet",
  },

  about: {
    title: "Mon parcours",

    subtitle: "Du commerce à la conception d'applications web",

    firstcontent: "Une fois diplômée en communication, portée par la curiosité et l'envie de découvrir de nouveaux horizons, je me suis naturellement tournée vers le terrain plutôt que vers un parcours de bureau traditionnel. Pendant près de vingt ans, j'ai exercé dans le commerce, la vente et la restauration, principalement au sein d'une station balnéaire à forte fréquentation. Cette expérience m'a permis d'évoluer au contact quotidien d'une clientèle française et internationale, dans des environnements où la réactivité, l'écoute et l'adaptation sont essentielles.",
    secondcontent: "Au fil des saisons, j'ai développé des compétences qui me servent aujourd'hui encore :",
    thirdcontent: "Ces expériences m'ont appris à comprendre rapidement les attentes des utilisateurs, à gérer les périodes de forte affluence et à adapter ma communication à des profils très variés.",
    fourthcontent: "Cette capacité d'écoute et d'adaptation constitue aujourd'hui un atout précieux dans la conception d'applications centrées utilisateur.",
    fifthcontent: "J'apprécie particulièrement les projets qui nécessitent à la fois une réflexion fonctionnelle et une approche technique. Comprendre un besoin, structurer l'information, analyser les données disponibles puis transformer l'ensemble en une solution claire et utile est ce qui me motive au quotidien.",
    conclusion: "Aujourd'hui, mon objectif est de mettre cette double expérience — terrain et technique — au service de projets numériques pensés pour leurs utilisateurs. Parce qu'une application performante ne se résume pas à son code : elle doit avant tout répondre à un besoin réel, de manière simple, efficace et intuitive.",
    
    list: [
      "comprendre rapidement les besoins d'un client ;",
      "trouver des solutions adaptées à des situations variées ;",
      "communiquer efficacement avec des interlocuteurs aux profils très différents ;",
      "gérer les périodes de forte affluence avec méthode et sang-froid ;",
      "garder en permanence l'expérience utilisateur au centre des décisions.",
    ],
    
    mainImage: imgAboutDark,

    sidebar: [
      "Enthousiaste",
      "* *",
      "Curieuse",
      "* *",
      "Créatrice",
    ],

    badges: [
      "Observer",
      "Comprendre",
      "Construire",
    ],
  },

  contact: {
    title: "Échangeons",

    subtitle: "Les meilleurs projets naissent souvent de parcours différents",

    firstcontent: "Vous recherchez une développeuse orientée expérience utilisateur, analyse de données et communication ?",
    secondcontent: "Je serais ravie d'échanger avec vous autour de vos besoins, de vos projets ou d'une opportunité professionnelle.",
  
    badges: [
      "A l'écoute",
      "Disponible",
      "Mobile",
    ],

    cta:"",
  },

  error: {
    hero: {
      subtitle: "Erreur 404",
      title: "Il semblerait que vous vous soyez égaré en chemin !",
      image : pageError, 
    },
  },
}


export default PAGES;