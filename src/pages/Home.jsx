import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import ME from '/images/me.jpg'
import './Home.css'

const Home = () => {
  return (
    <header id='Home'>
        <div className="container home_container">
            <h5>Hello, I am</h5>
            <h1>Razibul Karim</h1>
            <h5 className='text-light'>Btech 2nd year CSE student</h5>
            <div className='btn-container'>
                <a href="" download className='btn btn-download'>
                    Download CV
                </a>
                <a href="#contact" download className='btn btn-contact'>
                    Contact ME
                </a>
            </div>
            <div className="home_social">
                <a href="">
                    <BsLinkedin/>
                </a>
                <a href="">
                    <BsGithub/>
                </a>
            </div>
            <div className="me">
                <img src={ME} alt="Rzib" />
            </div>
        </div>
    </header>
  )
}

export default Home