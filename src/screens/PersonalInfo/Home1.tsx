/**
 * PersonalInfo screen component - Step 1 of Upgrade Flow
 * @file PersonalInfo.tsx
 */

import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import FormInput from '@/components/FormInput';
import UpgradeScreenLayout from '@/components/UpgradeScreenLayout';
import { useNavigation } from '@react-navigation/native';

const PersonalInfo = () => {
  const navigation = useNavigation<any>();
  const [firstName, setFirstName] = useState('Damola');
  const [lastName, setLastName] = useState('Benson-Okoh');
  const [dateOfBirth, setDateOfBirth] = useState('25 - January - 1890');

  const steps = [
    { number: 1, label: 'Personal Info', isActive: true, isCompleted: true },
    { number: 2, label: 'ID/Vehicle Details', isActive: false, isCompleted: false },
    { number: 3, label: 'Quote', isActive: false, isCompleted: false },
  ];

  const handleContinue = () => {
    navigation.navigate('VehicleDetails');
  };

  return (
    <UpgradeScreenLayout
      steps={steps}
      title="Upgrade to Comprehensive Motor Insurance Plan"
      description="Fill or Update your information and we'll get your vehicle covered in no time."
      onButtonPress={handleContinue}
    >
      <View style={styles.formContainer}>
        <FormInput
          label="First Name"
          value={firstName}
          onChangeText={setFirstName}
        />
        <FormInput
          label="Last Name"
          value={lastName}
          onChangeText={setLastName}
        />
        <FormInput
          label="Date of Birth"
          value={dateOfBirth}
          onChangeText={setDateOfBirth}
        />
      </View>
    </UpgradeScreenLayout>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    marginBottom: 30,
  },
});

export default PersonalInfo;

