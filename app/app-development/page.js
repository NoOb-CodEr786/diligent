import Layout from "@/components/layout/Layout";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <Layout
        headerStyle={4}
        footerStyle={1}
        breadcrumbTitle="Mobile App Development"
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
                        src="assets/img/service/service-details__img1_Android.jpg"
                        alt="image"
                      />
                    </div>
                    <div className="content-box">
                      <h2>Mobile App Development</h2>
                      <p>
                        At Byteknot Technology, our approach to mobile app
                        development begins with understanding your business
                        objectives and crafting a tailored plan. We work closely
                        with you to define the features, design, and
                        functionality that align with your vision. From concept
                        to deployment, we ensure that your mobile app is a
                        perfect fit for your audience and delivers tangible
                        results that drive engagement and business growth.
                      </p>
                      {/* <p>
                        We pride ourselves on providing mobile solutions that
                        are not only aesthetically pleasing but also
                        high-performing and secure. Whether you need a
                        consumer-facing app, an enterprise solution, or
                        something in between, our team ensures that your app
                        performs seamlessly across devices, scales with your
                        business, and evolves to meet future demands. At
                        Byteknot Technology, we don’t just build apps; we
                        deliver impactful digital experiences.
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
                        We pride ourselves on providing mobile solutions that
                        are not only aesthetically pleasing but also
                        high-performing and secure. Whether you need a
                        consumer-facing app, an enterprise solution, or
                        something in between, our team ensures that your app
                        performs seamlessly across devices, scales with your
                        business, and evolves to meet future demands. At
                        Byteknot Technology, we don’t just build apps; we
                        deliver impactful digital experiences.
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
                        {/* Mobile Application Development Section */}
                        <li>
                          <strong>Mobile Application Development:</strong>{" "}
                          Tailored mobile applications designed to meet your
                          business needs, providing a seamless user experience
                          across iOS and Android.
                        </li>
                        <li>
                          <strong>Cross-Platform Solutions:</strong> Mobile apps
                          built to function smoothly across multiple platforms,
                          ensuring consistent performance for users.
                        </li>
                        <li>
                          <strong>App UI/UX Design:</strong> Intuitive, visually
                          engaging interfaces that enhance user interaction and
                          satisfaction.
                        </li>
                        <li>
                          <strong>App Integration & API Development:</strong>{" "}
                          Third-party integrations and custom API solutions to
                          extend the functionality of your app and improve user
                          engagement.
                        </li>
                        <li>
                          <strong>App Maintenance & Support:</strong> Ongoing
                          support, updates, and optimizations to ensure your app
                          runs smoothly and securely over time.
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
                          • <strong>Expert Mobile Developers:</strong> Our team
                          has extensive experience in developing high-quality
                          mobile applications across a wide range of industries.
                        </li>
                        <li>
                          • <strong>End-to-End Solutions:</strong> From planning
                          and design to development and maintenance, we provide
                          comprehensive mobile app services to meet your
                          specific needs.
                        </li>
                        <li>
                          • <strong>Scalable & Secure:</strong> We build
                          scalable apps that grow with your business while
                          ensuring the highest levels of security to protect
                          user data.
                        </li>
                        <li>
                          • <strong>Innovation-Driven:</strong> We incorporate
                          the latest technologies and industry best practices to
                          create apps that are not only functional but
                          innovative and future-proof.
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
                        <Link className="active" href="#">
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
