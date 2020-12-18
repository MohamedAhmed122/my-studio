import React from 'react'

import {  Container } from '@material-ui/core'

import './AboutIntro.css'


export default function AboutIntro() {
    return (
        <div className='about_intro'>
            <img  src={imageSrc} alt='Mohamed Youssef'/>
           <p style={{
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
                        <h1>About me</h1>
                       { aboutData.map(data =>(

                            <p key={data.id}>
                                - {data.title}
                            </p>
                       ))}
                        
                    </div>
                    <div className='intro_feature_right'>
                        <h1>Also about me</h1>
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

const imageSrc ='https://scontent-arn2-1.xx.fbcdn.net/v/t31.0-8/12710975_1758121331083032_4998605856255008369_o.jpg?_nc_cat=106&ccb=2&_nc_sid=174925&_nc_ohc=DdwUek-npMoAX9qHn8w&_nc_ht=scontent-arn2-1.xx&oh=d3ee3132b5764785cfd35adc791d6592&oe=6003FF5F'

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