/**
 * Reusable Form Input Component
 * @file FormInput.tsx
 */

import React from 'react';
import { View, Text, TextInput, StyleSheet, TextInputProps } from 'react-native';

interface FormInputProps extends TextInputProps {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
}

const FormInput: React.FC<FormInputProps> = ({
  label,
  value,
  onChangeText,
  placeholder = 'Type here',
  ...textInputProps
}) => {
  return (
    <View style={styles.inputGroup}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.input}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor="#828282"
          {...textInputProps}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 12,
    fontWeight: '500',
    color: '#828282',
    marginBottom: 8,
    fontFamily: 'Poppins',
  },
  inputWrapper: {
    backgroundColor: '#F6F6F6',
    borderRadius: 8,
    height: 45,
    justifyContent: 'center',
    paddingHorizontal: 12,
  },
  input: {
    fontSize: 14,
    fontWeight: '400',
    color: '#828282',
    fontFamily: 'Poppins',
  },
});

export default FormInput;

