"use client";
import "./Slideshow.css";
import { useEffect, useState } from "react";

interface Props {
  images: string[];
}

export default function SlideShow({ images }: Props) {
  /* initiallizing state variables and functions using useState() */
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsSmallScreen(window.innerWidth <= 1280);
    }

    window.addEventListener("resize", handleResize);
    handleResize(); // Check the screen size on initial load

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Handle image transitions
  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        setIsFading(false);
      }, 800); // Duration of fade-out
    }, 5000); // Time before switching images

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
      <div className="hero">
        <div className="title">
          <h1>Đoàn Gioan Tiền Hô</h1>
          {isSmallScreen ? (
            <p>LDNS | Source of Life League of Chapters</p>
          ) : (
            <p>Liên Đoàn Nguồn Sống | Source of Life League of Chapters</p>
          )}
        </div>
      </div>

      <div className="hero-background">
        <div className="background">
          <img
            src={images[currentIndex]}
            alt="Slideshow Image"
            className={isFading ? "fade-out" : "fade-in"}
          />
        </div>
      </div>
    </>
  );
}
