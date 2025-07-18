import { StyleSheet, View, Text, Linking, Image, Alert, ScrollView } from 'react-native'
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context'
import React, { useState } from 'react'

import { MedicineOption, SwitchType } from '../../Types/medicineCalculator.types'
import { timesPerDay } from '../../Types/medicineCalculator.contants'

import Button from '@/components/Button'
import MedicineSelector from '@/components/MedicineSelector'
import WeightInput from '@/components/WeightInput'
import AgeInput from '@/components/AgeInput'
import DosageValue from '@/components/DosageValue'
import TinyDoseImage from '@/assets/images/tinyDose.png'
import BannerAdComponent from '@/components/BannerAd'

// This is the medicine calculator screen of the app
// It contains the logic to calculate the correct dosage of ibuprofen and acetaminophen

export default function MedicineCalculatorScreen() {
  const [useKg, setUseKg] = useState<boolean>(true)
  const [lessThan6MonthsOld, setLessThan6MonthsOld] = useState<boolean>(true)
  const [weight, setWeight] = useState<string>('')
  const [medicine, setMedicine] = useState<MedicineOption>()
  const [isDropdownFocused, setIsDropdownFocused] = useState(false)
  const [dosage, setDosage] = useState<string | null>(null)
  const [maxDose, setMaxDose] = useState<number | null>(null)

  // This function handles the switch between kg and lb units or age categories according to the type received
  const changeSwitch = (value: string, type: SwitchType) => {
    if (type === 'weight') {
      setUseKg(value === 'kg')
    } else {
      setLessThan6MonthsOld(value === 'less-6')
    }
  }

  // This function converts lb to kg
  const convertLbToKg = (lb: number) => lb / 2.204623

  // This function calculates the dosage based on the selected medicine, weight, and age
  const findDosage = () => {
    // first check if there is a medicine selected and a proper weight entered
    // and alert the user if not
    if (!medicine || !weight) {
      setDosage(null)
      if (!medicine && !weight) {
        Alert.alert('Error', 'Please select a medicine and enter the weight.')
        return
      }
      if (!medicine) {
        Alert.alert('Error', 'Please select a medicine.')
        return
      }
      if (!weight) {
        Alert.alert('Error', 'Please enter the weight.')
        return
      }
    }
    const weightValue = useKg ? parseFloat(weight) : convertLbToKg(parseFloat(weight))
    if (isNaN(weightValue) || weightValue <= 0) {
      setDosage(null)
      Alert.alert('Error', 'Please enter a valid weight.')
      return
    }

    const isMedicineAcetaminophen = medicine.value.startsWith('a')
    const medicineDosageMg = medicine.dosageMg
    const medicineDosageMl = medicine.dosageMl
    const times = timesPerDay.find(
      item =>
        item.value ===
        (isMedicineAcetaminophen ? 'acetaminophen' : lessThan6MonthsOld ? 'less-6' : 'over-6')
    )

    if (times?.maxDose) {
      setMaxDose(times.maxDose)
    } else {
      setMaxDose(null)
    }

    const mgPerKg = isMedicineAcetaminophen ? 15 : lessThan6MonthsOld ? 5 : 10
    const totalDosageForChild = weightValue * mgPerKg // total dosage in mg according to child's weight

    if (medicineDosageMl) {
      // if the medicine has a dosage per ml, calculate the dosage in ml
      const dosagePerMl = medicineDosageMg / medicineDosageMl
      const totalDosage = (totalDosageForChild / dosagePerMl).toFixed(2)
      setDosage(`${totalDosage} ${medicine.type} ${times?.label} if needed`)
    } else {
      // if the medicine has a dosage per mg, calculate the dosage in mg
      const totalDosage = (totalDosageForChild / medicineDosageMg).toFixed(2)
      setDosage(`${totalDosage} ${medicine.type} ${times?.label} if needed`)
    }
  }

  return (
    <SafeAreaProvider style={styles.safeAreaProvider}>
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <Image source={TinyDoseImage} style={styles.image} />
          <Text style={styles.subtitle}>“Smart, safe dosage guidance for little ones.”</Text>
          <Text style={styles.warningText}>
            Please note: This app only calculates Ibuprofen and Acetaminophen dosages based on{' '}
            <Text
              style={styles.warningLink}
              onPress={() =>
                Linking.openURL(
                  'https://www.cheo.on.ca/en/resources-and-support/p5325.aspx#:~:text=How%20much%20should%20you%20give%3F'
                )
              }
            >
              Cheo's
            </Text>{' '}
            expert recommendations. It does not replace medical advice. Always consult a healthcare
            professional before giving any medication to your child.
          </Text>
          <View style={styles.InputContainer}>
            <AgeInput changeSwitch={changeSwitch} />
          </View>
          <View style={styles.InputContainer}>
            <WeightInput weight={weight} setWeight={setWeight} changeSwitch={changeSwitch} />
          </View>
          <MedicineSelector
            isDropdownFocused={isDropdownFocused}
            setIsDropdownFocused={setIsDropdownFocused}
            medicine={medicine}
            setMedicine={setMedicine}
          />
          <Button
            onPress={findDosage}
            text='Calculate Dosage'
            buttonStyle={styles.findDosageButton}
            textStyle={styles.findDosageButtonText}
          />
          {medicine && dosage && <DosageValue dosage={dosage} maxDose={maxDose} />}
          <BannerAdComponent />
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  InputContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 23,
  },
  container: {
    backgroundColor: '#f8f9fa',
    flex: 1,
    padding: 20,
  },
  findDosageButton: {
    alignSelf: 'center',
    marginTop: 20,
    width: '50%',
  },
  findDosageButtonText: {
    fontSize: 16,
  },
  image: {
    alignSelf: 'center',
    height: 55,
    maxWidth: 200,
  },
  safeAreaProvider: { backgroundColor: '#f8f9fa' },
  subtitle: {
    marginBottom: 10,
    textAlign: 'center',
  },
  warningLink: {
    color: '#007bff',
  },
  warningText: {
    color: '#555',
    fontSize: 14,
    fontStyle: 'italic',
    lineHeight: 20,
    marginBottom: 20,
    marginTop: 10,
    textAlign: 'justify',
  },
})
