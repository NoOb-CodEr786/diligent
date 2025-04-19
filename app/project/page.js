'use client'
import { useState } from "react"
import Layout from "@/components/layout/Layout"
import Image from "next/image"

export default function Project() {
    const [showModal, setShowModal] = useState(false)

    const handleExploreClick = () => {
        setShowModal(true)
    }

    const closeModal = () => {
        setShowModal(false)
    }

    const projects = [
        {
            title: "CAYANA Infra Tech.",
            image: "/assets/img/projects/project1.png"
        },
        {
            title: "Masters RMC (India) Pvt. Ltd.",
            image: "/assets/img/projects/project2.png"
        },
        {
            title: "Bijaya Infrastructure Pvt Ltd",
            image: "/assets/img/projects/project3.png"
        }
    ]

    return (
        <Layout headerStyle={4} footerStyle={1} breadcrumbTitle="Our Projects">
            <section className="project-page section-padding">
                <div className="container">
                    <div className="sec-title-two text-center sec-title-animation animation-style1 ">
                        <h2>Our <span>Latest Projects</span></h2>
                        <p>Check out some of our recent work. Click to explore more details soon.</p>
                    </div>

                    <div className="row justify-content-center" style={{paddingBottom:"4rem"}}>
                        {projects.map((project, index) => (
                            <div key={index} className="col-lg-4 col-md-6 mb-4">
                                <div className="project-card shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:-translate-y-2 hover:shadow-2xl bg-white">
                                    <div className="project-card-img">
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            width={500}
                                            height={300}
                                            className="w-100 h-auto object-cover"
                                        />
                                    </div>
                                    <div className="project-card-content p-4 text-center">
                                        <h5 className="mb-3 text-xl font-semibold text-dark">{project.title}</h5>
                                        <button
                                            className="thm-btn mt-2 px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-full hover:from-purple-600 hover:to-indigo-500 transition duration-300"
                                            onClick={handleExploreClick}
                                        >
                                            <span className="txt">Explore</span>
                                            <i className="icon-next ml-2"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Modal */}
            {showModal && (
                <div className="custom-modal">
                    <div className="custom-modal-content">
                        <span className="close" onClick={closeModal}>&times;</span>
                        <h4>We will live soon.</h4>
                    </div>
                </div>
            )}

            <style jsx>{`
                .custom-modal {
                    position: fixed;
                    z-index: 1050;
                    left: 0;
                    top: 0;
                    width: 100vw;
                    height: 100vh;
                    background: rgba(0, 0, 0, 0.6);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                .custom-modal-content {
                    background: white;
                    padding: 30px 40px;
                    border-radius: 10px;
                    text-align: center;
                    position: relative;
                    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
                    animation: fadeIn 0.3s ease-in-out;
                }

                @keyframes fadeIn {
                    from { opacity: 0; transform: scale(0.95); }
                    to { opacity: 1; transform: scale(1); }
                }

                .custom-modal-content h4 {
                    margin: 0;
                    font-size: 1.4rem;
                    color: #333;
                }

                .close {
                    position: absolute;
                    top: 10px;
                    right: 20px;
                    font-size: 24px;
                    font-weight: bold;
                    color: #aaa;
                    cursor: pointer;
                }

                .close:hover {
                    color: #000;
                }
            `}</style>
        </Layout>
    )
}
