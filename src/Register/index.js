import React, { Component } from "react"
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  AsyncStorage,
  Alert
} from "react-native"
import t from "tcomb-form-native"

const Form = t.form.Form

class RegisterScreen extends Component {
  constructor(props) {
    super(props)
  }

  options = {
    fields: {
      email: {
        label: "E-Mail"
      },
      password: {
        label: "Contraseña",
        password: true,
        secureTextEntry: true
      }
    }
  }

  User = t.struct({
    email: t.String,
    password: t.String
  })

  goToLogIn = () => {
    this.props.navigation.navigate("Auth")
  }

  handleSubmit = () => {
    let value = this._form.getValue()
    AsyncStorage.setItem(`${value.email}`, value.password)
    Alert.alert(
      "Registro Exitoso",
      `El usuario con el e-mail ${value.email} se ha registrado exitosamente`,
      [
        {
          text: "Ir al inicio de sesion",
          onPress: () => this.props.navigation.navigate("Auth")
        }
      ]
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textHeader}>Registarse</Text>
        <Form
          ref={c => (this._form = c)}
          type={this.User}
          options={this.options}
        />
        <View style={styles.options}>
          <TouchableOpacity style={styles.button} onPress={this.handleSubmit}>
            <Text style={styles.buttonText}>Registrarse</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={this.goToLogIn}>
            <Text style={styles.buttonText}>Log In</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 60,
    backgroundColor: "#b8d8d8",
    justifyContent: "center"
  },
  options: {
    textAlign: "center",
    flexDirection: "row",
    justifyContent: "center"
  },
  button: {
    padding: 10,
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: "#36593b"
  },
  buttonText: {
    fontSize: 17,
    color: "white"
  },
  textHeader: {
    color: "black",
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 30,
    fontSize: 25
  }
})

export default RegisterScreen
