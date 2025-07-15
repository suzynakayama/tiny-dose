import { StyleSheet } from 'react-native';
import React from 'react';
import SwitchSelector from 'react-native-switch-selector';
import {
  AgeOptions,
  SwitchType,
  WeightOptions,
} from '@/Types/medicineCalculator.types';

interface SelectorProps {
  accessibilityLabel: string;
  testID: string;
  options: AgeOptions | WeightOptions;
  changeSwitch: (value: string, type: SwitchType) => void;
  switchType: SwitchType;
  selectorStyles: {};
}

export default function BasicSwitchSelector({
  accessibilityLabel,
  testID,
  options,
  changeSwitch,
  switchType,
  selectorStyles,
}: SelectorProps) {
  return (
    <SwitchSelector
      accessibilityLabel={accessibilityLabel}
      testID={testID}
      options={options}
      initial={0}
      onPress={(value: string) => changeSwitch(value, switchType)}
      fontSize={14}
      buttonColor='#FE6B73'
      textColor='#333'
      selectedColor='#fff'
      selectedTextStyle={styles.selectedText}
      backgroundColor='#f6bdc0'
      style={selectorStyles}
    />
  );
}

const styles = StyleSheet.create({
  selectedText: {
    fontWeight: 'bold',
    textShadowColor: '#031F72',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
});
