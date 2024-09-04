
import Link from 'next/link'
import CounterUp from '../elements/CounterUp'

export default function About1() {
    return (
        <>
            <section className="about-section section-padding fix bg-cover" id="about" style={{ backgroundImage: 'url("assets/img/service/service-bg-2.jpg")' }}>
                <div className="container">
                    <div className="about-wrapper style-2">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="about-image-items">
                                    <div className="circle-shape">
                                        <img src="/assets/img/about/circle.png" alt="shape-img" />
                                    </div>
                                    <div className="counter-shape float-bob-y">
                                        <div className="icon">
                                            <img src="/assets/img/about/icon-1.svg" alt="icon-img" />
                                        </div>
                                        <div className="content">
                                            <h3><CounterUp count={10}/>Anos</h3>
                                            <p>De Experiência</p>
                                        </div>
                                    </div>
                                    <div className="about-image-1 bg-cover wow fadeInLeft" data-wow-delay=".3s" style={{ backgroundImage: 'url("assets/img/about/20.png")' }}>
                                        <div className="about-image-2 wow fadeInUp" data-wow-delay=".5s">
                                            <img src="/assets/img/about/18-1.jpg" alt="about-img" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 mt-4 mt-lg-0">
                                <div className="about-content">
                                    <div className="section-title">
                                        <span className="wow fadeInUp">BEM VINDO A THISBE</span>
                                        <h2 className="wow fadeInUp" data-wow-delay=".3s">
                                            Inovando com soluções personalizadas para nossos <span>Clientes</span>
                                        </h2>
                                    </div>
                                    <p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                                        Fundada em 2014 e com sede no Brasil, oferecemos serviços especializados impulsionados por resultados eficazes para seu negócio. <br /> A Thisbe é uma empresa de consultoria
                                        e desenvolvimento de IA que atende aos nossos clientes com soluções completas apoiadas por tecnologias orientadas por IA generativa.
                                    </p>
                                    <div className="about-icon-items">
                                        <div className="icon-items wow fadeInUp" data-wow-delay=".7s">
                                            <div className="icon">
                                                <img src="/assets/img/about/icon-4.svg" alt="icon-img" />
                                            </div>
                                            <div className="content">
                                                <h4>Nosso Foco </h4>
                                                <p>
                                                    Entender as necessidades de negócios de nossos clientes aplicando nosso conhecimento
                                                    comercial e técnico e propor a solução certa.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="icon-items wow fadeInUp" data-wow-delay=".9s">
                                            <div className="icon">
                                                <img src="/assets/img/about/icon-5.svg" alt="icon-img" />
                                            </div>
                                            <div className="content">
                                                <h4>Missão </h4>
                                                <p>
                                                    Acelerar os negócios digitais a partir de ideias inovadoras impulsionadas pela tecnologia.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="about-author">
                                        <div className="about-button wow fadeInUp" data-wow-delay=".5s">
                                            <Link href="/about" className="theme-btn">
                                                Saiba mais
                                                <i className="fa-solid fa-arrow-right-long" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
