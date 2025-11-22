import React, { useState } from 'react';
import { Modal, View, Text, StyleSheet, Pressable, TouchableOpacity } from 'react-native';
import RNButton from '@/components/RNButton';
import Check from '@/assets/images/svg/Check';
import Individual from '@/assets/images/svg/Individual';
import Cooprate from '@/assets/images/svg/Cooprate';

interface InfoOverlayModalProps {
  visible: boolean;
  onClose: () => void;
  onContinue: () => void;
}

const InfoOverlayModal: React.FC<InfoOverlayModalProps> = ({ visible, onClose, onContinue }) => {
  const [selectedType, setSelectedType] = useState<'individual' | 'corporate' | null>(null);
  const [agreedToPrivacy, setAgreedToPrivacy] = useState(false);

  const handleContinue = () => {
    if (selectedType && agreedToPrivacy) {
      onContinue();
      onClose();
    }
  };

  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="slide"
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          <Text style={styles.title}>Upgrade to Comprehensive Motor Insurance Plan</Text>

          <Text style={styles.description}>
            Kindly select & update your information and we'll get your vehicle covered in no time.
          </Text>

          <View style={styles.optionsContainer}>
            <TouchableOpacity
              style={[
                styles.optionCard,
                selectedType === 'individual' && styles.optionCardSelected,
              ]}
              onPress={() => setSelectedType('individual')}
            >
              <View style={styles.optionContent}>

                <Individual />
                <Text style={[styles.optionText, selectedType === 'individual' && styles.optionTextSelected]}>
                  I am an Individual
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.optionCard,
                selectedType === 'corporate' && styles.optionCardSelected,
              ]}
              onPress={() => setSelectedType('corporate')}
            >
              <View style={styles.optionContent}>
                <Cooprate />
                <Text style={[styles.optionText, selectedType === 'corporate' && styles.optionTextSelected]}>
                  I am a Corporate
                </Text>
              </View>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={styles.checkboxContainer}
            onPress={() => setAgreedToPrivacy(!agreedToPrivacy)}
          >
            <View style={[styles.checkbox, agreedToPrivacy && styles.checkboxChecked]}>
              {agreedToPrivacy && <Check width={12} height={12} color="#FFFFFF" />}
            </View>
            <Text style={styles.checkboxText}>I agree to the Data Privacy Notice</Text>
          </TouchableOpacity>

          <Pressable
            style={[
              styles.continueButton,
              (!selectedType || !agreedToPrivacy) && styles.continueButtonDisabled,
            ]}
            onPress={handleContinue}
            disabled={!selectedType || !agreedToPrivacy}
          >
            <Text style={styles.continueButtonText}>Continue</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  modalContainer: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 24,
    paddingBottom: 40,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: '#201E1E',
    fontFamily: 'Poppins',
    marginBottom: 16,
    lineHeight: 28,
  },
  description: {
    fontSize: 14,
    fontWeight: '400',
    color: '#828282',
    fontFamily: 'Poppins',
    marginBottom: 24,
    lineHeight: 20,
  },
  optionsContainer: {
    marginBottom: 24,
  },
  optionCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#F9A130',
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  optionCardSelected: {
    backgroundColor: '#F9A130',
  },
  optionContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionIcon: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#F9A130',
    marginRight: 12,
  },
  optionIconSelected: {
    backgroundColor: '#FFFFFF',
  },
  optionText: {
    fontSize: 14,
    marginStart: 4,
    fontWeight: '500',
    color: '#201E1E',
    fontFamily: 'Poppins',
  },
  optionTextSelected: {
    color: '#FFFFFF',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#F9A130',
    marginRight: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxChecked: {
    backgroundColor: '#F9A130',
    borderColor: '#F9A130',
  },
  checkboxText: {
    fontSize: 12,
    fontWeight: '400',
    color: '#828282',
    fontFamily: 'Poppins',
  },
  continueButton: {
    backgroundColor: '#F9A130',
    borderRadius: 50,
    paddingVertical: 14,
    paddingHorizontal: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  continueButtonDisabled: {
    opacity: 0.5,
  },
  continueButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
    fontFamily: 'Poppins',
  },
});

export default InfoOverlayModal;

