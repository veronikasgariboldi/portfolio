import { useRef, useLayoutEffect, useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";
import "./scrollthing.css";

function useElementWidth(ref) {
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    function updateWidth() {
      if (ref.current) {
        setWidth(ref.current.offsetWidth);
      }
    }
    
    // Wait for fonts to load before measuring
    document.fonts.ready.then(() => {
      updateWidth();
    });
    
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, [ref]);

  return width;
}

export const ScrollVelocity = ({
  scrollContainerRef,
  texts = [],
  velocity = 100,
  className = "",
  damping = 25, // Reduced for smoother motion
  stiffness = 200, // Reduced for smoother motion
  numCopies = 6,
  velocityMapping = { input: [0, 1000], output: [0, 2] }, // Reduced output range
  parallaxClassName = "parallax",
  scrollerClassName = "scroller",
  parallaxStyle,
  scrollerStyle,
}) => {
  function VelocityText({
    children,
    baseVelocity = velocity,
    scrollContainerRef,
    className = "",
    damping,
    stiffness,
    numCopies,
    velocityMapping,
    parallaxClassName,
    scrollerClassName,
    parallaxStyle,
    scrollerStyle,
  }) {
    const baseX = useMotionValue(0);
    const scrollOptions = scrollContainerRef ? { container: scrollContainerRef } : {};
    const { scrollY } = useScroll(scrollOptions);
    const scrollVelocity = useVelocity(scrollY);
    
    // Make velocity changes smoother
    const smoothVelocity = useSpring(scrollVelocity, {
      damping,
      stiffness,
      restDelta: 0.001, // More precise rest detection
    });
    
    const velocityFactor = useTransform(
      smoothVelocity,
      velocityMapping?.input || [0, 1000],
      velocityMapping?.output || [0, 2],
      { clamp: false }
    );

    const copyRef = useRef(null);
    const copyWidth = useElementWidth(copyRef);
    const [isReady, setIsReady] = useState(false);
    
    // Make sure we have valid measurements before starting animation
    useEffect(() => {
      if (copyWidth > 0) {
        setIsReady(true);
      }
    }, [copyWidth]);

    // Improved wrap function for better performance
    const wrap = (min, max, v) => {
      const range = max - min;
      return ((v - min) % range + range) % range + min;
    };

    // Transform with memoized width to prevent stuttering
    const x = useTransform(baseX, (v) => {
      if (!isReady || copyWidth <= 0) return "0px";
      return `${wrap(-copyWidth, 0, v)}px`;
    });

    // Animation logic with smoothed transitions
    const directionFactor = useRef(1);
    const prevVelocity = useRef(0);
    
    useAnimationFrame((t, delta) => {
      if (!isReady || copyWidth <= 0) return;
      
      const currentVelocity = velocityFactor.get();
      
      // Smooth direction changes
      if (currentVelocity < -0.2 && directionFactor.current > 0) {
        directionFactor.current -= 0.05;
      } else if (currentVelocity > 0.2 && directionFactor.current < 0) {
        directionFactor.current += 0.05;
      } else if (Math.abs(currentVelocity) < 0.2) {
        // Maintain current direction when velocity is low
        directionFactor.current = directionFactor.current > 0 ? 1 : -1;
      } else {
        // Gradually approach target direction
        const targetDirection = currentVelocity > 0 ? 1 : -1;
        directionFactor.current += (targetDirection - directionFactor.current) * 0.05;
      }
      
      // Calculate smoother movement
      const deltaSeconds = delta / 1000;
      const velocityInfluence = Math.min(Math.abs(currentVelocity) * 0.3, 2);
      const smoothedVelocity = baseVelocity * deltaSeconds; 
      
      // Apply velocity with dampened acceleration/deceleration
      const acceleration = 
        prevVelocity.current === 0 ? smoothedVelocity : 
        prevVelocity.current + (smoothedVelocity - prevVelocity.current) * 0.1;
      
      prevVelocity.current = acceleration;
      
      // Calculate final movement
      const movement = acceleration * (1 + velocityInfluence) * directionFactor.current;
      baseX.set(baseX.get() + movement);
    });

    // Create text copies
    const spans = [];
    for (let i = 0; i < numCopies; i++) {
      spans.push(
        <span 
          className={className} 
          key={i} 
          ref={i === 0 ? copyRef : null} 
          style={{ 
            display: "inline-block", 
            whiteSpace: "nowrap",
            padding: "0 0.5rem" // Add spacing between copies
          }}
        >
          {children}
        </span>
      );
    }

    return (
      <div className={parallaxClassName} style={parallaxStyle}>
        <motion.div
          className={scrollerClassName}
          style={{ 
            x, 
            display: "flex", 
            alignItems: "center",
            willChange: "transform", // Optimize for animation
            backfaceVisibility: "hidden", // Reduce flickering
            ...scrollerStyle 
          }}
        >
          {spans}
        </motion.div>
      </div>
    );
  }

  return (
    <section>
      {texts.map((text, index) => (
        <VelocityText
          key={index}
          className={className}
          baseVelocity={index % 2 !== 0 ? -velocity : velocity}
          scrollContainerRef={scrollContainerRef}
          damping={damping}
          stiffness={stiffness}
          numCopies={numCopies}
          velocityMapping={velocityMapping}
          parallaxClassName={parallaxClassName}
          scrollerClassName={scrollerClassName}
          parallaxStyle={parallaxStyle}
          scrollerStyle={scrollerStyle}
        >
          {text}
        </VelocityText>
      ))}
    </section>
  );
};

export default ScrollVelocity;