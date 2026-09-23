import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className = 'navbar'>
        <div className = 'name-tagline'>
          <Link to = "/tickets" className = "logo-link">
            <span className = 'tickets'> tickets </span>
            <p> Purchase Tenticketsets Online </p>
          </Link>
        </div>
      
      <div className = 'navlinks'>
        <Link to = "/tickets">
          <span className = "home-button"> Home </span>
        </Link>
      </div>

    </div>
  );
}

export default NavBar
