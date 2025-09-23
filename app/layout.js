
import { Inter } from "next/font/google";
import Script from "next/script";
import "bootstrap/dist/css/bootstrap.min.css";
// import "../styles/css/bootstrap.min-4.css";
import "font-awesome/css/font-awesome.min.css";

import "../styles/color/variable.css";
import "../styles/css/style.css";
import "../styles/css/globals.css";
import "../styles/css/responsive.css";
import "../styles/css/custom-fixes.css";
import "../styles/css/remove-header-arrows.css";
import "../styles/css/remove-arrows-final.css";
import "../styles/css/about-center.css";

import WebHeader from "@/layouts/header";
import WebFooter from "@/layouts/footer";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fab, fas);
 
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title:
    "Summer Internship Training In Udaipur Python AWS, React, PHP, MernStack, Data Analysis - Keen Infotech Udaipur",
  description: "Summer and Internship Training in Udaipur Python AWS, PHP, Mern, Java, React, Angular - Keen Infotech Udaipur. Python React Angular AWS Training for B-tech MCA Students, python machine learning training in udaipur",
  keywords: "Python React Angular AWS Training in udaipur B-tech MCA Students, Summer Training Internship Udaipur",
  authors: [{ name: "Keen Infotech Udaipur raj" }],
  icons: {
    icon: '/favicon.ico',
    shortcut: '/assets/images/keen-logo1.png',
  },
  verification: {
    google: 't26qNhoe5HfEl3nUC3r0yLU0WG56oDbvmWiVK3n_sxE',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <WebHeader />
        <div style={{ marginTop: "1.5rem" }}>{children}</div>
        <WebFooter />
       <Script
         strategy="afterInteractive"
         src="https://www.googletagmanager.com/gtag/js?id=G-KXCC779SKM"
       />
       <Script
         id="google-analytics"
         strategy="afterInteractive"
         dangerouslySetInnerHTML={{
           __html: `
             window.dataLayer = window.dataLayer || [];
             function gtag(){dataLayer.push(arguments);}
             gtag('js', new Date());
             gtag('config', 'G-KXCC779SKM');
           `,
         }}
       />




      </body>
    </html>
  );
}
