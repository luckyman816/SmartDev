"use client";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import Star from "@/public/images/star.png";

const TextSlider = () => {
  return (
    <section className="text-slider-wrapper">
      <Swiper
        slidesPerView="auto"
        spaceBetween={24}
        speed={10000}
        loop={true}
        centeredSlides={false}
        modules={[Autoplay]}
        autoplay={{
          delay: 1,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        className="text-slider"
      >
        <SwiperSlide>
          <div className="text-slider__single">
            <h2 className="light-title">
              <Link href="services">Blockchain Architecture</Link>
            </h2>
            <Image src={Star} alt="Image" priority />
            <h2 className="light-title">
              <Link href="services" className="text-stroke" data-text="Smart Contract">
                Smart Contract
              </Link>
            </h2>
            <Image src={Star} alt="Image" priority />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="text-slider__single">
            <h2 className="light-title">
              <Link href="services">web3.js</Link>
            </h2>
            <Image src={Star} alt="Image" priority />
            <h2 className="light-title">
              <Link href="services" className="text-stroke" data-text="Blockchain Development">
                Blockchain Development
              </Link>
            </h2>
            <Image src={Star} alt="Image" priority />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="text-slider__single">
            <h2 className="light-title">
              <Link href="services">Solana</Link>
            </h2>
            <Image src={Star} alt="Image" priority />
            <h2 className="light-title">
              <Link href="services" className="text-stroke" data-text="Blockchain">
                Blockchain
              </Link>
            </h2>
            <Image src={Star} alt="Image" priority />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="text-slider__single">
            <h2 className="light-title">
              <Link href="services">API</Link>
            </h2>
            <Image src={Star} alt="Image" priority />
            <h2 className="light-title">
              <Link href="services" className="text-stroke" data-text="Database Architecture">
                Database Architecture
              </Link>
            </h2>
            <Image src={Star} alt="Image" priority />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="text-slider__single">
            <h2 className="light-title">
              <Link href="services">DApps</Link>
            </h2>
            <Image src={Star} alt="Image" priority />
            <h2 className="light-title">
              <Link href="services" className="text-stroke" data-text="API Integration">
                API Integration
              </Link>
            </h2>
            <Image src={Star} alt="Image" priority />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="text-slider__single">
            <h2 className="light-title">
              <Link href="services">React.js</Link>
            </h2>
            <Image src={Star} alt="Image" priority />
            <h2 className="light-title">
              <Link href="services" className="text-stroke" data-text="Crypto Wallet">
                Crypto Wallet
              </Link>
            </h2>
            <Image src={Star} alt="Image" priority />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="text-slider__single">
            <h2 className="light-title">
              <Link href="services">Vue.js</Link>
            </h2>
            <Image src={Star} alt="Image" priority />
            <h2 className="light-title">
              <Link href="services" className="text-stroke" data-text="Laravel">
                Laravel
              </Link>
            </h2>
            <Image src={Star} alt="Image" priority />
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default TextSlider;
