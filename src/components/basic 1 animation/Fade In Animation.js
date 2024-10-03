import { motion } from 'framer-motion';
import React from 'react';

function FadeInExample() {
  return (
    <motion.div
      initial={{ opacity: 0 }}       // Start invisible
      animate={{ opacity: 1 }}       // Animate to fully visible
      transition={{ duration: 1 }}    // Animation duration
      style={{ width: 200, height: 200, backgroundColor: 'lightgreen', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}
    >
      <h3>Fade In Animation</h3>           {/* Title for this example */}
      <p>This element fades in when the component mounts.</p> {/* Description */}
    </motion.div>
  );
}

export default FadeInExample;
