
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Project() {

    return (
        <>

            <Layout headerStyle={1} footerStyle={2} breadcrumbTitle="Project">
                <section className="project-section section-padding fix">
                    <div className="container">
                        <div className="row g-4">
                            <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                                <div className="project-items">
                                    <div className="project-image">
                                        <img src="/assets/img/project/1.jpg" alt="project-img" />
                                        <div className="project-content">
                                            <p>Tecnologia</p>
                                            <h4>
                                                <Link href="/project-details">Financeiro</Link>
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                                <div className="project-items">
                                    <div className="project-image">
                                        <img src="/assets/img/project/2.jpg" alt="project-img" />
                                        <div className="project-content">
                                            <p>Segurança</p>
                                            <h4>
                                                <Link href="/project-details">Cibersegurança</Link>
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
                                                <Link href="/project-details">Criação APP | WEB</Link>
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                                <div className="project-items">
                                    <div className="project-image">
                                        <img src="/assets/img/project/4.jpg" alt="project-img" />
                                        <div className="project-content">
                                            <p>Dados</p>
                                            <h4>
                                                <Link href="/project-details">Data Analytics</Link>
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                                <div className="project-items">
                                    <div className="project-image">
                                        <img src="/assets/img/project/5.jpg" alt="project-img" />
                                        <div className="project-content">
                                            <p>Tecnologia</p>
                                            <h4>
                                                <Link href="/project-details">Nuvem</Link>
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".7s">
                                <div className="project-items">
                                    <div className="project-image">
                                        <img src="/assets/img/project/6.jpg" alt="project-img" />
                                        <div className="project-content">
                                            <p>Consultoria de TI</p>
                                            <h4>
                                                <Link href="/project-details">Gerenciamento de Projetos</Link>
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </Layout>
        </>
    )
}