import { StyleSheet, View, Text, Linking, Image, Alert } from "react-native";
import { useState } from "react";

import { MedicineOption, SwitchType } from "./medicineCalculator.types";
import { timesPerDay } from "./medicineCalculator.contants";

import Button from "@/components/Button";
import MedicineSelector from "@/components/MedicineSelector";
import WeightInput from "@/components/WeightInput";
import AgeInput from "@/components/AgeInput";
import DosageValue from "@/components/DosageValue";

// This is the medicine calculator screen of the app
// It contains the logic to calculate the correct dosage of ibuprofen and acetaminophen

export default function MedicineCalculatorScreen() {
	const [useKg, setUseKg] = useState<boolean>(true);
	const [lessThan6MonthsOld, setLessThan6MonthsOld] = useState<boolean>(true);
	const [weight, setWeight] = useState<string>("");
	const [medicine, setMedicine] = useState<MedicineOption>();
	const [isDropdownFocused, setIsDropdownFocused] = useState(false);
	const [dosage, setDosage] = useState<string | null>(null);
	const [maxDose, setMaxDose] = useState<number | null>(null);

	// This function handles the switch between kg and lb units or age categories according to the type received
	const changeSwitch = (value: string, type: SwitchType) => {
		type === "weight"
			? setUseKg(value === "kg")
			: setLessThan6MonthsOld(value === "less-6");
	};

	// This function converts lb to kg
	const convertLbToKg = (lb: number) => lb / 2.204623;

	// This function calculates the dosage based on the selected medicine, weight, and age
	const findDosage = () => {
		// first check if there is a medicine selected and a proper weight entered
		// and alert the user if not
		if (!medicine || !weight) {
			setDosage(null);
			if (!medicine && !weight) {
				Alert.alert(
					"Error",
					"Please select a medicine and enter the weight."
				);
				return;
			}
			if (!medicine) {
				Alert.alert("Error", "Please select a medicine.");
				return;
			}
			if (!weight) {
				Alert.alert("Error", "Please enter the weight.");
				return;
			}
		}
		const weightValue = useKg
			? parseFloat(weight)
			: convertLbToKg(parseFloat(weight));
		if (isNaN(weightValue) || weightValue <= 0) {
			setDosage(null);
			Alert.alert("Error", "Please enter a valid weight.");
			return;
		}

		const isMedicineAcetaminophen = medicine.value.startsWith("a");
		const medicineDosageMg = medicine.dosageMg;
		const medicineDosageMl = medicine.dosageMl;
		const times = timesPerDay.find(
			item =>
				item.value ===
				(isMedicineAcetaminophen
					? "acetaminophen"
					: lessThan6MonthsOld
					? "less-6"
					: "over-6")
		);

		times?.maxDose ? setMaxDose(times.maxDose) : setMaxDose(null);

		const mgPerKg = isMedicineAcetaminophen
			? 15
			: lessThan6MonthsOld
			? 5
			: 10;
		const totalDosageForChild = weightValue * mgPerKg; // total dosage in mg according to child's weight

		if (medicineDosageMl) {
			// if the medicine has a dosage per ml, calculate the dosage in ml
			const dosagePerMl = medicineDosageMg / medicineDosageMl;
			const totalDosage = (totalDosageForChild / dosagePerMl).toFixed(2);
			setDosage(
				`${totalDosage} ${medicine.type} ${times?.label} if needed`
			);
		} else {
			// if the medicine has a dosage per mg, calculate the dosage in mg
			const totalDosage = (
				totalDosageForChild / medicineDosageMg
			).toFixed(2);
			setDosage(
				`${totalDosage} ${medicine.type} ${times?.label} if needed`
			);
		}
	};

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Welcome</Text>
			<Text style={styles.warningText}>
				Please be aware this app only calculates Ibuprofen and
				Acetaminophen dosages according to{" "}
				<Text
					style={styles.warningLink}
					onPress={() =>
						Linking.openURL(
							"https://www.cheo.on.ca/en/resources-and-support/p5325.aspx#:~:text=How%20much%20should%20you%20give%3F"
						)
					}
				>
					Cheo's
				</Text>{" "}
				recommendations. We do not recommend that you give any
				medication to your child without consulting a healthcare
				professional first.
			</Text>
			<View style={styles.InputContainer}>
				<AgeInput changeSwitch={changeSwitch} />
			</View>
			<View style={styles.InputContainer}>
				<WeightInput
					weight={weight}
					setWeight={setWeight}
					changeSwitch={changeSwitch}
				/>
			</View>
			<MedicineSelector
				isDropdownFocused={isDropdownFocused}
				setIsDropdownFocused={setIsDropdownFocused}
				medicine={medicine}
				setMedicine={setMedicine}
			/>
			<Button
				onPress={findDosage}
				text="Calculate Dosage"
				buttonStyle={styles.findDosageButton}
				textStyle={styles.findDosageButtonText}
			/>
			{medicine && dosage && (
				<DosageValue dosage={dosage} maxDose={maxDose} />
			)}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
		backgroundColor: "#f8f9fa",
	},
	title: {
		fontSize: 24,
		fontWeight: "bold",
		marginTop: 20,
		marginBottom: 10,
		textAlign: "center",
	},
	warningText: {
		fontStyle: "italic",
		textAlign: "justify",
		fontSize: 14,
		marginTop: 10,
		marginBottom: 20,
	},
	warningLink: {
		color: "#007bff",
	},
	InputContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: 20,
	},
	findDosageButton: {
		width: "50%",
		marginTop: 20,
		alignSelf: "center",
	},
	findDosageButtonText: {
		fontSize: 16,
	},
});
