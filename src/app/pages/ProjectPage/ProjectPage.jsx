import React from 'react'
import ProjectHeader from '../../components/Projects/ProjectHeader'
import Projects from '../../components/Projects/Projects'
import Navbar from '../../layouts/Navbar/Navbar'

export default function ProjectPage() {
    return (
        <div>
           {/* <Navbar /> */}
           <ProjectHeader />
           <Projects />
        </div>
    )
}
