import Footer from "@/components/modules/Footer";
import Header from "@/components/modules/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <body>
    <Header/>
    {children}
    <Footer/>        
  </body>
  );
}
