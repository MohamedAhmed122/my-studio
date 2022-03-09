import React, { useEffect } from "react";
import mern from "../../assets/Images/mern3.png";
import hangout from "../../assets/Images/hang3.png";
import covid from "../../assets/Images/covid3.png";
import indacoin from "../../assets/Images/indacoin.png";
import done from "../../assets/Images/done3.png";
import forget from "../../assets/Images/forget3.png";
import pub from "../../assets/Images/pub.png";
import media from "../../assets/Images/media.png";
import wisdom from "../../assets/Images/wisdom.png";

import AppleIcon from "@material-ui/icons/Apple";
import LanguageIcon from "@material-ui/icons/Language";
import GitHubIcon from "@material-ui/icons/GitHub";
import ShopIcon from "@material-ui/icons/PlayArrow";

import { Container } from "@material-ui/core";
import "./styleProjects.css";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Projects() {
  useEffect(() => {
    AOS.init({ duration: 1400 });
  }, []);
  return (
    <div className="projects_" style={{ backgroundColor: "#eefcfd" }}>
      <Container>
        {data.map((project) => (
          <div data-aos="fade-top" key={project.id}>
            <div
              className="bg"
              style={{ backgroundImage: `url(${project.image})` }}
            />
            <div className="project_main_text_container">
              <h2>Description</h2>
              <p>{project.header}</p>
              <h2 className="topics">Topics & Libraries</h2>
              <div className="weird_container">
                {project.tools.map((tool) => (
                  <div className="weird">{tool}</div>
                ))}
              </div>
              <div className="btn_group">
                {project.buttons.map((button) => (
                  <>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={button.link}
                      className="link_"
                    >
                      <button className="project_btn">
                        {button.name} {button.icon}
                      </button>
                    </a>
                  </>
                ))}
              </div>
            </div>
          </div>
        ))}
      </Container>
    </div>
  );
}

const data = [
  {
    id: 22,
    image: wisdom,
    header:
      "application for receiving and providing advice from experts on any issue The application will make it easy to get the necessary advice on an issue of interest, as well as to become a consultant yourself. The areas in which you can get/give advice are diverse: veterinary medicine, psychology, astrology, etc.",
    tools: [
      "react-native",
      "Firebase",
      "mmkv-storage",
      "react-navigation-V5",
      "flipper",
      "husky",
      "react-fast-compare",
      "apisauce",
      "react-form-hook",
      "Yup",
      "functional-component",
      "datetimepicker",
      "bootsplash",
      "react-native-reanimated",
      "react-native-share",
      "lottie-react-native",
      "react-native-share",
      "react-native-svg",
      "vector-icons",
      "react-query",
      "websocket",
      "react-native-gifted-chat",
      "react-native-qrcode-svg",
      "react-native-webview",
      "react-native-permissions",
    ],
    buttons: [
      {
        id: "0",
        name: "Google Play",
        link: "https://play.google.com/store/apps/details?id=com.wisdomarmy",
        icon: <ShopIcon />,
      },
      {
        id: "1",
        name: "App Store",
        link: "https://apps.apple.com/ru/app/wisdom-army-консультации/id1502209262",
        icon: <AppleIcon />,
      },
    ],
  },
  {
    id: 21,
    image: media,
    header:
      "The MediaList app is a legal aggregator platform, initially containing information about lawyers, lawyers (formations, auditors and audit organizations) The search for the required specialist or company is possible by specialization, additional clarifying information, and geolocation with the ability to add the desired one to your favorites.",
    tools: [
      "react-native",
      "Firebase",
      "mmkv-storage",
      "react-navigation-V4",
      "flipper",
      "apisauce",
      "react-form-hook",
      "Yup",
      "functional-component",
      "datetimepicker",
      "bootsplash",
      "react-native-reanimated",
      "react-native-share",
      "lottie-react-native",
      "react-native-share",
      "react-native-svg",
      "vector-icons",
      "redux",
      "redux-thunk",
      "redux-persist",
      "react-native-pdf",
      "react-native-qrcode-svg",
      "react-native-webview",
      "react-native-permissions",
    ],
    buttons: [
      {
        id: "0",
        name: "Google Play",
        link: "https://play.google.com/store/apps/details?id=com.medialist",
        icon: <ShopIcon />,
      },
      {
        id: "1",
        name: "App Store",
        link: "https://apps.apple.com/ru/app/medialist/id1523464664",
        icon: <AppleIcon />,
      },
    ],
  },
  {
    id: 20,
    image: pub,
    header:
      "Application for Pubs and Restaurants, food delivery and booking seats, users can order foods, book restaurants seats and pay online through apple Pay and Google Pay. And users can find or search for restaurants throw map using google maps ",
    tools: [
      "react-native",
      "@notifee/react-native",
      "react-native-webview",
      "async-storage",
      "datetimepicker",
      "geolocation",
      "react-navigation-V6",
      "flipper",
      "axios",
      "formik",
      "Yup",
      "geolib",
      "bootsplash",
      "react-native-reanimated",
      "react-native-share",
      "lottie-react-native",
      "react-native-animatable",
      "react-native-qrcode-scanner",
      "vector-icons",
      "redux",
      "redux-thunk",
      "redux-persist",
      "react-native-qrcode-svg",
      "react-native-payments",
      "husky",
      "react-native-permissions",
    ],
    buttons: [
      {
        id: "0",
        name: "Visit TestFlight",
        icon: <AppleIcon />,
        link: "https://testflight.apple.com/join/9bVaf5RH",
      },
    ],
  },
  {
    id: 4,
    image: done,
    link: false,
    header:
      "Done With It (Mobile App), Where you can sell your old item online, Functionality Login/Register Access Camera And Location CRUD Functionality Sending Messages ",
    tools: [
      "React-native",
      "expo",
      "Context API",
      "async-storage",
      "netinfo",
      "react-navigation",
      "hooks",
      "formik",
      "Yup",
      "Functional Component",
      "apisauce",
      "expo-constants",
      "image-picker",
      "image-picker",
      "jwt-decode",
      "expo-location",
      "lottie-react-native",
    ],
    buttons: [
      {
        id: "1",
        name: "Visit Github",
        link: "https://github.com/MohamedAhmed122/React-native-doneWithIT",
        icon: <GitHubIcon />,
      },
    ],
  },
  {
    id: 5,
    image: forget,
    header:
      "Not To Forget (Mobile App),Sophisticated To do Tasks, Login/Register, then You can Create Tasks & Create Category & CRUD Functionality",
    link: false,
    tools: [
      "React-native",
      "expo",
      "Context API",
      "async-storage",
      "netinfo",
      "formik",
      "Yup",
      "reducers",
      "react-navigation",
      "CRUD",
      "hooks",
      "Functional Component",
      "axios",
      "expo-constants",
      "datetimepicker",
      "cuid",
      "lottie-react-native",
    ],
    webLink: "none",
    buttons: [
      {
        id: "1",
        name: "Visit Github",
        link: "https://github.com/MohamedAhmed122/Not-to-Forget---React-native",
        icon: <GitHubIcon />,
      },
    ],
  },

  //   FUKKK
  {
    id: 1,
    image: indacoin,
    link: true,
    header:
      "Indacoin is a pretty simple platform to use. Purchasing the preferred cryptocurrency with Indacoin is quite handy. Choose “Buy Bitcoin” on the homepage to buy Bitcoins. Users can then select preferred fiat currency (USD, EUR, or RUB) and the cryptocurrency to acquire",
    tools: [
      "React",
      "Semantic UI",
      "Redux",
      "Firebase",
      "Firestore",
      "react-router-dom",
      "redux-thunk",
      "Hooks",
      "Formik",
      "Yup",
      "Functional Component",
      "Firebase-Auth",
      "toastify",
      "google-map",
      "react-places-autocomplete",
      "react-dropzone",
      "react-cropper",
      "date-fns",
      "react-datepicker",
      "react-calendar",
      "react-lottie",
    ],
    buttons: [
      {
        id: "0",
        name: "Live Now",
        link: "https://indacoin.io/",
        icon: <LanguageIcon />,
      },
    ],
  },
  {
    id: 1,
    image: hangout,
    link: true,
    header:
      "Home Page contain Some animation and description about the App, Main Functionality : Create events, Filter events Google & Facebook Authentication, Join Events, Create Profile, And Finally Chatting in the Community  ",
    tools: [
      "React",
      "Semantic UI",
      "Redux",
      "Firebase",
      "Firestore",
      "react-router-dom",
      "redux-thunk",
      "Hooks",
      "Formik",
      "Yup",
      "Functional Component",
      "Firebase-Auth",
      "toastify",
      "google-map",
      "react-places-autocomplete",
      "react-dropzone",
      "react-cropper",
      "date-fns",
      "react-datepicker",
      "react-calendar",
      "react-lottie",
    ],
    buttons: [
      {
        id: "0",
        name: "Live Now",
        link: "https://hangout-club.web.app",
        icon: <LanguageIcon />,
      },
      {
        id: "1",
        name: "Visit Github",
        link: "https://github.com/MohamedAhmed122/the-Hangout-Club",
        icon: <GitHubIcon />,
      },
    ],
  },
  {
    id: 2,
    image: mern,
    link: true,
    header:
      "E-commerce Website, Login/ Registration, Add item to cart, Shipping System Payment system  Admin Panel where Admin Can control Users, Products and orders",
    tools: [
      "Material UI React",
      "axios",
      "formik",
      "Yup",
      "hooks",
      "Functional Component",
      "bcryptjs",
      "dotenv",
      "express",
      "express-async-handler",
      "jsonwebtoken",
      "mongoose",
      "multer",
      "react-lottie",
      "redux",
      "redux-thunk",
      "redux-persist",
      "react-router-dom",
      "Reducers",
      "Pagination",
      "react-paypal-button-v2",
    ],
    buttons: [
      {
        id: "0",
        name: "Live Now",
        link: "https://pro-e-commerce.herokuapp.com",
        icon: <LanguageIcon />,
      },
      {
        id: "1",
        name: "Visit Github",
        link: "https://github.com/MohamedAhmed122/Ecommerce-Mern",
        icon: <GitHubIcon />,
      },
    ],
  },
  {
    id: 10,
    image: covid,
    link: true,
    header:
      "Covid-19 tracker, You can See Country Live Cases, Cases, deaths and Recovered, for every Country & map that display data for each country, and finally Graph  ",
    tools: [
      "Material UI React",
      "axios",
      "chart-js",
      "chart-js2",
      "firebase",
      "hooks",
      "Functional Component",
      "leaflet",
      "react-leaflet",
      "react-countup",
      "numeral",
    ],
    buttons: [
      {
        id: "0",
        name: "Live Now",
        link: "https://covid1-9.web.app",
        icon: <LanguageIcon />,
      },
      {
        id: "1",
        name: "Visit Github",
        link: "https://github.com/MohamedAhmed122/Covid-19-project",
        icon: <GitHubIcon />,
      },
    ],
  },
];
// Hello

// currently, I'm working on two projects they are on the final steps

// 1 - wisdom army app
// an

// you can see it here on
// Google Play: play.google.com/store/apps/details?id=com.wisdomarmy
// App Store: apps.apple.com/ru/app/wisdom-army-консультации/id1502209262

// 2 - MediaList app

// The idea of ​​the project is aimed at simplifying the search for the necessary specialist or company for interested parties and, accordingly, increasing the number of requests for legal assistance for practicing specialists in a particular field.

// you can see it here
// Google Play: play.google.com/store/apps/details?id=com.medialist
// Play Store: apps.apple.com/ru/app/medialist/id1523464664

// and also participated at this project at the end of it
// - Star box App
// The application is intended for parents who can leave tasks for their children, for the completion of which children will receive stars. Subsequently, these stars can be used to buy rewards. For example, the assignment could be "Do the dishes", "Do your homework", etc. For the successful completion of the assigned tasks, the child can receive awards: "Ice Cream", "Going to the Cinema", etc. The cost and range of tasks and rewards are set by the parents independently.

// you can see it here:
// Google Play: play.google.com/store/apps/details?id=com.starboxmobile&hl=ru
// App Store: apps.apple.com/ru/app/starbox-воспитание-мотивация/id1460090340

// I have 1,5 years of experience at react native, I never worked with flutter, but currently started to learn swift and I created some projects in the first year of my study on Andriod so I know a little bit about Kotlin and Android.

// Thanks.
