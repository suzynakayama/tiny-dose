import { StyleSheet } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import React from "react";
import { MedicineOption } from "@/app/medicineCalculator/medicineCalculator.types";
import { medicineOptions } from "@/app/medicineCalculator/medicineCalculator.contants";

// This component renders a dropdown for selecting a medicine from the medicineOptions array.

interface MedicineSelectorProps {
	isDropdownFocused: boolean;
	setIsDropdownFocused: (isFocused: boolean) => void;
	medicine: MedicineOption | undefined;
	setMedicine: (medicine: MedicineOption) => void;
}

export default function MedicineSelector({
	isDropdownFocused,
	setIsDropdownFocused,
	medicine,
	setMedicine,
}: MedicineSelectorProps) {
	return (
		<Dropdown
			style={[
				styles.dropdown,
				isDropdownFocused && { borderColor: "#72CFF8" },
			]}
			placeholderStyle={styles.placeholderStyle}
			selectedTextStyle={styles.selectedTextStyle}
			inputSearchStyle={styles.inputSearchStyle}
			data={medicineOptions}
			accessibilityLabel={
				medicine ? medicine.itemAccessibilityLabelField : ""
			}
			search
			maxHeight={300}
			labelField="label"
			valueField="value"
			placeholder={!isDropdownFocused ? "Select medicine" : "..."}
			searchPlaceholder="Search..."
			value={medicine ? medicine.value : ""}
			onFocus={() => setIsDropdownFocused(true)}
			onBlur={() => setIsDropdownFocused(false)}
			onChange={item => {
				setMedicine(item);
				setIsDropdownFocused(false);
			}}
		/>
	);
}

const styles = StyleSheet.create({
	dropdown: {
		height: 40,
		borderColor: "gray",
		borderWidth: 0.5,
		borderRadius: 12,
		paddingHorizontal: 8,
		elevation: 2,
	},
	placeholderStyle: {
		fontSize: 16,
	},
	selectedTextStyle: {
		fontSize: 16,
	},
	inputSearchStyle: {
		height: 40,
		fontSize: 16,
	},
});
