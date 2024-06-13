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
                                                    <li className="active"><Link href="/service-datails">Cibersegurança</Link><i className="fa-solid fa-arrow-right-long" /></li>
                                                    <li><Link href="/service-consultant">Consultoria</Link><i className="fa-solid fa-arrow-right-long" /></li>
                                                    <li><Link href="/service-data">Data Analytics</Link><i className="fa-solid fa-arrow-right-long" /></li>
                                                    <li><Link href="/service-mkt">Marketing Digital</Link><i className="fa-solid fa-arrow-right-long" /></li>
                                                    <li><Link href="/service-bpo">Outsourcing</Link><i className="fa-solid fa-arrow-right-long" /></li>
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
                                                    <Link href="/tel:+2085550112">+55 (11)91198-1751</Link>
                                                </h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-lg-8 order-1 order-md-2">
                                    <div className="service-details-items">
                                        <div className="details-image">
                                            <img src="/assets/img/service/details-1.jpg" alt="img" />
                                        </div>
                                        <div className="details-content">
                                            <h3>Cibersegurança</h3>
                                            <p className="mt-3">
                                                Com o crescimento exponencial e presente em várias camadas dos negócios, ações para combater e enfrentar os muitos desafios e ameaças cibernéticas são essenciais. Conheça nossa solução e plataforma de gerenciamento de controle e proteção escalavél com monitoramento de incidentes, detecção de ataques.
                                            </p>
                                            <p className="mt-3">
                                                Estabelecer um plano de contingência e melhoria contínua dos procedimentos de segurança como backup, firewall e antivírus.
                                            </p>
                                            <div className="details-video-items">

                                                <div className="content">
                                                    <h4>Benefícios</h4>
                                                    <p> Monitoramento, otimização de recursos e prevensão dos dados da sua empresa. <br /> </p>
                                                    <ul className="list">
                                                        <li>
                                                            <i className="fa-regular fa-circle-check" />
                                                            Plataforma digital de gerenciamento de ataques  
                                                        </li>
                                                        <li>
                                                            <i className="fa-regular fa-circle-check" />
                                                            Análise e identificação de vulnerabilidades
                                                        </li>
                                                        <li>
                                                            <i className="fa-regular fa-circle-check" />
                                                            Firewall, criptografia e métodos de authenticação
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <p>
                                                Os desafios existentes na Cibersegurança são enormes exige entendimento e proteção de ataques e a Thisbe pode ajudar você a enfrentar os mais complexos programas de segurança com confiança.
                                            </p>
                                           
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