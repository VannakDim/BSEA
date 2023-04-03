import React from "react";
import { Link } from "react-router-dom";

function bseaFooter(){
    return (
        <div className="container-xxl rounded bg-primary text-light footer pt-2 wow fadeIn" data-wow-delay="0.1s">
            <div className="container pt-5">
                <div className="row g-5">

                    <div className="col-md-6 col-lg-5">
                        <h5 className="text-white mb-4">Get In Touch</h5>
                        <p className="text-white"><i className="text-white fa fa-map-marker-alt me-3"></i><a className="text-white" href="https://goo.gl/maps/TYmLWon48gfHAK9f9">#84,#86,#88 st.Betong, Borey The Varina Sen Sok, Krang Thnong, Sen Sok, Phnom Penh, Cambodia</a></p>
                        <p className="text-white"><i className="text-white fa fa-phone-alt me-3"></i>+855 69 668 788</p>
                        <p className="text-white"><i className="text-white fa fa-envelope me-3"></i>info@bseacambodia.org</p>
                        <div className="d-flex pb-3">
                            <Link className="btn btn-outline-light btn-social text-white" to=""><i className="fab fa-twitter"></i></Link>
                            <Link className="btn btn-outline-light btn-social text-white" to=""><i className="fab fa-facebook-f"></i></Link>
                            <Link className="btn btn-outline-light btn-social text-white" to=""><i className="fab fa-youtube"></i></Link>
                            <Link className="btn btn-outline-light btn-social text-white" to=""><i className="fab fa-instagram"></i></Link>
                            <Link className="btn btn-outline-light btn-social text-white" to=""><i className="fab fa-linkedin-in"></i></Link>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-3">
                        <h5 className="text-white mb-4">Quick Link</h5>
                        <Link className="btn btn-link text-white" to="/about">About Us</Link>
                        <Link className="btn btn-link text-white" to="/contact">Contact Us</Link>
                        <Link className="btn btn-link text-white" to="">Privacy Policy</Link>
                        <Link className="btn btn-link text-white" to="/team">Terms & Condition</Link>
                        <Link className="btn btn-link text-white" to="">Career</Link>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <h5 className="text-white mb-4">Newsletter</h5>
                        <p className="text-white">Drop your comment here.</p>
                        <div className="position-relative w-100 mt-3">
                            <input className="form-control border-0 rounded-pill w-100 ps-4 pe-5 height-48" type="text" placeholder="Your Email" />
                            <button type="button" className="btn shadow-none position-absolute top-0 end-0 mt-1 me-2"><i className="fa fa-paper-plane text-primary fs-4"></i></button>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="copyright">
                        <div className="row">
                            <div className="col-md-5 text-center text-md-start mb-3 mb-md-0">
                                &copy; <a href="#">BSEA</a>, All Right Reserved. 
                            </div>
                            <div className="col-md-3 text-center text-md-start">
                                Designed By <a className="non-dec" href="https://facebook.com/ProgrammerKonKhmer">កូនខ្មែរ</a>
                            </div>
                            <div className="col-md-4 text-center text-md-end">
                                <div className="footer-menu">
                                    <Link className="text-white" to="/">Home</Link>
                                    <Link className="text-white" to="">Cookies</Link>
                                    <Link className="text-white" to="">Help</Link>
                                    <Link className="text-white" to="">FQAs</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up"></i></a>
        </div>
        
                    
    );
}

export default bseaFooter;