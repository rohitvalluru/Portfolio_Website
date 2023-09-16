import { technologies } from '../constants';
import React from 'react'
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { textVariant } from '../utils/motion';

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()} className='mx-5 mt-5'>
        <h2 className={styles.sectionHeadText}
        >Skills.</h2>
      </motion.div>
      <div className='flex flex-row flex-wrap justify-center gap-14 mt-14'>
        {technologies.map((technology) => (
          <div className='w-24 h-24' key={technology.name}>
            <img src={technology.icon} />
          </div>
        ))}
      </div>
    </>
  )
}

export default Tech;