import React, { useEffect } from "react";

import { Container } from "@material-ui/core";

import AOS from "aos";
import "aos/dist/aos.css";
import "./StyleAboutHeader.css";

export default function AboutHeader() {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);
  return (
    <Container>
      <div className="about">
        <div data-aos="fade-right" className="about_left">
          <p className="about_main_text">
            Software developer who is responsible to develop Websites and Mobile
            app
          </p>
          <p className="about_main_text">
            using <span>JS </span>
          </p>
        </div>
        <div data-aos="fade-left" className="about_right">
          <p>
            Most good programmers do programming not because they expect to get
            paid or get adulation by the public, but because it is fun to
            program.
          </p>
          <h3> - Rajanand</h3>
        </div>
      </div>
    </Container>
  );
}
