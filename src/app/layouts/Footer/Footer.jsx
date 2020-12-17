import React from 'react'

import { Button, Container, IconButton } from '@material-ui/core'

import FacebookIcon from '@material-ui/icons/Facebook';
import EmailIcon from '@material-ui/icons/Email';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import GitHubIcon from '@material-ui/icons/GitHub';

import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import CodeIcon from '@material-ui/icons/Code';

import './styleFooter.css'

export default function Footer() {
    return (
        <div className='footer'>
            <>
                <div className='footer_container'>

                    <div className='footer_right'>
                        <div className='icon_footer'>
                            <IconButton> <HomeIcon /> </IconButton>
                            <Button className='button_footer'>Home</Button>
                        </div>
                        <div className='icon_footer'>
                            <IconButton> <CodeIcon /> </IconButton>
                            <Button className='button_footer'>Projects</Button>
                        </div>
                        <div className='icon_footer'>
                            <IconButton><InfoIcon /></IconButton>
                            <Button className='button_footer'>
                                About Me
                            </Button>
                        </div>
                    </div>

                    <div className='footer_middle'>
                        <h1 style={{margin: '40px',}}>LOGO</h1>
                        <p className='copyright'> &copy; Copyright by Mohamed Youssef</p>
                    </div>

                    <div className='footer_left'>
                        <h3>Socially you will find me on</h3>
                        <div className='social'>
                        <IconButton> <GitHubIcon fontSize='large'/> </IconButton>
                            <IconButton> <FacebookIcon fontSize='large'/> </IconButton>
                            <IconButton> <EmailIcon fontSize='large'/> </IconButton>
                            <IconButton> <WhatsAppIcon fontSize='large'/> </IconButton>
                        </div>
                    </div>

                </div>
            </>
        </div>
    )
}
