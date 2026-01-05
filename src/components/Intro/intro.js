import React from 'react';
import './intro.css';
import profilePic from '../../assets/profile.png'

const Intro = () => {
    return (
        <section id='intro' className='introContainer'>
            <span className='introWorkStatus'>• AVAILABLE FOR WORK</span>
            <div className='introInnerContainer'>
                <div className="introContent">

                </div>
                <div className="introProfileCard">
                <img src={profilePic} alt="Profile" className="introProfilePic"/>
                <div className="introExternalLinks"></div>
                </div>
            </div>
        </section>
    )
}

export default Intro;