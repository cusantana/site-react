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
                                                    <li className="active"><Link href="/service-mkt">Marketing Digital</Link><i className="fa-solid fa-arrow-right-long" /></li>
                                                    <li><Link href="/service-bpo">Oursourcing</Link><i className="fa-solid fa-arrow-right-long" /></li>
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
                                            <img src="/assets/img/service/details-5.png" alt="img" />
                                        </div>
                                        <div className="details-content">
                                            <h3>Marketing Digital</h3>
                                            <p className="mt-3">
                                                Oferecemos a técnica SEO, um serviço de marketing inteligente e eficaz para que você possa extrair resultados positivos como a qualificação e a visibilidade online de páginas. Temos soluções de SEO acessíveis e completas para nossos clientes permitindo-lhes ter uma abordagem única e perceptível para clientes em potencial. 
                                            </p>
                                            <p className="mt-3">
                                                Depois de adotar esse processo em seu negócio, você poderá identificar facilmente a diferença em relação ao aumento de tráfego, maior taxa de conversão, visibilidade e presença comercial online. Nossa equipe de marketing é formada por profissionais de SEO especializados no domínio do marketing digital.
                                            </p>
                                            <div className="details-video-items">
                                                
                                                <div className="content">
                                                    <h4>Benefícios</h4>
                                                    <p> Otimização de mecanismos de pesquisa que ajudam a exibir sua empresa e seus serviços e produtos.<br /> </p>
                                                    <ul className="list">
                                                        <li>
                                                            <i className="fa-regular fa-circle-check" />
                                                            Resultados e esforços que facilitem o entendimento de usuários e mecanismos de buscas para seu Website
                                                        </li>
                                                        <li>
                                                            <i className="fa-regular fa-circle-check" />
                                                            Oferecemos serviço que resulta tráfego e resposta perceptível
                                                        </li>
                                                        <li>
                                                            <i className="fa-regular fa-circle-check" />
                                                            Aplicação de técnicas de SEO para os negócios de nossos clientes
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <p>
                                                Nosso objetivo é permitir que nossos clientes se sintam confortáveis e confiantes com seu empreendimento. Garantimos que você obterá um ROI eficaz do seu investimento.
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