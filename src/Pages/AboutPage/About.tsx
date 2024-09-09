import "./About.css";
import NavBar from "../../Components/NavBar";
import BottomBar from "../../Components/BottomBar";

import { Fragment } from "react/jsx-runtime";
import LeaderCard from "../../Components/LeaderCard";

function About() {
  return (
    <Fragment>
      <div className="navBar">
        <NavBar />
      </div>

      <div className="hero-banner">
        <img src="/images/img0resize.png" alt="banner" />
      </div>

      <section className="about-paragraphs">
        <div className="who-we-are">
          <h1>Who We Are</h1>
          <p>
            oshfoshfoehfwoeihfwohfwofhwofhwofhewofhowfhwohfowehfowhfowfhwofhwohfowhfwohfowhfwohfwofhwofhwohfwohfeiwofhewoihfiowfoiewhfwoihefowhfeowhfowhfowhefowiehfowihfowiefhwoihfowiehfwohfwoeihfooshfoshfoehfwoeihfwohfwofhwofhwofhewofhowfhwohfowehfowhfowfhwofhwohfowhfwohfowhfwohfwofhwofhwohfwohfeiwofhewoihfiowfoiewhfwoihefowhfeowhfowhfowhefowiehfowihfowiefhwoihfowiehfwohfwoeihfooshfoshfoehfwoeihfwohfwofhwofhwofhewofhowfhwohfowehfowhfowfhwofhwohfowhfwohfowhfwohfwofhwofhwohfwohfeiwofhewoihfiowfoiewhfwoihefowhfeowhfowhfowhefowiehfowihfowiefhwoihfowiehfwohfwoeihfooshfoshfoehfwoeihfwohfwofhwofhwofhewofhowfhwohfowehfowhfowfhwofhwohfowhfwohfowhfwohfwofhwofhwohfwohfeiwofhewoihfiowfoiewhfwoihefowhfeowhfowhfowhefowiehfowihfowiefhwoihfowiehfwohfwoeihfooshfoshfoehfwoeihfwohfwofhwofhwofhewofhowfhwohfowehfowhfowfhwofhwohfowhfwohfowhfwohfwofhwofhwohfwohfeiwofhewoihfiowfoiewhfwoihefowhfeowhfowhfowhefowiehfowihfowiefhwoihfowiehfwohfwoeih
          </p>
        </div>

        <div className="our-purpose">
          <h1>Our Purpose</h1>
          <p>
            oshfoshfoehfwoeihfwohfwofhwofhwofhewofhowfhwohfowehfowhfowfhwofhwohfowhfwohfowhfwohfwofhwofhwohfwohfeiwofhewoihfiowfoiewhfwoihefowhfeowhfowhfowhefowiehfowihfowiefhwoihfowiehfwohfwoeihfooshfoshfoehfwoeihfwohfwofhwofhwofhewofhowfhwohfowehfowhfowfhwofhwohfowhfwohfowhfwohfwofhwofhwohfwohfeiwofhewoihfiowfoiewhfwoihefowhfeowhfowhfowhefowiehfowihfowiefhwoihfowiehfwohfwoeihfooshfoshfoehfwoeihfwohfwofhwofhwofhewofhowfhwohfowehfowhfowfhwofhwohfowhfwohfowhfwohfwofhwofhwohfwohfeiwofhewoihfiowfoiewhfwoihefowhfeowhfowhfowhefowiehfowihfowiefhwoihfowiehfwohfwoeihfooshfoshfoehfwoeihfwohfwofhwofhwofhewofhowfhwohfowehfowhfowfhwofhwohfowhfwohfowhfwohfwofhwofhwohfwohfeiwofhewoihfiowfoiewhfwoihefowhfeowhfowhfowhefowiehfowihfowiefhwoihfowiehfwohfwoeihfooshfoshfoehfwoeihfwohfwofhwofhwofhewofhowfhwohfowehfowhfowfhwofhwohfowhfwohfowhfwohfwofhwofhwohfwohfeiwofhewoihfiowfoiewhfwoihefowhfeowhfowhfowhefowiehfowihfowiefhwoihfowiehfwohfwoeih
          </p>
        </div>

        <div className="our-mission">
          <h1>Our Mission</h1>
          <p>
            oshfoshfoehfwoeihfwohfwofhwofhwofhewofhowfhwohfowehfowhfowfhwofhwohfowhfwohfowhfwohfwofhwofhwohfwohfeiwofhewoihfiowfoiewhfwoihefowhfeowhfowhfowhefowiehfowihfowiefhwoihfowiehfwohfwoeihfooshfoshfoehfwoeihfwohfwofhwofhwofhewofhowfhwohfowehfowhfowfhwofhwohfowhfwohfowhfwohfwofhwofhwohfwohfeiwofhewoihfiowfoiewhfwoihefowhfeowhfowhfowhefowiehfowihfowiefhwoihfowiehfwohfwoeihfooshfoshfoehfwoeihfwohfwofhwofhwofhewofhowfhwohfowehfowhfowfhwofhwohfowhfwohfowhfwohfwofhwofhwohfwohfeiwofhewoihfiowfoiewhfwoihefowhfeowhfowhfowhefowiehfowihfowiefhwoihfowiehfwohfwoeihfooshfoshfoehfwoeihfwohfwofhwofhwofhewofhowfhwohfowehfowhfowfhwofhwohfowhfwohfowhfwohfwofhwofhwohfwohfeiwofhewoihfiowfoiewhfwoihefowhfeowhfowhfowhefowiehfowihfowiefhwoihfowiehfwohfwoeihfooshfoshfoehfwoeihfwohfwofhwofhwofhewofhowfhwohfowehfowhfowfhwofhwohfowhfwohfowhfwohfwofhwofhwohfwohfeiwofhewoihfiowfoiewhfwoihefowhfeowhfowhfowhefowiehfowihfowiefhwoihfowiehfwohfwoeih
          </p>
        </div>
      </section>

      <div className="header">
        <h1>Meet The Team</h1>
      </div>

      {/*board*/}
      <section className="leader-cards">
        <LeaderCard
          image="public/images/headshots/veronica.jpeg"
          rank="Đoàn Trưởng | President"
          name="Maria Ninh Nhi Veronica"
        />

        <LeaderCard
          image="public/images/headshots/joseph.jpeg"
          rank="Đoàn Phó Quản Trị | Vice President"
          name="Gisue Huynh Tan Joseph"
        />

        <LeaderCard
          image="public/images/headshots/kd.jpeg"
          rank="Đoàn Phó Nghiên Huấn | "
          name="Francis Xavier Kevin Anh Duong"
        />

        <LeaderCard
          image="public/images/headshots/ben.jpeg"
          rank="Thư Ký/Ngành Trưởng Ấu Nhi"
          name="John The Baptist Ngueyn Xuan Benjamin"
        />

        <LeaderCard
          image="public/images/headshots/marilyn.jpeg"
          rank="Thủ Quỹ | Treasurer"
          name="Thérèse of Lisieux Phan Marilyn"
        />

        <LeaderCard
          image="public/images/headshots/dylan.jpeg"
          rank="Ngành Trưởng Hiệp Sĩ"
          name="Joseph Nguyen Hoang Dylan"
        />

        <LeaderCard
          image="public/images/headshots/john.jpeg"
          rank="Ngành Trưởng Nghĩa Sĩ"
          name="Michael the Archangel Ross Robert John"
        />

        <LeaderCard
          image="public/images/headshots/austin.jpeg"
          rank="Ngành Trưởng Thiếu Nhi"
          name="Michael Ninh Tuong Austin"
        />

        {/*fulltimers*/}

        <LeaderCard
          image="public/images/headshots/christina.jpeg"
          rank="Huynh Trưởng | Youth Leader"
          name="Anne Pham Hong Vu Christina"
        />

        <LeaderCard
          image="public/images/headshots/will.jpeg"
          rank="Huynh Trưởng | Youth Leader"
          name="Paul William Thịnh Luu"
        />

        <LeaderCard
          image="public/images/headshots/trin.jpeg"
          rank="Huynh Trưởng | Youth Leader"
          name="Anne Tran Hien Trinity"
        />

        <LeaderCard
          image="public/images/headshots/.jpeg"
          rank="Huynh Trưởng | Youth Leader"
          name="Augustine Nguyen Thien Nathan"
        />

        {/*partimers*/}
        <LeaderCard
          image="public/images/headshots/.jpeg"
          rank="Huynh Trưởng | Youth Leader"
          name="Rita of Cascia Tran Thien-an Theresa"
        />

        <LeaderCard
          image="public/images/headshots/.jpeg"
          rank="Huynh Trưởng | Youth Leader"
          name="John Tran Petter"
        />

        <LeaderCard
          image="public/images/headshots/.jpeg"
          rank="Huynh Trưởng | Youth Leader"
          name="John The Baptist Nguyen Vu Nathan"
        />
        <LeaderCard
          image="public/images/headshots/.jpeg"
          rank="Huynh Trưởng | Youth Leader"
          name="Peter & Paul Tran Christopher"
        />
        <LeaderCard
          image="public/images/headshots/.jpeg"
          rank="Huynh Trưởng | Youth Leader"
          name="Vincent de Paul Nguyen Bryan"
        />
        <LeaderCard
          image="public/images/headshots/.jpeg"
          rank="Huynh Trưởng | Youth Leader"
          name="Tôma Thiện Trần Hùng Jacob"
        />
        <LeaderCard
          image="public/images/headshots/bdo.jpeg"
          rank="Huynh Trưởng | Youth Leader"
          name="Joseph Do Toan Brian"
        />
        <LeaderCard
          image="public/images/headshots/.jpeg"
          rank="Huynh Trưởng | Youth Leader"
          name="Mark Tran Huy Timothy"
        />
        <LeaderCard
          image="public/images/headshots/kaitlyn.jpeg"
          rank="Huynh Trưởng | Youth Leader"
          name="Thérèse of Lisieux Nguyen Kaitlyn"
        />

        {/*hstt*/}
        <LeaderCard
          image="public/images/headshots/.jpeg"
          rank="Hiệp Sĩ Trưởng Thành | Leader in Training"
          name="Joseph Nguyen Hoang Franklin"
        />

        <LeaderCard
          image="public/images/headshots/.jpeg"
          rank="Hiệp Sĩ Trưởng Thành | Leader in Training"
          name="Thérèse of Lisieux Nguyen Mytam Audrey"
        />

        <LeaderCard
          image="public/images/headshots/.jpeg"
          rank="Hiệp Sĩ Trưởng Thành | Leader in Training"
          name="Anna Ngueyn Tuyet Brianna"
        />

        <LeaderCard
          image="public/images/headshots/.jpeg"
          rank="Hiệp Sĩ Trưởng Thành | Leader in Training"
          name="Jospeh Tran Mighty"
        />

        <LeaderCard
          image="public/images/headshots/.jpeg"
          rank="Hiệp Sĩ Trưởng Thành | Leader in Training"
          name="Anna Tran Hoa Quynh Finity"
        />

        <LeaderCard
          image="public/images/headshots/.jpeg"
          rank="Hiệp Sĩ Trưởng Thành | Leader in Training"
          name="Hubertus Vu Hieu Kevin"
        />

        <LeaderCard
          image="public/images/headshots/.jpeg"
          rank="Hiệp Sĩ Trưởng Thành | Leader in Training"
          name="Cecelia Dang Vu Ailyn"
        />

        <LeaderCard
          image="public/images/headshots/.jpeg"
          rank="Hiệp Sĩ Trưởng Thành | Leader in Training"
          name="Henry Đỗ Thiên-Ân"
        />

        <LeaderCard
          image="public/images/headshots/.jpeg"
          rank="Hiệp Sĩ Trưởng Thành | Leader in Training"
          name="Paul Lai Sean"
        />
      </section>

      <div className="bottombar">
        <BottomBar />
      </div>
    </Fragment>
  );
}

export default About;
