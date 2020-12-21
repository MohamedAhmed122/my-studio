import React from 'react'
import hang from '../../assets/Images/hangout1.png'
import shoty from '../../assets/Images/shoty1.png'
import done from '../../assets/Images/done1.png'
import covid from '../../assets/Images/covid1.png'

export default function Projects() {
    return (
        <div>
            <h1>Hello From the Project</h1>
        </div>
    )
}


const data = [
    {
        id: 1,
        image : hang,
        header: 'Hangout Club',
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
        image : covid,
        header: 'ProShop E-commerce App (MERN Stack)',
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
        header: 'Covid-19 tracker',
        tools:[
            "Material UI React",
            "axios",
            "chart-js",
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
        header: 'Clothing App Store e-commerce',
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
            "redux-persist",
            "reselect"
        ],
        webLink:'https://covid1-9.web.app',
        githubLink:'https://github.com/MohamedAhmed122/Covid-19-project'
    },
    {
        id: 4,
        image : done,
        header: 'Done With It (Mobile App)',
        text:'Sell Your Stuff online',
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
        image : done,
        header: 'Not To Forget (Mobile App)',
        text:'Sophisticated To do Tasks ',
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