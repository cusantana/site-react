
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
                                            <div className="post-featured-thumb bg-cover" style={{ backgroundImage: 'url("assets/img/news/post-4.jpg")' }} />
                                            <div className="post-content">
                                                <ul className="post-list d-flex align-items-center">
                                                    <li>
                                                        <i className="fa-regular fa-user" />
                                                        Washington Oliveira
                                                    </li>
                                                    <li>
                                                        <i className="fa-solid fa-calendar-days" />
                                                        02 Maio, 2024
                                                    </li>
                                                    <li>
                                                        <i className="fa-solid fa-tag" />
                                                        Negócio
                                                    </li>
                                                </ul>
                                                <h3>Liderança Corporativa</h3>
                                                <p className="mb-3">
                                                    A Thisbe entrevistou Washington Oliveira, fundador e sócio da Brastin Indústria e Comércio de Latex sobre a ascensão do mercado de trabalho, concorrência e os desafios para líderes e gestores de todo o Brasil. Confira os detalhes e dicas do executivo.
                                                </p>
                                                <p className="mb-3">
                                                    A capacidade de liderar tem uma abrangência ampla indo de encontro com a personalidade e experiência de cada um. Com o tempo você se desenvolve e coloca em prática no seu dia-a-dia e a liderança vai fluindo naturalmente até você encontrar seu próprio caminho. A prática da liderança corporativa se inicia entendendo o seguimento em que você atua ou deseja se desenvolver. As regras do mercado são rígidas por preços além da preocupação constante em negociar com parceiros e fornecedores, quando se trabalha com produtos de qualidade através da comunicação e confiança isso transmite credibilidade para seus clientes.
                                                </p>
                                                <p>
                                                    O aprendizado contínuo também faz parte das bases da liderança, com o tempo novos concorrentes vão surgindo o que precisa despertar no líder a busca em entender e conhecer ainda mais seu seguimento de atuação. Quanto mais você conhecer seu produto ou serviço menor os riscos a serem superados. 
                                                    Estabeleça objetivos claros e entenda suas limitações, conheça seus pontos fortes e fracos, virtudes e lições aprendida. Coloque em prática seu aprendizado de vida e tenha uma visão holística.
                                                </p>
                                                <div className="hilight-text mt-4 mb-4">
                                                    <p>O sucesso de uma empresa está em sua credibilidade e confiança em 
                                                        precisa apresentar não somente um planejamento mas também nas formas de
                                                        executá-los.</p>
                                                    <svg width={36} height={36} viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M0 20.3698H7.71428L2.57139 30.5546H10.2857L15.4286 20.3698V5.09247H0V20.3698Z" fill="#3C72FC" />
                                                        <path d="M20.5703 5.09247V20.3698H28.2846L23.1417 30.5546H30.856L35.9989 20.3698V5.09247H20.5703Z" fill="#3C72FC" />
                                                    </svg>
                                                </div>
                                                <p className="mt-4 mb-5">
                                                    A liderança eficaz requer escuta ativa e visão compartilhada para manter a sinergia. O bom líder tem o compromisso com o desenvolvimento da equipe mantendo-a motivada. A comunicação eficaz e transparência das informações e dados são essenciais para manter as equipes conectadas e informadas trazendo maturidade empreendedora.
                                                    O sucesso de uma empresa está em sua credibilidade e confiança em você precisa apresentar não somente um planejamento mas também nas formas de executá-los.
                                                    Em sua maioria as lideranças percebem os erros do setor e das empresas em geral, mas não reconhecem o que é necessário para melhorar seu próprio desempenho.
                                                    Em resumo, liderar exige muito trabalho, dedicação e estar aberto para entender as mudanças do negócio.
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
                                                                Junho, 2024
                                                            </li>
                                                        </ul>
                                                        <h6>
                                                            <Link href="/news-mental">
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