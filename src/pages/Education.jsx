import React from 'react'
import myImage from '/images/me2.jpeg'
import { GiGraduateCap } from 'react-icons/gi'
import './Education.css'

const Education = () => {
  return (
    <section>
        <h5>Get To know</h5>
        <h2>About My Education</h2>

        <div className='container education_container'>
            <div className='my_education'>
                <div className='my_education_image'>
                    <img src={myImage} alt="Razib" />
                </div>
            </div>
            <div className="education_content">
                <div className='education_cards'>
                    <article className='education_card'>
                        <GiGraduateCap className='education_icon'/>
                        <h5>HSLC</h5>
                        <small>
                            (Secondary Education Board of Assam) <br/>
                            <i>Balagaon High School</i>
                        </small>
                    </article>
                    <article className='education_card'>
                        <GiGraduateCap className='education_icon'/>
                        <h5>HS</h5>
                        <small>
                            (Assam Higher Secondary Educatin Council) <br/>
                            <i>Anundoram Borooah Academy</i>
                        </small>
                    </article>
                    <article className='education_card'>
                        <GiGraduateCap className='education_icon'/>
                        <h5>BTech</h5>
                        <small>
                            (Assam Science and Technology University) <br/>
                            <i>Dhemaji Engineering College</i>
                        </small>
                    </article>
                </div>
                <p>
                I am a B.Tech 2nd year CSE student from Assam, interested in C, C++, Python, data structures, and algorithms. I like implementing stacks, linked lists, and graphs, and I am also learning HTML, CSS, and JavaScript to build a portfolio and showcase my projects.
                </p>
            </div>
        </div>
    </section>
  )
}

export default Education