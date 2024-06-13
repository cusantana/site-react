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
                                                    <li className="active"><Link href="/service-data">Data Analytics</Link><i className="fa-solid fa-arrow-right-long" /></li>
                                                    <li><Link href="/service-mkt">Marketing Digital</Link><i className="fa-solid fa-arrow-right-long" /></li>
                                                    <li><Link href="/service-bpo">Ourtsourcing</Link><i className="fa-solid fa-arrow-right-long" /></li>
                                                    <li><Link href="/service-code">Software Delivery</Link><i className="fa-solid fa-arrow-right-long" /></li>
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
                                            <img src="/assets/img/service/details-4.jpg" alt="img" />
                                        </div>
                                        <div className="details-content">
                                            <h3>Data Analytics</h3>
                                            <p className="mt-3">
                                                Através do uso de ferramentas analíticas que agregam valor aos negócios das empresas, a Thisbe possibilita análise e validação dos dados permitindo que empresas recebam insights para tomadas de decisões baseadas em dados.
                                            </p>
                                            <p className="mt-3">
                                                Conheça as soluções de dados analíticos capazes de minimizar custos e maximizar o retorno por meio do compartilhamento de conteúdos criados a partir planilhas permitindo que usuários modelem, analisem, explorem e gerenciem os dados por meio de tecnologias modernas e inovadoras.
                                            </p>
                                            <div className="details-video-items">

                                                <div className="content">
                                                    <h4>Benefícios</h4>
                                                    <p> Gestão eficaz de dados, automatização e simplificação. <br /> </p>
                                                    <ul className="list">
                                                        <li>
                                                            <i className="fa-regular fa-circle-check" />
                                                            Análise descritiva, diagnóstica e preditiva
                                                        </li>
                                                        <li>
                                                            <i className="fa-regular fa-circle-check" />
                                                            ETL e ingestão de dados
                                                        </li>
                                                        <li>
                                                            <i className="fa-regular fa-circle-check" />
                                                            API integradas com machine learning
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <p>
                                                A Thisbe conta com uma equipe especializada e qualificada para implementar modelos preditivos para os clientes, garantindo a privacidade dos dados e a autorização dos clientes para compartilhar informações sensíveis.
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