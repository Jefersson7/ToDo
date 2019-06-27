import React, { Component } from "react"
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  AsyncStorage
} from "react-native"
import t from "tcomb-form-native"

const Form = t.form.Form

class AuthScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      options: this.options,
      value: ""
    }
  }

  options = {
    fields: {
      email: {
        label: "E-Mail",
        error: "Debe digitar un correo"
      },
      password: {
        label: "Contraseña",
        password: true,
        secureTextEntry: true,
        error: "Debe digitar una contraseña"
      }
    }
  }

  value = {}

  User = t.struct({
    email: t.String,
    password: t.String
  })

  goToRegister = () => {
    this.props.navigation.navigate("Register")
  }

  handleSubmit = async () => {
    let values = {
      email: this._form.getComponent("email").state.value,
      password: this._form.getComponent("password").state.value
    }

    let value = this._form.getValue()
    if (value) {
      try {
        let p = await AsyncStorage.getItem(value.email)
        if (!p) {
          this.setState({
            options: {
              fields: {
                ...this.options.fields,
                email: {
                  label: "E-Mail",
                  hasError: true,
                  error: "No se encontró un usuario con este correo"
                }
              }
            },
            value: values
          })
        } else if (p !== value.password) {
          this.setState({
            options: {
              fields: {
                ...this.options.fields,
                password: {
                  ...this.options.fields.password,
                  hasError: true,
                  error: "La contraseña es incorrecta"
                }
              }
            },
            value: values
          })
        } else {
          this.setState({
            options: this.options,
            value: null
          })
          this.props.navigation.navigate("ToDo")
        }
      } catch (e) {
        console.log(e)
      }
    } else {
      this.setState({
        options: this.options,
        value: values
      })
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textHeader}>Iniciar Sesión</Text>
        <Form
          testID="form"
          ref={c => (this._form = c)}
          type={this.User}
          value={this.state.value}
          options={this.state.options}
        />
        <View style={styles.options}>
          <TouchableOpacity
            testID="ingresar"
            style={styles.button}
            onPress={this.handleSubmit}
          >
            <Text style={styles.buttonText}>Ingresar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={this.goToRegister}>
            <Text style={styles.buttonText}>Registrarse</Text>
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

export default AuthScreen
