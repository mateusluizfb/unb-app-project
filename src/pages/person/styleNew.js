import { StyleSheet } from "react-native";

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
export default styles;