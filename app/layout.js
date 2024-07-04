// import 'swiper/css';
// import "swiper/css/navigation";
// import "swiper/css/pagination";
import "/public/assets/css/bootstrap.min.css"        
import "/public/assets/css/all.min.css"
import "/public/assets/css/animate.css"
import "/public/assets/css/magnific-popup.css"
import "/public/assets/css/meanmenu.css"
import "/public/assets/css/swiper-bundle.min.css"
import "/public/assets/css/nice-select.css"
import "/public/assets/css/main.css"
import Script from 'next/script'; 
import { GoogleAnalytics } from '@next/third-parties/google'
import { Kumbh_Sans } from 'next/font/google'

const kumbh = Kumbh_Sans({
    weight: ['300', '400', '500', '600', '700','800','900'],
    subsets: ['latin'],
    display: 'swap',
})

export const metadata = {
  title: 'Thisbe Brasil - Softwares & Soluções Inteligentes',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
     

      </head>
      <body className={`${kumbh.className}`}>{children}</body>
      <GoogleAnalytics gaId="G-4512GSMJ5F" />
    </html>
  )
}
