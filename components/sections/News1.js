
import Link from 'next/link'

export default function News1() {
    return (
        <>
            <section className="news-section section-padding fix" id="blog">
                <div className="container">
                    <div className="section-title text-center">
                        <span className="wow fadeInUp">Artigo de opnião</span>
                        <h2 className="wow fadeInUp" data-wow-delay=".3s">Notícias Thisbe</h2>
                    </div>
                </div>
                <div className="news-wrapper">
                    <div className="row">
                        <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                            <div className="single-news-items">
                                <div className="news-image bg-cover" style={{ backgroundImage: 'url("assets/img/news/1.jpg")' }}>
                                    <div className="post-date">
                                        <span>Maio, 2024</span>
                                    </div>
                                </div>
                                <div className="news-content">
                                    <h3>
                                        <Link href="/news-details">
                                            Liderança Corporativa
                                        </Link>
                                    </h3>
                                    <p>
                                        "O sucesso de uma empresa está em sua credibilidade e confiança".
                                    </p>
                                    <Link href="/news-details" className="theme-btn-2 mt-3">
                                        Leia mais
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                            <div className="single-news-items">
                                <div className="news-image bg-cover" style={{ backgroundImage: 'url("assets/img/news/2.jpg")' }}>
                                    <div className="post-date">
                                        <span>Abril, 2024</span>
                                    </div>
                                </div>
                                <div className="news-content">
                                    <h3>
                                        <Link href="/news-ti">
                                            Oportunidades e desafios da TI.
                                        </Link>
                                    </h3>
                                    <p>
                                        "Explorando as oportunidades e desafios da área de Desenvolvimento de Software".
                                    </p>
                                    <Link href="/news-ti" className="theme-btn-2 mt-3">
                                        Leia mais
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".7s">
                            <div className="single-news-items">
                                <div className="news-image bg-cover" style={{ backgroundImage: 'url("assets/img/news/3.jpg")' }}>
                                    <div className="post-date">
                                        <span>Junho, 2024</span>
                                    </div>
                                </div>
                                <div className="news-content">
                                    <h3>
                                        <Link href="/news-mental">
                                            Cuidados com a Saúde mental
                                        </Link>
                                    </h3>
                                    <p>
                                        Esteja atendo aos sintomas ocasionados pela saúde mental e cuidados importantes.
                                    </p>
                                    <Link href="/news-mental" className="theme-btn-2 mt-3">
                                        Leia mais
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
