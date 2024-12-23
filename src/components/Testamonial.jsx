import React from 'react'
import { TestamonialContent } from './Const'

const Testamonial = () => {
  return (
    <section id='testamonials'>
        <div className='max-w-screen-2xl mx-auto lg:px-32 xl:px-48 px-7 md:px-32 relative pb-20 mt-20 mb-40 lg:my-20'>
            <img className='absolute -top-10 left-5 -z-10 lg:left-32 md:left-32' src={TestamonialContent.bgQuote} alt="quote" />
            <div className='grid lg:grid-cols-3 gap-5'>
                {TestamonialContent.testamoniaCards.map((card,index)=>(
                    <TestamonialCard key={index} text={card.text} image={card.image} personName={card.person} title={card.jobTitle} />
                ))}
            </div>
        </div>
    </section>
  )
}

export default Testamonial

const TestamonialCard = ({text,image,personName,title})=>{
    return(
        <div className='lg:p-10 p-5 md:p-7 md:pt-10 pt-7 lg:pt-14 bg-Dark-Blue-4 rounded-lg'>
            <p>{text}</p>
            <div className='flex gap-3 pt-5'>
                <img className='rounded-full h-12' src={image} alt="profileimage" />
                <div className='grid content-center'>
                    <span className='font-bold'>{personName}</span>
                    <span className='text-xs'>{title}</span>
                </div>
            </div>
        </div>
    )
}