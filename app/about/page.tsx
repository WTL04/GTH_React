import NavBar from "../../components/NavBar";
import AboutLeaders from "../../components/AboutLeaders";
export default function About() {
  return (
    <>
      <NavBar />
      <div className="flex justify-center items-center p-12 flex-wrap">
        <AboutLeaders />
      </div>
    </>
  );
}
