import "./globals.css";
import { main } from "../utils/fonts";
import Navbar from "@/components/nav/navbar";
import Footer from "@/components/footer/footer";

export const metadata = {
  title: "PdD.com",
  description: "Paolo de Domini personal website",
  openGraph: {
    title: "PdD.com",
    description: "Paolo de Domini personal website",
  },
  icons: {
    icon: {
      url: "/mainlogo.png",
      type: "image/png",
    },
    shortcut: { url: "/mainlogo.png", type: "image/png" },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={main.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
