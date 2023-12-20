import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import { CgWorkAlt } from "react-icons/cg";
import './Skills.scss';

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";


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

const Skills = () => {
  const [experiences, setExperiences] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const query = '*[_type == "experiences"]';
    const skillsQuery = '*[_type == "skills"]';

    client.fetch(query).then((data) => {
      setExperiences(data);
      console.log(experiences)
    });

    client.fetch(skillsQuery).then((data) => {
      setSkills(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">Skills & Experiences</h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <motion.div
                variants={scaleVariants}
                whileInView={scaleVariants.whileInView}
              >
                <motion.div
                  className="app__flex"
                  whileInView={{ opacity: 1 }}
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.5, type: 'tween' }}
                  style={{ backgroundColor: skill.bgColor }}
                >
                  <img src={urlFor(skill.icon)} alt={skill.name} />
                </motion.div>
              </motion.div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <div className="app__skills-exp">
          <VerticalTimeline lineColor="#000">
            {console.log(experiences)}
            {experiences.map((item, index) => (
              <React.Fragment key={index}>
                <VerticalTimelineElement
                
                  contentStyle={{
                    background:
                      "#f3f4f6" ,
                    boxShadow: "none",
                    border: "1px solid rgba(0, 0, 0, 0.05)",
                    textAlign: "left",
                    padding: "1.3rem 2rem",
                  }}
                  contentArrowStyle={{
                    borderRight:
                      "0.4rem solid #9ca3af"
                        ,
                  }}
                  date={item.year}
                  icon={React.createElement(CgWorkAlt)}
                  iconStyle={{
                    background:
                     "white" ,
                    fontSize: "1.5rem",
                  }}
                  
                >
                  <h3 className="font-semibold capitalize">{item.title}</h3>
                  <p className="font-normal !mt-0">{item.location}</p>
                  <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                    {item.description}
                  </p>
                </VerticalTimelineElement>
              </React.Fragment>
            ))}
          </VerticalTimeline>
          

        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, 'app__skills'),
  'skills', 'app__whitebg'
);