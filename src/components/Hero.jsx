import React from 'react'
import { HeroContent, animateVariants } from './Const'
import LinkButton from './LinkButton'
import { motion } from 'motion/react'

const Hero = () => {
    return (
        // header - Hero area start 
        <header className='bg-Dark-Blue-1 bg-bg-Mobile lg:bg-bg-Desktop bg-cover bg-no-repeat bg-center'>
            {/* container start  */}
            <div className='max-w-screen-2xl mx-auto pb-16 px-7'>
                <div className='grid place-items-center gap-7 mx-auto text-center'>
                    {/* illustration start  */}
                    <motion.img variants={animateVariants.zoomIn} initial="staySmall" whileInView="normal" viewport={{ once: true }} className='lg:w-1/2 md:w-3/5' src={HeroContent.illustration} alt="illustration" />
                    {/* Branding text start  */}
                    <motion.h1 variants={animateVariants.fromLeft} initial="stayLeft" whileInView="normal" viewport={{ once: true }} className='lg:w-1/3 md:w-1/2 font-bold lg:text-3xl text-2xl tracking-wide'>{HeroContent.heading}</motion.h1>
                    {/* paragraph start  */}
                    <motion.p variants={animateVariants.fromRight} initial="stayRight" whileInView="normal" viewport={{ once: true }} className='lg:w-1/3 md:w-1/2 '>{HeroContent.text}</motion.p>
                    {/* btn start  */}
                    <LinkButton link={HeroContent.btn.link} text={HeroContent.btn.text} />
                </div>
            </div>
            {/* container end  */}
        </header>
        // header - Hero area end 
    )
}

export default Hero