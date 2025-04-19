"use client";
import Link from "next/link";
import Layout from "@/components/layout/Layout";
export default function Home() {
  return (
    <>
      <Layout
        headerStyle={4}
        footerStyle={1}
        breadcrumbTitle="SEO (Search Engine Optimization)"
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
                        src="assets/img/service/service-details__img5_SEO.jpg"
                        alt="image"
                      />
                    </div>
                    <div className="content-box">
                      <h2>SEO (Search Engine Optimization)</h2>
                      <p>
                        At Byteknot Technology, our SEO journey begins with a
                        well-researched and tailored plan. We conduct in-depth
                        keyword analysis, audit your website, and understand
                        your business goals to create a strategy that boosts
                        visibility and drives qualified traffic. Every step—from
                        on-page optimization to technical SEO and link
                        building—is carefully mapped to elevate your search
                        engine performance.
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
                        But we don’t just plan—we deliver results. Our SEO
                        efforts are focused on achieving long-term growth by
                        improving your website’s rankings, increasing organic
                        traffic, and enhancing user experience. With consistent
                        performance tracking and continuous optimization, we
                        ensure that your business stays ahead of the competition
                        and ranks where it matters most.
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
                        Our Services: SEO (Search Engine Optimization)
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
                          <strong>On-Page SEO:</strong> Optimization of meta
                          tags, headings, keywords, images, and content
                          structure to improve site relevance and ranking.
                        </li>
                        <li>
                          <strong>Off-Page SEO:</strong> High-quality
                          link-building strategies and outreach efforts to
                          increase domain authority and online credibility.
                        </li>
                        <li>
                          <strong>Technical SEO:</strong> Enhancing site speed,
                          mobile-friendliness, crawlability, and fixing backend
                          issues that affect performance.
                        </li>
                        <li>
                          <strong>Local SEO:</strong> Optimizing your presence
                          for local searches with Google Business Profile setup,
                          local citations, and reviews.
                        </li>
                        <li>
                          <strong>Keyword Research & Strategy:</strong> In-depth
                          analysis to target high-impact keywords that drive
                          traffic and match search intent.
                        </li>
                        <li>
                          <strong>SEO Audits & Reporting:</strong> Comprehensive
                          audits and regular performance reports to measure
                          growth and identify new opportunities.
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
                        Why Choose Us for SEO Services?
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
                          • <strong>Proven SEO Expertise:</strong> Our team
                          stays updated with the latest algorithms and best
                          practices to deliver sustainable SEO results.
                        </li>
                        <li>
                          • <strong>Customized Strategies:</strong> We don’t use
                          cookie-cutter approaches. Every SEO plan is built
                          around your business needs and industry.
                        </li>
                        <li>
                          • <strong>Transparent Reporting:</strong> You’ll
                          receive detailed reports with clear insights, keyword
                          rankings, traffic data, and recommendations.
                        </li>
                        <li>
                          • <strong>Long-Term Success:</strong> We focus on
                          ethical, white-hat SEO techniques that build lasting
                          visibility, not just short-term spikes.
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
                        <Link  className="active"  href="seo">
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
