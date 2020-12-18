import React from 'react'

import { Container } from '@material-ui/core'

import './styleNav.css'
import { Link, useHistory } from 'react-router-dom'


export default function Navbar() {
    const history = useHistory()
    return (
        < >
            <Container>
              <div className='navbar'>
                  <div className='nav_left'>
                    <Link  to='/' className='link'>Logo</Link>
                    <Link to='/about' className='link'>About</Link>
                    <Link  to='/project' className='link'>Project</Link>
                  </div>
                  <div className='nav_right'>
                    <button onClick={()=>history.push('/contact')} className='nav_button'>Let's talk</button>
                  </div>
              </div>
            </Container>

        </>
    )
}
