import '../App.css'
import '../styles/About.css'
import RightSidebar from '../components/RightSidebar';
import PAGES from '../data/pagesData';
import MainContent from '../components/MainContent';

const aboutPage = PAGES.about;

export default function About(){
    return (
    <article className='about-page'>
      <section className='page-layout'> 
        <MainContent
          subtitle={aboutPage.subtitle}
          title={aboutPage.title}          
          badges={aboutPage.badges}
          firstcontent={aboutPage.firstcontent}
          secondcontent={aboutPage.secondcontent}
          list={aboutPage.list}
        />

        <aside className='right-sidebar'>
          <RightSidebar 
            image={
            <img src={aboutPage.mainImage} alt="" />
            } 
          />
        </aside>    
            
      </section>

      <MainContent
        thirdcontent={aboutPage.thirdcontent}
        fourthcontent={aboutPage.fourthcontent}
        fifthcontent={aboutPage.fifthcontent}
        conclusion={aboutPage.conclusion}
      />
    </article>
  );
}