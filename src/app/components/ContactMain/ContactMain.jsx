import React from 'react'

import { Form, Formik } from 'formik'

import FormText from '../Form/FormText'
import * as Yup from 'yup'

import { Container } from '@material-ui/core'
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

import './StyleContactMain.css'


const validationSchema = Yup.object({
    name: Yup.string().required(),
    email: Yup.string().required().email(),
    phone: Yup.string().required().min(5),
    message:Yup.string().required().min(16),
  });



export default function ContactMain() {

    return (
        <div style={{ flex: 0.7}}>
            <Container>
                <Formik
                    validationSchema={validationSchema}
                    initialValues={{
                        email: '',
                        phone:"",
                        message:'',
                        name:'',
                    }}
                    onSubmit={(values)=>{
                        console.log(values)
                    }}
                
                    >
                    {({ dirty,isSubmitting, isValid })=>( 
                        <Form>
                            <div className='contact_form'>
                                <FormText 
                                    name='email' 
                                    label="Email Address"/> 
                                    <FormText 
                                    name='name' 
                                     label="Name"/>
                                    <FormText 
                                    name='phone' 
                                    label="Phone Number" />
                                    <FormText 
                                    name='message' 
                                    multiline
                                    rows={5}
                                    label="Write Message" />
                                    <button className='contact_send_btn' type='submit'> 
                                        Send Message <ArrowRightAltIcon />
                                    </button>

                            </div>
                        </Form>
                    )}

                </Formik>
            </Container>
        </div>
    )
}
