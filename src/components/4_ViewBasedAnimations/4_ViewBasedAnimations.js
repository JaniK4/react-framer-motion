import React, { useEffect, useRef } from 'react'
import {motion, useInView} from 'framer-motion'
export default function ViewBasedAnimations() {
    const ref = useRef(null);
    const isInView=useInView(ref, {once:true}); //makes stuff happen only once

    useEffect(()=>{
        console.log("Is in view ->",isInView)
    },[isInView]);
  return (
    <>
    <div style={{ height: '250vh'}}>
        <motion.div
        style={{
            height:"100vh",
            background:"black",
        }}
        initial={{ opacity: 0}}
        whileInView={{ opacity:1 }}
        transition={{ duration:5}}
        >

        </motion.div>
    </div>
    <div
        ref={ref}
        style={{
            height:"100vh",
            background:isInView?"blue":"red",
            transition:'1s background',
        }} 
    >
        
    </div>
    </>
  )
}
