/**
 * Quote screen component - Step 3 of Upgrade Flow
 * @file Quote.tsx
 */

import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import QuoteItem from '@/components/QuoteItem';
import SuccessModal from '@/components/SuccessModal';
import UpgradeScreenLayout from '@/components/UpgradeScreenLayout';

const Quote = () => {
  const [showModal, setShowModal] = useState(false);

  const steps = [
    { number: 1, label: 'Personal Info', isActive: false, isCompleted: true },
    { number: 2, label: 'ID/Vehicle Details', isActive: false, isCompleted: true },
    { number: 3, label: 'Quote', isActive: true, isCompleted: false },
  ];

  const quoteItems = [
    { label: 'Toyota Yaris', amount: 'N190,000.30' },
    { label: 'Toyota Yaris', amount: 'N190,000.30' },
    { label: 'Toyota Yaris', amount: 'N190,000.30' },
    { label: 'Toyota Yaris', amount: 'N190,000.30' },
    { label: 'Comprehensive Plan', amount: 'N190,000.30' },
  ];

  const handleProceedToPay = () => {
    setShowModal(true);
  };

  return (
    <>
      <UpgradeScreenLayout
        steps={steps}
        title="Upgrade to Comprehensive Motor Insurance Plan"
        description="Fill or Update your information and we'll get your vehicle covered in no time."
        buttonTitle="Proceed to Pay"
        onButtonPress={handleProceedToPay}
      >
        {/* Quote Summary Card */}
        <View style={styles.quoteCard}>
          <View style={styles.quoteContent}>
            {quoteItems.map((item, index) => (
              <QuoteItem
                key={index}
                label={item.label}
                amount={item.amount}
                isTotal={index === quoteItems.length - 1}
              />
            ))}
            <View style={styles.totalSection}>
              <Text style={styles.totalLabel}>Total</Text>
              <Text style={styles.totalAmount}>N7,230,000.30</Text>
            </View>
          </View>
        </View>

        {/* Download Quote Button */}
        <TouchableOpacity style={styles.downloadButton}>
          <Text style={styles.downloadText}>Download Quote</Text>
        </TouchableOpacity>
      </UpgradeScreenLayout>

      {/* Success Modal */}
      <SuccessModal visible={showModal} onClose={() => setShowModal(false)} />
    </>
  );
};

const styles = StyleSheet.create({
  quoteCard: {
    backgroundColor: '#F2F2F2',
    opacity: 0.45,
    borderRadius: 8,
    padding: 16,
    marginBottom: 20,
  },
  quoteContent: {
    padding: 8,
  },
  totalSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 12,
  },
  totalLabel: {
    fontSize: 12,
    fontWeight: '500',
    color: '#828282',
    fontFamily: 'Poppins',
  },
  totalAmount: {
    fontSize: 12,
    fontWeight: '600',
    color: '#828282',
    fontFamily: 'Poppins',
  },
  downloadButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  downloadText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#F9A130',
    fontFamily: 'Poppins',
  },
});

export default Quote;

