import React, { useEffect } from 'react'

import {  Container } from '@material-ui/core'

import AOS from 'aos';
import 'aos/dist/aos.css';
import './AboutIntro.css'
import Me from '../../assets/me.png'


export default function AboutIntro() {
    useEffect(()=>{
        AOS.init({duration :1200})
    },[])
    return (
        <div className='about_intro'>
            <img  src={Me} alt='Mohamed Youssef'/>
           <p data-aos='fade-top' style={{
               marginTop:50,
               fontSize:20,
               textAlign:'center',
               color:'#0A96A6'
           }}>
                Developer is an organism that turns coffee into code 😁
           </p>
            <Container>

                <div className='intro_features'>
                    <div className='intro_feature_left'>
                        <h1 data-aos='fade-right'>About me</h1>
                       { aboutData.map(data =>(

                            <p key={data.id}>
                                - {data.title}
                            </p>
                       ))}
                        
                    </div>
                    <div className='intro_feature_right'>
                        <h1 data-aos='fade-left'>Also about me</h1>
                        <h4>
                            I am Mohamed Yousef, a Self-tought developer, 
                            I love coding because i think programing is fun :)
                            <br/> <br />
                            I have serious passion for UI effects, animations and creating intuitive, 
                            dynamic user experiences.
                            <br/> <br />
                            Currently, I live in Tomsk Russia, But I am from Egypt
                            and I moved to Tomsk to study in TSU 
                            

                        </h4>
                    </div>
                </div>
            </Container>
        </div>
    )
}



const aboutData =[
    {
        id:1,
        title:'I have One Year & Half Experience'
    },
    {
        id:2,
        title:'I have Solid Knowledge in React & React Native'
    },
    {
        id:3,
        title:'I have Good  Knowledge in JavaScript'
    },
    {
        id:4,
        title:'I Experience With CSS Frameworks (Material UI & Semantic UI)'
    },
    {
        id:5,
        title:'I have Solid Knowledge in HTML, CSS, SASS'
    },
    {
        id:6,
        title:'I have Basic Knowledge in TypeScript, But I can Learn it ;)'
    },
    {
        id:7,
        title:'I have Basic Knowledge in Node ,But I can Learn it ;)'
    },
   
]