"use client";
/* eslint-disable import/no-unresolved */
import Image from "next/image";
import pic1 from "./asset/pic1.png";
import pic2 from "./asset/pic2.png";
import pic3 from "./asset/pic3.png";
import pic4 from "./asset/pic4.jpg";
import pic6 from "./asset/pic6.jpg";
import pic7 from "./asset/pic7.jpg";
import pic8 from "./asset/pic8.jpg";
import logo1 from "./asset/logo1.png";
import logo2 from "./asset/logo2.png";
import logo3 from "./asset/logo3.png";
import logo4 from "./asset/logo4.png";
import fash from "./asset/fashion-shoes-sneakers.jpg";
import { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType} from 'swiper';
import { Navigation } from "swiper/modules";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
export default function Home() {
  const[head, sethead] = useState(false);
  useEffect(() =>{
    const scrollhead = (event: any) =>{
      window.scrollY >= 50 ? sethead(true) : sethead(false)
    }
    window.addEventListener("scroll", scrollhead);
    return ()=>{
      window.removeEventListener("scroll", scrollhead);
    }
  },[]);
  const swiperRef = useRef<SwiperType>();
  return (
    <>
    <header className={head ? "header scroll__header" : "header"}>
      <nav className="nav container">
        <span className="nav__logo">
          Shoe.
        </span>
        <div className="nav__menu">
          <ul className="nav__list">
            <li className="nav__item">
              <span className="nav__link">
                <span>Home</span>
              </span>
            </li>
            <li className="nav__item">
              <span className="nav__link">
                <span>New</span>
              </span>
            </li>
            <li className="nav__item">
              <span className="nav__link">
                <span>Collections</span>
              </span>
            </li>
            <li className="nav__item">
              <span className="nav__link">
                <span>Products</span>
              </span>
            </li>
          </ul>
        </div>
      </nav>
    </header>
    <main className="main">
        <section className="home section" id="home">
            <div className="home__container container grid">
              <div className="home__data">
                <h1 className="home__title">
                  New Shoe <br></br>
                  Collection
                </h1>
                <p className="home__description">
                  The new shoe collection from <br></br>
                  best brands this year
                </p>
                <span className="button__link" >Explore</span>
              </div>
              <div className="home__images">
                <Image src={pic4} alt="pic"/>
                <Image src={fash} alt="pic2"/>
              </div>
            </div>
        </section>

        <section className="new section" id="new">
            <h1 className="section__title">
              New Categories
            </h1>
            <div className="new__container container grid">
              <article className="new__card">
                <Image src={pic6} alt="wer" className="new__img"/>
                <span className="new__link">
                  <div className="new__data">
                    <h2 className="new__title">
                      Party shoes
                    </h2>
                    <span>
                      party Collection
                    </span>
                  </div>
                </span>
              </article>
              <article className="new__card">
                <Image src={pic7} alt="wer" className="new__img"/>
                <span className="new__link">
                  <div className="new__data">
                    <h2 className="new__title">
                      Running shoes
                    </h2>
                    <span>
                      Track Collection
                    </span>
                  </div>
                </span>
              </article>
              <article className="new__card">
                <Image src={pic8} alt="wer" className="new__img"/>
                <span className="new__link">
                  <div className="new__data">
                    <h2 className="new__title">
                      Simple shoes
                    </h2>
                    <span>
                      personal Collection
                    </span>
                  </div>
                </span>
              </article>
            </div>
        </section>

        <section className="collection section" id="collection">
            <div className="collection__container container">
              <div className="collection__explore">
                <div className="collection__data-shoe">
                  <h2 className="collection__title">
                    Jordan<br></br>
                    Collection
                  </h2>
                  <span className="button__link">
                    Explore Shoes
                  </span>
                </div>
                <Image src={pic6} alt="wet"/>
              </div>
              <div className="collection__explore">
                <Image src={pic8} alt="wet"/>
                <div className="collection__data-shoe2">
                  <h2 className="collection__title">
                    Nike<br></br>
                    Collection
                  </h2>
                  <span className="button__link">
                    Explore Shoes
                  </span>
                </div>
              </div>
            </div>
        </section>

        <section className="products section" id="products">
            <h2 className="section__title">
              Best Products
            </h2>
            <div className="products__container container">
            <Swiper 
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            breakpoints={{
              576:{
                slidesPerView: 2,
                loop: false,
                centeredSlides: false
              },
              767:{
                slidesPerView: 3,
                loop: false,
                centeredSlides: false
              },
              1024: {
                slidesPerView: 4,
                loop: false,
                centeredSlides: false
              },
            }}
            modules={[Navigation]}
            spaceBetween={32}
            slidesPerView={"auto"}
            centeredSlides={true}
            loop={true}
            grabCursor={true}
            className="mySwiper">
                <SwiperSlide>
                  <article className="product__card">
                  <Image src={pic2}  alt="product" className="products__img"/>
                  <h2 className="products__title">
                    Nike Airforce
                  </h2>
                  <span className="products__price">
                    $100
                  </span>
                </article>
                </SwiperSlide>

               <SwiperSlide>
                 <article className="product__card">
                  <Image src={pic3}  alt="product" className="products__img"/>
                  <h2 className="products__title">
                    Nike Airforce
                  </h2>
                  <span className="products__price">
                    $100
                  </span>
                </article>
               </SwiperSlide>

                <SwiperSlide>
                <article className="product__card">
                  <Image src={pic2}  alt="product" className="products__img"/>
                  <h2 className="products__title">
                    Nike Airforce
                  </h2>
                  <span className="products__price">
                    $100
                  </span>
                </article>
                </SwiperSlide>
                
               <SwiperSlide>
               <article className="product__card">
                  <Image src={pic1}  alt="product" className="products__img"/>
                  <h2 className="products__title">
                    Nike Airforce
                  </h2>
                  <span className="products__price">
                    $100
                  </span>
                </article>
               </SwiperSlide>
              </Swiper>
              <div className="nuton">
                <span className="button" onClick={() => swiperRef.current?.slidePrev()}>Prev</span>
                <span className="button" onClick={() => swiperRef.current?.slideNext()}>Next</span>
              </div>
            </div>
        </section>

        <section className="brand section">
          <h2 className="section__title">
            Brands
          </h2>
          <div className="brand__container container grid">
            <Image src={logo1} className="brand__img" alt="brand"/>
            <Image src={logo2} className="brand__img" alt="brand"/>
            <Image src={logo3} className="brand__img" alt="brand"/>
            <Image src={logo4} className="brand__img" alt="brand"/>
          </div>
        </section>
    </main>
    <footer className="footer section">
      <div className="footer__container container grid">
        <div>
           <span className="footer__logo">Shoe</span>
          <p className="footer__description">
            Committed to providing comfort for all
          </p>
        </div>
        <div className="footer__content">
        <div>
          <h3 className="footer__title">
            Company
          </h3>
          <ul className="footer__links">
            <li>
              <span className="footer__link">
                shop
              </span>
            </li>
            <li>
              <span className="footer__link">
                Category
              </span>
            </li>
            <li>
              <span className="footer__link">
                Info
              </span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="footer__title">
            Blog
          </h3>
          <ul className="footer__links">
            <li>
              <span className="footer__link">
                Events
              </span>
            </li>
            <li>
              <span className="footer__link">
                News
              </span>
            </li>
            <li>
              <span className="footer__link">Trends</span>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="footer__title">
            Office
          </h3>
          <p className="footer__information">
            Monday-Saturday<br></br>
            8:30 - 4:30
          </p>
        </div>
        <div>
          <h3 className="footer__title">
            Contact us
          </h3>
          <ul className="footer__social">
           <span className="footer__social-"></span>
           <span className="footer__social-"></span>
           <span className="footer__social-"></span>
          </ul>
        </div>
      </div>
      </div>
      <div className="footer__info container">
        <span className="footer__copy">
          &#169; Shoe. All rights reserved 
        </span>
      </div>
    </footer>
    </>
  );
}
