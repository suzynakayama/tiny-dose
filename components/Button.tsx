import { TouchableOpacity, Text, StyleSheet } from "react-native";
import React from "react";

// This component is a reusable button that can be used throughout the app
// It accepts an onPress function, text to display, and optional styles for the button and text
// It uses TouchableOpacity for a better user experience with touch feedback

interface ButtonProps {
	onPress: () => void;
	text: string;
	buttonStyle?: object;
	textStyle?: object;
}

export default function Button({
	onPress,
	text,
	buttonStyle,
	textStyle,
}: ButtonProps) {
	return (
		<TouchableOpacity
			style={[styles.button, buttonStyle]}
			onPress={onPress}
		>
			<Text style={[styles.buttonText, textStyle]}>{text}</Text>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	button: {
		backgroundColor: "#50C2F8",
		paddingVertical: 12,
		paddingHorizontal: 5,
		borderRadius: 8,
		alignItems: "center",
	},
	buttonText: {
		color: "#fff",
		fontSize: 18,
		fontWeight: "bold",
	},
});
