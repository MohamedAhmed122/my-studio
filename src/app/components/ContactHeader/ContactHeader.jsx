import React from 'react'

import { Container } from '@material-ui/core'
import { useHistory } from 'react-router-dom'

import HighlightOffIcon from '@material-ui/icons/HighlightOff';

import logo from '../../assets/logo.png'

import './StyleHeader.css'

export default function ContactHeader() {
    const history = useHistory()
    return (
        <Container>
            <div className='contactHeader'>
                <div onClick={() =>history.push('/')}  >
                    <img className='logo_big' src={logo} alt='logo' />
                </div>
                <div className='contact_btn'>
                <button onClick={()=>history.push('/')} className='close_btn'>
                    Close
                    <HighlightOffIcon className='close_icon' />
                    </button>
                </div>
            </div>
        </Container>
    )
}
