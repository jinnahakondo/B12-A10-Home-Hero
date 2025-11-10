import React from 'react';
import { easeInOut, motion } from "motion/react"

const ChooseCard = ({ card }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            transition={{  duration: 0.2 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className='group bg-base-200 shadow-sm rounded-lg p-6 hover:bg-primary '>
            <motion.h3
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.2, ease: easeInOut }}
                className='text-xl group-hover:text-white font-semibold text-center my-4 transition-all ease-in-out '>{card.title}</motion.h3>
            <motion.p
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.2, ease: easeInOut }}
                className='text-gray-500 text-center group-hover:text-white transition-all ease-in-out '>{card.description}</motion.p>
        </motion.div>

    );
};

export default ChooseCard;