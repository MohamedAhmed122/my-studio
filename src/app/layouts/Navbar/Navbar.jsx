import React from 'react'

import { Container } from '@material-ui/core' 
import Logo from '../../assets/logo.png'

import './styleNav.css'
import { Link, useHistory } from 'react-router-dom'


export default function Navbar() {
    const history = useHistory()
    return (
        < >
            <Container>
              <div className='navbar'>
                <div style={{display:'flex'}}>
                   <div onClick={() => history.push('/')}>
                    <img className='logo' src={Logo} alt='logo' />
                   </div>
                   
                    <div className='nav_left'>
                      <Link to='/about' className='link'>About</Link>
                      <Link  to='/project' className='link'>Project</Link>
                    </div>

                </div>
                  <div className='nav_right'>
                    <button onClick={()=>history.push('/contact')} className='nav_button'>Let's talk</button>
                  </div>
              </div>
            </Container>

        </>
    )
}
