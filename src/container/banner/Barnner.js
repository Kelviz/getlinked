import React from "react";

import Images from "../../constants/Images";
import "./Barnner.css";
import BannerOverlay from "../../components/BannerOverlay";

const Barnner = () => {
  return (
    <>
      <div class="container-banner sec-height1">
        <div class="wrapper">
          <div class="main-banner">
            <div class="main-banner__info-left">
              <div class="info-left__title">
                <div class="title-head">
                  <div class="title-head-1">
                    <h1>getlinked Tech</h1>
                    <div>
                      <img src={Images.creative} alt="creative" />
                    </div>
                  </div>

                  <div class="title-head-2">
                    <h1>
                      Hackathon <span class="styled-txt">1.0</span>
                    </h1>
                    <img src={Images.chain} alt="chain" />
                    <img src={Images.fire} alt="1f4a5" />
                  </div>
                </div>

                <div class="title-txt">
                  <p>
                    Participate in getlinked tech Hackathon 2023 stand a chance
                    to win a Big prize
                  </p>
                </div>

                <div class="title-btn">
                  <button class="btn-grad">Register</button>
                </div>

                <div class="title-countdown">
                  <div class="countdown">
                    <p>00</p>
                    <small>H</small>
                  </div>

                  <div class="countdown">
                    <p>00</p>
                    <small>M</small>
                  </div>

                  <div class="countdown">
                    <p>00</p>
                    <small>S</small>
                  </div>
                </div>
              </div>

              <div class="info-left__title-stars">
                <div class="title-star-1">
                  <img src={Images.starOne} alt="star" />
                </div>

                <div class="title-star-2">
                  <img src={Images.starTwo} alt="star" />
                </div>

                <div class="title-star-3">
                  <img src={Images.starTwo} alt="star" />
                </div>
              </div>
            </div>

            <div class="main-banner__info-right">
              <div class="main-banner__txt-italics">
                <h2>Igniting a Revolution in HR Innovation</h2>
                <div class="title-txt__vector">
                  <img src={Images.vector4} alt="vector" />
                </div>
              </div>

              <div class="main-banner__info-right-imgs">
                <img
                  src={Images.man}
                  alt="man-wearing-smart-glasses-touching-virtual-screen 1.png"
                />

                <img class="overlay-img" src={Images.wrld} alt="world" />
              </div>
            </div>
          </div>
        </div>

        <BannerOverlay />
      </div>
    </>
  );
};

export default Barnner;
