import '../App.css';
import Hero from '../components/Hero';
import PAGES from '../data/pagesData';

const errorPage = PAGES.error;

export default function ErrorPage(){
    return (
      <article className="page-error">
      <Hero
        title={errorPage.hero.title}
        subtitle={errorPage.hero.subtitle}
        
        image={<img src={errorPage.hero.image} alt="" />}
      />
      </article>
    )
  }