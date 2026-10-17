import '../App.css';
import Hero from '../components/Hero';
import PAGES from '../data/pagesData';

const errorPage = PAGES.error;

export default function ErrorPage(){
    return (
      <article className="page-error">
      {/* <h1>Erreur 404</h1>
      <img />
      <h2>Il semblerait que vous vous soyez égaré en chemin !</h2> */}
      <Hero
        title={errorPage.hero.title}
        subtitle={errorPage.hero.subtitle}
        
        image={<img src={errorPage.hero.image} alt="" />}
      />
      </article>
    )
  }