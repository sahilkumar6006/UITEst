/**
 * Styles for Home3 screen
 * @file styles.ts
 */

import { StyleSheet } from 'react-native';
import { useMemo } from 'react';
import { Colors, ThemeType } from '@/styles/colors';
import fontFamily from '@/styles/fontFamily';
import { moderateScale, verticalScale } from '@/styles/scaling';

const useRTLStyles = (isRTL: boolean, theme: ThemeType) => {
  const colors = Colors[theme];

  return useMemo(
    () =>
      StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: colors.background,
        },
        scrollView: {
          flex: 1,
        },
        scrollContent: {
          flexGrow: 1,
          paddingBottom: verticalScale(20),
        },
      }),
    [isRTL, theme, colors]
  );
};

export default useRTLStyles;

