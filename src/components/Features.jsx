import React from 'react'
import { FeaturesSection } from './Const'
import { motion } from 'motion/react'

const Features = () => {
  return (
    <section id='features'>
        <div className='max-w-screen-2xl mx-auto my-20'>
            <div className='grid md:grid-cols-2 md:grid-rows-2 gap-10 lg:w-3/5 w-10/12 mx-auto'>
                {FeaturesSection.cards.map((card,index)=>(
                    <FeatureCard key={index} icon={card.icon} title={card.title} text={card.description} />
                ))}
            </div>
        </div>
    </section>
  )
}

export default Features

const FeatureCard = ({icon,title,text})=>{
    return(
        <div className='flex flex-col gap-3 items-center justify-between text-center p-5'>
            <img className='lg:h-24 h-16' src={icon} alt="icon" />
            <h3 className='lg:text-xl text-lg font-bold tracking-wide'>{title}</h3>
            <p>{text}</p>
        </div>
    )
}