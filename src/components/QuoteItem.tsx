/**
 * Reusable Quote Item Component
 * @file QuoteItem.tsx
 */

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface QuoteItemProps {
  label: string;
  amount: string;
  isTotal?: boolean;
}

const QuoteItem: React.FC<QuoteItemProps> = ({ label, amount, isTotal = false }) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={[styles.label, isTotal && styles.totalLabel]}>{label}</Text>
        <Text style={[styles.amount, isTotal && styles.totalAmount]}>{amount}</Text>
      </View>
      {!isTotal && <View style={styles.divider} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 12,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  label: {
    fontSize: 12,
    fontWeight: '400',
    color: '#828282',
    fontFamily: 'Poppins',
  },
  totalLabel: {
    fontWeight: '500',
  },
  amount: {
    fontSize: 12,
    fontWeight: '400',
    color: '#828282',
    fontFamily: 'Poppins',
  },
  totalAmount: {
    fontWeight: '600',
  },
  divider: {
    height: 1,
    backgroundColor: '#BDBDBD',
    opacity: 0.5,
    borderStyle: 'dashed',
    borderWidth: 0.5,
  },
});

export default QuoteItem;

