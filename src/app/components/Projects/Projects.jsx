import React from 'react'
import mern from '../../assets/Images/mern3.png'
import hangout from '../../assets/Images/hang3.png'
import covid from '../../assets/Images/covid3.png'
import shoty from '../../assets/Images/shoty3.png'
import done from '../../assets/Images/done3.png'
import forget from '../../assets/Images/forget3.png'


import LanguageIcon from '@material-ui/icons/Language';
import GitHubIcon from '@material-ui/icons/GitHub';

import { Container } from '@material-ui/core'
import './styleProjects.css'

export default function Projects() {
    return (
        <div className="projects_" style={{backgroundColor: '#eefcfd',}}>
          <Container>
              {
                  data.map(project=>(
                <div key={project.id}>
                <div 
                    className='bg' 
                    style={{backgroundImage: `url(${project.image})`,}}
                    />
                    <div className='project_main_text_container'>
                        <h2>Description</h2>
                        <p>{project.header}</p>
                        <h2 className='topics'>Topics & Libraries</h2>
                        <div className='weird_container'>
                            {
                                project.tools.map(tool=>(
                                    <div className='weird'>
                                        {tool}
                                    </div>

                                ))
                            }
                        </div>
                        <div className='btn_group'>
                            {
                                project.link &&
                                <a target="_blank" 
                                    rel="noopener noreferrer" 
                                    href={project.webLink}
                                > 
                                    <button className='project_btn'>
                                    Live Now  <LanguageIcon />
                                    </button>
                                </a> 
                            }
                            <a target="_blank" 
                            rel="noopener noreferrer" 
                            href={project.githubLink}
                            > 
                                <button className='github'>
                                Visit Github <GitHubIcon /> 
                                </button>
                            </a> 
                        </div>
                    </div>
                    </div>
                  ))
              }
          </Container>
        </div>
    )
}


const data = [
    {
        id: 1,
        image : hangout,
        link:true,
        header: 
        'Home Page contain Some animation and description about the App, Main Functionality : Create events, Filter events Google & Facebook Authentication, Join Events, Create Profile, And Finally Chatting in the Community  ',
        tools:
        [
            'React',
            'Semantic UI', 
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
            "react-lottie"
        ],
        webLink:'https://hangout-club.web.app',
        githubLink:'https://github.com/MohamedAhmed122/the-Hangout-Club'
    },
    {
        id: 2,
        image : mern,
        link:true,
        header: 
        "E-commerce Website, Login/ Registration, Add item to cart, Shipping System Payment system  Admin Panel where Admin Can control Users, Products and orders",
        tools:[
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
        webLink:'https://covid1-9.web.app',
        githubLink:'https://github.com/MohamedAhmed122/Covid-19-project'
    },
    {
        id: 10,
        image : covid,
        link:true,
        header: 
        'Covid-19 tracker, You can See Country Live Cases, Cases, deaths and Recovered, for every Country & map that display data for each country, and finally Graph  ',
        tools:[
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
            "numeral"
        ],
        webLink:'https://covid1-9.web.app',
        githubLink:'https://github.com/MohamedAhmed122/Covid-19-project'
    },
    {
        id: 3,
        image : shoty,
        link:true,
        header: 
        'Clothing e-commerce store, where can Login/Register & Google Authentication  then You can Add Item to cart, payment system using stripe ',
        tools:[
            "react-redux",
            "firebase",
            "hooks",
            "Class Component",
            "Functional Component",
            "SASS",
            "react-router-dom",
            "react-stripe-checkout",
            "redux-logger",
            "redux-thunk",
            "redux-persist",
            "reselect"
        ],
        webLink:'https://covid1-9.web.app',
        githubLink:'https://github.com/MohamedAhmed122/Covid-19-project'
    },
    {
        id: 4,
        image : done,
        link:false,
        header: 
        'Done With It (Mobile App), Where you can sell your old item online, Functionality Login/Register Access Camera And Location CRUD Functionality Sending Messages ',
        tools:[
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
           "lottie-react-native"
        ],
        webLink:'none',
        githubLink:'https://github.com/MohamedAhmed122/React-native-doneWithIT'
    },
    {
        id: 5,
        image : forget,
        header: 'Not To Forget (Mobile App),Sophisticated To do Tasks, Login/Register, then You can Create Tasks & Create Category & CRUD Functionality',
        link:false,
        tools:[
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
           "lottie-react-native"
        ],
        webLink:'none',
        githubLink:'https://github.com/MohamedAhmed122/Not-to-Forget---React-native'
    }
]