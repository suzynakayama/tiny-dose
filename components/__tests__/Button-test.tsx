import React from 'react'
import { render, screen } from '@testing-library/react-native'
import Button from '../Button'

test('renders correctly', () => {
  const ButtonComponent = render(<Button text='Click Me' onPress={() => {}} />)
  const button = screen.getByRole('button')
  expect(button).toBeOnTheScreen()
  expect(button).toHaveProp(
    'style',
    expect.objectContaining({
      alignItems: 'center',
      backgroundColor: '#01CDD4',
      borderRadius: 30,
      opacity: 1,
      paddingHorizontal: 5,
      paddingVertical: 12,
      shadowColor: '#031F72',
      shadowOffset: { height: 6, width: 4 },
      shadowOpacity: 0.25,
    })
  )

  // Snapshot testing
  const buttonJson = ButtonComponent.toJSON()
  expect(buttonJson).toMatchSnapshot()
})

test('received styles correctly', () => {
  render(<Button text='Click Me' onPress={() => {}} buttonStyle={{ backgroundColor: 'red' }} />)
  const button = screen.getByRole('button')
  expect(button.props.style).toHaveProperty('backgroundColor', 'red')
})
