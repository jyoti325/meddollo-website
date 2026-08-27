import "./globals.css";

import TopBar from "@/components/layout/TopBar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AppointmentPopup from "@/components/common/AppointmentPopup";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <TopBar />
        <Header />
        <main>
          {children}
        </main>
        <Footer />
        <AppointmentPopup />
      </body>
    </html>
  );
}