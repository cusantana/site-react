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
                            <span className="wow fadeInUp">Serviços - Software as a Service</span>
                            <h2 className="wow fadeInUp" data-wow-delay=".3s">
                                Versatilidade em todo cenário de TI.<br />
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
                                            <img src="/assets/img/service/icon/s-icon-1.svg" alt="icon-img" />
                                        </div>
                                        <div className="content">
                                            <h4>
                                                <Link href="/service-code">
                                                    API | Web | App Mobile
                                                </Link>
                                            </h4>
                                            <p>
                                                Oferecemos Web design personalizado com integrações de API
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
                                            <img src="/assets/img/service/icon/s-icon-2.svg" alt="icon-img" />
                                        </div>
                                        <div className="content">
                                            <h4>
                                                <Link href="/service-consultant">
                                                    Consultoria
                                                </Link>
                                            </h4>
                                            <p>
                                                Consultoria especializada em diversos setores da TI para maximizar o potencial do seu negócio
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
                                            <img src="/assets/img/service/icon/s-icon-3.svg" alt="icon-img" />
                                        </div>
                                        <div className="content">
                                            <h4>
                                                <Link href="/service-details">
                                                    Cibersegurança
                                                </Link>
                                            </h4>
                                            <p>
                                                Previsibilidade de ataques, defesa e prevenção de segurança
                                            </p>
                                            <Link href="/service-details" className="theme-btn-2 mt-3">
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
                                                    Software Delivery
                                                </Link>
                                            </h4>
                                            <p>
                                                Software personalizado fácil de usar e com otimização de tempo e economia
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
                                                <Link href="/service-code">
                                                    UI/UX Design
                                                </Link>
                                            </h4>
                                            <p>
                                                Criação de protótipo e experiência do usuário
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
                                            <img src="/assets/img/service/icon/s-icon-2.svg" alt="icon-img" />
                                        </div>
                                        <div className="content">
                                            <h4>
                                                <Link href="/service-bpo">
                                                    Outsourcing
                                                </Link>
                                            </h4>
                                            <p>
                                                BPO contábil e tributário seguro para sua empresa
                                            </p>
                                            <Link href="/service-bpo" className="theme-btn-2 mt-3">
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
                                                <Link href="/service-mkt">
                                                    SEO & Marketing digital
                                                </Link>
                                            </h4>
                                            <p>
                                                Serviços de SEO inovadores e completos
                                            </p>
                                            <Link href="/service-mkt" className="theme-btn-2 mt-3">
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
                                                <Link href="/service-data">
                                                    Data Analytics
                                                </Link>
                                            </h4>
                                            <p>
                                                Análise e exploração de dados para validar hipóteses e gerar insights para seu negócio.
                                            </p>
                                            <Link href="/service-data" className="theme-btn-2 mt-3">
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
                                Soluções de TI para seu negócio.  <Link href="/service">Conheça nossos principais Serviços </Link>
                            </h6>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
