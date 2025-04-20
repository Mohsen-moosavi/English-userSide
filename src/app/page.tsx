import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/modules/Header";
import LastCourses from "@/components/template/indexPage/LastCourses";
import Landing from "@/components/template/indexPage/Landing";
import LastBooks from "@/components/template/indexPage/LastBooks";
import IntroductionOurWebsite from "@/components/template/indexPage/IntroductionOurWebsite";
import LastArticles from "@/components/template/indexPage/LastArticles";
import Footer from "@/components/modules/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Landing />
        <LastBooks/>
        <LastCourses />
        <IntroductionOurWebsite/>
        <LastArticles/>
      </main>
      <Footer/>
    </>
  );
}
