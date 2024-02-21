import React from 'react'
import { useEffect, useState } from 'react';
import './TypingAnimation.css';


export const TypeAnimation = () => {
    const [text, setText] = useState('');

    useEffect(() => {
        const originalText = "We have a team of experts that will help you get your trucking business started. We will help you get your trucking authority, set up your company, and get your truck on the road. We will also find you an experienced A class driver and automate your truck 100% through our dispatch service. You will sit back and collect passive income monthly. We will help you get your trucking authority, set up your company, and get your truck on the road. We will also find you an experienced A class driver and automate your truck 100% through our dispatch service. You will sit back and collect passive income monthly.";
        let newText = '';

        originalText.split(' ').forEach((word, index) => {
            setTimeout(() => {
                newText += word + ' ';
                setText(newText.trim());
            }, index * 80); // Adjust delay between each word
        });
    }, []);
  return (
   <>
    <p className='WhatMakePowerFullPara'>{text}</p>
   
   </>
  )
}
