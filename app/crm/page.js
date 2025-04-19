"use client";
import Link from "next/link";
import Layout from "@/components/layout/Layout";
export default function Home() {
  return (
    <>
      <Layout
        headerStyle={4}
        footerStyle={1}
        breadcrumbTitle="CRM (Customer Relationship Management
) "
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
                      <h2>CRM (Customer Relationship Management )</h2>
                      <p>
                        At Byteknot Technology, our CRM services begin with a
                        clear understanding of your customer journey and
                        business workflow. We plan a customized solution that
                        aligns with your sales, support, and marketing goals
                        ensuring better collaboration, communication, and
                        customer engagement. From requirement gathering to
                        system design, every step is focused on solving your
                        specific business challenges.
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
                        Once implemented, our CRM solutions deliver real,
                        measurable results. Whether it’s improved lead tracking,
                        faster response times, or increased customer
                        satisfaction, we ensure your CRM works as a powerful
                        asset—not just a system. With ongoing support and
                        scalable architecture, we help you build lasting
                        relationships and grow with confidence.
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
                        Our Services: CRM Solutions
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
                          <strong>Custom CRM Development:</strong> We build
                          tailored CRM systems that streamline your business
                          processes, from lead management to customer retention.
                        </li>
                        <li>
                          <strong>CRM Integration:</strong> Seamless integration
                          with your existing tools—such as email, marketing
                          platforms, and third-party apps—for unified business
                          operations.
                        </li>
                        <li>
                          <strong>Sales & Marketing Automation:</strong>{" "}
                          Automate follow-ups, campaigns, and sales funnels to
                          save time and improve conversion rates.
                        </li>
                        <li>
                          <strong>Customer Support Management:</strong>{" "}
                          Centralized dashboards to manage tickets, feedback,
                          and customer communication with ease.
                        </li>
                        <li>
                          <strong>Data Analytics & Reporting:</strong> Gain
                          valuable insights into customer behavior, sales
                          performance, and campaign success with real-time
                          reports.
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
                        Why Choose Us for CRM Development?
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
                          • <strong>Tailored to Your Business:</strong> Our CRM
                          systems are designed specifically around your
                          workflows, team structure, and business goals.
                        </li>
                        <li>
                          • <strong>Scalable & Flexible:</strong> We build CRMs
                          that grow with you—easily adaptable to new features
                          and increasing customer data.
                        </li>
                        <li>
                          • <strong>User-Friendly Interfaces:</strong> We
                          prioritize clean design and intuitive navigation so
                          your team can focus on customers, not systems.
                        </li>
                        <li>
                          • <strong>Expert Implementation & Support:</strong>{" "}
                          From planning to deployment and beyond, we offer
                          complete CRM support to ensure smooth operations and
                          maximum efficiency.
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
                        <Link className="active"  href="crm">
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
