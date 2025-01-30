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
                                                    <li><Link href="/service-consultant">Cibersegurança</Link><i className="fa-solid fa-arrow-right-long" /></li>
                                                    <li><Link href="/service-ia">Inteligência Artificial</Link><i className="fa-solid fa-arrow-right-long" /></li>
                                                    <li className="active"><Link href="/service-code">Integração de Software</Link><i className="fa-solid fa-arrow-right-long" /></li>
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
                                            <img src="/assets/img/service/details-6.jpg" alt="img" />
                                        </div>
                                        <div className="details-content">
                                            <h3>Desenvolvimento de Software</h3>
                                            <p className="mt-3">
                                                Criamos soluções nativa e low-code através de tecnologias escaláveis, flexíveis e testadas. Entregamos softwares personalizados e robusto criado sob medida para agilizar seus processos e aumentar a produtividade de sua equipe.
                                            </p>
                                            <p className="mt-3">
                                                A Thisbe trabalha em todo o ciclo de desenvolvimento - planejamento, arquitetura, criação e atualização. Com uma interface amigável ao usuário, navegação, layout, cores, fontes e imagens. Com uma equipe de profissionais experientes conseguimos um equilíbrio perfeito entre atitude e habilidades necessária para desenvolver uma solução perfeita.
                                            </p>
                                            <div className="details-video-items">
                                           
                                                <div className="content">
                                                    <h4>Benefícios</h4>
                                                    <p> Aplicações integradas, seguranças e com qualidade assegurada através de testes. <br /> </p>
                                                    <ul className="list">
                                                        <li>
                                                            <i className="fa-regular fa-circle-check" />
                                                            Criação de aplicativos e aplicações Web customizadas
                                                        </li>
                                                        <li>
                                                            <i className="fa-regular fa-circle-check" />
                                                            Soluções low-code e no-code flexíveis
                                                        </li>
                                                        <li>
                                                            <i className="fa-regular fa-circle-check" />
                                                            Websites dinamicos, elegantes e funcional
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <p>
                                            Simplificamos a integração e a operação, com um processo de implementação aprimorado, treinamento e suporte abrangente.
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