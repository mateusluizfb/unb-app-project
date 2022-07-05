import React from "react";
import { View, Text, Button, StyleSheet, TextInput } from "react-native";
import { createUserWithEmailAndPassword } from "../../../firebase.config.js"
import { auth } from "../../../firebase.config.js";
import styles  from "./styleNew.js";

const Login = ({ navigation }) => {
	const [email, onChangeEmail] = React.useState("");
	const [pass, onChangePass] = React.useState(null);
	const [user, setUser] = React.useState({});

	const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        email,
        pass
      );
			console.log(email);
      console.log(user);
    } catch (error) {
			console.log(email);
      console.log(error.message);
    }
  };

	return (
	<View style={styles.background}>
			<View style={styles.container}>

					<Text style={styles.text}>Nick:</Text>

					<TextInput
						type="email"
						style={styles.box}
						onChangeText={onChangeEmail}
						value={email}
						placeholder="Email"
						autoComplete="email"
						keyboardType="email-address"
						autoCapitalize="none"
					/>

					<Text style={styles.text}>Senha:</Text>
					<TextInput
						style={styles.box}
						onChangeText={onChangePass}
						value={pass}
						placeholder="Senha"
						secureTextEntry={true}
						autoComplete="password-new"
					/>

					<Button
						style={styles.btn} 
						title="Criar conta"
						onPress={register}
					/>


				</View>

			</View>
		)
	}

export default Login;