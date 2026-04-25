import Link from "next/link";
import "./globals.css";
export default function RootLayout({ children }) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body>

        {/* MENU */}
        <div style={{
          padding: "15px 30px",
          borderBottom: "1px solid #ddd",
          display: "flex",
          gap: "20px"
        }}>
          <Link href="/">🏠 Home</Link>
          <Link href="/chapters">📚 Chapters</Link>
        </div>

        {children}

      </body>
    </html>
  );
}