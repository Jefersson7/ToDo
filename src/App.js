import React, { Component } from "react"
import { createStackNavigator, createAppContainer } from "react-navigation"
import { Platform, StyleSheet, Text, View } from "react-native"
import t from "tcomb-form-native"
import AuthScreen from "./Auth"
import RegisterScreen from "./Register"
import ToDoScreen from "./ToDo"

t.form.Form.stylesheet.textbox.normal.backgroundColor = "#ffffff"
t.form.Form.stylesheet.textbox.normal.borderColor = "#235789"
t.form.Form.stylesheet.textbox.normal.borderWidth = 2
t.form.Form.stylesheet.textbox.normal.fontSize = 18
t.form.Form.stylesheet.textbox.error.backgroundColor = "#ffffff"
t.form.Form.stylesheet.textbox.error.borderWidth = 2

const AppNavigator = createStackNavigator(
  {
    Auth: AuthScreen,
    Register: RegisterScreen,
    ToDo: ToDoScreen
  },
  {
    headerMode: "none",
    initialRouteName: "Auth"
  }
)

const AppContainer = createAppContainer(AppNavigator)

export default class App extends Component {
  render() {
    return <AppContainer />
  }
}
