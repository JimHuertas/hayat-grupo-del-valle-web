
import { animated, useTransition } from "@react-spring/web";
import { useState } from "react";
import background from './css/background.module.css';
import styled from "@emotion/styled";
import React from "react";

const ColorOverlay = styled(animated.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2); /* Cambia el color aquí */
  z-index: -1;
`;

const BackgroundImage = styled(animated.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  z-index: -1;
`;



interface BackgroundSliderProps{
    images: string[];
    interval: number;
}
export const BackgroundSlider:React.FC<BackgroundSliderProps> = ({images}) => {
    const [index, set] = useState(0)
    const transitions = useTransition(index, {
        key: index,
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        config: { duration: 2000 },
        onRest: (_a, _b, item) => {
        if (index === item) {
            set(state => (state + 1) % images.length)
        }
        },
        exitBeforeEnter: false,
    })
  return (
    <div className="flex fill center">
      {transitions((style, i) => (
            <React.Fragment key={i}>
            <ColorOverlay style={{ ...style, opacity: style.opacity.to(value => 1 - value) }} />
            <BackgroundImage
            className={background.bg}
            style={{
                ...style,
                backgroundImage: `url(${images[i]})`,
            }}
            />
            </React.Fragment>
      ))}
    </div>
  );
}