"use client";
import Link from "next/link";
import Layout from "@/components/layout/Layout";
export default function Home() {
  return (
    <>
      <Layout
        headerStyle={4}
        footerStyle={1}
        breadcrumbTitle="Diital Marketing"
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
                        src="assets/img/service/service-details__img4_Digital_Marketing.jpg"
                        alt="image"
                      />
                    </div>
                    <div className="content-box">
                      <h2>Digital Marketing</h2>
                      <p>
                        At Byteknot Technology, our digital marketing strategy
                        starts with a clear plan rooted in your business goals
                        and target audience. We analyze your market, research
                        your competitors, and design a strategy that aligns with
                        your brand voice. Whether it's SEO, social media,
                        content, or paid ads, we plan each campaign with
                        precision to ensure your business gets the attention it
                        deserves.
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
                        We don’t just stop at planning — we deliver measurable
                        results. From increased website traffic and lead
                        generation to improved brand visibility and higher
                        conversions, we continuously optimize your campaigns for
                        maximum ROI. With our team by your side, you're not just
                        running ads — you're building a lasting digital presence
                        that drives real business growth.
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
                        Our Services: Digital Marketing
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
                          <strong>Search Engine Optimization (SEO):</strong>{" "}
                          Boost your website’s visibility on search engines and
                          attract more organic traffic with our proven SEO
                          strategies.
                        </li>
                        <li>
                          <strong>Social Media Marketing (SMM):</strong> Engage
                          your audience, build brand loyalty, and grow your
                          online presence across platforms like Facebook,
                          Instagram, LinkedIn, and more.
                        </li>
                        <li>
                          <strong>Email Marketing:</strong> Drive conversions
                          and nurture leads through personalized and targeted
                          email campaigns.
                        </li>
                        <li>
                          <strong>Pay-Per-Click (PPC) Advertising:</strong> Get
                          instant visibility and measurable results with
                          effective Google Ads and paid social campaigns.
                        </li>
                        <li>
                          <strong>Content Marketing:</strong> Build trust and
                          authority through high-quality, engaging content that
                          resonates with your audience and supports your SEO
                          efforts.
                        </li>
                        <li>
                          <strong>Online Reputation Management:</strong> Protect
                          and improve your brand’s image across the web with
                          proactive monitoring and response strategies.
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
                        Why Choose Us for Digital Marketing?
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
                          • <strong>Strategic Approach:</strong> We craft
                          data-driven digital marketing campaigns tailored to
                          your business goals and target audience.
                        </li>
                        <li>
                          • <strong>Certified Experts:</strong> Our team of
                          certified marketers brings deep industry knowledge and
                          a results-oriented mindset to every project.
                        </li>
                        <li>
                          • <strong>Full-Service Solutions:</strong> From
                          strategy to execution, we offer a complete range of
                          digital marketing services under one roof.
                        </li>
                        <li>
                          • <strong>Transparent Reporting:</strong> We believe
                          in complete transparency and provide regular
                          performance reports to keep you informed every step of
                          the way.
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
                        <Link className="active" href="digital-marketing">
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
