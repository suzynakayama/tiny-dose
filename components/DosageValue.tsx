import { StyleSheet, Text, Image, View } from 'react-native';
import React from 'react';
import SyringeImage from '@/assets/images/syringe.png';

// This component displays the calculated dosage value and maximum dose information.
// It contains the image of a syringe, the dosage value, and an optional maximum dose message.

interface DosageValueProps {
  dosage: string;
  maxDose: number | null;
}

export default function DosageValue({ dosage, maxDose }: DosageValueProps) {
  return (
    <View style={styles.dosageContainer}>
      <Image source={SyringeImage} style={styles.image} />
      <Text style={styles.dosageText}>Your child's dose:</Text>
      <Text style={styles.dosageValue}>{`${dosage}`}</Text>
      {maxDose && (
        <Text
          style={styles.maxDose}
        >{`⚠️ Do not exceed ${maxDose} doses in 24 hours.`}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  dosageContainer: {
    flex: 1,
    alignItems: 'center',
    marginBottom: 10,
  },
  image: {
    maxWidth: 180,
    height: 115,
  },
  dosageText: {
    fontSize: 16,
    marginBottom: 10,
  },
  dosageValue: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  maxDose: {
    fontSize: 14,
    marginTop: 15,
    fontStyle: 'italic',
  },
});
