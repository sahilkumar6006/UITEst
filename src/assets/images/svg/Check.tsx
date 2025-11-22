import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

interface CheckProps {
  width?: number;
  height?: number;
  color?: string;
}

const Check: React.FC<CheckProps> = ({ width = 4, height = 13, color = '#FFFFFF' }) => {
  // For larger check marks (like in modal), use a different viewBox
  const isLarge = width > 10 || height > 10;
  const viewBox = isLarge ? "0 0 24 24" : "0 0 4 13";
  const path = isLarge 
    ? "M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"
    : "M0 7L2 9L4 0";

  return (
    <Svg width={width} height={height} viewBox={viewBox} fill="none">
      <Path
        d={path}
        stroke={color}
        strokeWidth={isLarge ? "2" : "1.5"}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill={isLarge ? color : "none"}
      />
    </Svg>
  );
};

export default Check;

