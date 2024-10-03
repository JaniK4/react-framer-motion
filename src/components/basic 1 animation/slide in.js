import { motion } from 'framer-motion';
import React from 'react';

function SlideInExample() {
  return (
    <motion.div
      initial={{ x: '-100vw' }}   // Start off-screen to the left
      animate={{ x: 0 }}          // Slide into view
      transition={{ type: 'spring', stiffness: 100 }} // Spring effect
      style={{ width: 200, height: 200, backgroundColor: 'coral', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}
    >
      <h3>Slide In Animation</h3>           {/* Title for this example */}
      <p>This element slides in from the left.</p> {/* Description */}
    </motion.div>
  );
}

export default SlideInExample;
