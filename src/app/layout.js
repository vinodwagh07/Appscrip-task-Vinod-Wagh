import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";

export const metadata = {
  title: "Product Listing Page | Appscrip Frontend Task",
  description:
    "Browse a responsive product listing page built with Next.js, featuring server-side rendering, filters, sorting, and SEO best practices.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <Breadcrumbs/>
        <main className="content">{children}</main>

        {/* Schema.org JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Product Listing Page",
              "description":
                "A server-side rendered product listing page built with Next.js for the Appscrip frontend task.",
            }),
          }}
        />
        <Footer />
      </body>
    </html>
  );
}
