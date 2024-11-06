import "./Resource.css";
import NavBar from "../../Components/NavBar";
import BottomBar from "../../Components/BottomBar";
import ResourceCard from "../../Components/ResourceCard";

function Resource() {
  return (
    <>
      <div className="navBar">
        <NavBar />
      </div>

      <section className="resource-banner">
        <div className="resource-img">
          <img src="/images/img3resize.jpg" alt="banner" />
        </div>
        <div className="resource-title">
          <h1>Resources</h1>
        </div>
      </section>

      <section className="resource-cards">
        <ResourceCard image="/images/dove.png" title="Prayers and Songs" />
        <ResourceCard image="/images/htkhanh.jpg" title="New Parish Adult Registration"/>
        <ResourceCard image="/images/veymlogo.png" title="Thieu Nhi Songs" />
        <ResourceCard image="/images/veymlogo.png" title="Event Permission Slips"/>
      </section>

      <div className="bottombar">
        <BottomBar />
      </div>
    </>
  );
}

export default Resource;
