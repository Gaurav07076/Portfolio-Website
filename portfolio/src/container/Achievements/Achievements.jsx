import React, { useState, useEffect } from 'react'
import { AppWrap, MotionWrap } from '../../wrapper'
import { client } from '../../client';
import { motion } from 'framer-motion';
import './Achievements.scss'

const Achievements = () => {

    const [achievements, setAchievements] = useState([]);

    useEffect(() => {
        const query = '*[_type == "achievements"]';


        client.fetch(query).then((data) => {
            setAchievements(data);

        });
    }, []);

    return (
        <>
            <h2 className='head-text app__achievement-head'>Achievements</h2>
            <div className='app__achievement'>
                {achievements.map((achievement) => (
                    <motion.div
                        key={achievement.description}
                        className='app__achievement-item'
                        whileHover={{ scale: 1.1 }}
                        whileFocus={{ scale: 1.1 }}
                        whileToggle={{ scale: 1.1 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}

                    >
                        {achievement.description}
                    </motion.div>
                ))}

            </div>
        </>
    )
}


export default AppWrap(
    MotionWrap(Achievements,),
    'achievements', 'app__primarybg'
);