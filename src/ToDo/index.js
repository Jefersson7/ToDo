import React, { Component } from "react"
import { View, Text, StyleSheet } from "react-native"
import {
  ScrollView,
  TextInput,
  TouchableOpacity,
  FlatList
} from "react-native-gesture-handler"
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import { faPlus } from "@fortawesome/free-solid-svg-icons"

import ToDoItem from "./ToDoItem"

class ToDoScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      toDoList: [],
      value: ""
    }
  }

  handleTextChange = value => {
    this.setState({ value })
  }

  addItem = value => {
    let { toDoList } = this.state
    toDoList.push(this.state.value)
    this.setState({ toDoList })
    console.log(this.state.toDoList)
  }

  deleteItem = index => {
    console.log(index)
    let { toDoList } = this.state
    toDoList.splice(index, 1)
    this.setState({ toDoList })
  }

  render() {
    let { toDoList } = this.state
    return (
      <View style={styles.container}>
        <View style={styles.top}>
          <TextInput
            style={styles.input}
            value={this.state.name}
            placeholder="Escriba un Item"
            onChangeText={this.handleTextChange}
          />
          <TouchableOpacity style={styles.button} onPress={this.addItem}>
            <FontAwesomeIcon style={styles.buttonIcon} icon={faPlus} />
          </TouchableOpacity>
        </View>
        <ScrollView style={styles.bottom}>
          <FlatList
            data={toDoList}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => (
              <ToDoItem
                toDoItem={item}
                onItemDelete={() => this.deleteItem(index)}
              />
            )}
          />
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  top: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#c1dbb3",
    height: 80
  },
  bottom: {
    flex: 2,
    backgroundColor: "#b8d8d8"
  },
  button: {
    justifyContent: "center",
    padding: 20,
    height: 45,
    borderRadius: 10,
    backgroundColor: "#105410"
  },
  buttonIcon: {
    color: "white"
  },
  input: {
    borderWidth: 1,
    borderColor: "#105410",
    borderRadius: 10,
    margin: 15,
    height: 45,
    width: "70%",
    marginLeft: 22,
    paddingLeft: 20,
    paddingRight: 20,
    fontSize: 18,
    backgroundColor: "white"
  }
})

export default ToDoScreen
