'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    speed: 1500,
    loop: true,
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".dot-2",
        clickable: true,
    },
}

export default function Testimonial1() {
    return (
        <>
            <section className="testimonial-section section-padding fix">
                <div className="container">
                    <div className="testimonial-wrapper">
                        <div className="swiper testimonial-slider">
                            <Swiper {...swiperOptions} className="swiper-wrapper">
                                <SwiperSlide>
                                    <div className="testimonial-items">
                                        <div className="tesimonial-image bg-cover" style={{ backgroundImage: 'url("assets/img/testimonial/testimonials-05.jpg")' }}>
                                            <div className="star">
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                            </div>
                                        </div>
                                        <div className="testimonial-content">
                                            <div className="section-title">
                                                <span>DEPOIMENTOS</span>
                                                <h2>O QUE DIZEM </h2>
                                            </div>
                                            <p className="mt-3 mt-md-0">
                                                “Não encontramos no mercado um sistema que atendesse às nossas necessidades específicas, foi quando procuramos a Thisbe que desenvolveu um sistema personalizado, baseado no nosso processo do dia a dia. Sempre fomos muito bem atendidos, desde a criação e desenvolvimento até o uso em operação e suporte.”
                                            </p>
                                            <div className="author-details">
                                                <h5>Paulo Tega</h5>
                                                <span>CEO Guarau</span>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="testimonial-items">
                                        <div className="tesimonial-image bg-cover" style={{ backgroundImage: 'url("assets/img/testimonial/testimonials-03.jpg")' }}>
                                            <div className="star">
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                            </div>
                                        </div>
                                        <div className="testimonial-content">
                                            <div className="section-title">
                                                <span>DEPOIMENTOS</span>
                                                <h2>O QUE DIZEM </h2>
                                            </div>
                                            <p className="mt-3 mt-md-0">
                                                “A Thisbe foi responsável pelo desenvolvimento do nosso site, durante todo o processo de desenvolvimento a equipe foi muito atenciosa às nossas necessidades, o atendimento e entrega do produto foi rápida. Mantivemos um bom relacionamento e eles estão sempre atualizando as informações necessárias. É uma empresa que realmente trabalha com soluções em tecnologia".
                                            </p>
                                            <div className="author-details">
                                                <h5>Danielly Scaranello</h5>
                                                <span>Médica da Ginecare</span>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="testimonial-items">
                                        <div className="tesimonial-image bg-cover" style={{ backgroundImage: 'url("assets/img/testimonial/01.jpg")' }}>
                                            <div className="star">
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                            </div>
                                        </div>
                                        <div className="testimonial-content">
                                            <div className="section-title">
                                                <span>DEPOIMENTOS</span>
                                                <h2>O QUE DIZEM </h2>
                                            </div>
                                            <p className="mt-3 mt-md-0">
                                                "A Thisbe é uma startup com crescimento acelerado. Todos têm orgulho de trabalhar aqui".
                                            </p>
                                            <div className="author-details">
                                                <h5>Nádia Oliveira</h5>
                                                <span>E. J. Contabilidade </span>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="testimonial-items">
                                        <div className="tesimonial-image bg-cover" style={{ backgroundImage: 'url("assets/img/testimonial/01.jpg")' }}>
                                            <div className="star">
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                            </div>
                                        </div>
                                        <div className="testimonial-content">
                                            <div className="section-title">
                                                <span>DEPOIMENTOS</span>
                                                <h2>O QUE DIZEM </h2>
                                            </div>
                                            <p className="mt-3 mt-md-0">
                                                "A Thisbe tem desempenhado um excelente trabalho estratégico nas empresas".
                                            </p>
                                            <div className="author-details">
                                                <h5>Marcos Santos</h5>
                                                <span>Ex Diretor Mahle</span>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                        <div className="swiper-dot-2">
                            <div className="dot-2" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
