'use client'
import VideoPopup from '@/components/elements/VideoPopup'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from 'react'
export default function ServiceDetails() {
    const [activeItem, setActiveItem] = useState(1)

    const handleClick = (index) => {
        setActiveItem(index)
    }
    return (
        <>

            <Layout headerStyle={1} footerStyle={2} breadcrumbTitle="">
                <section className="service-details-section fix section-padding">
                    <div className="container">
                        <div className="service-details-wrapper">
                            <div className="row g-4">
                                <div className="col-12 col-lg-4 order-2 order-md-1">
                                    <div className="main-sidebar">
                                        <div className="single-sidebar-widget">
                                            <div className="wid-title">
                                                <h3>Nossos Serviços</h3>
                                            </div>
                                            <div className="widget-categories">
                                                <ul>
                                                    <li><Link href="/service-details">Cibersegurança</Link><i className="fa-solid fa-arrow-right-long" /></li>
                                                    <li><Link href="/service-consultant">Consultoria</Link><i className="fa-solid fa-arrow-right-long" /></li>
                                                    <li><Link href="/service-data">Data Analytics</Link><i className="fa-solid fa-arrow-right-long" /></li>
                                                    <li><Link href="/service-mkt">Marketing Digital</Link><i className="fa-solid fa-arrow-right-long" /></li>
                                                    <li><Link href="/service-bpo">Outsourcing</Link><i className="fa-solid fa-arrow-right-long" /></li>
                                                    <li className="active"><Link href="/service-code">Software Delivery</Link><i className="fa-solid fa-arrow-right-long" /></li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="single-sidebar-image bg-cover" style={{ backgroundImage: 'url("assets/img/service/post1.jpg")' }}>
                                            <div className="contact-text">
                                                <div className="icon">
                                                    <i className="fa-solid fa-phone" />
                                                </div>
                                                <h4>Entre em contato conosco</h4>
                                                <h5>
                                                    <Link href="/tel:+2085550112">+55 (11)91198-1751</Link>
                                                </h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-lg-8 order-1 order-md-2">
                                    <div className="service-details-items">
                                        <div className="details-image">
                                            <img src="/assets/img/service/details-6.png" alt="img" />
                                        </div>
                                        <div className="details-content">
                                            <h3>Software Delivery</h3>
                                            <p className="mt-3">
                                                Criamos soluções nativa, no-code e low-code para pequenas ou grandes empresas. Com design elegante e eficiente para suportar sua empresa a fazer consultas que geram vendas e agregam valor ao seu negócio. A Thisbe entrega soluções personalizadas que atenda as necessidades de nossos clientes através de tecnologias escaláveis, flexíveis e testadas que permitem aos clientes gerenciar negócios para atingir metas proficientes.
                                            </p>
                                            <p className="mt-3">
                                                A Thisbe trabalha em todo o ciclo de desenvolvimento - planejamento, arquitetura, criação e atualização. Com uma interface amigável ao usuário, navegação, layout, cores, fontes e imagens. Com uma equipe de profissionais experiêntes conseguimos um equilíbrio perfeito entre atitude e habilidades necessária paara desenvolver uma solução perfeita.
                                            </p>
                                            <div className="details-video-items">
                                           
                                                <div className="content">
                                                    <h4>Benefícios</h4>
                                                    <p> Trabalhamos e atendemos clientes nos mais variados setores e indústrias. <br /> </p>
                                                    <ul className="list">
                                                        <li>
                                                            <i className="fa-regular fa-circle-check" />
                                                            Desenvolvimento de API com tecnologia bancária e pagamentos
                                                        </li>
                                                        <li>
                                                            <i className="fa-regular fa-circle-check" />
                                                            Criação de aplicativos móveis, tablet e sistemas Web
                                                        </li>
                                                        <li>
                                                            <i className="fa-regular fa-circle-check" />
                                                            Websites dinamicos, elegantes e funcional
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <p>
                                            Deixe-nos ajudá-lo a tornar essa chance de ouro para você. Sua melhor solução web está aqui na Thisbe. Nós lhe daremos algo para fazer seus concorrentes pensarem.
                                            </p>
                                           
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