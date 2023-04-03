import React,{useContext} from "react";
import bseaLogo from '../../img/bsea-logo.png'
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../context/authContext";


function Navbar(){
    // const activeLink = 'active';
    const {currentUser, logout} = useContext(AuthContext)
    return (
            <div className="container-xxl bg-white p-0">
                
                <div className="container-xxl position-relative p-0 hero-head">
                    <nav className="navbar navbar-expand-lg navbar-primary px-4 px-lg-5 py-3 py-lg-0">
                        <Link to="/" className="navbar-brand p-0">
                            <img src={bseaLogo} width="50" height="50" className="d-inline-block align-middle" alt="bsea logo"/>
                            <h1 className="d-inline-block align-middle m-0 brand-title">BSEA Cambodia</h1>
                        
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                            <span className="fa fa-bars text-primary"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <div className="navbar-nav ms-auto py-0">
                                <NavLink to="/" className='nav-item nav-link {({isActive}=>(isActive && activeLink))}'>Home</NavLink>
                                <NavLink to="/about" className="nav-item nav-link {({isActive}=>(isActive?activeLink:null))}">About</NavLink>
                                <NavLink to="/contact" className="nav-item nav-link {({isActive}=>(isActive?activeLink:null))}">Contact</NavLink>
                                <NavLink to="/error" className="nav-item nav-link {({isActive}=>(isActive?activeLink:null))}">Membership</NavLink>
                                <div className="nav-item dropdown">
                                    <Link id="dropdown-page" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</Link>
                                    <div className="dropdown-menu m-0 page">
                                        <Link href="/team" className="dropdown-item">Our Team</Link>
                                    </div>
                                </div>
                                
                                
                                {currentUser ? 
                                    <div className="nav-item dropdown">
                                        <Link id="dropdown-page" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">{currentUser?.name}</Link> 
                                            <div className="dropdown-menu m-0">
                                                <Link className='dropdown-item' to="/" onClick={logout}>Logout</Link>
                                            </div>
                                    </div>
                                : <Link className='nav-item nav-link' to="/login">Login</Link>}
                                
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
    )
}

export default Navbar;