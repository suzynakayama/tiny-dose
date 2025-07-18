import React from 'react'
import { render, screen } from '@testing-library/react-native'
import DosageValue from '../DosageValue'

test('renders correctly with dosage and max dose', () => {
  const dosage = '5 ml'
  const maxDose = 4

  const dosageValueComponent = render(<DosageValue dosage={dosage} maxDose={maxDose} />)

  const dosageText = screen.getByText("Your child's dose:")
  expect(dosageText).toBeOnTheScreen()

  const dosageValue = screen.getByText(dosage)
  expect(dosageValue).toBeOnTheScreen()

  const maxDoseText = screen.getByText(`⚠️ Do not exceed ${maxDose} doses in 24 hours.`)
  expect(maxDoseText).toBeOnTheScreen()

  const dosageValueJson = dosageValueComponent.toJSON()
  expect(dosageValueJson).toMatchSnapshot()
})

test('renders correctly without max dose', () => {
  const dosage = '10 ml'
  const maxDose = null

  const dosageValueComponent = render(<DosageValue dosage={dosage} maxDose={maxDose} />)

  expect(screen.queryByText(/Do not exceed/)).toBeNull()

  // Snapshot testing
  const dosageValueJson = dosageValueComponent.toJSON()
  expect(dosageValueJson).toMatchSnapshot()
})
