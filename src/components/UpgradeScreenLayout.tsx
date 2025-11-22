/**
 * Reusable Layout Component for Upgrade Flow Screens
 * @file UpgradeScreenLayout.tsx
 */

import React from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import Header from '@/components/Header';
import ProgressIndicator from '@/components/ProgressIndicator';
import RNButton from '@/components/RNButton';

interface Step {
  number: number;
  label: string;
  isActive: boolean;
  isCompleted: boolean;
}

interface UpgradeScreenLayoutProps {
  steps: Step[];
  title: string;
  description: string;
  children: React.ReactNode;
  buttonTitle?: string;
  onButtonPress?: () => void;
  showButton?: boolean;
}

const UpgradeScreenLayout: React.FC<UpgradeScreenLayoutProps> = ({
  steps,
  title,
  description,
  children,
  buttonTitle = 'Continue',
  onButtonPress,
  showButton = true,
}) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <Header />
        
        <ProgressIndicator steps={steps} />

        {/* Title Section */}
        <View style={styles.titleSection}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>

        {/* Content */}
        {children}

        {/* Continue Button */}
        {showButton && onButtonPress && (
          <RNButton
            title={buttonTitle}
            size="large"
            onPress={onButtonPress}
            style={styles.continueButton}
          />
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FDFDFD',
  },
  container: {
    flex: 1,
  },
  contentContainer: {
    paddingHorizontal: 24,
    paddingBottom: 40,
  },
  titleSection: {
    marginTop: 20,
    marginBottom: 30,
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    color: '#201E1E',
    lineHeight: 30,
    marginBottom: 10,
    fontFamily: 'Poppins',
  },
  description: {
    fontSize: 13,
    fontWeight: '400',
    color: '#828282',
    lineHeight: 20,
    fontFamily: 'Poppins',
  },
  continueButton: {
    marginTop: 20,
    width: '100%',
    maxWidth: 327,
    alignSelf: 'center',
  },
});

export default UpgradeScreenLayout;

