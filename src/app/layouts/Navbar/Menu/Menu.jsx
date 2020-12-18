import React from 'react'

import { useHistory } from 'react-router-dom'

import HighlightOffIcon from '@material-ui/icons/HighlightOff';

import Logo from '../../../assets/logo.png'

import './Menu.css'

export default function Menu() {
    const history = useHistory()
    return (
        <div className='menu'>
            <div className='menu_container'>
                <div onClick={() => history.push('/')}>
                    <img className='logo' src={Logo} alt='logo' />
                </div>
                <div className='contact_btn close_menu'>
                <button className='close_btn'>
                    Close
                    <HighlightOffIcon className='close_icon' />
                    </button>
                </div>
            </div>
        </div>
    )
}
