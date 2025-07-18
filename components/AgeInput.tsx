import { Text, StyleSheet } from 'react-native'
import React from 'react'
import BasicSwitchSelector from './BasicSwitchSelector'
import { ageOptions } from '@/Types/medicineCalculator.contants'
import { SwitchType } from '@/Types/medicineCalculator.types'

// This component allows the user to select the age of the child
// It uses a SwitchSelector to toggle between the ageOptions array

interface AgeInputProps {
  changeSwitch: (value: string, type: SwitchType) => void
}

export default function AgeInput({ changeSwitch }: AgeInputProps) {
  return (
    <>
      <Text>Child Age:</Text>
      <BasicSwitchSelector
        accessibilityLabel='age-selector'
        testID='age-selector'
        options={ageOptions}
        changeSwitch={changeSwitch}
        switchType='age'
        selectorStyles={styles.ageSelector}
      />
    </>
  )
}

const styles = StyleSheet.create({
  ageSelector: {
    maxWidth: 250,
    padding: 3,
  },
})
