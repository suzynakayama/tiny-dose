import React from 'react'
import { useRouter } from 'expo-router'
import { Linking, StyleSheet, Text, Image, ScrollView } from 'react-native'
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context'
import MedicineImage from '@/assets/images/medicine.png'
import Button from '@/components/Button'
import BannerAdComponent from '@/components/BannerAd'

// This is the home screen of the app
// It provides a brief introduction to the app and a button to navigate to the medicine calculator screen
// The app is designed to help parents calculate the correct dosage of ibuprofen and acetaminophen
// for their children based on their weight and age, following the recommendations from Cheo's website

export default function HomeScreen() {
  const router = useRouter()

  return (
    <SafeAreaProvider style={styles.safeAreaProvider}>
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.contentContainer}>
          <Image source={MedicineImage} style={styles.image} />
          <Text style={styles.subtitle}>
            Easily calculate safe doses of Ibuprofen and Acetaminophen for your child, based on
            <Text
              style={styles.subtitleLink}
              onPress={() =>
                Linking.openURL(
                  'https://www.cheo.on.ca/en/resources-and-support/p5325.aspx#:~:text=How%20much%20should%20you%20give%3F'
                )
              }
            >
              {' '}
              Cheo's{' '}
            </Text>
            trusted guidelines.
          </Text>
          <Button
            onPress={() => router.push('/medicineCalculator')}
            text="Let's go!"
            buttonStyle={styles.button}
          />
          <BannerAdComponent />
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  button: {
    marginTop: 50,
    paddingHorizontal: 25,
  },
  container: {
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
    flex: 1,
    marginTop: 50,
    padding: 30,
  },
  contentContainer: {
    alignItems: 'center',
  },
  image: {
    height: 200,
    marginBottom: 20,
    width: 200,
  },
  safeAreaProvider: { backgroundColor: '#f8f9fa' },
  subtitle: {
    color: '#555',
    fontSize: 16,
    lineHeight: 25,
    marginTop: 20,
    textAlign: 'center',
  },
  subtitleLink: {
    color: '#007bff',
  },
})
