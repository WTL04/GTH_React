import NavBar from "../../Components/NavBar";
import SlideShow from "../../Components/SlideShow";
import { Fragment } from "react/jsx-runtime";

function Home() {
  const images = [
    "assets/images/img2.jpg",
    "assets/images/img3.jpg",
    "assets/images/img4.jpg",
  ];

  return (
    <Fragment>
      <div className="navBar">
        <NavBar />
      </div>

      <div className="slideShow">
        <SlideShow images={images} />
      </div>
    </Fragment>
  );
}

export default Home;
