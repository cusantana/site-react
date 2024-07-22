
import Accordion1 from "@/components/elements/Accordion1"
import Layout from "@/components/layout/Layout"
export default function Faq() {

    return (
        <>

            <Layout headerStyle={1} footerStyle={2} breadcrumbTitle="Carreira">
                <section className="faq-section-2 fix section-padding">
                    <div className="container">
                        <div className="faq-wrapper">
                            <div className="row g-4">
                                <div className="col-lg-6 wow fadeInUp" data-wow-delay=".4s">
                                    <div className="faq-image">
                                        <img src="/assets/img/faq/entrevista.png" alt="faq-img" />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="faq-content style-2">
                                        <div className="section-title">
                                            <span className="wow fadeInUp">Vagas abertas</span>
                                            <h6 className="wow fadeInUp" data-wow-delay=".3s">
                                                Não há vagas abertas no momento.
                                            </h6>
                                            <h7 className="wow fadeInUp" data-wow-delay=".3s">
                                                Deseja fazer parte do time da Thisbe? Envie seu currículo para rh@thisbe.com.br e a equipe de Recrutamento e Seleção irá analisar.
                                                Boa sorte.
                                            </h7>
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