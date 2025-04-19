"use client";
import Layout from "@/components/layout/Layout";
import CounterUp from "@/components/elements/CounterUp";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Link from "next/link";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 1,
  spaceBetween: 30,
  // autoplay: {
  //     delay: 2500,
  //     disableOnInteraction: false,
  // },
  loop: true,

  // Navigation
  navigation: {
    nextEl: ".h1n",
    prevEl: ".h1p",
  },

  // Pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
};

export default function About() {
  return (
    <>
      <Layout headerStyle={4} footerStyle={1} breadcrumbTitle="About company">
        {/*Start About Three*/}
        <section className="about-three">
          <div className="about-three__shape1 float-bob-y">
            <img src="assets/img/shape/about-three__shape1.png" alt="shapes" />
          </div>
          <div className="about-three__shape2">
            <img src="assets/img/shape/about-three__shape2.png" alt="shapes" />
          </div>
          <div className="about-three__shape3">
            <img src="assets/img/shape/about-three__shape3.png" alt="shapes" />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-xl-6">
                <div className="about-three__content">
                  <div className="sec-title-four sec-title-animation animation-style1">
                    <div className="sub-title">
                      <h4>Get To Know About Us</h4>
                    </div>
                    <h2>
                      We Are Here to Give You
                      <br />
                      Effective Ideas
                    </h2>
                  </div>
                  <div className="text">
                    <p>
                      We are a passionate team delivering innovative and
                      effective digital solutions to help your business grow.
                    </p>
                  </div>
                  <div className="about-three__fact-box">
                    <div className="row">
                      <div className="col-xl-6 col-lg-6 col-md-6">
                        <div className="about-three__fact-single">
                          <div className="count-outer count-box">
                            <h2>13</h2>
                            <i className="icon-plus-symbol-button"></i>
                          </div>
                          <div className="title">
                            <h3>Completed Projects</h3>
                          </div>
                          <div className="text">
                            <p>With 100% Satisfaction</p>
                          </div>
                        </div>
                      </div>

                      <div className="col-xl-6 col-lg-6 col-md-6">
                        <div className="about-three__fact-single">
                          <div className="count-outer count-box">
                            <h2>89</h2>
                            <i className="icon-percentage"></i>
                          </div>
                          <div className="title">
                            <h3>Company Growth</h3>
                          </div>
                          <div className="text">
                            <p>Avg. Every Year</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="about-three__img">
                    <div className="img-box">
                      <img
                        src="assets/img/about/about-three__img1.jpg"
                        alt="image"
                      />
                    </div>
                    <div className="title-box">
                      <h3>
                        We Are The Best Digital
                        <br />
                        Agencies In The City
                      </h3>
                      <div className="btn-box">
                        <Link className="thm-btn" href="#">
                          <span className="txt">Learn More</span>
                          <i className="icon-next"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6">
                <div className="about-three__img-box">
                  <ul>
                    <li
                      className="wow fadeInRight"
                      data-wow-delay="0ms"
                      data-wow-duration="1500ms"
                    >
                      {/*Single About Three Img*/}
                      <div className="single-about-three__img-box">
                        <img
                          src="assets/img/about/about-three__img2.jpg"
                          alt="image"
                        />
                      </div>
                      {/*End About Three Img*/}
                    </li>

                    <li
                      className="wow fadeInRight"
                      data-wow-delay="0ms"
                      data-wow-duration="1500ms"
                    >
                      {/*Single About Three Img*/}
                      <div className="single-about-three__img-box">
                        <img
                          src="assets/img/about/about-three__img3.jpg"
                          alt="image"
                        />
                      </div>
                      {/*End About Three Img*/}
                    </li>
                  </ul>

                  <div
                    className="about-three__img-box-bottom wow fadeInLeft"
                    data-wow-delay="0ms"
                    data-wow-duration="1500ms"
                  >
                    {/*Single About Three Img*/}
                    <div className="single-about-three__img-box">
                      <img
                        src="assets/img/about/about-three__img4.jpg"
                        alt="image"
                      />
                    </div>
                    {/*End About Three Img*/}
                  </div>

                  <div className="overlay-box text-center">
                    <div className="outer-box">
                      <div className="count-outer count-box">
                        <h2>2</h2>
                        <i className="icon-plus-symbol-button"></i>
                      </div>
                      <div className="title">
                        <p>
                          Years Of
                          <br />
                          Experiences
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*End About Three*/}

        {/*Start Service Two*/}
        <section className="service-two">
          <div className="service-two__shape1">
            <img src="assets/img/shape/service-two__shape1.png" alt="shape" />
          </div>
          <div className="service-two__shape2">
            <img src="assets/img/shape/service-two__shape2.png" alt="shape" />
          </div>
          <div className="service-two__shape3">
            <img src="assets/img/shape/service-two__shape3.png" alt="shape" />
          </div>
          <div className="service-two__shape4 float-bob-y">
            <img src="assets/img/shape/service-two__shape4.png" alt="shape" />
          </div>
          <div className="container">
            <div className="sec-title-two text-center sec-title-animation animation-style1">
              <h2>
                Our Affordable <span>Services</span>
              </h2>
              <p>
                We deliver scalable and affordable digital solutions to bring
                your ideas to life.
              </p>
            </div>
            <div className="row">
              {/* Services Cards */}
              {[
                {
                  title: "Website Design",
                  iconClass: "icon-web-development",
                  href: "/services/web-design",
                  delay: "0.1s",
                  desc: "Responsive, modern, and user-friendly designs tailored to your brand.",
                },
                {
                  title: "Mobile Application",
                  iconClass: "icon-app-development",
                  href: "/services/mobile-app",
                  delay: "0.2s",
                  desc: "Cross-platform mobile apps with intuitive UX and high performance.",
                },
                {
                  title: "Digital Marketing",
                  iconClass: "icon-email-marketing",
                  href: "/services/e-marketing",
                  delay: "0.3s",
                  desc: "Data-driven digital marketing strategies that convert traffic into leads.",
                },
                {
                  title: "SEO",
                  iconClass: "icon-digital-marketing",
                  href: "/services/seo",
                  delay: "0.4s",
                  desc: "Boost your search engine visibility and reach your ideal audience.",
                },
                {
                  title: "CRM",
                  iconClass: "icon-website-design",
                  href: "/services/crm",
                  delay: "0.5s",
                  desc: "Custom CRM solutions that streamline sales and customer engagement.",
                },
                {
                  title: "Social Media Management",
                  iconClass: "icon-product-development",
                  href: "/services/smm",
                  delay: "0.6s",
                  desc: "Grow your brand with smart, targeted social media strategies.",
                },
                {
                  title: "Graphic Design",
                  iconClass: "icon-find-solutions",
                  href: "/services/graphic-design",
                  delay: "0.7s",
                  desc: "Logos, branding, and visuals that make your business stand out.",
                },
                {
                  title: "Iot (Internet of Things)",
                  iconClass: "icon-completed-projects",
                  href: "/services/convert-to-app",
                  delay: "0.8s",
                  desc: "Connect and manage smart devices for smarter operations."
              }
              ].map((service, index) => (
                <div
                  key={index}
                  className="col-xl-3 col-lg-6 col-md-6 wow animated fadeInUp"
                  data-wow-delay={service.delay}
                >
                  <div className="service-two__single">
                    <div
                      className={`service-two__single-icon-box color${
                        (index % 8) + 1
                      }`}
                    >
                      <span className={service.iconClass}>
                        <span className="path1"></span>
                        <span className="path2"></span>
                      </span>
                    </div>
                    <div className="service-two__single-title-box">
                      <h3>
                        <Link href={service.href}>{service.title}</Link>
                      </h3>
                    </div>
                    <div className="service-two__single-text-box">
                      <p>{service.desc}</p>
                    </div>
                    <div className="overlay-btn">
                      <Link href={service.href}>
                        Learn More <span className="icon-next"></span>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/*End Service Two*/}

        {/* Start Mission & Vision Section */}
        <section className="mission-vision">
          <div className="container">
            <div className="row align-items-center mb-5">
              <div className="col-lg-6">
                <div
                  className="mission-vision__content wow fadeInLeft"
                  data-wow-delay="0.1s"
                >
                  <div className="sec-title-two sec-title-animation animation-style1">
                    <h2>
                      Our <span>Mission</span>
                    </h2>
                  </div>
                  <p>
                    To empower businesses with innovative digital solutions that
                    drive growth, boost efficiency, and create exceptional
                    online experiences.
                  </p>
                </div>
              </div>
              <div className="col-lg-6">
                <div
                  className="mission-vision__image wow fadeInRight"
                  data-wow-delay="0.2s"
                >
                  <img
                    src="assets/img/mission/mission_01.jpg"
                    alt="Mission Image"
                    className="img-fluid rounded"
                  />
                </div>
              </div>
            </div>

            <div className="row align-items-center flex-lg-row-reverse">
              <div className="col-lg-6">
                <div
                  className="mission-vision__content wow fadeInRight"
                  data-wow-delay="0.1s"
                >
                  <div className="sec-title-two sec-title-animation animation-style1">
                    <h2>
                      Our <span>Vision</span>
                    </h2>
                  </div>
                  <p>
                    To be a leading force in digital transformation, delivering
                    cutting-edge solutions that inspire innovation, elevate
                    brands, and foster long-term success for our clients.
                  </p>
                </div>
              </div>
              <div className="col-lg-6">
                <div
                  className="mission-vision__image wow fadeInLeft"
                  data-wow-delay="0.2s"
                >
                  <img
                    src="assets/img/mission/mission_02.jpg"
                    alt="Vision Image"
                    className="img-fluid rounded"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Mission & Vision Section */}
      </Layout>
    </>
  );
}
