import React, { useEffect } from 'react'

import Navbar from '../../layouts/Navbar/Navbar'
import LottieView from '../LottieView/LottieView'

import { Container } from '@material-ui/core'

import animation from '../../assets/Animations/anmi.json'

import AOS from 'aos';
import 'aos/dist/aos.css';
import './StyleHero.css'


export default function Hero() {

    const handleScroll =(values)=> window.scrollTo({top:values,behavior: 'smooth'})
    useEffect(()=>{
        AOS.init({duration:1500})
    },[])

    return (
        <div className='hero'>
            <div className='mrg-3'>
                <Navbar />
                <Container>
                    <div className='hero_block'>
                        <div className='hero_left' data-aos='fade-right'>
                            <p className='hero_main_text'> 
                                My Name is Mohamed <span>&</span> I build things on the internet 
                            </p>
                            <p className='hero_sub_text'>
                                I develop and design website and mobile application
                            </p>
                            <div className='hero_btn'>
                                <button className='projects_btn' onClick={()=>handleScroll(900)}>Projects</button>
                            </div>
                        </div>
                        <div className='hero_right' data-aos='fade-left'>
                            <LottieView animation={animation} width={500} height={500} />
                        </div>
                    </div>
                </Container>

            </div>
        </div>

    )
}
