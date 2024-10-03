import { motion } from 'framer-motion';
import React from 'react';

function KeyframeExample() {
  return (
    <motion.div
      animate={{
        x: [0, 100, 100, 0], // Move right, then back to start
        y: [0, 0, 100, 100]   // Move down
      }}
      transition={{ duration: 2 }}  // The entire animation lasts 2 seconds
      style={{ width: 200, height: 200, backgroundColor: 'lightcoral', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}
    >
      <h3>Keyframe Animation</h3>           {/* Title for this example */}
      <p>This element moves in a keyframe animation pattern.</p> {/* Description */}
    </motion.div>
  );
}

export default KeyframeExample;
