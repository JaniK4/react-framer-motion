import React from 'react'
import {motion, MotionConfig} from 'framer-motion'
export default function Gestures() {
  return (
    <div
        style={{
            display: 'grid',
            placeContent:"center",
            height:'100vh',
            gap:'0.8rem',
        }}
    >   
        <MotionConfig
            transition={{
                duration: 0.15,
                ease: 'easeInOut'
            }}
        >
            <motion.button 
                whileHover={{scale: 1.05}}
                whileTap={{scale:0.95, rotate:"2.5deg"}}
                
                className='example-Button'
                >
                Click Me!!
            </motion.button>
            <motion.button 
                whileHover={{scale: 1.25}}
                whileTap={{scale:0.95, rotate:"-4deg"}}
                style={{backgroundColor:"red"}}
                className='example-Button'
            >
                Click This!!
            </motion.button>
        </MotionConfig>
    </div>
  )
}
