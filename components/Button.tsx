import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import React from 'react';

// This component is a reusable button that can be used throughout the app
// It accepts an onPress function, text to display, and optional styles for the button and text
// It uses TouchableOpacity for a better user experience with touch feedback

interface ButtonProps {
  onPress: () => void;
  text: string;
  buttonStyle?: object;
  textStyle?: object;
}

export default function Button({
  onPress,
  text,
  buttonStyle,
  textStyle,
}: ButtonProps) {
  return (
    <TouchableOpacity
      accessibilityRole='button'
      accessibilityLabel={text}
      accessibilityHint='Press to perform an action'
      style={[styles.button, buttonStyle]}
      onPress={onPress}
    >
      <Text style={[styles.buttonText, textStyle]}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#01CDD4',
    paddingVertical: 12,
    paddingHorizontal: 5,
    borderRadius: 30,
    alignItems: 'center',
    shadowColor: '#031F72',
    shadowOffset: { width: 4, height: 6 },
    shadowOpacity: 0.25,
    elevation: 6,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textShadowColor: '#031F72',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
});
