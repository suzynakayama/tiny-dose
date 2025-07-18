import React from 'react'
import { render, screen } from '@testing-library/react-native'
import MedicineSelector from '../MedicineSelector'
import { medicineOptions } from '@/Types/medicineCalculator.contants'

test('renders correctly', () => {
  const setMedicine = jest.fn()
  const isDropdownFocused = false
  const setIsDropdownFocused = jest.fn()

  const MedicineSelectorComponent = render(
    <MedicineSelector
      medicine={medicineOptions[0]}
      setMedicine={setMedicine}
      isDropdownFocused={isDropdownFocused}
      setIsDropdownFocused={setIsDropdownFocused}
    />
  )

  // Check if the medicine selector is rendered
  const medicineSelector = screen.getByTestId('medicine-selector')
  expect(medicineSelector).toBeOnTheScreen()

  // Check if the medicine is displayed
  const medicine = screen.getByText('Acetaminophen Infant (80mg/ml)')
  expect(medicine).toBeOnTheScreen()

  // Snapshot testing
  const MedicineSelectorJson = MedicineSelectorComponent.toJSON()
  expect(MedicineSelectorJson).toMatchSnapshot()
})
