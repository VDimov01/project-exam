import {Link} from 'react-router-dom'
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

export const Header = () => {

  const {user} = useContext(AuthContext);

    return (
        <header className="header_section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-11 offset-lg-1">
              <nav className="navbar navbar-expand-lg custom_nav-container ">
                <Link className="navbar-brand" to="/">
                  <img src="images/logo.png" alt="" />
                  <span>
                    Uliya
                  </span>
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
  
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <div className="d-flex ml-auto flex-column flex-lg-row align-items-center">
                    <ul className="navbar-nav  ">
                      <li className="nav-item active">
                        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/about"> About</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/catalog"> Catalog </Link>
                      </li>
                      <li className="nav-item">
                            <Link className="nav-link" to="/contact-us">Contact Us</Link>
                      </li>
                      <li className="nav-item">
                            <Link className="nav-link" to="/create">Create a post</Link>
                      </li>
                     
                      {user.email 
                      ?<> 
                        <li className='nav-item'>
                          <Link className='nav-link' to="/logout">Logout</Link>
                        </li>
                        <li>
                          <span>{user.email}</span>
                        </li>
                        </>
                      : <>
                      <li className="nav-item">
                        <Link className="nav-link" to="/register">Register</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/login">Login</Link>
                      </li>
                      </>
                      }
                      
                    </ul>
                    <form className="form-inline">
                      <button className="btn  my-2 my-sm-0 nav_search-btn" type="submit"></button>
                    </form>
                  </div>
  
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
    );
}