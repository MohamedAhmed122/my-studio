import React from 'react'

import { Container } from '@material-ui/core'

import './styleNav.css'


export default function Navbar() {
    return (
        <Container>
            <div className='nav_links'>
                <div className='logo'>
                    LOGO
                </div>
                <div className='link'>
                    About
                </div>
                <div className='link'>
                    Projects
                </div>
                <div className='link_right'>
                    <button className='nav_button'>Let's talk</button>
                </div>
            </div>
        </Container>
    )
}
