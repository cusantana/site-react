
import Link from 'next/link'

export default function Pricing1() {
    return (
        <>
                        <section className="work-process-section fix section-padding pt-0">
                <div className="container">
                    <div className="section-title text-center">
                        <span></span>
                        <h2>Metodologia de trabalho</h2>
                    </div>
                    <div className="process-work-wrapper">
                        <div className="line-shape">
                            <img src="/assets/img/process/linepng.png" alt="" />
                        </div>
                        <div className="row">
                            <div className="col-xl-3 col-lg-4 col-md-6">
                                <div className="work-process-items text-center">
                                    <div className="icon">
                                        <img src="/assets/img/process/01.svg" alt="img" />
                                        <h6 className="number">
                                            1
                                        </h6>
                                    </div>
                                    <div className="content">
                                        <h4>Escolha um Serviço</h4>
                                        <p>
                                            Preparação e planejamento da ideia alinhada com o negócio
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6">
                                <div className="work-process-items text-center">
                                    <div className="content style-2">
                                        <h4>Definição dos requerimentos</h4>
                                        <p>
                                            Documento técnico com ojetivos e tecnologias
                                        </p>
                                    </div>
                                    <div className="icon">
                                        <img src="/assets/img/process/02.svg" alt="img" />
                                        <h6 className="number">
                                            2
                                        </h6>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6">
                                <div className="work-process-items text-center">
                                    <div className="icon">
                                        <img src="/assets/img/process/03.svg" alt="img" />
                                        <h6 className="number">
                                            3
                                        </h6>
                                    </div>
                                    <div className="content">
                                        <h4>Solicite uma reunião</h4>
                                        <p>
                                            Nosso time de especialistas entrará em contato para refinamento do escopo
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6">
                                <div className="work-process-items text-center">
                                    <div className="content style-2">
                                        <h4>Solução final</h4>
                                        <p>
                                            Envio da proposta para aprovação e analise final do cliente
                                        </p>
                                    </div>
                                    <div className="icon">
                                        <img src="/assets/img/process/04.svg" alt="img" />
                                        <h6 className="number">
                                            4
                                        </h6>
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
