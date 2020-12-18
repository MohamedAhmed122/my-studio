import React from 'react'


import ContactMain from '../../components/ContactMain/ContactMain'
import ContactHeader from '../../components/ContactHeader/ContactHeader'
import ContactSide from '../../components/ContactSide/ContactSide'

export default function ContactPage() {
    return (
        <div style={{backgroundColor: '#eefcfd',}}>
        <ContactHeader />
        <div style={{ display: 'flex'}}>
            <div style={{flex:'0.3'}}>
                <ContactSide />
            </div>
            <div style={{flex:'0.7'}}>
                <ContactMain />
            </div>
        </div>
        </div>
    )
}
