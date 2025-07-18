import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { weightOptions } from '@/Types/medicineCalculator.contants'
import { SwitchType } from '@/Types/medicineCalculator.types'
import BasicSwitchSelector from './BasicSwitchSelector'

// This component allows the user to input the child's weight and switch between kg and lb units.

interface WeightInputProps {
  weight: string
  setWeight: (weight: string) => void
  changeSwitch: (value: string, type: SwitchType) => void
}

export default function WeightInput({ weight, setWeight, changeSwitch }: WeightInputProps) {
  return (
    <>
      <View style={styles.inputContainer}>
        <Text>Child weight:</Text>
        <TextInput
          style={styles.input}
          placeholder='Enter weight...'
          placeholderTextColor='#aaa'
          value={weight}
          onChangeText={newWeight => setWeight(newWeight)}
          keyboardType='numeric'
        />
      </View>
      <BasicSwitchSelector
        accessibilityLabel='weight-selector'
        testID='weight-selector'
        options={weightOptions}
        changeSwitch={changeSwitch}
        switchType='weight'
        selectorStyles={styles.weightSelector}
      />
    </>
  )
}

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 1,
    borderColor: '#ccc',
    fontSize: 16,
    marginLeft: 5,
    padding: 5,
  },
  inputContainer: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  weightSelector: {
    padding: 3,
    width: 100,
  },
})
