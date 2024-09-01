import "./About.css";
import NavBar from "../../Components/NavBar";
import BottomBar from "../../Components/BottomBar";

import { Fragment } from "react/jsx-runtime";

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

      <div className="bottombar">
        <BottomBar />
      </div>
    </Fragment>
  );
}

export default About;
