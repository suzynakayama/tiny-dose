import React from 'react'
import { render, screen } from '@testing-library/react-native'
import AgeInput from '../AgeInput'

test('renders correctly', () => {
  const changeSwitchMock = jest.fn()
  const AgeInputComponent = render(<AgeInput changeSwitch={changeSwitchMock} />)

  const ageText = screen.getByText('Child Age:')
  expect(ageText).toBeOnTheScreen()

  const switchSelector = screen.getByTestId('age-selector')
  expect(switchSelector).toBeOnTheScreen()

  // Check if the switch has the correct options
  const options = ['1-6 months', 'over 6 months']
  options.forEach(option => {
    expect(screen.getByText(option)).toBeOnTheScreen()
  })

  // Snapshot testing
  const ageInputJson = AgeInputComponent.toJSON()
  expect(ageInputJson).toMatchSnapshot()
})
