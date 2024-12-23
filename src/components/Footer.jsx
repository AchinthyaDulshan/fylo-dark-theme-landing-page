import React from 'react'
import { FooterSection } from './Const'

const Footer = () => {
    return (
        <footer className='bg-Dark-Blue-3'>
            <div className='max-w-screen-2xl mx-auto px-10 pb-20 lg:pt-40 pt-52'>
                <img className='h-10 lg:h-auto' src={FooterSection.logo} alt="logo" />
                <div className='grid lg:grid-cols-4 pt-10 gap-5'>
                    <div>
                        {/* location  */}
                        <div className='grid grid-flow-col gap-5 place-content-start '>
                            {FooterSection.location.icon}
                            <a href={FooterSection.location.link}>{FooterSection.location.text}</a>
                        </div>
                    </div>
                    <div className='grid gap-5 lg:gap-1'>
                        {/* call  */}
                        <div className='h-fit grid grid-flow-col gap-5 place-content-start items-center'>
                            {FooterSection.mobile.icon}
                            <a href={FooterSection.mobile.link}>{FooterSection.mobile.text}</a>
                        </div>
                        {/* email  */}
                        <div className='h-fit grid grid-flow-col gap-5 place-content-start items-center'>
                            {FooterSection.email.icon}
                            <a href={FooterSection.email.link}>{FooterSection.email.text}</a>
                        </div>
                    </div>
                    <div className='grid lg:grid-cols-2 lg:grid-rows-4 gap-4 lg:gap-2 py-10 lg:py-0'>
                        {FooterSection.navLinks.map((nav, index) => (
                            <a key={index} href={nav.Link} className='hover:font-bold transition-all duration-200'>{nav.text}</a>
                        ))}
                    </div>
                    <div className='flex gap-5 justify-center lg:justify-start'>
                        {FooterSection.socialMedialinks.map((socialMedia, index) => (
                            <a key={index} className='rounded-full border w-10 h-10 flex justify-center items-center  transition-all duration-200 hover:border-Cyan hover:text-Cyan' href={socialMedia.link}>{socialMedia.icon}</a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer