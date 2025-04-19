"use client";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <Layout headerStyle={4} footerStyle={1} breadcrumbTitle="Web Development">
        {/*Start Service Details*/}
        <section className="service-details">
          <div className="container">
            <div className="row">
              <div className="col-xl-8 wow fadeInUp" data-wow-delay=".3s">
                <div className="service-details__content">
                  <div className="service-details__img-box1">
                    <div className="img-box">
                      <img
                        src="assets/img/service/service-details__img2_Website.jpg"
                        alt="image"
                      />
                    </div>
                    <div className="content-box">
                      <h2>Web Development</h2>
                      <p>
                        At Byteknot Technology, we start each project with a
                        well-thought-out plan that aligns with your business
                        goals and ends with real, measurable results. We believe
                        that the key to successful digital solutions lies in a
                        strategic approach, clear communication, and constant
                        collaboration with our clients. From initial
                        brainstorming to final execution, we make sure that
                        every step of the process contributes to achieving your
                        business objectives.
                      </p>

                      {/* <p style={{ marginTop: "1rem" }}>
                        Our solutions are affordable, scalable, and designed to
                        deliver a positive impact. Whether you're developing a
                        brand new website, creating a mobile app, or enhancing
                        your online presence, we focus on delivering results
                        that make a difference. At Byteknot, our goal is not
                        just to complete a project but to help you achieve
                        long-term success in the digital world.
                      </p> */}
                    </div>
                  </div>

                  <div className="service-details__text">
                    <div className="text" style={{ marginBottom: "30px" }}>
                      <p
                        style={{
                          fontSize: "1rem",
                          lineHeight: "1.8",
                          color: "#555",
                        }}
                      >
                        Our solutions are affordable, scalable, and designed to
                        deliver a positive impact. Whether you're developing a
                        brand new website, creating a mobile app, or enhancing
                        your online presence, we focus on delivering results
                        that make a difference. At Byteknot, our goal is not
                        just to complete a project but to help you achieve
                        long-term success in the digital world.
                      </p>
                    </div>

                    <div
                      className="services-list"
                      style={{ marginBottom: "30px" }}
                    >
                      <h4
                        style={{
                          fontSize: "1.5rem",
                          fontWeight: "bold",
                          color: "#333",
                          marginBottom: "10px",
                        }}
                      >
                        Our Services:
                      </h4>
                      <ul
                        style={{
                          listStyleType: "disc",
                          paddingLeft: "20px",
                          fontSize: "1rem",
                          lineHeight: "1.8",
                          color: "#555",
                        }}
                      >
                        <li>
                          <strong>Custom Web Design:</strong> Unique, tailored
                          designs that align with your brand identity and engage
                          your target audience.
                        </li>
                        <li>
                          <strong>Responsive Design:</strong> Websites built for
                          optimal viewing and smooth user interaction across all
                          devices, from desktops to smartphones.
                        </li>
                        <li>
                          <strong>E-Commerce Solutions:</strong> Robust,
                          scalable e-commerce platforms that enhance the
                          shopping experience and drive conversions.
                        </li>
                        <li>
                          <strong>Content Management Systems (CMS):</strong>{" "}
                          User-friendly CMS platforms that give you full control
                          over your website content with minimal effort.
                        </li>
                        <li>
                          <strong>Search Engine Optimization (SEO):</strong>{" "}
                          Proven strategies to improve your website's search
                          engine rankings and increase organic traffic.
                        </li>
                        <li>
                          <strong>Website Maintenance:</strong> Reliable support
                          and regular updates to ensure your website stays
                          secure, functional, and up-to-date.
                        </li>
                      </ul>
                    </div>

                    <div
                      className="why-choose-us"
                      style={{ marginBottom: "30px" }}
                    >
                      <h4
                        style={{
                          fontSize: "1.5rem",
                          fontWeight: "bold",
                          color: "#333",
                          marginBottom: "10px",
                        }}
                      >
                        Why Choose Us?
                      </h4>
                      <ul
                        style={{
                          listStyleType: "disc",
                          paddingLeft: "20px",
                          fontSize: "1rem",
                          lineHeight: "1.8",
                          color: "#555",
                        }}
                      >
                        <li>
                          • <strong>Expertise:</strong> Our team of seasoned
                          designers and developers is committed to crafting
                          exceptional web experiences that meet your goals.
                        </li>
                        <li>
                          • <strong>Custom Solutions:</strong> We create bespoke
                          websites that cater to your unique business needs,
                          ensuring a personalized approach to every project.
                        </li>
                        <li>
                          • <strong>Client-Centric Approach:</strong> We
                          prioritize transparent communication and work closely
                          with you throughout the design process to guarantee
                          satisfaction.
                        </li>
                        <li>
                          • <strong>Results-Driven:</strong> Our primary focus
                          is delivering results that support your business
                          objectives through effective web design and digital
                          strategies.
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* <div className="service-details__img-box2">
                    <div className="row">
                      <div className="col-xl-6 col-lg-6">
                        <div className="img-box">
                          <img
                            src="assets/img/service/service-details__img2.jpg"
                            alt="image"
                          />
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6">
                        <div className="content-box">
                          <p>
                            Applications are like the lifeblood mobile phones
                            and tablets today. The true potential you mobile
                            phone is harnessed applications that can provide
                            utility. Apps come under of the various segments.
                            Nowad technology has become super advanced even
                            normal people are getting themselves.
                          </p>
                          <ul className="list-item clearfix">
                            <li>
                              <div className="circle-box"></div>
                              <div className="text">
                                <p>
                                  Our services will feel like mint of
                                  creativity.
                                </p>
                              </div>
                            </li>
                            <li>
                              <div className="circle-box"></div>
                              <div className="text">
                                <p>
                                  We develop application excellent technology.
                                </p>
                              </div>
                            </li>
                            <li>
                              <div className="circle-box"></div>
                              <div className="text">
                                <p>
                                  Practice for providing all application
                                  problems.
                                </p>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>

              {/*Start Sidebar*/}
              <div className="col-xl-4">
                <div className="service-details__sidebar">
                  {/*Start Sidebar Single*/}
                  <div
                    className="sidebar__single sidebar__category wow fadeInUp"
                    data-wow-delay=".3s"
                  >
                    <div className="title-box">
                      <h2>Related Services</h2>
                    </div>

                    <ul className="sidebar__category-list">
                      <li>
                        <div className="cercale-box"></div>
                        <Link className="active" href="#">
                          Web Development
                          <span className="icon-right-arrow-angle"></span>
                        </Link>
                      </li>
                      <li>
                        <div className="cercale-box"></div>
                        <Link href="app-development">
                          Mobile App Development
                          <span className="icon-right-arrow-angle"></span>
                        </Link>
                      </li>
                      <li>
                        <div className="cercale-box"></div>
                        <Link href="digital-marketing">
                          Digital Marketing
                          <span className="icon-right-arrow-angle"></span>
                        </Link>
                      </li>
                      <li>
                        <div className="cercale-box"></div>
                        <Link href="seo">
                          SEO
                          <span className="icon-right-arrow-angle"></span>
                        </Link>
                      </li>
                      <li>
                        <div className="cercale-box"></div>
                        <Link href="crm">
                          CRM
                          <span className="icon-right-arrow-angle"></span>
                        </Link>
                      </li>
                      <li>
                        <div className="cercale-box"></div>
                        <Link href="smm">
                          Social Media Management
                          <span className="icon-right-arrow-angle"></span>
                        </Link>
                      </li>
                      <li>
                        <div className="cercale-box"></div>
                        <Link href="graphicDesign">
                          Graphic Design
                          <span className="icon-right-arrow-angle"></span>
                        </Link>
                      </li>
                      <li>
                        <div className="cercale-box"></div>
                        <Link href="iot">
                          Internet of Things (Iot)
                          <span className="icon-right-arrow-angle"></span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  {/*End Sidebar Single*/}

                  {/*Start Sidebar Single*/}
                  {/* <div
                    className="sidebar__single sidebar__dwonlode-box wow fadeInUp"
                    data-wow-delay=".5s"
                  >
                    <div className="dwonlode-box">
                      <Link href="#">
                        Download Doc
                        <i className="icon-download"></i>
                      </Link>
                      <Link href="#">
                        Download Pdf
                        <i className="icon-download"></i>
                      </Link>
                    </div>
                  </div> */}
                  {/*End Sidebar Single*/}

                  {/*Start Sidebar Single*/}
                  <div
                    className="sidebar__contact-info wow fadeInUp"
                    data-wow-delay=".5s"
                  >
                    <div
                      className="sidebar__contact-info-bg"
                      style={{
                        backgroundImage:
                          "url(assets/img/service/service-details-sideber__img1.jpg)",
                      }}
                    ></div>
                    <div className="content-box text-center">
                      <h3>
                        Have Any Discussion
                        <br />
                        About Project?
                      </h3>
                      <div className="btn-box">
                        <Link className="thm-btn" href="contact">
                          <span className="txt">Contact Us</span>
                          <i className="icon-next"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                  {/*End Sidebar Single*/}
                </div>
              </div>
              {/*End Sidebar*/}
            </div>
          </div>
        </section>
        {/*End Blog Details*/}
      </Layout>
    </>
  );
}
