
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function News() {

    return (
        <>

            <Layout headerStyle={1} footerStyle={2} breadcrumbTitle="Últimas Notícias">
                <section className="news-section-4 fix section-padding">
                    <div className="container">
                        <div className="row g-4">
                            <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                                <div className="news-card-items style-2 mt-0 pb-0">
                                    <div className="news-image">
                                        <img src="/assets/img/news/bi.jpg" alt="news-img" />
                                        <div className="post-date">
                                            <h3>
                                                02 <br />
                                                <span>Maio</span>
                                            </h3>
                                        </div>
                                    </div>
                                    <div className="news-content">
                                        <ul>
                                            <li>
                                                <i className="fa-regular fa-user" />
                                                Washington Oliveira
                                            </li>
                                            <li>
                                                <i className="fa-solid fa-tag" />
                                                Negócio
                                            </li>
                                        </ul>
                                        <h3>
                                            <Link href="/news-details">Liderança Corporativa</Link>
                                        </h3>
                                        <Link href="/news-details" className="theme-btn-2 mt-3">
                                            Leia mais
                                            <i className="fa-solid fa-arrow-right-long" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                                <div className="news-card-items style-2 mt-0 pb-0">
                                    <div className="news-image">
                                        <img src="/assets/img/news/8.jpg" alt="news-img" />
                                        <div className="post-date">
                                            <h3>
                                                20 <br />
                                                <span>Abril</span>
                                            </h3>
                                        </div>
                                    </div>
                                    <div className="news-content">
                                        <ul>
                                            <li>
                                                <i className="fa-regular fa-user" />
                                                Ravena Carneiro
                                            </li>
                                            <li>
                                                <i className="fa-solid fa-tag" />
                                                UI/UX Design
                                            </li>
                                        </ul>
                                        <h3>
                                            <Link href="/news-ti">Explorando oportunidades e desafios da TI</Link>
                                        </h3>
                                        <Link href="/news-ti" className="theme-btn-2 mt-3">
                                            Leia mais
                                            <i className="fa-solid fa-arrow-right-long" />
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                                <div className="news-card-items style-2 mt-0 pb-0">
                                    <div className="news-image">
                                        <img src="/assets/img/news/social.jpg" alt="news-img" />
                                        <div className="post-date">
                                            <h3>
                                                10 <br />
                                                <span>Junho</span>
                                            </h3>
                                        </div>
                                    </div>
                                    <div className="news-content">
                                        <ul>
                                            <li>
                                                <i className="fa-regular fa-user" />
                                                Cristian Uilian
                                            </li>
                                            <li>
                                                <i className="fa-solid fa-tag" />
                                                Tecnologia
                                            </li>
                                        </ul>
                                        <h3>
                                            <Link href="/news-tech">Tecnologia & Inovação</Link>
                                        </h3>
                                        <Link href="/news-tech" className="theme-btn-2 mt-3">
                                            Leia mais
                                            <i className="fa-solid fa-arrow-right-long" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".7s">
                                <div className="news-card-items style-2 mt-0 pb-0">
                                    
                                </div>
                            </div>
                        </div>
                        <div className="page-nav-wrap pt-5 text-center wow fadeInUp" data-wow-delay=".3s">
                            <ul>
                                <li><Link className="page-numbers" href="#">01</Link></li>
                                <li><Link className="page-numbers" href="#">02</Link></li>
                                <li><Link className="page-numbers" href="#">03</Link></li>
                                <li><Link className="page-numbers" href="#"><i className="fa-solid fa-arrow-right-long" /></Link></li>
                            </ul>
                        </div>
                    </div>
                </section>

            </Layout>
        </>
    )
}