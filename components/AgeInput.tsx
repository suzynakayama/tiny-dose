import { View, Text, StyleSheet } from "react-native";
import React from "react";
import SwitchSelector from "react-native-switch-selector";
import { ageOptions } from "@/app/medicineCalculator/medicineCalculator.contants";
import { SwitchType } from "@/app/medicineCalculator/medicineCalculator.types";

// This component allows the user to select the age of the child
// It uses a SwitchSelector to toggle between the ageOptions array

interface AgeInputProps {
	changeSwitch: (value: string, type: SwitchType) => void;
}

export default function AgeInput({ changeSwitch }: AgeInputProps) {
	return (
		<>
			<Text>Child Age:</Text>
			<SwitchSelector
				options={ageOptions}
				initial={0}
				onPress={(value: string) => changeSwitch(value, "age")}
				fontSize={14}
				selectedTextStyle={{ fontWeight: "bold" }}
				buttonColor="#72CFF8"
				textColor="#333"
				backgroundColor="#cde6f0"
				style={styles.ageSelector}
			/>
		</>
	);
}

const styles = StyleSheet.create({
	ageSelector: {
		maxWidth: 250,
		padding: 3,
	},
});
