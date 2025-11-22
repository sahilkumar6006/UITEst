/**
 * RTL-aware styles for Home screen
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
        content: {
          flex: 1,
          padding: moderateScale(16),
        },
        welcomeText: {
          fontFamily: fontFamily.bold,
          fontSize: moderateScale(24),
          marginBottom: verticalScale(24),
          textAlign: isRTL ? 'right' : 'left',
          color: colors.text,
        },
        card: {
          marginBottom: verticalScale(16),
        },
        cardTitle: {
          fontFamily: fontFamily.bold,
          fontSize: moderateScale(20),
          marginBottom: verticalScale(12),
          color: colors.text,
          textAlign: isRTL ? 'right' : 'left',
        },
        cardText: {
          fontSize: moderateScale(14),
          marginBottom: verticalScale(16),
          color: colors.textSecondary,
          textAlign: isRTL ? 'right' : 'left',
        },
        cardButton: {
          marginTop: verticalScale(8),
        },
        featureList: {
          marginTop: verticalScale(8),
        },
        featureItem: {
          fontSize: moderateScale(14),
          marginBottom: verticalScale(8),
          color: colors.textSecondary,
          textAlign: isRTL ? 'right' : 'left',
        },
      }),
    [isRTL, theme, colors]
  );
};

export default useRTLStyles;

