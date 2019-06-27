import React, { Component } from "react"
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons"

class ToDoItem extends Component {
  render() {
    return (
      <View style={styles.listItem}>
        <Text style={styles.listItemText}>{this.props.toDoItem}</Text>
        <TouchableOpacity onPress={this.props.onItemDelete}>
          <FontAwesomeIcon
            style={styles.deleteIcon}
            icon={faTimesCircle}
            size={25}
          />
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  listItem: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1.5,
    borderRadius: 10,
    borderColor: "#083d77",
    marginRight: 20,
    marginLeft: 20,
    marginTop: 15,
    marginBottom: 5,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 15,
    paddingBottom: 15,
    backgroundColor: "#235789"
  },
  listItemText: {
    textAlign: "center",
    fontSize: 17,
    color: "white"
  },
  deleteIcon: {
    color: "white"
  }
})

export default ToDoItem
