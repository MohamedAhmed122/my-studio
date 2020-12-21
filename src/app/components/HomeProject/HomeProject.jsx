import React from 'react'

import hangoutImage from '../../assets/Images/hang.png'
import MernImage from '../../assets/Images/mern.png'
import covid from '../../assets/Images/covid.png'
import shoty from '../../assets/Images/shoty.png'
import done from '../../assets/Images/done.png'
import forget from '../../assets/Images/forget.png'
import './styleHomeProject.css'
import { Container } from '@material-ui/core'

export default function HomeProject() {
    return (
        <Container style={{marginBottom: '10rem'}}>
            <a href='/'>
                <div
                    style={{backgroundImage: `url(${hangoutImage})`}}
                    className='bg hangout'
                >
                    <h2>Hangout Club</h2>
                    <button>Live Now</button>
                </div>
            </a>
            <div
                style={{backgroundImage: `url(${MernImage})`}}
                className='bg mern'
            >
                <h2>ProShop E-commerce Store</h2>
                <button>Live Now</button>
            </div>

            <div
                style={{backgroundImage: `url(${shoty})`}}
                className='bg covid'
            >
                <h2>Covid-19 tracker</h2>
                <button>Live Now</button>
            </div>
            <div
            style={{backgroundImage: `url(${forget})`}}
            className='bg done'
            >
                <h2>Done With It </h2>
                <button>Check Github</button>
            </div>

        </Container>
    )
}
