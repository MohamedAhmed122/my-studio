import React from 'react'

import { Container } from '@material-ui/core'

import './styleNav.css'
import { Link, useHistory } from 'react-router-dom'


export default function Navbar() {
    const history = useHistory()
    return (
        <Container>
            <div className='nav_links'>
                <div className='logo'>
                    <Link to='/'>LOGO </Link>
                </div>
                <div className='link'>
                    <Link to='/about'>About </Link>
                </div>
                <div className='link'>
                   <Link to='/project'> Projects</Link> 
                </div>
                <div className='link_right'>
                    <button onClick={()=> history.push('/contact')} className='nav_button'>Let's talk</button>
                </div>
            </div>
        </Container>
    )
}
