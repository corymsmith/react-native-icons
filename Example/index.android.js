/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
  } = React;

var { Icon } = require('react-native-icons');

var example = React.createClass({
  render: function () {
    return (
      <View style={styles.container}>

        <Icon
          name='ion|alert'
          size={200}
          style={styles.beerIcon}
          color='#8077ff'
          />

        <Icon
          name='ion|android-bicycle'
          size={200}
          style={styles.beerIcon}
          color='#8077ff'
          />

      </View>
    );

  }
});

/*
        <TouchableHighlight
          underlayColor="transparent"
          onPress={() => console.log('Beer!')}>
          <Icon
            name='fontawesome|facebook'
            size={44}
            style={styles.signInWithFacebookIcon}
            color='#0000ff'
            />
        </TouchableHighlight>
 */

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: 'red',
  },
  beerIcon: {
    color: 'pink',
    backgroundColor: '#00ff00',
    width: 200,
    height: 200,
    flex: 1 ,
    textAlign: 'center',
    marginBottom: 5,
    fontSize: 24
  },
  signInWithFacebookButton: {
    color: 'pink',
    //backgroundColor: '#00ff00',
    width: 200,
    height: 200,
    //flex: 1 ,
    textAlign: 'center',
    marginBottom: 5,
    fontSize: 24
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  testIcon: {
    fontFamily: "SOUPER3",
    fontSize: 44
  }
});

AppRegistry.registerComponent('example', () => example);
