
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function NewsDetails() {

    return (
        <>

            <Layout headerStyle={1} footerStyle={2} breadcrumbTitle="Blog Detalhes">
                <section className="news-standard fix section-padding">
                    <div className="container">
                        <div className="news-details-area">
                            <div className="row g-5">
                                <div className="col-12 col-lg-8">
                                    <div className="blog-post-details">
                                        <div className="single-blog-post">
                                            <div className="post-featured-thumb bg-cover" style={{ backgroundImage: 'url("assets/img/news/iot.png")' }} />
                                            <div className="post-content">
                                                <ul className="post-list d-flex align-items-center">
                                                    <li>
                                                        <i className="fa-regular fa-user" />
                                                        Cristian Uilian
                                                    </li>
                                                    <li>
                                                        <i className="fa-solid fa-calendar-days" />
                                                        10 Junho, 2024
                                                    </li>
                                                    <li>
                                                        <i className="fa-solid fa-tag" />
                                                        Tecnologia
                                                    </li>
                                                </ul>
                                                <h3>Tecnologia & Inovação</h3>
                                                <p className="mb-3">
                                                    As tecnologias digitais têm sido essenciais para ajudar a resolver alguns dos desafios mais complexos da humanidade em áreas que vão desde os cuidados de saúde às alterações climáticas, da logística à produção e muito mais. Mas são os especialistas e líderes que têm sido o motor por trás das inovações e soluções digitais, e dos conhecimentos e estratégias para aplicá-las de forma eficaz.
                                                </p>
                                                <p className="mb-3">
                                                    Os profissionais da Thisbe demonstraram liderança e sustentada e profundo conhecimento técnico em uma variedade de tecnologias.
                                                </p>
                                                <p>
                                                    Nossa equipe define alta estratégia de tecnologia e serviços a serem desenvolvidos e entregues pela Thisbe. 
                                                    Contribuições significativas para acelerar a inovação, influenciar o design crítico e avançar soluções tecnológicas eficaz.
                                                </p>
                                                <div className="hilight-text mt-4 mb-4">
                                                    <p>Dedicação da empresa em investir nas competências e capacidades que atendem às necessidades mais urgentes de transformação empresarial dos clientes.</p>
                                                    <svg width={36} height={36} viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M0 20.3698H7.71428L2.57139 30.5546H10.2857L15.4286 20.3698V5.09247H0V20.3698Z" fill="#3C72FC" />
                                                        <path d="M20.5703 5.09247V20.3698H28.2846L23.1417 30.5546H30.856L35.9989 20.3698V5.09247H20.5703Z" fill="#3C72FC" />
                                                    </svg>
                                                </div>
                                                <p className="mt-4 mb-5">
                                                    Com a transformação, estamos inovando e impulsionando nossos negócios para o crescimento contínuo da empresa.
                                                
                                                </p>
                                                
                                            </div>
                                        </div>
                                        
                                        
                                    </div>
                                </div>
                                <div className="col-12 col-lg-4">
                                    <div className="main-sidebar">
                                        <div className="single-sidebar-widget">
                                            <div className="wid-title">
                                                <h3>Pesquisar</h3>
                                            </div>
                                            <div className="search-widget">
                                                <form action="#">
                                                    <input type="text" placeholder="Pesquise aqui" />
                                                    <button type="submit"><i className="fa-solid fa-magnifying-glass" /></button>
                                                </form>
                                            </div>
                                        </div>
                                        
                                        <div className="single-sidebar-widget">
                                            <div className="wid-title">
                                                <h3>Últimas notícias</h3>
                                            </div>
                                            <div className="recent-post-area">
                                                <div className="recent-items">
                                                    <div className="recent-thumb">
                                                        <img src="/assets/img/news/was3.jpg" alt="img" />
                                                    </div>
                                                    <div className="recent-content">
                                                        <ul>
                                                            <li>
                                                                <i className="fa-solid fa-calendar-days" />
                                                                Maio, 2024
                                                            </li>
                                                        </ul>
                                                        <h6>
                                                            <Link href="/news-details">
                                                                Liderança <br />
                                                                Corporativa
                                                            </Link>
                                                        </h6>
                                                    </div>
                                                </div>
                                                <div className="recent-items">
                                                    <div className="recent-thumb">
                                                        <img src="/assets/img/news/ravena2.jpg" alt="img" />
                                                    </div>
                                                    <div className="recent-content">
                                                        <ul>
                                                            <li>
                                                                <i className="fa-solid fa-calendar-days" />
                                                                Abril, 2024
                                                            </li>
                                                        </ul>
                                                        <h6>
                                                            <Link href="/news-ti">
                                                                Oportunidades e <br />
                                                                Desafios da TI
                                                            </Link>
                                                        </h6>
                                                    </div>
                                                </div>
                                                <div className="recent-items">
                                                    <div className="recent-thumb">
                                                        <img src="/assets/img/news/pp5.jpg" alt="img" />
                                                    </div>

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