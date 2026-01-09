import React from 'react';
import './intro.css';
import profilePic from '../../assets/profilePic.png'
import linkedIn from '../../assets/linkedin.png'
import github from '../../assets/github.png'
import mail from '../../assets/gmail.png'
import {Link} from 'react-scroll';

const Intro = () => {
    return (
        <section id='intro' className='introContainer'>
            <div className="superContainer__intro">
                <div className="profileCard__intro"> 
                    <img className="profilePic__intro" src= {profilePic} alt="profilePic"/>
                    <div className="profileCardContent__intro">
                        <span className="workStatus__intro">• AVAILABLE FOR WORK</span>
                        <span className="name__intro">Steven Li</span>
                        <p className="hook__intro">Full-stack data professional focused on accuracy, impact, and clarity.</p>
                        <div className="socialContainer__intro">
                            <img className="linkedin__intro" src = {linkedIn} alt="linkedin"/>
                            <img className="github__intro" src = {github} alt="github"/>
                            <img className="email__intro" src = {mail} alt="mail"/>
                        </div>
                    </div>
                </div>
                <div className='content__intro'>
                    <span className="hello__intro">Hello</span>
                    <br/>
                    <span className="role__intro">Here's who I am & what I do</span>
                    <div className="buttonContainer__intro">
                        <Link><button className="resumeButton__intro">RESUME</button></Link>
                        <Link><button className="coverLetterButton__intro">COVER LETTER</button></Link>
                    </div>
                    <p className="paragraph__intro">
                        The sky stretches endlessly above us, a shifting canvas of light and color. By day it glows in shades of blue, brushed with drifting clouds, and by night it deepens into darkness scattered with stars. It reflects our weather, our time, and often our moods.
                        <br/>
                        <br/>
                        The morning air was crisp, carrying the promise of a fresh start. Sunlight filtered through the trees, turning ordinary moments into something quietly hopeful.
                    </p>
                    
                </div>
            </div>
        </section>
    )
}

export default Intro;