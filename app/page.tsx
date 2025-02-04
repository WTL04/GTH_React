import NavBar from "../components/NavBar";
import Slideshow from "../components/Slideshow";
import Events from "../components/Events";

export default function Home() {
  const images = [
    "/images/img0.jpg",
    "/images/img1.jpg",
    "/images/img2.jpg",
    "/images/img3.jpg",
    "/images/img4.jpg",
  ];

  return (
    <>
      <NavBar />
      <Slideshow images={images} />
      <Events />
    </>
  );
}
