import React, { useState, useEffect } from 'react'
import { AiFillEye, AiFillGithub } from 'react-icons/ai'
import { motion } from 'framer-motion'

import { AppWrap } from '../../wrapper';
import { urlFor, client } from '../../client'
import './Work.scss'


const Work = () => {
  return(
    <>
      <h2 className='head-text'>
        My <span>Portfolio</span><br />section
      </h2>
      <div className='app__work-filter'>
        {['Frontend Project','Machine Learning','Web Application'].map((item,index) => (
          <div
            key={index}
            onClick={() => handleWorkFilter(item)}
          >

          </div>
        ))}
      </div>
    </>
  )
}


export default Work