import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import SwitchSelector from "react-native-switch-selector";
import { weightOptions } from "@/app/medicineCalculator/medicineCalculator.contants";
import { SwitchType } from "@/app/medicineCalculator/medicineCalculator.types";

// This component allows the user to input the child's weight and switch between kg and lb units.

interface WeightInputProps {
	weight: string;
	setWeight: (weight: string) => void;
	changeSwitch: (value: string, type: SwitchType) => void;
}

export default function WeightInput({
	weight,
	setWeight,
	changeSwitch,
}: WeightInputProps) {
	return (
		<>
			<View style={styles.inputContainer}>
				<Text>Child weight:</Text>
				<TextInput
					style={styles.input}
					placeholder="Enter weight..."
					placeholderTextColor="#aaa"
					value={weight}
					onChangeText={newWeight => setWeight(newWeight)}
					keyboardType="numeric"
				/>
			</View>
			<SwitchSelector
				options={weightOptions}
				initial={0}
				onPress={(value: string) => changeSwitch(value, "weight")}
				fontSize={14}
				selectedTextStyle={{ fontWeight: "bold" }}
				buttonColor="#72CFF8"
				textColor="#333"
				backgroundColor="#cde6f0"
				style={styles.weightSelector}
			/>
		</>
	);
}

const styles = StyleSheet.create({
	inputContainer: {
		flexDirection: "row",
		alignItems: "center",
	},
	input: {
		borderBottomWidth: 1,
		borderColor: "#ccc",
		padding: 5,
		fontSize: 16,
		marginLeft: 5,
	},
	weightSelector: {
		width: 100,
		padding: 3,
	},
});
