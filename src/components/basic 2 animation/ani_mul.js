import { motion } from 'framer-motion';
import React from 'react';

function MultiPropertyAnimation() {
  return (
    <motion.div
      animate={{
        scale: [1, 1.1, 1],
        rotate: [0, 360, 0],
        borderRadius: ['20%', '50%', '20%'],
      }}
      transition={{
        duration: 2,
        ease: 'easeInOut',
      }}
      style={{
        width: 200,
        height: 200,
        backgroundColor: 'lightgreen',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '20px auto',
      }}
    >
      <h3>Multi-Property Animation</h3>
    </motion.div>
  );
}

export default MultiPropertyAnimation;
