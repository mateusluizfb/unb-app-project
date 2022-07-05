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
    width: 280,
    height: 140,
		borderWidth: 1,
		borderRadius: 5,
    justifyContent: 'center',
    flexDirection: 'column',
    justifyContent:'space-between',
    padding: 20,
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
	},
  btn : {
    margin: 80,
  }
})

const Start = ({ navigation }) => {
	return (
		<View style={styles.container}>

			<View style={styles.box}>
        <Button
            style={styles.btn} 
            title="Entrar"
            onPress={() => navigation.navigate("Login")}
            accessibilityLabel="Entrar com o email e senha no aplicativo"
          />

        <Button
          style={styles.btn} 
          title="Cadastrar"
          onPress={() => navigation.navigate("Cadastro Pessoa")}
        />
			</View>

		</View>
	)
}

export default Start;