import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

export const metadata = {
  title: "Product Listing Page",
  description: "Product listing page built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header/>
          <main className="content">{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
