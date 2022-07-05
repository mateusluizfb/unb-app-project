import React from "react";
import { View, Text, Button, StyleSheet  } from "react-native";

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
		borderColor: '#AAAAAA',
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

const Login = ({ navigation }) => {
	return (
		<View style={styles.container}>
			

			<View style={styles.box}>
				<Text>Home</Text>
        </View>



		</View>
	)
}

export default Login;