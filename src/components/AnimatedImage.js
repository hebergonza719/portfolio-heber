import React, { useState } from 'react';
import { useSpring, animated } from "react-spring";
// import { useSpring, animated, config } from "react-spring";


const AnimatedImage = ({ source, altText }) => {
  const [state, toggle] = useState(true);
  // const props = useSpring({
  //   to: { opacity: 1 },
  //   from: { opacity: 0 },
  //   // reset: true,
  //   reverse: flip,
  //   delay: 25,
  //   // config: config.molasses,
  //   config: { duration: 500 },
  //   // onRest: () => set(!flip),
  // })

  const props = useSpring({
    transform: state ? "rotate(0deg) scale(0.6)" : "rotate(360deg) scale(1)",
    transformOrigin: "center",
    transformBox: "fill-box",
    delay: 50,
    config: {
      friction: 19, // the default value is 26
    },
    opacity: state ? "0.50" : "1",
  })


  console.log(state)

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