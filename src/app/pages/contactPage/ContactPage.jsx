import React from 'react'

import ContactMain from '../../components/ContactMain/ContactMain'
import ContactHeader from '../../components/ContactHeader/ContactHeader'
import ContactSide from '../../components/ContactSide/ContactSide'


import './styleContactPage.css'

export default function ContactPage() {
    return (
        <div style={{backgroundColor: '#eefcfd',}}>
            <ContactHeader />
            <div className='contact_page' >
                <div className='contact_page_left' >
                    <ContactSide />
                </div>
                <div className='contact_page_right'>
                    <ContactMain />
                </div>
            </div>
        </div>
    )
}
