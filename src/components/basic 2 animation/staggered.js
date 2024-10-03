import { motion } from 'framer-motion';
import React from 'react';

function StaggeredExample() {
  const items = [1, 2, 3, 4]; // Example array for items

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <motion.h3 variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>Staggered Animation</motion.h3>
      {items.map((item, index) => (
        <motion.div
          key={item}
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ delay: index * 0.2 }} // Staggering effect
          style={{
            width: 200,
            height: 100,
            backgroundColor: 'lightblue',
            margin: '10px 0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <p>Item {item}</p>
        </motion.div>
      ))}
    </motion.div>
  );
}

export default StaggeredExample;
