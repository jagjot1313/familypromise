import "./intro.css";
import graph1 from "../../assets/graph1.png";
import graph2 from "../../assets/graph2.png";
import { Link } from "react-scroll";
import contactus from "../../assets/contactus.png";
import { useState, useEffect } from "react";

const Intro = () => {
  const images = [graph1, graph2];
  const [currentIndex, setCurrentIndex] = useState(1);
  useEffect(() => {}, [currentIndex]);
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    console.log(currentIndex);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
    console.log(currentIndex);
  };

  return (
    <section id="intro" className="intro">
      <div className="introContent">
        <span className="introName">Zapper,</span>
        <span className="hello">
          A fantastic tool to help predict homelessness
          <span className="introName"></span>
          <br />
        </span>
        <p className="introPara">
          {" "}
          It works by analyzing several factors that contribute to homelessness
          and <br />
          predicting where we can have the greatest effect in serving the
          Spokane community.
        </p>
      </div>
      <div className="graphContainer">
        <button onClick={prevSlide}>Prev</button>
        <div className="images-container">
          {images.map(
            (address, idx) =>
              currentIndex == idx && (
                <img key={idx} src={address} alt="graph1" className="graph1" />
              )
          )}
        </div>
          <button onClick={nextSlide}>Next</button>
      </div>
    </section>
  );
};

export default Intro;
