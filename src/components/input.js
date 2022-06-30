import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";

const Input = ({ labelStyle, inputStyle, label, placeholder }) => {
	const [text, onChangeText] = useState("");

	return (
		<View style={{ flex: 1 }}>
			<Text style={labelStyle}>{label}</Text>

			<TextInput
				style={inputStyle}
				onChangeText={onChangeText}
				value={text}
				placeholder={placeholder}
			/>
		</View>
	)
}

export default Input;