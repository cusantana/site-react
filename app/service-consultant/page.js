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
                                                    <li className="active"><Link href="/service-consultant">Consultoria</Link><i className="fa-solid fa-arrow-right-long" /></li>
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
                                            <img src="/assets/img/service/details-2.png" alt="img" />
                                        </div>
                                        <div className="details-content">
                                            <h3>Consultoria</h3>
                                            <p className="mt-3">
                                                Apresentação de especialista técnico para ajudá-lo na seleção de candidatos. Temos um banco de dados de candidatos devidamente qualificados e experientes para diversas categorias, cargos e departamentos em níveis junior, pleno e sênior. Garantimos-lhe e assumimos a responsabilidade de lhe fornecer uma alternativa imediata caso um candidato deixe a sua empresa num curto espaço de tempo
                                            </p>
                                            <p className="mt-3">
                                                Temos também um serviço de suporte de aplicações e sistemas ERP. Suporte, administração e migrações.
                                            </p>
                                            <div className="details-video-items">

                                                <div className="content">
                                                    <h4>Benefícios</h4>
                                                    <p> Qualidade e prestação de serviço <br /> </p>
                                                    <ul className="list">
                                                        <li>
                                                            <i className="fa-regular fa-circle-check" />
                                                            Recrutamento e seleção de candidatos
                                                        </li>
                                                        <li>
                                                            <i className="fa-regular fa-circle-check" />
                                                            Consultoria em sistemas ERP
                                                        </li>
                                                        <li>
                                                            <i className="fa-regular fa-circle-check" />
                                                            Gerenciamento de equipes
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <p>
                                                Trabalhos com responsabilidade e com objetivos estabelecidos para que juntos possamos alcançar os resultados da empresa.
                                            </p>
                                            <div className="image-area">
                                                
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