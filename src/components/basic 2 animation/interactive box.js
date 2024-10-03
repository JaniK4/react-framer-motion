import { motion } from 'framer-motion';
import React from 'react';

function VariantsExample() {
  const boxVariants = {
    rest: { scale: 1, rotate: 0 },
    hover: { scale: 1.1, rotate: 10 },
    tap: { scale: 0.9, rotate: -10 },
  };

  return (
    <motion.div
      initial="rest"
      whileHover="hover"
      whileTap="tap"
      variants={boxVariants}
      style={{
        width: 200,
        height: 200,
        backgroundColor: 'skyblue',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '10px',
        margin: '20px auto',
      }}
    >
      <h3>Interactive Box</h3>
    </motion.div>
  );
}

export default VariantsExample;
