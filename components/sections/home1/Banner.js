"use client";
import Link from "next/link";
import { useState } from "react";
import ModalVideo from "react-modal-video";

export default function Banner() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      {/*Start Banner Two*/}
      <section className="banner-three">
        <div className="banner-three__shape1 float-bob-x">
          <img src="assets/img/shape/banner-three__shape1.png" alt="shapes" />
        </div>
        <div className="banner-three__shape2">
          <img src="assets/img/shape/banner-three__shape2.png" alt="shapes" />
        </div>
        <div className="banner-three__shape3">
          <img src="assets/img/shape/banner-three__shape3.png" alt="shapes" />
        </div>
        <div className="banner-three__shape4 float-bob-y">
          <img src="assets/img/shape/banner-three__shape4.png" alt="shapes" />
        </div>
        <div className="banner-three__shape5">
          <img src="assets/img/shape/banner-three__shape5.png" alt="shapes" />
        </div>
        <div className="banner-three__shape6 float-bob-y">
          <img src="assets/img/shape/banner-three__shape6.png" alt="shapes" />
        </div>
        <div className="container">
          <div className="banner-three__content">
            <div className="banner-three__content-inner">
              <div className="sec-title-four sec-title-animation animation-style1">
                <div className="sub-title">
                  <h4>Welcome To Byteknot Technology</h4>
                </div>
                <h2>
                Innovating the Future, One Byte at a Time.
                </h2>
              </div>
              <div className="text">
                <p>
                We provide cutting-edge IT solutions and custom software tailored to your business.
                <br />
                </p>
              </div>
              <div className="btn-box">
                <Link className="thm-btn" href="#">
                  <span className="txt">
                    Get Started
                    <i className="icon-next"></i>
                  </span>
                </Link>
                
              </div>
            </div>

            <div className="banner-three__img">
              <ul>
                <li>
                  <div className="banner-three__img-single">
                    <div className="inner">
                      <img
                        src="assets/img/slider/banner-three__img1.jpg"
                        alt="image"
                      />
                    </div>
                  </div>
                </li>
                <li>
                  <div className="banner-three__img-single instyle--2">
                    <div className="inner">
                      <img
                        src="assets/img/slider/banner-three__img2.jpg"
                        alt="image"
                      />
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/*End Banner Two*/}
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="Get7rqXYrbQ"
        onClose={() => setOpen(false)}
      />
    </>
  );
}
