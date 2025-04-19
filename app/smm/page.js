"use client";
import Link from "next/link";
import Layout from "@/components/layout/Layout";
export default function Home() {
  return (
    <>
      <Layout
        headerStyle={4}
        footerStyle={1}
        breadcrumbTitle="Social Media Management (SMM)"
      >
        {/*Start Service Details*/}
        <section className="service-details">
          <div className="container">
            <div className="row">
              <div className="col-xl-8 wow fadeInUp" data-wow-delay=".3s">
                <div className="service-details__content">
                  <div className="service-details__img-box1">
                    <div className="img-box">
                      <img
                        src="assets/img/service/service-details__img6_CRM.jpg"
                        alt="image"
                      />
                    </div>
                    <div className="content-box">
                      <h2>Social Media Management(SMM) </h2>
                      <p>
                        At Byteknot Technology, we believe a strong social
                        presence starts with a smart strategy. We take the time
                        to understand your brand voice, target audience, and
                        industry trends to build a customized social media plan.
                        From engaging content creation to scheduled posting and
                        audience interaction, we lay the groundwork for
                        meaningful online growth.
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
                        Once the plan is in motion, we focus on delivering
                        clear, impactful results. Whether it's building brand
                        awareness, increasing engagement, or generating leads,
                        our SMM approach is performance-driven. With regular
                        insights and data-backed adjustments, we help your brand
                        stay visible, relevant, and trusted across all major
                        platforms.
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
                        Our Services: Social Media Management (SMM)
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
                          <strong>Content Strategy & Planning:</strong> We craft
                          a content calendar aligned with your brand voice,
                          business goals, and audience interests to ensure
                          consistent and meaningful engagement.
                        </li>
                        <li>
                          <strong>Platform Management:</strong> From Facebook
                          and Instagram to LinkedIn and Twitter, we manage your
                          profiles, post regularly, and interact with your
                          audience in real time.
                        </li>
                        <li>
                          <strong>Campaign Creation & Execution:</strong> Launch
                          targeted campaigns that drive traffic, build brand
                          awareness, and convert followers into customers.
                        </li>
                        <li>
                          <strong>Performance Tracking & Analytics:</strong>{" "}
                          Monitor engagement, growth, and ROI through detailed
                          reports and data-driven insights to refine your
                          strategy.
                        </li>
                        <li>
                          <strong>Community Engagement:</strong> We actively
                          respond to messages, comments, and reviews, building
                          stronger relationships between your brand and your
                          audience.
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
                        Why Choose Us for SMM?
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
                          • <strong>Creative & Consistent Content:</strong> Our
                          team develops visually engaging and value-driven
                          content that captures attention and encourages
                          interaction.
                        </li>
                        <li>
                          • <strong>Strategic Growth:</strong> We use proven
                          techniques to grow your audience organically and build
                          a loyal online community around your brand.
                        </li>
                        <li>
                          • <strong>Cross-Platform Expertise:</strong> Whether
                          B2B or B2C, we tailor your strategy to the right
                          platforms with content that fits each channel
                          perfectly.
                        </li>
                        <li>
                          • <strong>Brand-Centric Approach:</strong> Every post,
                          caption, and interaction is designed to reinforce your
                          brand identity and business message.
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
                        <Link   href="seo">
                          SEO
                          <span className="icon-right-arrow-angle"></span>
                        </Link>
                      </li>
                      <li>
                        <div className="cercale-box"></div>
                        <Link   href="crm">
                          CRM
                          <span className="icon-right-arrow-angle"></span>
                        </Link>
                      </li>
                      <li>
                        <div className="cercale-box"></div>
                        <Link className="active" href="smm">
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
