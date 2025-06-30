import React from 'react'
import { Link } from 'react-router-dom';
import { arrow } from '../assets/icons'

const InfoBox = ({text, link, btnText}) => (
    <div className="info-box">
        <p className="font-medium sm:text-xl text-current">
            {text}
        </p>
        <Link to={link} className="neo-brutalism-white neo-btn">
            {btnText}
            <img src={arrow} className="w-4 h-4 object-contain"/>
        </Link>
    </div>
)

const renderContent = {
    1:(
        <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">Hi, I am  
        <span className="font-semibold"> Anurag 👋
        </span>
        <br />
        A Software developer from India.
        </h1>
    ),
    2:(
        <InfoBox 
            text="I am a full stack developer with a passion for building web applications and learning new technologies."
            link="/about"
            btnText="Learn More"
        />
    ),
    3:(
        <InfoBox 
        text="Created  projects using React, Node, Express, MongoDB, and other cool libraries."
        link="/projects"
        btnText="View Projects"
        />
    ),
    4:(
        <InfoBox 
        text="Need a developer? I am just few keystrokes away."
        link="/contact"
        btnText="Let's Talk"
        />
    )

}



const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
}

export default HomeInfo