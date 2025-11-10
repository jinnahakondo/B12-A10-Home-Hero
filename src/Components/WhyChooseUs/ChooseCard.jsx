import { motion } from "motion/react"
import React from 'react';

const ChooseCard = ({ card }) => {
    return (
        <div className='group bg-base-200 rounded-lg p-6 hover:bg-primary transition-all'>
            <h3 className='text-xl group-hover:text-white font-semibold text-center my-4'>{card.title}</h3>
            <p className='text-gray-500 text-center group-hover:text-white '>{card.description}</p>
        </div>

    );
};

export default ChooseCard;