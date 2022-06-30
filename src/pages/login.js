import React from "react";
import { View, Text, TextInput, StyleSheet  } from "react-native";

import Input from '../components/input';

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
		flex:0.5,
		borderWidth: 1,
		borderRadius: 5 
	},
	label: {
		flex: 0.3
	}
})

const Login = () => {
	return (
		<View style={styles.container}>
			
			<Text>Open up App.js to start working on your app!</Text>

			<View style={styles.box}>
				<Input
					labelStyle={styles.label}
					inputStyle={styles.input}
					label="Nick"
					placeholder="Email" 
				/>

				<Input
					labelStyle={styles.label}
					inputStyle={styles.input}
					label="Senha"
					placeholder="Senha" 
				/>
			</View>

		</View>
	)
}

export default Login;