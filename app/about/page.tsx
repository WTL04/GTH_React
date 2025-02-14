import NavBar from "../../components/NavBar";
import AboutLeaders from "../../components/AboutLeaders";
import AboutHero from "../../components/AboutHero";
export default function About() {
  return (
    <>
      <div className="fixed top-0 left-0">
        <NavBar />
      </div>
      <div className="mt-20">
        <AboutHero />
      </div>
      <div className="flex justify-center items-center p-12 flex-wrap">
        <AboutLeaders />
      </div>
    </>
  );
}
