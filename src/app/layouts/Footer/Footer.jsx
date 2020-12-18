import React from 'react'

import { useHistory } from 'react-router-dom';

import { Button, Hidden, IconButton } from '@material-ui/core'

import FacebookIcon from '@material-ui/icons/Facebook';
import EmailIcon from '@material-ui/icons/Email';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import GitHubIcon from '@material-ui/icons/GitHub';

import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import CodeIcon from '@material-ui/icons/Code';

import logo from '../../assets/logo.png'


import './styleFooter.css'

export default function Footer() {

    const history = useHistory()

    return (
        <div className='footer'>
            <>
                <div className='footer_container'>
                <Hidden smDown>
                    <div className='footer_right'>
                        <div className='icon_footer' onClick={()=>history.push('/')}>
                            <IconButton> <HomeIcon /> </IconButton>
                            <Button className='button_footer'>Home</Button>
                        </div>
                        <div className='icon_footer' onClick={()=>history.push('/project')}>
                            <IconButton> <CodeIcon /> </IconButton>
                            <Button className='button_footer'>Projects</Button>
                        </div>
                        <div className='icon_footer' onClick={()=>history.push('/about')}>
                            <IconButton><InfoIcon /></IconButton>
                            <Button className='button_footer'>
                                About Me
                            </Button>
                        </div>
                    </div>
                </Hidden>

                    <div className='footer_middle'>
                        <div className='logo_container'>
                            <img src={logo} alt='Logo' className='logo' />
                        </div>
                        <p className='copyright'> &copy; Copyright by Mohamed Youssef</p>
                    </div>

                <Hidden smDown>
                    <div className='footer_left'>
                        <h3>Socially you will find me on</h3>
                        <div className='social'>
                            <a 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            href="https://github.com/MohamedAhmed122">
                                <IconButton> <GitHubIcon fontSize='large'/> </IconButton>
                            </a>
                            <a 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            href="https://www.facebook.com/profile.php?id=100006555460648"> 
                                <IconButton> <FacebookIcon fontSize='large'/> </IconButton>
                            </a>
                            <a 
                            href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=mohamed.ahm9833@gmail.com" 
                            rel="noopener 
                            noreferrer" target="_blank"> 
                                <IconButton> <EmailIcon fontSize='large'/> </IconButton>
                            </a>
                            <a 
                            href="whatsapp://send?abid=+79131136637&text=Hello%2C%20World!" 
                            rel="noopener noreferrer" 
                            target="_blank">
                                <IconButton> <WhatsAppIcon fontSize='large'/> </IconButton>
                            </a>
                        </div>
                    </div>
                </Hidden>

                </div>
            </>
        </div>
    )
}
