import React, { useState } from 'react'
import {motion, AnimatePresence} from 'framer-motion';
export default function Motion1() {
    const [isVisible,setIsVisible]=useState(true);
  return (
    <div
        style={{
            display: 'grid',
            placeContent:"center",
            height:'100vh',
            gap:'0.8rem',
        }}
    >   
        <motion.button 
            className='example-Button'
            onClick={()=>setIsVisible(!isVisible)}
            layout
        >
            Show / Hide 
        </motion.button>
        <AnimatePresence mode='popLayout'>
            {isVisible && 
                (<motion.div
                     key="motion-div"
                    initial={{
                        rotate:'0deg',
                        scale:0,
                        y:0,
                    }}
                    animate={{
                        rotate:'180deg',
                        scale:1,
                        y:[0,150,-150,-150,0],
                    }}
                    exit={{
                        rotate:'0deg',
                        scale:0,
                        y:0,
                    }}
                    transition={{
                        duration:1,
                        ease:'backInOut',
                        times:[0,0.25,0.5,0.85,1]
                    }}
                    style={{
                        width:'200px',
                        height:'200px',
                        background:'black',
                        textAlign:'center',
                        color:'white',
                }}> 
                    <p>
                        Hiiii
                    </p>
                </motion.div>
            )}
        </AnimatePresence>
       
    </div>
  )
}
