import React from 'react';
import {motion, useAnimationControls} from 'framer-motion';
export default function Animation_Controls() {
    const flipControls =useAnimationControls();
    const handleClick =()=>{
        flipControls.start("flip");
    }
  return (
    <div
        style={{
            display: 'grid',
            placeContent:"center",
            height:'100vh',
            gap:'0.8rem',
        }}
    >   
    <button
        onClick={handleClick}
        className='example-Button'
    >
        Flip It
    </button>
    <motion.div
        style={{
            width:150,
            height:150,
            background:"black",
            color:'white',
        }}
        variants={{
            initial:{ rotate:0},
            flip:{
                rotate:360,
            },
        }}
        initial="initial"
        animate={flipControls}
    > <h4>Hello</h4></motion.div>
        
    </div>
  )
}


// the following is a code for flipping everytime button is clicked. useState is used
// import React, { useState } from 'react';
// import { motion } from 'framer-motion';

// export default function Animation_Controls() {
//   const [isFlipped, setIsFlipped] = useState(false);

//   const handleClick = () => {
//     setIsFlipped(!isFlipped); // Toggle the flip state on each click
//   };

//   return (
//     <div
//       style={{
//         display: 'grid',
//         placeContent: 'center',
//         height: '100vh',
//         gap: '0.8rem',
//       }}
//     >
//       <button
//         onClick={handleClick}
//         className='example-Button'
//       >
//         Flip It
//       </button>
//       <motion.div
//         style={{
//           width: 150,
//           height: 150,
//           background: 'black',
//         }}
//         animate={{
//           rotate: isFlipped ? 360 : 0, // Switch between 360° and 0° based on state
//         }}
//         transition={{
//           duration: 0.6,
//           ease: 'easeInOut',
//         }}
//       ></motion.div>
//     </div>
//   );
// }

