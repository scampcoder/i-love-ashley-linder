import React from 'react'
import compliments from '../compliments'
import pinkborder from '../pinktopborder.png'

export default function Compliment() {
    const randomIndex = Math.floor(Math.random() * compliments.length)
    
        if(compliments[randomIndex].hasOwnProperty('image')) {
            console.log("image found")
            return (
                <div className='compliment-container'>
                <img src={pinkborder} className="pink-border" alt=''/>
                        <p className='compliment'>{compliments[randomIndex].text} 
                            <br />
                            <img src={compliments[randomIndex].image} alt={compliments[randomIndex].alt} className="pics"/>
                        </p>
               </div>
            )
        } else {
            console.log("image not found")
            return (
                <div className='compliment-container'>
                <img src={pinkborder} className="pink-border" alt=''/>
                        <p className='compliment'>{compliments[randomIndex].text}</p>
               </div>
            )
        }
    }