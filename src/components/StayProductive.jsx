import React from 'react'
import { StayProductiveContent,animateVariants } from './Const'
import { motion } from 'motion/react'

const StayProductive = () => {
  return (
    <section id='stayProductive'>
      <div className='lg:px-10 px-7 md:px-10 py-16 mx-auto grid lg:grid-cols-2 gap-10'>
        <div className=''>
          <motion.img variants={animateVariants.zoomIn} initial="staySmall" whileInView="normal" viewport={{ once: true, amount:0.8 }} className='md:w-3/5 mx-auto' src={StayProductiveContent.illustration} alt="" />
        </div>
        <motion.div variants={animateVariants.fromRight} initial="stayRight" whileInView="normal" viewport={{ once: true, amount:0.8 }} className='grid content-center gap-5 md:gap-2 lg:w-4/5 mx-auto'>
          <h1 className='lg:text-3xl md:text-xl md:pb-5 lg:pb-0 text-lg text-center lg:text-left font-bold lg:w-[16ch] tracking-wide'>{StayProductiveContent.heading}</h1>
          <p>{StayProductiveContent.para_1}</p>
          <p>{StayProductiveContent.para_2}</p>
          <a className='text-Cyan hover:text-White w-fit flex items-center gap-2 relative after:block after:absolute after:bg-Cyan hover:after:bg-White after:h-0.5 after:-bottom-1 after:w-full transition-all duration-200' href={StayProductiveContent.link.linkTo}>{StayProductiveContent.link.text}{StayProductiveContent.link.icon}</a>
        </motion.div>
      </div>
    </section>
  )
}

export default StayProductive