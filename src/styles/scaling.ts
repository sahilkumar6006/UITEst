/**
 * Responsive scaling utilities
 * @file scaling.ts
 */

import { Dimensions, PixelRatio } from 'react-native';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

// Base dimensions (iPhone 11 Pro)
const BASE_WIDTH = 375;
const BASE_HEIGHT = 812;

/**
 * Scales a size based on screen width
 * @param size - The size to scale
 * @returns Scaled size
 */
export const moderateScale = (size: number): number => {
  const scale = SCREEN_WIDTH / BASE_WIDTH;
  return Math.round(size * scale);
};

/**
 * Scales a size vertically based on screen height
 * @param size - The size to scale
 * @returns Scaled size
 */
export const verticalScale = (size: number): number => {
  const scale = SCREEN_HEIGHT / BASE_HEIGHT;
  return Math.round(size * scale);
};

/**
 * Scales a size with a factor for fine-tuning
 * @param size - The size to scale
 * @param factor - Factor to adjust scaling (default: 0.5)
 * @returns Scaled size
 */
export const moderateVerticalScale = (size: number, factor: number = 0.5): number => {
  const scale = SCREEN_HEIGHT / BASE_HEIGHT;
  return Math.round(size + (verticalScale(size) - size) * factor);
};

/**
 * Scales font size based on pixel ratio
 * @param size - The font size to scale
 * @returns Scaled font size
 */
export const scaleFont = (size: number): number => {
  const scale = SCREEN_WIDTH / BASE_WIDTH;
  const newSize = size * scale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
};

