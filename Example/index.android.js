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
  ScrollView,
  TouchableHighlight
  } = React;

var { Icon } = require('react-native-icons');

var BrandColors = {
  Facebook: '#3b5998',
  Twitter: '#55acee'
};

var example = React.createClass({
  render: function () {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <View >

          <Text style={styles.header}>
            {'Ionic Icons'}
          </Text>
          <TouchableHighlight
            underlayColor="transparent"
            onPress={() => console.log('Tapped Beer!')}>
        <Icon
              name='ion|beer'
              size={100}
              color='#887700'
              style={styles.beer}
          />
          </TouchableHighlight>
        <Icon
            name='typicons|anchor'
            size={100}
            color='gray'
            style={styles.lightbulb}
          />
          <Icon
            name='material|face'
            size={80}
            color='black'
            style={styles.face}
            />
          <Icon
            name='fontawesome|facebook-square'
            size={40}
            color={BrandColors.Facebook}
            style={styles.facebook}
            />
          <Icon
            name='foundation|lightbulb'
            size={40}
            style={styles.lightbulb}/>

          <Icon
            name='zocial|twitter'
            size={60}
            color='red'
            style={styles.lightbulb}/>

          <Icon
            name='zocial|facebook'
            size={60}
            color='black'
            style={styles.lightbulb}/>
      </View>


      </ScrollView>
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
  },

  beer: {
    width: 70,
    height: 70,
    margin: 10,
    backgroundColor: 'pink'
  },
  face: {
    width: 70,
    height: 70,
    margin: 10,
    backgroundColor: 'pink'
  },
  facebook: {
    width: 70,
    height: 70,
    margin: 10
  },
  lightbulb: {
    width: 70,
    height: 70,
    color: "red",
    margin: 10
  },
});

AppRegistry.registerComponent('example', () => example);
