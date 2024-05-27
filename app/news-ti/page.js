
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
                                            <div className="post-featured-thumb bg-cover" style={{ backgroundImage: 'url("assets/img/news/post-3.jpg")' }} />
                                            <div className="post-content">
                                                <ul className="post-list d-flex align-items-center">
                                                    <li>
                                                        <i className="fa-regular fa-user" />
                                                        Ravena Oliveira
                                                    </li>
                                                    <li>
                                                        <i className="fa-solid fa-calendar-days" />
                                                        20 Abril, 2024
                                                    </li>
                                                    <li>
                                                        <i className="fa-solid fa-tag" />
                                                        Software
                                                    </li>
                                                </ul>
                                                <h3>Explorando Oportunidades e Desafios da TI</h3>
                                                <p className="mb-3">
                                                    Ravena Oliveira, é estudante universitária e atua como estagiária na Thisbe deste 2023, escreveu esse artigo sobre as oportunidades e desafios da área de desenvolvimento de software. Confira os detalhes e dicas da estudante.
                                                </p>
                                                <p className="mb-3">
                                                    Ao ingressar no mercado de trabalho por meio do estágio, o estudante de tecnologia é sujeito a uma variedade de linguagens, frameworks e metodologias práticas de desenvolvimento. Esse ambiente dinâmico oferece inúmeras oportunidade de aprendizado e crescimento profissional, apresentando desafios diários em que exigem habilidade adaptativas e busca por conhecimento constante.
                                                </p>
                                                <p>
                                                    Durante sua jornada de aprendizado prático e teórico no estágio, o estudante de tecnologia tem a oportunidade de explorar uma ampla variedade de linguagens de programação. Esse contato com diferentes linguagens permite que o estagiário compreenda as distintas abordagens de desenvolvimento, assim como diferentes sintaxes, expandindo significativamente seu conjunto de habilidades técnicas diante de uma variedade de cenários da vida real.
                                                    Com a diversidade de linguagens, surgem também os frameworks e bibliotecas que visam simplificar o processo de desenvolvimento de softwares.
                                                    O estagiário nesta área têm a oportunidade de se envolver em uma variedade de projetos empolgantes e desafiadores utilizando tecnologias avançadas como sensores e dispositivos automatizados. Esses projetos oferecem aos estagiários a oportunidade de aplicar seus conhecimentos teóricos em situações do mundo real, expandindo suas habilidades técnicas e adquirindo experiência prática que os prepara para uma carreira de sucesso na área de tecnologia.
                                                </p>
                                                <div className="hilight-text mt-4 mb-4">
                                                    <p>O estágio na área de desenvolvimento de software não apenas oferece uma oportunidade única para aplicar teoria na prática, mas também prepara os estudantes para os desafios e oportunidades do mundo profissional de tecnologia.</p>
                                                    <svg width={36} height={36} viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M0 20.3698H7.71428L2.57139 30.5546H10.2857L15.4286 20.3698V5.09247H0V20.3698Z" fill="#3C72FC" />
                                                        <path d="M20.5703 5.09247V20.3698H28.2846L23.1417 30.5546H30.856L35.9989 20.3698V5.09247H20.5703Z" fill="#3C72FC" />
                                                    </svg>
                                                </div>
                                                <p className="mt-4 mb-5">
                                                    No ambiente de desenvolvimento de software, o estagiário enfrenta desafios diários que demandam habilidades adaptativas e capacidade de resolução de problemas.
                                                    Esse ambiente dinâmico e desafiador requer que o estagiário seja capaz de se comunicar efetivamente com seus colegas de equipe e clientes. Isso envolve expressar ideias de maneira clara e concisa, além de receber e oferecer feedback construtivo, colaborando em projetos que variam de simples a complexos.
                                                    A área de desenvolvimento de software é uma experiência transformadora que prepara os estudantes para os desafios e oportunidades do mundo profissional. É uma jornada de aprendizado, crescimento e descoberta, que marca o início de uma trajetória promissora no emocionante universo da tecnologia.
                                                    
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