import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  Button,
  StyleSheet,
} from "react-native";

const CadastroPessoa = ({navigation}) => {
  const [text, onChangeText] = React.useState("");
  const [pass, onChangePass] = React.useState(null);

  const entrar = () => {
    navigation.navigate("CadastroPessoa")
  }

  return (
    <SafeAreaView style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.text}>Nick:</Text>

        <TextInput
          style={styles.box}
          onChangeText={onChangeText}
          value={text}
          placeholder="Email"
        />

        <Text style={styles.text}>Senha:</Text>
        <TextInput
          style={styles.box}
          onChangeText={onChangePass}
          value={pass}
          placeholder="Senha"
          secureTextEntry={true}
        />

        <Button
          style={styles.btn} 
          title="Press me"
          onPress={() => entrar()}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#DDDDDD",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    height: 300,
    width: 300,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    padding: 16,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#AAAAAA",
  },
  box: {
    borderColor: "#AAAAAA",
    backgroundColor: "#FFFFFF",
    marginTop: 3,
    marginBottom: 16,
    paddingLeft: 8,
    flex: 0.2,
    borderWidth: 1,
    borderRadius: 5,
  },
  text: {
    fontSize: 16,
  },
  btn: {
    marginBottom: 16,
    width: 30,
  },
});
export default CadastroPessoa;
