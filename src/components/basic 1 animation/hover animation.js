import { motion } from 'framer-motion';
import React from 'react';

function HoverExample() {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}  // Scale the element up by 10% on hover
      whileTap={{ scale: 0.9 }}    // Scale down when the element is tapped/clicked
      transition={{ 
        type: 'spring',           // Use a spring animation for a bouncier feel
        stiffness: 300,           // Defines how stiff the spring is (higher = stiffer)
        damping: 6,              // Controls the bounciness (lower = bouncier)
      }}
      style={{
        width: 200,
        height: 200,
        backgroundColor: 'skyblue',
        color: 'black',
        padding: '1%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        borderRadius: '8px', 
        overflow: 'hidden'     // Optional: Add some rounded corners
      }}
    >
      <h3>Hover Animation</h3>           {/* Title for this example */}
      <p>This element scales up when you hover over it.</p> {/* Description */}
    </motion.div>
  );
}

export default HoverExample;
