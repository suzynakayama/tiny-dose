import { StyleSheet, Text, Image, View } from "react-native";
import React from "react";
import SyringeImage from "@/assets/images/syringe.png";

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
			<Text style={styles.dosageText}>Your child dosage is:</Text>
			<Text style={styles.dosageValue}>{`${dosage}`}</Text>
			{maxDose && (
				<Text
					style={styles.maxDose}
				>{`Do not give more than ${maxDose} doses in 24 hours.`}</Text>
			)}
		</View>
	);
}

const styles = StyleSheet.create({
	dosageContainer: {
		flex: 1,
		alignItems: "center",
		marginTop: 25,
	},
	image: {
		maxWidth: 180,
		height: 130,
		marginBottom: 10,
	},
	dosageText: {
		fontSize: 16,
		marginBottom: 10,
	},
	dosageValue: {
		fontSize: 20,
		fontWeight: "bold",
		textAlign: "center",
	},
	maxDose: {
		fontSize: 14,
		marginTop: 15,
	},
});
