

import Accordion1 from "@/components/elements/Accordion1"
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Service() {

    return (
        <>

            <Layout headerStyle={1} footerStyle={2} breadcrumbTitle="O QUE FAZEMOS">
                <div>
                <section className="project-section section-padding fix">
                    <div className="container">
                        <div className="row g-4">
                            <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                                <div className="project-items">
                                    <div className="project-image">
                                        <img src="/assets/img/project/1.jpg" alt="project-img" />
                                        <div className="project-content">
                                            <p>Data Analytics</p>
                                            <h4>
                                                <Link href="/service-data">Dados Inteligentes</Link>
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                                <div className="project-items">
                                    <div className="project-image">
                                        <img src="/assets/img/project/sec.png" alt="project-img" />
                                        <div className="project-content">
                                            <p>Cibersegurança</p>
                                            <h4>
                                                <Link href="/service-details">Proteção e Defesa</Link>
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".7s">
                                <div className="project-items">
                                    <div className="project-image">
                                        <img src="/assets/img/project/3.png" alt="project-img" />
                                        <div className="project-content">
                                            <p>Software Delivery</p>
                                            <h4>
                                                <Link href="/service-code">APP | WEB | ERP</Link>
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                                <div className="project-items">
                                    <div className="project-image">
                                        <img src="/assets/img/project/seo.png" alt="project-img" />
                                        <div className="project-content">
                                            <p>Marketing Digital</p>
                                            <h4>
                                                <Link href="/service-mkt">SEO e Web Design</Link>
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                                <div className="project-items">
                                    <div className="project-image">
                                        <img src="/assets/img/project/9.jpg" alt="project-img" />
                                        <div className="project-content">
                                            <p>Outsourcing</p>
                                            <h4>
                                                <Link href="/service-bpo">Gestão de Colaboradores</Link>
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".7s">
                                <div className="project-items">
                                    <div className="project-image">
                                        <img src="/assets/img/project/success.jpg" alt="project-img" />
                                        <div className="project-content">
                                            <p>Consultoria de TI</p>
                                            <h4>
                                                <Link href="/service-consultant">Gestão de Projetos</Link>
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                </div>

            </Layout>
        </>
    )
}