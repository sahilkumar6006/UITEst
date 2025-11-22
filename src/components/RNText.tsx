// Note: This code uses React Native syntax and structure.
import React from 'react';
import { Text, Pressable, StyleSheet, View, StyleProp, TextStyle } from 'react-native';

const FontSizes = {
    small: 12,
    medium: 16,
    large: 20,
};

const Colors = {
    black: '#000000',
    textLink: '#007AFF',
    textSecondary: '#6A6A6A',
    white: '#FFFFFF',
};

const labelPresets = {
    default: {
        textStyle: {
            fontSize: FontSizes.medium,
            color: Colors.black,
            fontWeight: '400',
            textAlign: 'center',
            fontFamily: 'Poppins',
        },
        linkTextStyle: {
            color: Colors.textLink,
            fontWeight: '600',
            fontFamily: 'Poppins',
        },
    },
    small: {
        textStyle: {
            fontSize: FontSizes.small,
            color: Colors.textSecondary,
            fontWeight: '300',
            textAlign: 'center',
            fontFamily: 'Poppins',
        },
        linkTextStyle: {
            color: Colors.textLink,
            fontWeight: '500',
            textDecorationLine: 'underline',
            fontFamily: 'Poppins',
        },
    },
    header: {
        textStyle: {
            fontFamily: 'Baloo Thambi 2',
            fontSize: 20,
            lineHeight: 20,
            letterSpacing: 0,
            fontWeight: '700',
            color: Colors.black,
        },
        linkTextStyle: {
            color: Colors.textLink,
            fontWeight: '700',
            fontFamily: 'Baloo Thambi 2',
        },
    },
    largeHeader: {
        textStyle: {
            fontFamily: 'Baloo Thambi 2',
            fontSize: FontSizes.large,
            lineHeight: 28,
            letterSpacing: 0,
            fontWeight: '700',
            color: Colors.black,
        },
        linkTextStyle: {
            color: Colors.textLink,
            fontWeight: '700',
            fontFamily: 'Baloo Thambi 2',
        },
    },
    labelPreset: {
        textStyle: {
            fontFamily: 'Baloo Thambi 2',
            fontWeight: '400',
            fontSize: 20,
            lineHeight: 20,
            letterSpacing: 0,
            textAlign: 'center',
            color: Colors.black,
            fontStyle: 'normal',
        },
        linkTextStyle: {
            color: Colors.textLink,
            fontWeight: '600',
            fontFamily: 'Baloo Thambi 2',
        },
    }
};

export const Label = ({
    text,
    onPress,
    linkText,
    preset = 'default',
    children,
    style,
    ...rest
}: {
    text?: string;
    onPress?: () => void;
    linkText?: string;
    preset?: keyof typeof labelPresets;
    children?: React.ReactNode;
    style?: StyleProp<TextStyle>;
}) => {
    const presetStyles = labelPresets[preset] ?? labelPresets.default;

    const content = text ?? children;

    const Content = (
        <Text {...rest} style={[presetStyles.textStyle, style]}>
            {content}
            {linkText && (
                <Text style={presetStyles.linkTextStyle}> {linkText}</Text>
            )}
        </Text>
    );

    if (onPress) {
        return <Pressable onPress={onPress}>{Content}</Pressable>;
    }

    return Content;
};