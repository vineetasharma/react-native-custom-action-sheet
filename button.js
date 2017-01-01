'use strict'

var React = require('react');
var ReactNative = require('react-native');
var { StyleSheet, Text, TouchableOpacity, View } = ReactNative;

var Button = React.createClass({
  render: function() {
    return (
      <TouchableOpacity style={styles.button} onPress={this.props.onPress}>
        <Text style={styles.buttonText}>
          {this.props.text}
        </Text>
      </TouchableOpacity>
    );
  }
});

var styles = StyleSheet.create({
  buttonText: {
    color: '#2e8995',
    alignSelf: 'center',
    fontSize: 18
  },
  button: {
    height: 50,
    backgroundColor: 'white',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 6,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  }
});

module.exports = Button
