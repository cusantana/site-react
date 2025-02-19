import Link from "next/link"

export default function Menu() {

    return (
        <>

            <ul>
                <li className="has-dropdown active menu-thumb">
                    <Link href="/">
                        HOME
                    </Link>
                </li>
                <li>
                    <Link href="/about">
                        SOBRE
                    </Link>
                </li>
                <li>
                    <Link href="/service">
                        SERVIÇOS
                    </Link>
                </li>
                <li> 
                    <Link href="/project-industries">
                        SOLUÇÕES
                    </Link>
                </li>
                <li>
                    <Link href="/news">
                        BLOG
                    </Link>
                </li>
                <li>
                    <Link href="/contact">CONTATO</Link>
                </li>
            </ul>
        </>
    )
}
