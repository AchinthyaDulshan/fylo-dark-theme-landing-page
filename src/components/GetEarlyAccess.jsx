import React, { useState } from 'react'
import { GetEarlyAccessContent, animateVariants } from './Const'
import { motion } from 'motion/react'
import emailValidate from '../utils/EmailValidation'

const GetEarlyAccess = () => {

    const [email, setEmail] = useState('');
    const [error, setError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!emailValidate(email)) {
            setError(true);
        }
    }

    return (
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1, transition: { duration: 0.5 } }} viewport={{ once: true, amount: 0.8 }} className='lg:p-10 px-5 py-10 text-center space-y-3 rounded-lg drop-shadow-2xl lg:w-4/5 xl:w-3/5 2xl:w-1/2 md:w-10/12  w-11/12 absolute left-1/2 -translate-x-1/2 -translate-y-1/2 bg-Dark-Blue-1'>
            <h1 className='lg:text-3xl text-xl font-bold'>{GetEarlyAccessContent.heading}</h1>
            <p>{GetEarlyAccessContent.text}</p>
            <form onSubmit={handleSubmit} method="post">
                <div className='pt-5 flex flex-col lg:flex-row gap-5 justify-center md:px-14 lg:px-0'>
                    <div className='flex flex-col justify-center gap-2'>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} className='rounded-full py-3 px-5 w-full md:w-96 text-Dark-Blue-3 font-semibold' type="text" />
                        {error && <span className='block text-Light-Red text-xs font-bold'>{GetEarlyAccessContent.errorMeg}</span>}
                    </div>
                    <button type='submit' className='px-10 py-3 h-fit bg-gradient-to-r from-Cyan to-Blue rounded-full font-bold tracking-wide hover:from-Cyan/70 hover:to-Blue/70 transition-all duration-200'>{GetEarlyAccessContent.btn.text}</button>
                </div>

            </form>
        </motion.div>
    )
}

export default GetEarlyAccess
