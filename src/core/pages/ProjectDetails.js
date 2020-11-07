import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import projects from '../helper/projects'
import { Link } from "react-router-dom"

const ProjectDetails = () => {

    window.scrollTo(0, 550);

    // useEffect(() => {
    //     return () => {
    //         window.scrollTo(0, 0);
    //     }
    // }, [])

    return (
        <div id="page-top">
            <Navbar page="project" />
            <section className="content-section" id="portfolio">
                {
                    projects.map((item, i) => {
                        return <div className="container text-center" key={i}>
                            <div className="content-section-heading text-center">
                                <h2 className="mb-5">{item.title}</h2>
                            </div>

                            <p style={{ fontSize: "20px" }}>{item.description}</p>

                            <div className="row mb-5 mx-3">
                                {
                                    item.images.map((image, j) => {
                                        return <div className="column my-3" key={j}>
                                            <img src={image} style={{ maxWidth: "100%" }} />
                                        </div>
                                    })
                                }
                            </div>
                            <Link className="btn btn-primary btn-xl js-scroll-trigger mt-5" to="/my-portfolio">Check out more Projects</Link>
                        </div>
                    })
                }
            </section>
            <Footer />
        </div>
    )
}

export default ProjectDetails
