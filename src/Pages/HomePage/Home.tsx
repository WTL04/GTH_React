import NavBar from "../../Components/NavBar";
import SlideShow from "../../Components/SlideShow";
import Events from "../../Components/Events";
import EventCard from "../../Components/EventCard";
import BottomBar from "../../Components/BottomBar";
import { Fragment } from "react/jsx-runtime";

import "./Home.css"

function Home() {
  const images = [
    "/images/img0.jpg",
    "/images/img1.jpg",
    "/images/img2.jpg",
    "/images/img3.jpg",
    "/images/img4.jpg",
  ];

  return (
    <Fragment>
      <div className="navBar">
        <NavBar />
      </div>

      <div className="slideShow">
        <SlideShow images={images} />
      </div>

      <div className="events">
        <Events />
        <EventCard
          date="AUG 31"
          title="Registration"
          location="St Bonaventure Church"
          mapLink="https://www.google.com/maps/dir//16400+Springdale+St,+Huntington+Beach,+CA+92649/@33.7269112,-118.0642868,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x80dd25dbd71443a1:0xf4a80be58dd8d5c8!2m2!1d-118.0235993!2d33.723512?entry=ttu"
          isDetailed={true}
          description="Come in person and meet us at the green benches to sign your children up, or yourself with our chapter! Price per kid will be $60."
        />

        <EventCard
          date="SEP 14"
          title="First Day of Sinh Hoat"
          location="St Bonaventure Church"
          mapLink="https://www.google.com/maps/dir//16400+Springdale+St,+Huntington+Beach,+CA+92649/@33.7269112,-118.0642868,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x80dd25dbd71443a1:0xf4a80be58dd8d5c8!2m2!1d-118.0235993!2d33.723512?entry=ttu"
          isDetailed={false}
          description="N/A"
        />
      </div>

      <div className="bottombar">
        <BottomBar />
      </div>
    </Fragment>
  );
}

export default Home;
