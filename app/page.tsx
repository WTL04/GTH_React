import NavBar from "../components/NavBar";
import Slideshow from "../components/Slideshow";
import EventsCardView from "../components/EventsCardView";
import Footer from "../components/Footer";
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
      <EventsCardView />
      <Footer />
    </>
  );
}
