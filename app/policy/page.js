
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function NewsDetails() {

    return (
        <>

            <Layout headerStyle={1} footerStyle={2} breadcrumbTitle="Política de Privacidade">
                <section className="news-standard fix section-padding">
                    <div className="container">
                        <div className="news-details-area">
                            <div className="row g-5">
                                <div className="col-12 col-lg-8">
                                    <div className="blog-post-details">
                                        <div className="single-blog-post">
                                            
                                            <div className="post-content">
    
                                                <h4>Conheça nossa Política de Privacidade</h4>
                                                <p className="mb-3">
                                                    A THISBE se preocupa com seus Dados. Conheça os termos da nossa Política de Privacidade. Esta página foi desenvolvido com o objetivo demonstrar quais dados são coletados e como serão utilizados quando você acessar nosso site.  Em caso de não concordância do usuário com os termos desta política de privacidade a indicação é descontinuar sua navegação.
                                                </p>
                                                <div className="details-content pt-5">
                                                <h4>Sobre a LGPD</h4>
                                                <p>
                                                A LGPD (Lei Geral de Proteção de Dados) é uma Lei Federal, de nº 13.709/2018, que estabelece, em suma, regras sobre como os dados devem ser coletados, tratados, armazenados e protegidos no território nacional.
                                                </p>
                                                </div>
                                                <div className="details-content pt-5"></div>
                                                <h4>Sobre os dados que poderão ser coletados</h4>
                                                <p>
                                                Ao acessar e interagir com os recursos disponíveis em nosso sítio eletrônico você deve estar ciente que dados pessoais podem, eventualmente, ser coletados; por exemplo, ao preencher um formulário de contato.
                                                As informações coletadas poderão incluir seu nome, e-mail, número de telefone, cidade residente e o seu IP (Internet Protocol).
                                                Os dados serão sempre armazenados pelo menor tempo necessário, considerando exigências legais e regulatórias. 
                                                Temos total responsabilidade em proteger os dados pessoais de todos, respeitando sua privacidade. Por isso operamos em total concordância com a LGPD.
                                                </p>
                                            
                                                <div className="details-content pt-5">
                                            <h4>Como serão coletadas essas informações</h4>
                                            <p>
                                            Informações poderão ser coletadas no momento em que são submetidas utilizando o formulário de contato e botão para iniciar conversa por redes sociais (WhatsApp ou outros).
                                            </p>
                                        </div>
                                        <div className="details-content pt-5">
                                            <h4>Uso de cookies</h4>
                                            <p>
                                            Poderemos fazer uso de Cookies para melhorar a experiência na utilização do site, por exemplo, para facilitar o preenchimento de formulários.
                                            </p>
                                        </div>
                                
                                        <div className="details-content pt-5">
                                            <h4>Para que usamos essas informações</h4>
                                            <p>
                                            Todos os dados coletados são exclusivamente direcionados para fornecer a melhor experiência para nossos clientes.
                                            As informações podem ser utilizadas para:
                                            - Facilitar o preenchimento de formulários
                                            - Ajudar na oferta de nossa solução para clientes interessados
                                            - Fornecer um meio de contato com o cliente interessado em nossos serviços
                                            Os dados pessoais coletados não serão, em hipótese alguma, comercializados, cedidos ou compartilhados com terceiros, sejam eles pessoas físicas ou jurídicas.
                                            </p>
                                        </div>
                                        <div className="details-content pt-5">
                                            <h4>Dúvidas</h4>
                                            <p>
                                                Para qualquer dúvida que surgir estamos a disposição.
                                            </p>
                                        </div>    
                                            </div>
                                        </div>
                                        
                                        
                                    </div>
                                </div>
                                <div className="col-12 col-lg-4">
                                    <div className="main-sidebar">
                                       
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