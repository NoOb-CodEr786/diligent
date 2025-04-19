"use client";
import Link from "next/link";
import Layout from "@/components/layout/Layout";
export default function Home() {
  return (
    <>
      <Layout headerStyle={4} footerStyle={1} breadcrumbTitle="Graphic Design">
        {/*Start Service Details*/}
        <section className="service-details">
          <div className="container">
            <div className="row">
              <div className="col-xl-8 wow fadeInUp" data-wow-delay=".3s">
                <div className="service-details__content">
                  <div className="service-details__img-box1">
                    <div className="img-box">
                      <img
                        src="assets/img/service/service-details__img7_Graphic_Design.jpg"
                        alt="image"
                      />
                    </div>
                    <div className="content-box">
                      <h2>Graphic Design </h2>
                      <p>
                        At Byteknot Technology, great design begins with a solid
                        understanding of your brand, audience, and goals. Our
                        design process starts with strategic planning—whether
                        it's a logo, marketing material, or complete brand
                        identity, we aim to capture your vision with creativity
                        and clarity.
                      </p>
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
                        From concept to completion, we focus on results. Every
                        graphic we create is designed to make an
                        impact—enhancing brand recognition, boosting engagement,
                        and elevating your business image. With a perfect blend
                        of aesthetics and purpose, our graphic design solutions
                        are crafted to help you stand out in a competitive
                        market.
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
                        Our Services: Graphic Design
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
                          <strong>Brand Identity Design:</strong> From logos to
                          full branding kits, we create visually striking brand
                          assets that communicate your values and leave a
                          lasting impression.
                        </li>
                        <li>
                          <strong>Marketing Materials:</strong> Eye-catching
                          brochures, flyers, business cards, banners, and
                          posters designed to elevate your marketing efforts.
                        </li>
                        <li>
                          <strong>Social Media Graphics:</strong>{" "}
                          Scroll-stopping visuals designed specifically for
                          social media platforms to boost engagement and brand
                          recognition.
                        </li>
                        <li>
                          <strong>UI/UX Design:</strong> Clean, intuitive
                          interface designs for websites and apps, focused on
                          enhancing the user experience.
                        </li>
                        <li>
                          <strong>Custom Illustrations & Infographics:</strong>{" "}
                          Unique visuals and data-driven infographics that
                          simplify complex ideas and tell your story creatively.
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
                        Why Choose Us for Graphic Design?
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
                          <strong>Creative Expertise:</strong> Our talented
                          design team blends creativity with strategy to deliver
                          visuals that are not only beautiful but also
                          effective.
                        </li>
                        <li>
                          <strong>Brand-Focused Approach:</strong> Every design
                          element is aligned with your brand’s personality,
                          tone, and goals for consistency and impact.
                        </li>
                        <li>
                          <strong>Fast Turnaround:</strong> We understand time
                          is crucial, so we deliver top-quality designs within
                          your deadline without compromising quality.
                        </li>
                        <li>
                          <strong>End-to-End Support:</strong> From initial
                          concepts to final delivery, we guide you through every
                          stage to ensure you're 100% satisfied with the result.
                        </li>
                      </ul>
                    </div>
                  </div>
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
                        <Link href="web-development">
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
                        <Link className="active" href="graphicDesign">
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
