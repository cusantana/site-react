'use client'
import Link from 'next/link'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    spaceBetween: 30,
    speed: 1500,
    loop: true,
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".array-prev",
        prevEl: ".array-next",
    },

    breakpoints: {
        1199: {
            slidesPerView: 4,
        },
        991: {
            slidesPerView: 2,
        },
        767: {
            slidesPerView: 2,
        },
        575: {
            slidesPerView: 2,
        },
        0: {
            slidesPerView: 1,
        },
    },
}

export default function Service1() {
    return (
        <>
            <section className="service-section fix section-padding bg-cover" style={{ backgroundImage: 'url("assets/img/service/service-bg.jpg")' }}  id="service">
                <div className="container">
                    <div className="section-title-area">
                        <div className="section-title">
                            <span className="wow fadeInUp">Serviços de IA</span>
                            <h2 className="wow fadeInUp" data-wow-delay=".3s">
                                Descubra nossos serviços<br />
                            </h2>
                        </div>
                        <div className="array-button">
                            <button className="array-prev"><i className="fal fa-arrow-right" /></button>
                            <button className="array-next"><i className="fal fa-arrow-left" /></button>
                        </div>
                    </div>
                    <div className="service-wrapper">
                        <div className="swiper service-slider">
                            <Swiper {...swiperOptions} className="swiper-wrapper">
                                <SwiperSlide>
                                    <div className="service-box-items">
                                        <div className="icon">
                                            <img src="/assets/img/service/icon/s-icon-3.svg" alt="icon-img" />
                                        </div>
                                        <div className="content">
                                            <h4>
                                                <Link href="/service-ia">
                                                    Serviços IA
                                                </Link>
                                            </h4>
                                            <p>
                                                Usar API REST e SDK para consumir serviços de IA na nuvem.
                                            </p>
                                            <Link href="/service-ia" className="theme-btn-2 mt-3">
                                                Saiba mais
                                                <i className="fa-solid fa-arrow-right-long" />
                                            </Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="service-box-items">
                                        <div className="icon">
                                            <img src="/assets/img/service/icon/s-icon-4.svg" alt="icon-img" />
                                        </div>
                                        <div className="content">
                                            <h4>
                                                <Link href="/service-code">
                                                    Software
                                                </Link>
                                            </h4>
                                            <p>
                                                Integração de sistemas de inteligência artificial aos seus aplicativos e serviços.
                                            </p>
                                            <Link href="/service-code" className="theme-btn-2 mt-3">
                                                Saiba mais
                                                <i className="fa-solid fa-arrow-right-long" />
                                            </Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="service-box-items">
                                        <div className="icon">
                                            <img src="/assets/img/service/icon/s-icon-1.svg" alt="icon-img" />
                                        </div>
                                        <div className="content">
                                            <h4>
                                                <Link href="/service-consultant">
                                                    Cibersegurança
                                                </Link>
                                            </h4>
                                            <p>
                                                Proteger os serviços de IA e ajudar impedir perda de dados e violações de privacidade dos usuários.
                                            </p>
                                            <Link href="/service-consultant" className="theme-btn-2 mt-3">
                                                Saiba mais
                                                <i className="fa-solid fa-arrow-right-long" />
                                            </Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="service-box-items">
                                        <div className="icon">
                                            <img src="/assets/img/service/icon/s-icon-2.svg" alt="icon-img" />
                                        </div>
                                        <div className="content">
                                            <h4>
                                                <Link href="/service">
                                                    Integração
                                                </Link>
                                            </h4>
                                            <p>
                                                Integrar funcionalidades de IA a outros aplicativos e soluções.
                                            </p>
                                            <Link href="/service" className="theme-btn-2 mt-3">
                                                Saiba mais
                                                <i className="fa-solid fa-arrow-right-long" />
                                            </Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="service-box-items">
                                        <div className="icon">
                                            <img src="/assets/img/service/icon/s-icon-3.svg" alt="icon-img" />
                                        </div>
                                        <div className="content">
                                            <h4>
                                                <Link href="/service-ia">
                                                    Serviços IA
                                                </Link>
                                            </h4>
                                            <p>
                                                Usar API REST e SDK para consumir serviços de IA na nuvem.
                                            </p>
                                            <Link href="/service-ia" className="theme-btn-2 mt-3">
                                                Saiba mais
                                                <i className="fa-solid fa-arrow-right-long" />
                                            </Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="service-box-items">
                                        <div className="icon">
                                            <img src="/assets/img/service/icon/s-icon-4.svg" alt="icon-img" />
                                        </div>
                                        <div className="content">
                                            <h4>
                                                <Link href="/service-code">
                                                    Software
                                                </Link>
                                            </h4>
                                            <p>
                                                Integração de sistemas de inteligência artificial aos seus aplicativos e serviços.
                                            </p>
                                            <Link href="/service-code" className="theme-btn-2 mt-3">
                                                Saiba mais
                                                <i className="fa-solid fa-arrow-right-long" />
                                            </Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="service-box-items">
                                        <div className="icon">
                                            <img src="/assets/img/service/icon/s-icon-1.svg" alt="icon-img" />
                                        </div>
                                        <div className="content">
                                            <h4>
                                                <Link href="/service-consultant">
                                                    Cibersegurança
                                                </Link>
                                            </h4>
                                            <p>
                                                Proteger os serviços de IA e ajudar impedir perda de dados e violações de privacidade dos usuários.
                                            </p>
                                            <Link href="/service-consultant" className="theme-btn-2 mt-3">
                                                Saiba mais
                                                <i className="fa-solid fa-arrow-right-long" />
                                            </Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="service-box-items">
                                        <div className="icon">
                                            <img src="/assets/img/service/icon/s-icon-2.svg" alt="icon-img" />
                                        </div>
                                        <div className="content">
                                            <h4>
                                                <Link href="/service">
                                                    Integração
                                                </Link>
                                            </h4>
                                            <p>
                                                Integrar funcionalidades de IA a outros aplicativos e soluções.
                                            </p>
                                            <Link href="/service" className="theme-btn-2 mt-3">
                                                Saiba mais
                                                <i className="fa-solid fa-arrow-right-long" />
                                            </Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                </Swiper>
                        </div>
                        <div className="service-text wow fadeInUp" data-wow-delay=".4s">
                            <h6>
                                Soluções para seu negócio.  <Link href="/service">Conheça nossos principais Serviços </Link>
                            </h6>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
