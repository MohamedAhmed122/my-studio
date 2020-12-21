import React from 'react'

import hangoutImage from '../../assets/Images/hang.png'
import MernImage from '../../assets/Images/mern.png'
import shoty from '../../assets/Images/shoty.png'
import done from '../../assets/Images/done.png'


import './styleHomeProject.css'

import { useSpring, animated } from 'react-spring'
import { Container } from '@material-ui/core'


const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(70000px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

export default function HomeProject() {
    
    const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 10, tension: 200, friction: 70 } }))
    const [props2, set2] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 10, tension: 200, friction: 70 } }))
    const [props3, set3] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 10, tension: 200, friction: 70 } }))
    const [props4, set4] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 10, tension: 350, friction: 70 } }))

    return (
        <Container style={{marginBottom: '10rem'}}>
           <a
                target="_blank" 
                rel="noopener noreferrer" 
                href='https://hangout-club.web.app'
            >
            <animated.div
                onMouseMove={({ clientX: x, clientY: y }) => set3({ xys: calc(x, y) })}
                onMouseLeave={() => set3({ xys: [0, 0, 1] })}
                style={{
                    backgroundImage: `url(${hangoutImage})`,
                    transform: props3.xys.interpolate(trans)
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
                <animated.div
                    onMouseMove={({ clientX: x, clientY: y }) => set4({ xys: calc(x, y) })}
                    onMouseLeave={() => set4({ xys: [0, 0, 1] })}
                    style={{
                        backgroundImage: `url(${MernImage})`,
                        transform: props4.xys.interpolate(trans)
                    }}
                    className='bg'
                    >
                        <h2>Electronics e-commerce store</h2>
                        <button>Live now</button>
                </animated.div>

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
            <animated.div
                onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
                onMouseLeave={() => set({ xys: [0, 0, 1] })}
                style={{
                    backgroundImage: `url(${shoty})`,
                    transform: props.xys.interpolate(trans)
                }}
                className='bg'
            >
                <h2>Clothing Store - SHOTY</h2>
                <button>Live now</button>
            </animated.div>
            </a>
                      

        </Container>
    )
}
