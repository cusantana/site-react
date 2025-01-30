
import Layout from "@/components/layout/Layout"
export default function ProjectDetails() {

    return (
        <>

            <Layout headerStyle={1} footerStyle={2} breadcrumbTitle="Indústrias">
                <section className="Project-details-section fix section-padding">
                    <div className="container">
                        <div className="project-details-wrapper">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="project-details-items">
                                        <div className="row g-4 justify-content-between">
                                            <div className="col-lg-7">
                                                <div className="details-content pt-5">
                                                    <h3>Soluções digitais inovadoras</h3>
                                                    <p>
                                                        Descubra a possibilidade, o poder e o desempenho da IA e da computação acelerada.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                
                                            </div>
                                        </div>
                                        <div className="details-content pt-3">
                                            <h3>Indústrias</h3>
                                            <p>
                                                Transforme seus negócios de maneira rápida e efetiva com os modelos de IA. Com nossa experiência e abordagem inovadora, ajudamos as empresas a obterem maior eficiência operacional, processos simplificados e custos reduzidos dos projetos em todo ciclo de vida de ML em todos os setores, com confiança e transparência em seus negócios.
                                            </p>
                                        </div>
                                        <div className="row g-4 pt-5">
                                            <div className="col-lg-3 col-md-6">
                                                <ul className="list">
                                                    <li>
                                                        <i className="fa-regular fa-circle-check" />
                                                        Financeira
                                                    </li>
                                                    <li>
                                                        <i className="fa-regular fa-circle-check" />
                                                        Farmacêutica
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="col-lg-3 col-md-6">
                                                <ul className="list">
                                                    <li>
                                                        <i className="fa-regular fa-circle-check" />
                                                        Papel & Celulose
                                                    </li>
                                                    <li>
                                                        <i className="fa-regular fa-circle-check" />
                                                        Logística
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="col-lg-3 col-md-6">
                                                <ul className="list">
                                                    <li>
                                                        <i className="fa-regular fa-circle-check" />
                                                        Varejo
                                                    </li>
                                                    <li>
                                                        <i className="fa-regular fa-circle-check" />
                                                        Manufatura
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="details-content pt-5">
                                            <h3>Soluções Inteligêntes</h3>
                                            <p>
                                                Excelência na experiência digital do cliente, transformando as indústrias através de um serviço integrado com suporte a todas as etapas de sua jornada de transformação digital.
                                            </p>
                                        </div>
                                        <div className="row g-4 pt-5">
                                            <div className="col-lg-6 col-md-6">
                                                <div className="thumb">
                                                    <img src="/assets/img/project/engineer-1.jpg" alt="img" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="thumb">
                                                    <img src="/assets/img/project/port-.jpg" alt="img" />
                                                </div>
                                            </div>
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