// Note: This code uses React Native syntax and structure.
import React from 'react';
import { Text, Pressable, StyleSheet, View } from 'react-native';

// Placeholder for custom Colors object, since it's not provided.
// Replace these hex values with your actual Colors.light.primary and Colors.light.background
const Colors = {
    light: {
        primary: '#F9A130', // Secondary color from design
        background: '#F0F0F0', // A light gray for the default background
        text: '#FFFFFF',
        textDark: '#333333',
    },
};

/**
 * Reusable Button Component for React Native.
 * @param {object} props - Component props.
 * @param {string} props.title - The text to display on the button.
 * @param {function} props.onPress - Function to execute on press.
 * @param {'small' | 'large'} [props.size='small'] - Determines the button's style and size.
 */
const RNButton = ({ title, onPress, size = 'small', style }) => {
    // Determine which style to apply based on the 'size' prop
    const buttonStyle = size === 'large' ? styles.btnLarge : styles.btnSmall;
    const textStyle = size === 'large' ? styles.textLarge : styles.textSmall;

    return (
        <Pressable
            style={({ pressed }) => [
                buttonStyle,
                style,
                { opacity: pressed ? 0.8 : 1 } // Add a slight opacity change on press for feedback
            ]}
            onPress={onPress}
        >
            <Text style={textStyle}>{title}</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    // --- Small Button (Based on Layout 1: 107w x 30h, 30px radius) ---
    btnSmall: {
        backgroundColor: Colors.light.background,
        height: 30,
        width: 107, // Use minWidth for flexibility while maintaining the intended size
        borderRadius: 15, // Use 15 for 30h to get a pill shape
        paddingHorizontal: 16,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 2,
    },
    textSmall: {
        color: Colors.light.textDark,
        fontSize: 14,
        fontWeight: '500',
    },

    // --- Large Button (Based on Layout 2: 327w x 52h, 50px radius) ---
    btnLarge: {
        backgroundColor: Colors.light.primary,
        height: 52,
        width: '90%', // Use percentage for full-width responsiveness
        maxWidth: 327, // Max width limit as provided
        borderRadius: 26, // Half of 52 for a clean pill shape
        paddingVertical: 14,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center', // Center it if using '90%' width
        // Enhanced shadow for a prominent primary button
        shadowColor: Colors.light.primary,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 4.65,
        elevation: 8,
    },
    textLarge: {
        color: Colors.light.text, // White text for the primary button
        fontSize: 18,
        fontWeight: '700',
    },
});

export default RNButton;

// Example Usage (for context, not part of the file):
/*
<RNButton 
  title="Default" 
  onPress={() => console.log('Default button pressed')} 
/>

<RNButton 
  title="Confirm Action" 
  size="large" 
  onPress={() => console.log('Large button pressed')} 
/>
*/