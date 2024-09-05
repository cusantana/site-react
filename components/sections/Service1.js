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
                            <span className="wow fadeInUp">Serviços de TI</span>
                            <h2 className="wow fadeInUp" data-wow-delay=".3s">
                                Impulsione Sua Inovação<br />
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
                                                    IA generativa
                                                </Link>
                                            </h4>
                                            <p>
                                                Desenvolvimento de IA unificada e gerenciada para criar e usar a IA generativa.
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
                                                Desenvolvimento de software personalizado com foco em IA que atende diversos setores com otimização de tempo e economia.
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
                                                    Transformação Digital
                                                </Link>
                                            </h4>
                                            <p>
                                                Transforme seus negócios, operações e experiência do cliente.
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
                                                    Serviços de TI
                                                </Link>
                                            </h4>
                                            <p>
                                                Automatização e otimização de processos e gerenciamento de serviços em nuvem.
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
                                                    IA generativa
                                                </Link>
                                            </h4>
                                            <p>
                                                Desenvolvimento de IA unificada e gerenciada para criar e usar a IA generativa.
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
                                                Desenvolvimento de software personalizado com foco em IA que atende diversos setores com otimização de tempo e economia.
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
                                                    Transformação Digital
                                                </Link>
                                            </h4>
                                            <p>
                                                Transforme seus negócios, operações e experiência do cliente.
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
                                                    Serviços de TI
                                                </Link>
                                            </h4>
                                            <p>
                                                Automatização e otimização de processos e gerenciamento de serviços em nuvem.
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
