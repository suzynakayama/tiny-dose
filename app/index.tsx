import React from 'react';
import { useRouter } from 'expo-router';
import { Linking, StyleSheet, Text, Image, ScrollView } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import MedicineImage from '@/assets/images/medicine.png';
import Button from '@/components/Button';

// This is the home screen of the app
// It provides a brief introduction to the app and a button to navigate to the medicine calculator screen
// The app is designed to help parents calculate the correct dosage of ibuprofen and acetaminophen
// for their children based on their weight and age, following the recommendations from Cheo's website

export default function HomeScreen() {
  const router = useRouter();

  return (
    <SafeAreaProvider style={styles.safeAreaProvider}>
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.contentContainer}>
          <Image source={MedicineImage} style={styles.image} />
          <Text style={styles.subtitle}>
            Easily calculate safe doses of Ibuprofen and Acetaminophen for your
            child, based on
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
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safeAreaProvider: { backgroundColor: '#f8f9fa' },
  container: {
    flex: 1,
    marginTop: 50,
    alignItems: 'center',
    padding: 30,
    backgroundColor: '#f8f9fa',
  },
  contentContainer: {
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginTop: 20,
    lineHeight: 25,
  },
  subtitleLink: {
    color: '#007bff',
  },
  button: {
    paddingHorizontal: 25,
    marginTop: 50,
  },
});
