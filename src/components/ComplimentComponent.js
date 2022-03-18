import React from 'react'
import compliments from '../compliments'

export default function Compliment() {
    const randomIndex = Math.floor(Math.random() * compliments.length)
    const complimentText = compliments[randomIndex].text;

    return (
        <div className='compliment-container'>
            <p className='compliment'>{complimentText}</p>
        </div>
    )
}