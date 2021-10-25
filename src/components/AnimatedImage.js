import React, { useState } from 'react';
import { useSpring, animated } from "react-spring";
// import { useSpring, animated, config } from "react-spring";


const AnimatedImage = ({ source, altText }) => {
  const [state, toggle] = useState(true);
  // const props = useSpring({
  //   to: { opacity: 1 },
  //   from: { opacity: 0 },
  //   // reset: true,
  //   reverse: state,
  //   delay: 25,
  //   // config: config.molasses,
  //   config: { duration: 500 },
  //   // onRest: () => set(!state),
  // })

  const props = useSpring({
    to: { 
      opacity: 1,
      rotate: 360, 
      scale: altText === "mongodb logo" ? 1.5 : 1,
     },
    from: { 
      opacity: 0.5,
      rotate: 0, 
      scale: altText === "mongodb logo" ? 1 : 0.6,
    },
    transformOrigin: "center",
    transformBox: "fill-box",
    delay: 100,
    // reset: true,
    reverse: state,
    config: { friction: 20 },
    // onRest: () => toggle(!state),
  })

  const handleMouseEnter = () => {
    toggle(!state);
  }

  const handleMouseOut = () => {
    toggle(!state);
  }

  return (
    <animated.img 
      onMouseOut={handleMouseOut} 
      onMouseEnter={handleMouseEnter} 
      style={props}
      className="img-logo" 
      src={source} 
      alt={altText}/>
  )
}

export default AnimatedImage;