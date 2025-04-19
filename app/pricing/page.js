'use client'
import Link from "next/link"
import Layout from "@/components/layout/Layout"

export default function Career() {
    return (
        <>
            <Layout headerStyle={4} footerStyle={1} breadcrumbTitle="Careers at Byteknot Technology">
                {/* Start Career Section */}
                <section className="pricing-one">
                    <div className="container">
                        <div className="sec-title-two text-center sec-title-animation animation-style1">
                            <h2>Join Our <span>Creative Team</span></h2>
                            <p>We’re looking for passionate individuals to help shape the future<br />of design and development</p>
                        </div>
                        <div className="row">

                            {/* Start Job Card */}
                            <div className="col-xl-4 col-lg-4 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                                <div className="pricing-one__single">
                                    <div className="pricing-one__single-title">
                                        <h2>Frontend Developer</h2>
                                        <p>Location: Remote | Full-time</p>
                                    </div>
                                    <div className="pricing-one__single-list">
                                        <ul>
                                            <li>
                                                <div className="icon">
                                                    <span className="icon-check"></span>
                                                </div>
                                                <p>Strong React.js & Tailwind knowledge</p>
                                            </li>
                                            <li>
                                                <div className="icon">
                                                    <span className="icon-check"></span>
                                                </div>
                                                <p>Experience with animations & GSAP</p>
                                            </li>
                                            <li>
                                                <div className="icon">
                                                    <span className="icon-check"></span>
                                                </div>
                                                <p>UI/UX and accessibility principles</p>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="pricing-one__single-btn">
                                        <Link className="thm-btn" href="mailto:hr@example.com">
                                            <span className="txt">Apply Now</span>
                                            <i className="icon-next"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            {/* End Job Card */}

                            {/* Repeat with other roles */}
                            <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="100ms" data-wow-duration="1500ms">
                                <div className="pricing-one__single">
                                    <div className="pricing-one__single-title">
                                        <h2>UI/UX Designer</h2>
                                        <p>Location: Bangalore | Hybrid</p>
                                    </div>
                                    <div className="pricing-one__single-list">
                                        <ul>
                                            <li><div className="icon"><span className="icon-check"></span></div><p>Figma, Adobe XD, Sketch</p></li>
                                            <li><div className="icon"><span className="icon-check"></span></div><p>Component design systems</p></li>
                                            <li><div className="icon"><span className="icon-check"></span></div><p>Basic frontend understanding</p></li>
                                        </ul>
                                    </div>
                                    <div className="pricing-one__single-btn">
                                        <Link className="thm-btn" href="mailto:hr@example.com">
                                            <span className="txt">Apply Now</span>
                                            <i className="icon-next"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-4 col-lg-4 wow fadeInRight" data-wow-delay="200ms" data-wow-duration="1500ms">
                                <div className="pricing-one__single">
                                    <div className="pricing-one__single-title">
                                        <h2>Project Manager</h2>
                                        <p>Location: Remote | Contract</p>
                                    </div>
                                    <div className="pricing-one__single-list">
                                        <ul>
                                            <li><div className="icon"><span className="icon-check"></span></div><p>Agile and Scrum experience</p></li>
                                            <li><div className="icon"><span className="icon-check"></span></div><p>Strong communication</p></li>
                                            <li><div className="icon"><span className="icon-check"></span></div><p>Technical background preferred</p></li>
                                        </ul>
                                    </div>
                                    <div className="pricing-one__single-btn">
                                        <Link className="thm-btn" href="mailto:hr@example.com">
                                            <span className="txt">Apply Now</span>
                                            <i className="icon-next"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="pricing-one__text text-center">
                            <p>Don't see the role you're looking for? <Link href="contact">Contact us anyway.</Link></p>
                        </div>
                    </div>
                </section>
                {/* End Career Section */}

                {/* Call to Action */}
                <section className="cta-two testmonials">
                    <div className="container">
                        <div className="cta-two__inner">
                            <div className="cta-two__inner-bg" style={{ backgroundImage: 'url(assets/img/pattern/cta-two__parttern1.png)' }} ></div>
                            <div className="cta-two__content sec-title-animation animation-style1">
                                <h2>Ready To Join Us?</h2>
                                <p>Be part of a team that values creativity, collaboration, and growth.</p>
                            </div>
                            <div className="cta-two__btn">
                                <Link className="thm-btn" href="mailto:hr@example.com">
                                    <span className="txt">Send Your CV</span>
                                    <i className="icon-next"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}
