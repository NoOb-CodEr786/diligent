"use client";
import Link from "next/link";
import Layout from "@/components/layout/Layout";
export default function Home() {
  return (
    <>
      <Layout
        headerStyle={4}
        footerStyle={1}
        breadcrumbTitle="Iot (Internet of Things)"
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
                        src="assets/img/service/service-details__img8_Iot.jpg"
                        alt="image"
                      />
                    </div>
                    <div className="content-box">
                      <h2>Iot (Internet of Things)</h2>
                      <p>
                        At Byteknot Technology, our IoT solutions begin with a
                        clear strategy—understanding your environment,
                        identifying pain points, and mapping out how connected
                        devices can improve performance and efficiency. We
                        design intelligent systems tailored to your business,
                        whether it’s for smart homes, industrial automation, or
                        enterprise-level monitoring.
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
                        From planning to execution, we focus on delivering
                        tangible results. Our IoT services enable real-time data
                        tracking, predictive maintenance, and seamless
                        automation—empowering you to make smarter decisions,
                        reduce operational costs, and stay ahead in a connected
                        world.
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
                        Our Services: IoT (Internet of Things)
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
                          <strong>Smart Device Integration:</strong> Seamlessly
                          connect and manage smart devices across your home,
                          office, or industrial setup for improved efficiency
                          and automation.
                        </li>
                        <li>
                          <strong>Custom IoT Solutions:</strong> Tailored IoT
                          development for industries like healthcare, logistics,
                          agriculture, and smart cities—built to solve
                          real-world problems.
                        </li>
                        <li>
                          <strong>Data Collection & Analytics:</strong> Leverage
                          real-time data from connected devices to gain
                          insights, optimize operations, and make data-driven
                          decisions.
                        </li>
                        <li>
                          <strong>Remote Monitoring & Control:</strong> Monitor
                          equipment, environments, and systems remotely,
                          ensuring security, performance, and uptime at all
                          times.
                        </li>
                        <li>
                          <strong>IoT App Development:</strong> User-friendly
                          mobile and web apps that provide full control and
                          visibility over your connected devices.
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
                        Why Choose Us for IoT Development?
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
                          <strong>Industry Expertise:</strong> Our team
                          understands the intricacies of IoT systems and
                          delivers solutions that align with your operational
                          needs.
                        </li>
                        <li>
                          <strong>End-to-End Development:</strong> From concept
                          and design to deployment and support, we handle the
                          entire IoT lifecycle.
                        </li>
                        <li>
                          <strong>Secure & Scalable:</strong> We prioritize
                          security and build scalable architectures to ensure
                          your IoT network is future-ready.
                        </li>
                        <li>
                          <strong>Custom Integrations:</strong> We design
                          solutions that integrate seamlessly with your existing
                          infrastructure for maximum flexibility and impact.
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
                        <Link  href="graphicDesign">
                          Graphic Design
                          <span className="icon-right-arrow-angle"></span>
                        </Link>
                      </li>
                      <li>
                        <div className="cercale-box"></div>
                        <Link className="active" href="iot">
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
