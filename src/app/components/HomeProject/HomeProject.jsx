import React, { useEffect } from 'react'

import hangoutImage from '../../assets/Images/hang.png'
import MernImage from '../../assets/Images/mern.png'
import shoty from '../../assets/Images/shoty.png'
import done from '../../assets/Images/done.png'

import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

import AOS from 'aos';
import 'aos/dist/aos.css';
import './styleHomeProject.css'

import { useSpring, animated } from 'react-spring'
import { Container } from '@material-ui/core'
import { useHistory } from 'react-router-dom'


const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(10000px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

export default function HomeProject() {
    useEffect(()=>{
        AOS.init({duration:1000})
    },[])
    
    const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 10, tension: 100, friction: 70 } }))
    const [props2, set2] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 10, tension: 100, friction: 70 } }))
    const history = useHistory()
    return (
        <Container style={{marginBottom: '10rem'}}>
            <div className='projects_text'>
                <p data-aos='fade-right' className='project_text_main'> My Projects</p>
                <h3 data-aos='fade-left'> My work is the bridge to various insightful digital experiences.</h3>
            </div>
           <a
                target="_blank" 
                rel="noopener noreferrer" 
                href='https://hangout-club.web.app'
            >
            <animated.div
                onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
                onMouseLeave={() => set({ xys: [0, 0, 1] })}
                style={{
                    backgroundImage: `url(${hangoutImage})`,
                    transform: props.xys.interpolate(trans)
                }}
                className='bg hangout'
                >
                    <h2>Hangout Club</h2>
                    <button>Live now</button>
            </animated.div>
            </a>

            <a
                target="_blank" 
                rel="noopener noreferrer" 
                href='https://pro-e-commerce.herokuapp.com'
            >
                <div
                    style={{
                        backgroundImage: `url(${MernImage})`,
                    }}
                    className='bg'
                    >
                        <h2>Electronics e-commerce store</h2>
                        <button>Live now</button>
                </div>

            </a>
            <a
                target="_blank" 
                rel="noopener noreferrer" 
                href='https://github.com/MohamedAhmed122/React-native-doneWithIT'
            >
            <animated.div
                onMouseMove={({ clientX: x, clientY: y }) => set2({ xys: calc(x, y) })}
                onMouseLeave={() => set2({ xys: [0, 0, 1] })}
                style={{
                    backgroundImage: `url(${done})`,
                    transform: props2.xys.interpolate(trans)
                }}
                className='bg shoty'
            >
                <h2>Done With It</h2>
                <button>Visit Github</button>
            </animated.div>
            </a>
            <a
                target="_blank" 
                rel="noopener noreferrer" 
                href='https://shoty-db.web.app'
            >
            <div
                style={{
                    backgroundImage: `url(${shoty})`,
                }}
                className='bg'
            >
                <h2>Clothing Store - SHOTY</h2>
                <button>Live now</button>
            </div>
            </a>
            <div style={{
                display:'flex',
                alignItems:'center',
                justifyContent: 'center',
                marginTop:'3rem'
            }}>
                <button data-aos='fade-left' onClick={()=> history.push('/project')} className='project_btn'>
                    See More Projects <ArrowRightAltIcon />
                </button>
            </div>   

        </Container>
    )
}
