import React from "react";
import { View, Text, TextInput, StyleSheet  } from "react-native";

const Login = () => {
	const [text, onChangeText] = React.useState("");
	const [pass, onChangePass] = React.useState(null);

	return (
		<View style={styles.container}>
			
			<Text>Open up App.js to start working on your app!</Text>

			<View style={styles.box}>
				<Text style={styles.label}>Nick:</Text>

				<TextInput
					style={styles.input}
					onChangeText={onChangeText}
					value={text}
					placeholder="Email"
				/>

				<Text style={styles.label}>Senha:</Text>
				
				<TextInput
					style={styles.input}
					onChangeText={onChangePass}
					value={pass}
					placeholder="Senha"
					secureTextEntry={true}
				/>
			</View>

		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'column',
	},
	box: {
		height: 200,
		width: 300,
		padding: 20,
		borderWidth: 1,
		borderRadius: 5
	},
	input: {
		borderColor: '#AAAAAA',
		marginTop: 5,
		paddingLeft: 8,
		flex:0.2,
		borderWidth: 1,
		borderRadius: 5 
	},
	label: {
		flex: 0.12
	}
})

export default Login;