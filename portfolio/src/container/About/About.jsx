import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

import './About.scss'
import { AppWrap, MotionWrap } from '../../wrapper'
import { urlFor, client } from '../../client'

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query)
      .then((data) =>
        setAbouts(data)
      )
  }, [])
  return (
    <>
      <div className='app__about-me about__heading'>
        <div className='app__about-me-el'>
          <h2 className='head-text'>
            About <span>Me</span>
          </h2>
        </div>
        <div className='app__about-me-el about__text'>
          <p className='p-text'>
            Hi, I’m Gaurav Verma, someone who is always fascinated with tech and loves to know the insides of it.
            I’m passionate about developing innovative and impactful solutions using cutting-edge technologies. I have experience in Web Dev and ML.<br /><br />
            During my academic journey, I've had the privilege of exploring diverse technologies and honing my skills in languages like C++, Java, and Web Development tools such as HTML, CSS, and JavaScript. My proficiency extends to popular frameworks like ReactJS, NodeJS, Flask for Web Dev and ML.<br /><br />
            In the professional realm, I had the opportunity to intern at IBM Skillsbuild on AICTE, focusing on Machine Learning. My project involved developing a mental fitness tracker using Jupyter Notebook and Python. Additionally, I contributed to Let's Grow More in Frontend Development, crafting dynamic Todo List and Calculator apps with JS and NodeJS. I have learnt a lot of my skills through various hackathons.<br /><br />
            I’m always eager to learn new skills and technologies, and collaborate with other developers. You can contact me via email, phone, or LinkedIn, and check out my GitHub and LeetCode profiles for more of my work. Thank you for visiting my portfolio website! 😊
          </p>
        </div>
        
        
      </div>

      <div className='app__profiles'>
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}

            className='app__profile-item'
            key={about.title + index}
          >

            <img src={about.imgUrl ? urlFor(about.imgUrl) : ""} alt={about.title} />

            <h2 className='bold-text' style={{ marginTop: 20 }}>{about.title}</h2>
            <p className='p-text' style={{ marginTop: 10 }}>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  )
}

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about', 'app__whitebg'
);
