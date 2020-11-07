import React from 'react'
import { Link } from "react-router-dom"

const Navbar = ({ page = "home" }) => {
    return (
        <div>
            {
                page == "home" ?
                    <div>
                        <a className="menu-toggle rounded" href="#">
                            <i className="fas fa-bars"></i>
                        </a>
                        <nav id="sidebar-wrapper">
                            <ul className="sidebar-nav">
                                <li className="sidebar-brand">
                                    <a className="js-scroll-trigger" href="#page-top">Abhifolio</a>
                                </li>
                                <li className="sidebar-nav-item">
                                    <a className="js-scroll-trigger" href="#page-top">Home</a>
                                </li>
                                <li className="sidebar-nav-item">
                                    <a className="js-scroll-trigger" href="#about">About</a>
                                </li>
                                <li className="sidebar-nav-item">
                                    <a className="js-scroll-trigger" href="#services">Services</a>
                                </li>
                                <li className="sidebar-nav-item">
                                    <a className="js-scroll-trigger" href="#portfolio">Portfolio</a>
                                </li>
                                <li className="sidebar-nav-item">
                                    <a className="js-scroll-trigger" href="#contact">Contact</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    :
                    null
            }
            <header className="masthead d-flex">
                <div className="container text-center my-auto">
                    <h1 className="mb-1">Abhijeet Ranmale</h1>
                    <h3 className="mb-5">
                        <em>React.js | Vue.js | Node.js | Express.js | MERN</em>
                    </h3>
                    {
                        page == "home" ?
                            <a className="btn btn-primary btn-xl js-scroll-trigger" href="#about">Find Out More</a>
                            :
                            <Link className="btn btn-primary btn-xl js-scroll-trigger" to="/my-portfolio">Go to Homepage</Link>
                    }
                </div>
                <div className="overlay"></div>
            </header>
        </div>
    )
}

export default Navbar
