import { NavLink  } from 'react-router-dom';
function Header() {
    return (
        <header>
        <nav className="navbar navbar-expand-lg bg-dark" id="navbar">
          <div className="container-fluid">
            <button className="navbar-toggler" id="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
              aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                <NavLink className="nav-link" to="/">Головна</NavLink>
                </li>
                <li className="nav-item">
                <NavLink className="nav-link" to="/add-home">Добавити</NavLink>
                </li> 
              </ul>
            </div>
          </div>
        </nav>
      </header>
    )
}

export default Header