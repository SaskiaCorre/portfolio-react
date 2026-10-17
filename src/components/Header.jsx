import { NavLink } from 'react-router-dom';
import '../App.css';
import logoHeader from '../assets/img/logoHeader.png';

export default function Header() {
  return (
    <header>
      <img src={logoHeader} className='logo' alt="logo spm"/> 
      
      <nav className='nav-container'>
        <NavLink className="nav-link" to={"/"}>Accueil</NavLink>
        <NavLink className="nav-link" to={"projets"}>Projets</NavLink>
        <NavLink className="nav-link" to={"a-propos"}>Profil</NavLink>
        <NavLink className="nav-link" to={"contact"}>Contact</NavLink>
      </nav>      
    </header>
  );
}