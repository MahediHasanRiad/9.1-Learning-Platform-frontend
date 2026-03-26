import MainLayout from "@/layout/Main-Layout";
import TopHero from "../components/home/top-left";
import FindTeacher from "../components/home/find-teacher";
import ShowTeacherInfo from "../components/home/showTeacher";
import TrustedBy from "../components/home/trustedBy";
import FooterTop from "../components/home/footer-top";

function Home() {
  return (
    <MainLayout>
      <section className="">
        <TopHero />
        <FindTeacher />
        <ShowTeacherInfo />
        <TrustedBy />
        <FooterTop />
      </section>
    </MainLayout>
  );
}

export default Home;
