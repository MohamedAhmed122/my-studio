import React from 'react'


import ContactMain from '../../components/ContactMain/ContactMain'
import ContactHeader from '../../components/ContactHeader/ContactHeader'
import ContactSide from '../../components/ContactSide/ContactSide'

export default function ContactPage() {
    return (
        <div style={{backgroundColor: '#eefcfd', height:'100vh'}}>
        <ContactHeader />
        <div style={{ display: 'flex',}}>
            <ContactSide />
            <ContactMain />
        </div>
        </div>
    )
}
