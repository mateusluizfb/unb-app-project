import React from "react";
import { View, Text, SafeAreaView, TextInput, StyleSheet  } from "react-native";

const Login = () => {
    const [text, onChangeText] = React.useState("");
    const [pass, onChangePass] = React.useState(null);
  
    return (
        <View
        style={{
            flexDirection: 'column',
            height: 200,
            width: 300,
            padding: 20,
            borderWidth: 1,
            borderRadius: 5
            
        }}
        >
        
        <Text style={{  flex: 0.12 }}>Nick:</Text>

        <TextInput 
        style={styles.box}
        onChangeText={onChangeText}
        value={text}
        placeholder="Email"
        />

        
        <Text style={{  flex: 0.12 }}>Senha:</Text>
        <TextInput style={styles.box}

            onChangeText={onChangePass}
            value={pass}
            placeholder="Senha"
            secureTextEntry={true}
            />


        </View>
    );
    };

    const styles = StyleSheet.create({
        box: {
            borderColor: '#AAAAAA',
            marginTop: 5,
            paddingLeft: 8,
            flex:0.2,
            borderWidth: 1,
            borderRadius: 5 
        }
    })
export default Login;