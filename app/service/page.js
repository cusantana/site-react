

import Accordion1 from "@/components/elements/Accordion1"
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Service() {

    return (
        <>

            <Layout headerStyle={1} footerStyle={2} breadcrumbTitle="Serviços">
                <div>
                <section className="project-section section-padding fix">
                    <div className="container">
                        <div className="row g-4">
                            <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                                <div className="project-items">
                                    <div className="project-image">
                                        <img src="/assets/img/project/1.jpg" alt="project-img" />
                                        <div className="project-content">
                                            <p>Inteligência Artificial</p>
                                            <h4>
                                                <Link href="/service-ia">IA Generativa</Link>
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
                                            <p>Desenvolvimento de Software</p>
                                            <h4>
                                                <Link href="/service-code">Sistemas | APPs | APIs</Link>
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
                                            <p>Cibersegurança</p>
                                            <h4>
                                                <Link href="/service-consultant">Cibernética | Dados</Link>
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