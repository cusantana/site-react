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
                                                <h3>Serviços Digitais</h3>
                                            </div>
                                            <div className="widget-categories">
                                                <ul>
                                                    <li><Link href="/service-consultant">Consultoria</Link><i className="fa-solid fa-arrow-right-long" /></li>
                                                    <li className="active"><Link href="/service-data">Inteligência Artificial</Link><i className="fa-solid fa-arrow-right-long" /></li>
                                                    <li><Link href="/service-code">Software</Link><i className="fa-solid fa-arrow-right-long" /></li>
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
                                                    <Link href="/tel:+2085550112">+55(11)91198-1751</Link>
                                                </h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-lg-8 order-1 order-md-2">
                                    <div className="service-details-items">
                                        <div className="details-image">
                                            <img src="/assets/img/service/web-1.jpg" alt="img" />
                                        </div>
                                        <div className="details-content">
                                            <h3>Inteligência Artificial</h3>
                                            <p className="mt-3">
                                                Desenvolvimento de soluções eficazes de IA generativa através do uso de ferramentas MLOps que agregam valor aos negócios das empresas. Os serviços de IA são projetados especificamente para impulsionar avanços em seus negócios. Nossas soluções de GenAI são alimentadas por modelos básicos que ajudam as empresas a automatizar e agilizar fluxos de trabalho para aumentar a produtividade e a eficiência.
                                            </p>
                                            <p className="mt-3">
                                                Nosso serviço de análise de dados possibilita análise e validação dos dados permitindo que empresas recebam insights para tomadas de decisões baseadas em dados estruturados ou texto não estruturado.
                                            </p>
                                            <div className="details-video-items">

                                                <div className="content">
                                                    <h4>Benefícios</h4>
                                                    <p> Redução de custo operacional, automatização, simplificação e gestão eficaz de dados. <br /> </p>
                                                    <ul className="list">
                                                        <li>
                                                            <i className="fa-regular fa-circle-check" />
                                                            Desenvolvimento de soluções e suporte contínuo
                                                        </li>
                                                        <li>
                                                            <i className="fa-regular fa-circle-check" />
                                                            Construção de modelos de IA generativa
                                                        </li>
                                                        <li>
                                                            <i className="fa-regular fa-circle-check" />
                                                            API integradas com machine learning
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <p>
                                                A Thisbe conta com uma equipe especializada e qualificada para suportar aplicações de GenAI com qualidade, privacidade e controle para os clientes, executadas em uma infraestrutura gerenciada e personalizada com base nas suas necessidades de desempenho e orçamento.
                                            </p>
                                            <div className="image-area">
                                                <div className="row g-4">

                                                </div>
                                            </div>
                                            
                                        </div>
                                        <div className="faq-content style-3">
                                            <div className="faq-accordion">
                                                <div className="accordion" id="accordion">
                                                
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