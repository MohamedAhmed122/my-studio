import React from 'react'

import { Container } from '@material-ui/core'
import { Link } from 'react-router-dom'

import HighlightOffIcon from '@material-ui/icons/HighlightOff';

import './StyleHeader.css'

export default function ContactHeader() {
    return (
        <Container>
            <div className='contactHeader'>
                <div className='logo'>
                    <Link to='/'>LOGO</Link>
                </div>
                <div className='contact_btn'>
                <button className='close_btn'>
                    Close
                    <HighlightOffIcon className='close_icon' />
                    </button>
                </div>
            </div>
        </Container>
    )
}
