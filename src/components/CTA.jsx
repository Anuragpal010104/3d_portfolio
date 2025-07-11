import React from 'react'
import { Link } from 'react-router-dom'

const CTA = () => {
  return (
    <section className="cta">
        <p className="cta-text">Have something in mind ? <br className="sm:block hidden"/> 
        Let's build something together !</p>
        <Link to="/contact" className="btn">
            Contact me
        </Link>
    </section>
  )
}

export default CTA