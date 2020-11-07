import React from 'react'
import { Link } from "react-router-dom"
import projects from '../helper/projects'

const Portfolio = () => {
    return (
        <section className="content-section" id="portfolio">
            <div className="container">
                <div className="content-section-heading text-center">
                    <h3 className="text-secondary mb-0">Portfolio</h3>
                    <h2 className="mb-5">Recent Projects</h2>
                </div>
                <div className="row no-gutters">
                    {
                        projects.map((item, i) => {
                            return <div className="col-lg-6" key={i}>
                                <Link className="portfolio-item" to={"/project-details/" + item.slug}>
                                    <div className="caption">
                                        <div className="caption-content">
                                            <div className="h2">{item.title}</div>
                                            <p className="mb-0">{item.description}</p>
                                        </div>
                                    </div>
                                    <img className="img-fluid" src={item.images[0]} style={{
                                        maxWidth: "100%",
                                        display: "block",
                                        height: "300px"
                                    }} alt="" />
                                </Link>
                            </div>
                        })
                    }
                    {/* <div className="col-lg-6">
                        <a className="portfolio-item" href="#!">
                            <div className="caption">
                                <div className="caption-content">
                                    <div className="h2">Ice Cream</div>
                                    <p className="mb-0">A dark blue background with a colored pencil, a clip, and a tiny ice cream cone!</p>
                                </div>
                            </div>
                            <img className="img-fluid" src="img/portfolio-2.jpg" alt="" />
                        </a>
                    </div>
                    <div className="col-lg-6">
                        <a className="portfolio-item" href="#!">
                            <div className="caption">
                                <div className="caption-content">
                                    <div className="h2">Strawberries</div>
                                    <p className="mb-0">Strawberries are such a tasty snack, especially with a little sugar on top!</p>
                                </div>
                            </div>
                            <img className="img-fluid" src="img/portfolio-3.jpg" alt="" />
                        </a>
                    </div>
                    <div className="col-lg-6">
                        <a className="portfolio-item" href="#!">
                            <div className="caption">
                                <div className="caption-content">
                                    <div className="h2">Workspace</div>
                                    <p className="mb-0">A yellow workspace with some scissors, pencils, and other objects.</p>
                                </div>
                            </div>
                            <img className="img-fluid" src="img/portfolio-4.jpg" alt="" />
                        </a>
                    </div> */}
                </div>
            </div>
        </section>
    )
}

export default Portfolio
