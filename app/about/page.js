
import CounterUp from "@/components/elements/CounterUp"
import Layout from "@/components/layout/Layout"
import BrandSlider1 from "@/components/slider/BrandSlider1"
import ProjectSlider2 from "@/components/slider/ProjectSlider2"
import Link from "next/link"
export default function About() {

    return (
        <>

            <Layout headerStyle={1} footerStyle={2} breadcrumbTitle="Sobre">
                <div>
                    <section className="about-section section-padding fix bg-cover" style={{ backgroundImage: 'url("assets/img/service/service-bg-2")' }}>
                        <div className="container">
                            <div className="about-wrapper style-2">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="about-image-items">
                                            <div className="about-image-1 bg-cover wow fadeInLeft" data-wow-delay=".3s" style={{ backgroundImage: 'url("assets/img/about/16.jpg")' }}>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 mt-4 mt-lg-0">
                                        <div className="about-content">
                                            <div className="section-title">
                                                <span className="wow fadeInUp">A Thisbe é uma empresa inovadora</span>
                                            </div>
                                            <p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                                            Fundada em 2014 e com sede no Brasil, oferecemos serviços especializados impulsionados por resultados eficazes para seu negócio.
                                            A Thisbe é uma empresa de consultoria e desenvolvimento de IA que atende aos nossos clientes com soluções completas apoiadas por tecnologias orientadas por IA generativa.<br />
                                            </p>
                                            <div className="about-icon-items">
                                                <div className="icon-items wow fadeInUp" data-wow-delay=".7s">
                                                    <div className="content">
                                                        <h4>Nosso Compromisso </h4>
                                                        <p>
                                                            Estamos comprometidos com a transparência e qualidade de nossas soluções, 
                                                            além de continuarmos a promover uma cultura de tecnologia.
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="icon-items wow fadeInUp" data-wow-delay=".9s">
                                                <div className="content">
                                                        <h4>Missão</h4>
                                                        <p>
                                                            Acelerar os negócios digitais a partir de ideias inovadoras impulsionadas 
                                                            pela tecnologia.
                                                        </p>
                                                    </div>
                                                </div>
                                                
                                                <div className="content">
                                                        <h4>Equipe</h4>
                                                        <p>
                                                            A diversidade e a força de trabalho são fundamentais para nosso sucesso 
                                                            e viabilização do futuro digital.
                                                        </p>
                                                    </div>
                                            </div>
                                            <div className="about-author">
                                                <div className="about-button wow fadeInUp" data-wow-delay=".5s">

                                                </div>
                                                <div className="author-image wow fadeInUp" data-wow-delay=".7s">                                                
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* Offer Section Start */}
                    
                    {/* Project Section Start */}
                    
                    {/*<< Team Section Start >>*/}
                    {/* Brand Section Start */}

                </div>

            </Layout>
        </>
    )
}