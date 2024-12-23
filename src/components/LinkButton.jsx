import React from 'react'

const LinkButton = ({link,text}) => {
    return (
        <a className='px-10 py-3 bg-gradient-to-r from-Cyan to-Blue rounded-full font-bold tracking-wide hover:from-Cyan/70 hover:to-Blue/70 transition-all duration-200' href={link}>{text}</a>
    )
}

export default LinkButton