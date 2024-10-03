// import { motion } from 'framer-motion';
// import React from 'react';

// function RotateExample() {
//   return (
//     <motion.div
//       animate={{ rotate: 360 }}       // Rotate the element 360 degrees
//       transition={{ repeat: Infinity, duration: 2, ease: "linear" }} // Infinite rotation
//       style={{ width: 200, height: 200, backgroundColor: 'tomato', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}
//     >
//       <h3>Rotate Animation</h3>           {/* Title for this example */}
//       <p>This element rotates continuously.</p> {/* Description */}
//     </motion.div>
//   );
// }

// export default RotateExample;


import { motion } from 'framer-motion';
import React, { useState } from 'react';

function RotateExample() {
  const [rotate, setRotate] = useState(0); // State to track the current rotation angle

  const handleClick = () => {
    // Increment the rotation angle by 360 degrees on each click
    setRotate(prevRotate => prevRotate + 360);
  };

  return (
    <motion.div
      onClick={handleClick} // Call handleClick on click
      animate={{ rotate }}  // Animate the rotation based on the current state
      transition={{ duration: 1, ease: "easeInOut" }} // Smooth transition
      style={{
        width: 200,
        height: 200,
        backgroundColor: 'tomato',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        borderRadius: '8px', // Optional: Add rounded corners
        cursor: 'pointer',    // Change cursor to pointer on hover
      }}
    >
      <h3>Rotate Animation</h3>           {/* Title for this example */}
      <p>Click to rotate this element.</p> {/* Description */}
    </motion.div>
  );
}

export default RotateExample;
