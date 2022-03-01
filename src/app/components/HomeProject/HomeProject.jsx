import React, { useEffect } from "react";

import hangoutImage from "../../assets/Images/hang3.png";
import MernImage from "../../assets/Images/mern.png";
import pub from "../../assets/Images/pubV.png";
import media from "../../assets/Images/mediaV.png";
import indacoin from "../../assets/Images/indacoin.png";

import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";

import AOS from "aos";
import "aos/dist/aos.css";
import "./styleHomeProject.css";

import { useSpring, animated } from "react-spring";
import { Container } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1.1,
];
const trans = (x, y, s) =>
  `perspective(5000px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

export default function HomeProject() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 10, tension: 100, friction: 70 },
  }));
  const [props2, set2] = useSpring(() => ({
    xys: [1, 1, 1],
    config: { mass: 10, tension: 100, friction: 70 },
  }));
  const history = useHistory();
  return (
    <>
      <div className="projects_text">
        <p data-aos="fade-right" className="project_text_main">
          My Projects
        </p>
        <h3 data-aos="fade-left">
          My work is the bridge to various insightful digital experiences.
        </h3>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://hangout-club.web.app"
        >
          <animated.img
            className="project_images"
            src={hangoutImage}
            alt="indacoin Project"
            onMouseMove={({ clientX: x, clientY: y }) =>
              set({ xys: calc(x, y) })
            }
            onMouseLeave={() => set({ xys: [0, 0, 1] })}
            style={{
              transform: props.xys.interpolate(trans),
            }}
          />
        </a>
        <div className="container_project_images_v">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://play.google.com/store/apps/details?id=com.medialist"
          >
            <img
              className="project_images_v"
              src={media}
              alt="indacoin Project"
            />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://apps.apple.com/ru/app/wisdom-army-консультации/id1502209262"
          >
            <img
              className="project_images_v"
              src={pub}
              alt="indacoin Project"
            />
          </a>
        </div>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://indacoin.io/buy-bitcoin-with-card"
        >
          <animated.img
            className="project_images"
            src={indacoin}
            alt="indacoin Project"
            onMouseMove={({ clientX: x, clientY: y }) =>
              set2({ xys: calc(x, y) })
            }
            onMouseLeave={() => set2({ xys: [0, 0, 1] })}
            style={{
              transform: props2.xys.interpolate(trans),
            }}
          />
        </a>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "3rem",
          }}
        >
          <button
            data-aos="fade-left"
            onClick={() => history.push("/project")}
            className="project_btn"
            style={{ marginBottom: 100 }}
          >
            See More Projects <ArrowRightAltIcon />
          </button>
        </div>
      </div>
    </>
  );
}
