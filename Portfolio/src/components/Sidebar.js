import React from 'react'
import github from '../assets/icons/github.svg'
import pin from '../assets/icons/pin.svg'
import tie from '../assets/icons/tie.svg'
import mightycoder from '../assets/mightycoder.svg'
import { motion } from 'framer-motion'
import RESUME from '../assets/RESUME.pdf'
import Portfolio from '../assets/Portfolio.jpg'

function Sidebar() {
    const handleemailme = () =>{
        window.open('mailto:kunalraval79@gmail.com')
    }

    const sidebar_variant = {
        initial: {
            x: '-10vw',
            opacity: 0
        },
        visible: {
            x: 0,
            opacity:1,
            transition:{
                dealy: 0.2, duration:0.7,type:'spring'
            }

        },
        exit:{
            opacity:0,
            transition:{
                ease: 'easeInOut'
            }
        }
    }
    return (
        <motion.div className="sidebar"
        variants={sidebar_variant}
        initial="initial"
        animate="visible" 
        exit="exit"
        
        
        >
            <img src={Portfolio} alt="avatar" className="sidebar__avatar" />
            <div className="sidebar__name">Kunal <span>Raval</span></div>
            <div className="sidebar__item sidebar__title">Frontend Developer</div>
            <a href={RESUME}>
                <div className="sidebar__item sidebar__resume">
                    <img src={tie} alt="resume" className="sidebar__item sidebar__resume" /> Resume
                </div>
            </a>
            {/* <figure className="sidebar__social-icons">
                <a href="a"> <img src="" alt="Linkedin" className="sidebar__icon" /></a>
                <a href="a"> <img src="" alt="Github" classname="sidebar__icon" /></a>
            </figure> */}
            <div className="sidebar__contact">
                <div className="sidebar__item">
                    <a href="https://github.com/kunalraval79"> <img src={github} alt="github" className="sidebar__icon mr-3"/>github</a>
                </div>
                <div className="sidebar__location"><img src={pin} alt="Location" className="sidebar__icon"/> Pune, India</div>
                <div className="sidebar__item"> kunalraval79@gmail.com </div>
                <div className="sidebar__item">9284494816</div>
                <div className="sidebar__item sidebar__email" onClick={handleemailme}>Email Me</div>
            </div>
        </motion.div>
    )
}

export default Sidebar
