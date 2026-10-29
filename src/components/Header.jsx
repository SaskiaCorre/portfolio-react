import { NavLink } from 'react-router-dom';
import '../App.css';
import logoHeader from '../assets/img/logoHeader.png';
import { FiMoon, FiSun } from 'react-icons/fi';

export default function Header({ theme, onToggleTheme }) {
  const isDarkTheme = theme === 'dark';
  return (
    <header>
      <img src={logoHeader} className='logo' alt="logo spm"/> 
      
      <nav className='nav-container'>
        <NavLink className="nav-link" to={"/"}>Accueil</NavLink>
        <NavLink className="nav-link" to={"projets"}>Projets</NavLink>
        <NavLink className="nav-link" to={"a-propos"}>Profil</NavLink>
        <NavLink className="nav-link" to={"contact"}>Contact</NavLink>
        <button
          type="button" 
          className="theme-toggle" 
          onClick={onToggleTheme}
          aria-label={isDarkTheme ? 'Activer le thème clair' : 'Activer le thème sombre'}
        >
          {isDarkTheme ? <FiSun aria-hidden="true"/> : <FiMoon aria-hidden="true"/>}
          <span>{isDarkTheme ? 'Thème clair' : 'Thème sombre'}</span>
        </button>
      </nav>      
    </header>
  );
}