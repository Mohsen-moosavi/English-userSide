import Footer from "@/components/modules/Footer";
import Header from "@/components/modules/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" dir="rtl">
      <body>
        <Header/>
        {children}
        <Footer/>        
      </body>
    </html>
  );
}
