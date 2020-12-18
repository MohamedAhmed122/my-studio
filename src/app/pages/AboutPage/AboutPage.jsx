import React from 'react'
import AboutHeader from '../../components/AboutHeader/AboutHeader'
import AboutIntro from '../../components/AboutIntro/AboutIntro'

import Navbar from '../../layouts/Navbar/Navbar'

export default function AboutPage() {
    return (
        <div>
            <Navbar />
           <AboutHeader />
           <AboutIntro />
        </div>
    )
}
