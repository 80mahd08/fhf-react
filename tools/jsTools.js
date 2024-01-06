import { keyframes } from 'styled-components';

const floatAnimation = (distance) => keyframes`
  0% { transform: translateY(0); }
  100% { transform: translateY(${distance}px); }
`;

const floatHorizontalAnimation = (distance) => keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(${distance}px); }
`;


const pulseAnimationKeyframes = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
`;

export {
    floatAnimation,
    floatHorizontalAnimation,
    pulseAnimationKeyframes
}