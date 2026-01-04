export const metadata = {
  title: "Product Listing Page",
  description: "Product listing page built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="page">
          <main className="content">{children}</main>
        </div>
      </body>
    </html>
  );
}
