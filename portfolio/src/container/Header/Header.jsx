import React from 'react';
import { motion } from 'framer-motion';

import { images } from '../../constants';
import './Header.scss';
import { AppWrap } from '../../wrapper';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};

const Header = () => (
  <div className="app__header app__flex">
    <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className="app__header-info"
    >
      <div className="app__header-badge">
        <div className="badge-cmp app__flex">
          <span>👋</span>
          <div style={{ marginLeft: 20 }}>
            <p className="p-text">Hello, I am</p>
            <h1 className="head-text">Gaurav</h1>
          </div>
        </div>

        <div className="tag-cmp app__flex">
          <p className="p-text">A Web Developer, Problem Solver</p>
          <p className='p-text'>and ML Enthusiast</p>  
        </div>
      </div>
    </motion.div>

    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5, delayChildren: 0.5 }}
      className="app__header-img"
    >
      <img src={images.profile} alt="profile_bg" />
      <motion.img
        whileInView={{ scale: [0, 1] }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        src={images.circle}
        alt="profile_circle"
        className="overlay_circle"
      />
    </motion.div>

    <motion.div
      variants={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className="app__header-circles"
    >
    {/* images.cpp, */}
      {[ images.node, images.react, images.ml].map((circle, index) => (
        <motion.div className="circle-cmp app__flex" 
          key={`circle-${index}`}
          whileInView={{opacity:1}}
          whileHover={{scale: 1.2}}
          transition={{duration:0.5,type:'tween'}}
        >
          <img src={circle} alt="profile_bg" />
        </motion.div>
      ))}
    </motion.div>
  </div>
);

export default AppWrap(Header, 'home')

