import React from 'react'
import { BsFillPatchCheckFill } from 'react-icons/bs';
import './Skills.css'

const Skills  = () => {
  return (
    <section>
      <h5>The Skills I Have</h5>
      <h2>My Experiance</h2>
      <div className='container skills_container'>
        <div className='skills_frontend'>
          <h3>Frontend Development</h3>
          <div className='skills_content'>
            <article className='skills_detail'>
              <BsFillPatchCheckFill className='skills_icon'/>
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experianced</small>
              </div>
            </article>
            <article className='skills_detail'>
              <BsFillPatchCheckFill className='skills_icon'/>
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Experianced</small>
              </div>
            </article>
            <article className='skills_detail'>
              <BsFillPatchCheckFill className='skills_icon'/>
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='skills_detail'>
              <BsFillPatchCheckFill className='skills_icon'/>
              <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='skills_detail'>
              <BsFillPatchCheckFill className='skills_icon'/>
              <div>
                <h4>React.js</h4>
                <small className='text-light'>Experianced</small>
              </div>
            </article>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Skills