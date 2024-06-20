import Link from "next/link"

export default function Footer1() {
    return (
        <>

            <footer className="footer-section">
                <div className="footer-widgets-wrapper footer-bg">
                    <div className="shape-1">
                        <img src="/assets/img/footer-shape-1.png" alt="shape-img" />
                    </div>
                    <div className="shape-2">
                        <img src="/assets/img/footer-shape-2.png" alt="shape-img" />
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                                <div className="single-footer-widget">
                                    <div className="widget-head">
                                        <Link href="/">
                                            <img src="/assets/img/logo/logo-black1.png" alt="logo-img" />
                                        </Link>
                                    </div>
                                    <div className="footer-content">
                                        <p>
                                            A Thisbe é uma Software House especializada no desenvolvimento de Software
                                            com sede no Brasil. É muito mais que um provedor de serviços
                                            e soluções tecnologicas.
                                        </p>
                                        <div className="social-icon d-flex align-items-center">
                                            <Link href="https://www.facebook.com/profile.php?id=61560278442936"><i className="fab fa-facebook-f" /></Link>
                                            <Link href="https://twitter.com/@ThisbeTecnolog1"><i className="fab fa-twitter" /></Link>
                                            <Link href="https://www.linkedin.com/company/thisbe"><i className="fa-brands fa-linkedin-in" /></Link>
                                            <Link href="https://www.youtube.com/channel/UCVn8z7VjGFnBVGWu7M7RRSw"><i className="fa-brands fa-youtube" /></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-4 col-md-6 ps-lg-5 wow fadeInUp" data-wow-delay=".5s">
                                <div className="single-footer-widget">
                                    <div className="widget-head">
                                        <h3>Links</h3>
                                    </div>
                                    <ul className="list-area">
                                        <li>
                                            <Link href="/about">
                                                <i className="fa-solid fa-chevron-right" />
                                                Quem Somos
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/service">
                                                <i className="fa-solid fa-chevron-right" />
                                                Serviços
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/news">
                                                <i className="fa-solid fa-chevron-right" />
                                                Blogs
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/career">
                                                <i className="fa-solid fa-chevron-right" />
                                                Carreira
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/contact">
                                                <i className="fa-solid fa-chevron-right" />
                                                Contato
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".7s">
                                <div className="single-footer-widget style-margin">
                                    <div className="widget-head">
                                        <h3>Posts</h3>
                                    </div>
                                    <div className="recent-post-area">
                                        <div className="recent-post-items">
                                            <div className="thumb">
                                                <img src="/assets/img/news/was3.jpg" alt="post-img" />
                                            </div>
                                            <div className="content">
                                                <ul className="post-date">
                                                    <li>
                                                        <i className="fa-solid fa-calendar-days me-2" />
                                                        02 Maio, 2024
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
                                        <div className="recent-post-items mb-0">
                                            <div className="thumb">
                                                <img src="/assets/img/news/ravena2.jpg" alt="post-img" />
                                            </div>
                                            <div className="content">
                                                <ul className="post-date">
                                                    <li>
                                                        <i className="fa-solid fa-calendar-days me-2" />
                                                        20 Abril, 2024
                                                    </li>
                                                </ul>
                                                <h6>
                                                    <Link href="/news-ti">
                                                        Explorando oportunidades <br />
                                                        e desafios da TI
                                                    </Link>
                                                </h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 ps-xl-5 wow fadeInUp" data-wow-delay=".9s">
                                <div className="single-footer-widget">
                                    <div className="widget-head">
                                        <h3>Contato</h3>
                                    </div>
                                    <div className="footer-content">
                                        <ul className="contact-info">
                                            <li>
                                                <i className="fas fa-map-marker-alt" />
                                                Jundiaí - São Paulo, Brasil
                                            </li>
                                            <li>
                                                <i className="fa-solid fa-phone-volume" />
                                                <Link href="/tel:2086660112">+55 (11) 91198-1751</Link>
                                            </li>
                                            <li>
                                                <i className="fa-regular fa-envelope" />
                                                <Link href="/mailto:infotech@gmail.com">comercial@thisbe.com.br</Link>
                                            </li>
                                        </ul>
                                        <Link href="/contact" className="theme-btn hover-white mt-4">
                                            Obter uma cotação
                                            <i className="fa-solid fa-arrow-right-long" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="container">
                        <div className="footer-wrapper d-flex align-items-center justify-content-between">
                            <p className="wow fadeInLeft color-2" data-wow-delay=".3s">
                                © All Copyright {new Date().getFullYear()} Thisbe <Link href="/">Tecnologia</Link>
                            </p>
                            <ul className="footer-menu wow fadeInRight" data-wow-delay=".5s">
                                {/*<li>
                                    <Link href="/contact">
                                        Termos &amp; Condições
                                    </Link>
                                </li>*/} 
                                <li>
                                    <Link href="/policy">
                                        Política de Privacidade
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <Link href="#" id="scrollUp" className="scroll-icon">
                        <i className="far fa-arrow-up" />
                    </Link>
                </div>
            </footer>

        </>
    )
}
