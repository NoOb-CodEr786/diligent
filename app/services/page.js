"use client";
import Link from "next/link";
import CounterUp from "@/components/elements/CounterUp";
import Layout from "@/components/layout/Layout";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
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
    nextEl: ".srn",
    prevEl: ".srp",
  },

  // Pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      // spaceBetween: 30,
    },
    575: {
      slidesPerView: 1,
      // spaceBetween: 30,
    },
    767: {
      slidesPerView: 1,
      // spaceBetween: 30,
    },
    991: {
      slidesPerView: 1,
      // spaceBetween: 30,
    },
    1199: {
      slidesPerView: 1,
      // spaceBetween: 30,
    },
    1350: {
      slidesPerView: 1,
      // spaceBetween: 30,
    },
  },
};
export default function Home() {
  return (
    <>
      <Layout headerStyle={4} footerStyle={1} breadcrumbTitle="Our services">
        <div>
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
        </div>
      </Layout>
    </>
  );
}
