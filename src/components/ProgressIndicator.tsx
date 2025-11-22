
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Check from '@/assets/images/svg/Check';

const PROGRESS_LINE_TOP = 48;

interface Step {
  number: number;
  label: string;
  isActive: boolean;
  isCompleted: boolean;
}

interface ProgressIndicatorProps {
  steps: Step[];
}

const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({ steps }) => {
  return (
    <View style={styles.container}>
      <View style={styles.progressLine} />

      <View style={styles.stepsContainer}>
        {steps.map((step, index) => (
          <View key={index} style={styles.stepContainer}>
            <View style={step.isActive || step.isCompleted ? styles.stepCircleActive : styles.stepCircle}>
              {step.isCompleted ? (
                <Check width={4} height={13} color="#FFFFFF" />
              ) : (
                <Text style={step.isActive || step.isCompleted ? styles.stepNumberActive : styles.stepNumber}>
                  {step.number}
                </Text>
              )}
            </View>
            <Text style={step.isActive || step.isCompleted ? styles.stepLabelActive : styles.stepLabel}>
              {step.label}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    marginBottom: 20,
    position: 'relative',
  },

  progressLine: {
    height: 2,
    backgroundColor: '#D3DCE6',
    borderRadius: 100,
    position: 'absolute',
    top: 8,
    left: 20,
    right: 20,
    zIndex: 0,
  },

  stepsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingHorizontal: 20,
    zIndex: 1,
  },
  stepContainer: {
    alignItems: 'center',
    flex: 1,
  },
  stepCircleActive: {
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: '#F9A130',
    borderWidth: 0.73,
    borderColor: '#F9FAFC',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  stepCircle: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
    borderWidth: 1.17,
    borderColor: '#D3DCE6',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  stepNumberActive: {
    fontSize: 9,
    fontWeight: '600',
    color: '#FFFFFF',
    textTransform: 'uppercase',
  },
  stepNumber: {
    fontSize: 9,
    fontWeight: '600',
    color: '#D3DCE6',
    textTransform: 'uppercase',
  },
  stepLabelActive: {
    fontSize: 10,
    fontWeight: '500',
    color: '#828282',
    textAlign: 'center',
  },
  stepLabel: {
    fontSize: 10,
    fontWeight: '500',
    color: '#C7C3C3',
    textAlign: 'center',
  },
});

export default ProgressIndicator;