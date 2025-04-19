'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.h1n',
        prevEl: '.h1p',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        575: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        767: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        991: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        1199: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
    }
}

export default function Testimonial() {
    return (
        <>
            {/*Start Testmonials Section*/}
            <section className="testimonials-three py-20 bg-gradient-to-r from-indigo-100 via-indigo-300 to-indigo-500">
                <div className="testimonials-three__shape1 rotate-me">
                    <img src="assets/img/shape/testimonials-three__shape1.png" alt="shapes" />
                </div>
                <div className="testimonials-three__shape2 rotate-me">
                    <img src="assets/img/shape/testimonials-three__shape2.png" alt="shapes" />
                </div>
                <div className="testimonials-three__shape3 rotate-me">
                    <img src="assets/img/shape/testimonials-three__shape3.png" alt="shapes" />
                </div>
                <div className="container">
                    <div className="row items-center">
                        <div className="col-xl-12">
                            <div className="testimonials-three__content text-center">
                                <div className="sec-title-four sec-title-animation animation-style1 mb-10">
                                    <div className="sub-title text-xl text-indigo-900 font-bold mb-3">
                                        <h4>Customer Feedback</h4>
                                    </div>
                                    <h2 className="text-4xl font-extrabold text-white">
                                        What Our Clients Say About Us
                                    </h2>
                                </div>

                                {/* Swiper Navigation */}
                                <div className="swiper-nav-style2 testimonials-three__swiper-nav-style">
                                    <div className="swiper-button-prev h1p">
                                        <i className="icon-left-arrow text-white text-2xl"></i>
                                    </div>
                                    <div className="swiper-button-next h1n">
                                        <i className="icon-right-arrow-angle text-white text-2xl"></i>
                                    </div>
                                </div>

                                {/* Testimonial Slider */}
                                <div className="testimonials-three__content-inner">
                                    <Swiper {...swiperOptions} className="thm-swiper__slider swiper-container">
                                        <div className="swiper-wrapper">
                                            <SwiperSlide>
                                                <div className="swiper-slide px-8 py-10 bg-white rounded-lg shadow-xl transform transition duration-300 hover:scale-105">
                                                    <div className="icon-box text-indigo-500 text-4xl mb-4">
                                                        <span className="icon-quote"></span>
                                                    </div>
                                                    <div className="text mb-6">
                                                        <p className="text-gray-700 text-lg">
                                                            "Concor delivers world-class infrastructure solutions across a broad industry, ensuring creativity and excellence in every project. Their approach to innovation sets them apart in a competitive market."
                                                        </p>
                                                    </div>
                                                    <div className="author-box text-center">
                                                        <h3 className="font-semibold text-xl text-indigo-900">Alina Kolaminov</h3>
                                                        <p className="text-sm text-gray-500">Marketing Agent</p>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="swiper-slide px-8 py-10 bg-white rounded-lg shadow-xl transform transition duration-300 hover:scale-105">
                                                    <div className="icon-box text-indigo-500 text-4xl mb-4">
                                                        <span className="icon-quote"></span>
                                                    </div>
                                                    <div className="text mb-6">
                                                        <p className="text-gray-700 text-lg">
                                                            "Working with Concor was an absolute pleasure. Their team is professional, efficient, and always ensures that every aspect of the project exceeds expectations. Highly recommended!"
                                                        </p>
                                                    </div>
                                                    <div className="author-box text-center">
                                                        <h3 className="font-semibold text-xl text-indigo-900">John Doe</h3>
                                                        <p className="text-sm text-gray-500">Senior Architect</p>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        </div>
                                    </Swiper>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* End Testmonials Section */}
        </>
    )
}
