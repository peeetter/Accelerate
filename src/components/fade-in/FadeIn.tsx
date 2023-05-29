import React, { FunctionComponent, useState } from "react";
import { Waypoint } from "react-waypoint";
import { useSpring, animated, config } from "react-spring";
interface FadeInProps {
  delayInMs?: number;
  children: React.ReactNode;
  xStartingPoint?: number;
  yStartingPoint?: number;
  friction?: number;
}

const FadeIn: FunctionComponent<FadeInProps> = ({
  delayInMs = 500,
  children,
  xStartingPoint = 0,
  yStartingPoint = 0,
  friction = 10,
}) => {
  const [inView, setInview] = useState(false);
  const transition = useSpring({
    delay: delayInMs,
    to: {
      y: !inView ? yStartingPoint : 0,
      x: !inView ? xStartingPoint : 0,
      opacity: !inView ? 0 : 1,
    },
    config: { ...config.gentle, tension: 36, friction },
  });
  return (
    <Waypoint onEnter={() => setInview(true)}>
      <animated.div style={transition}>{children}</animated.div>
    </Waypoint>
  );
};

export default FadeIn;
