import React from 'react'
import { render, screen } from '@testing-library/react-native'
import WeightInput from '../WeightInput'

test('renders correctly', () => {
  const weight = '20'
  const setWeight = jest.fn()
  const changeSwitch = jest.fn()

  const WeightInputComponent = render(
    <WeightInput weight={weight} setWeight={setWeight} changeSwitch={changeSwitch} />
  )

  const input = screen.getByPlaceholderText('Enter weight...')
  expect(input).toBeOnTheScreen()
  expect(input).toHaveProp('keyboardType', 'numeric')
  expect(input).toHaveProp(
    'style',
    expect.objectContaining({
      borderBottomWidth: 1,
      borderColor: '#ccc',
      fontSize: 16,
      marginLeft: 5,
      padding: 5,
    })
  )

  // test the switch selector and options to be showing on the screen
  const switchSelector = screen.getByTestId('weight-selector')
  expect(switchSelector).toBeOnTheScreen()

  const options = ['kg', 'lb']
  options.forEach(option => {
    expect(screen.getByText(option)).toBeOnTheScreen()
  })

  // Snapshot testing
  const WeightInputJson = WeightInputComponent.toJSON()
  expect(WeightInputJson).toMatchSnapshot()
})
