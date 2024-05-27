
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
                                            <div className="post-featured-thumb bg-cover" style={{ backgroundImage: 'url("assets/img/news/3.jpg")' }} />
                                            <div className="post-content">
                                                <ul className="post-list d-flex align-items-center">
                                                    <li>
                                                        <i className="fa-regular fa-user" />
                                                        Danielly Santana
                                                    </li>
                                                    <li>
                                                        <i className="fa-solid fa-calendar-days" />
                                                        01 Junho, 2024
                                                    </li>
                                                    <li>
                                                        <i className="fa-solid fa-tag" />
                                                        Saúde
                                                    </li>
                                                </ul>
                                                <h3>Cuidados com a Saúde Mental</h3>
                                                <p className="mb-3">
                                                    Em parceria com a Ginecare Saúde da Mulher, recebemos a médica Danielly Santana para falar sobre os cuidados com a saúde mental em geral: tipos, importância dos exames preventivos e muito mais!!
                                                </p>
                                                <p className="mb-3">
                                                    Em desenvolvimento.
                                                </p>
                                                <p>
                                                    ... 
                                                    ...
                                                </p>
                                                <div className="hilight-text mt-4 mb-4">
                                                    <p>...</p>
                                                    <svg width={36} height={36} viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M0 20.3698H7.71428L2.57139 30.5546H10.2857L15.4286 20.3698V5.09247H0V20.3698Z" fill="#3C72FC" />
                                                        <path d="M20.5703 5.09247V20.3698H28.2846L23.1417 30.5546H30.856L35.9989 20.3698V5.09247H20.5703Z" fill="#3C72FC" />
                                                    </svg>
                                                </div>
                                                <p className="mt-4 mb-5">
                                                    ...
                                                    ...
                                                    ...
                                                    ...
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
                                                            <Link href="/news-details">
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
                                                    <div className="recent-content">
                                                        <ul>
                                                            <li>
                                                                <i className="fa-solid fa-calendar-days" />
                                                                Maio, 2024
                                                            </li>
                                                        </ul>
                                                        <h6>
                                                            <Link href="/news-details">
                                                                Cuidados com a <br />
                                                                Sáude Mental
                                                            </Link>
                                                        </h6>
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