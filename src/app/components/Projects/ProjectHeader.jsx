import React from 'react'

import StopIcon from '@material-ui/icons/Stop';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import DashboardIcon from '@material-ui/icons/Dashboard';

import './styleProject.css'
import { Container } from '@material-ui/core';

export default function ProjectHeader() {
    return (
        <div className='project_header'>
            <Container>
                <p className='project_header_text'>
                    I will take your business idea<br />
                    to the next level
                </p>
                <div className='select'>
                    <p>Show Me <span>Everything</span></p>
                </div>

                <div className='project_select'>
                    <div className='project_select_container'>
                        <p>Websites</p>
                        <StopIcon  fontSize='medium' className='icon1' />
                    </div>
                    <div className='project_select_container'>
                        <p>Mobile App</p>
                        <FiberManualRecordIcon   fontSize='medium' className='icon2' />
                    </div>
                    <div className='project_select_container'>
                        <p>Diagrams</p>
                        <DashboardIcon fontSize='medium' className='icon3' />
                    </div>
                </div>

            </Container>
        </div>
    )
}
