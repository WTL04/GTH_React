import "./Resource";
import NavBar from "../../Components/NavBar";
import BottomBar from "../../Components/BottomBar";

function Resource() {
  return (
    <>
      <div className="navBar">
        <NavBar />
      </div>

      <div className="resource-banner">
        <img src="/images/img3.jpg" alt="banner" />
      </div>
    
      


      <div className="bottombar">
        <BottomBar />
      </div>
    </>
  );
}

export default Resource;
