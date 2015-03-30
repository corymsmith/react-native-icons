/**
 * React Native app demonstrating react-native-icons
 * https://github.com/corymsmith/react-native-icons
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView
} = React;

var Icon = require('./FAKIconImage.ios');
var iconSize = 100;
var ReactNativeIcons = React.createClass({
  render: function() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
          <Icon
              name='ion|beer'
              size={150}
              color='#887700'
              style={styles.beer}
          />
          <Icon
              name='zocial|github'
              size={70}
              color='black'
              style={styles.github}
          />
          <Icon
              name='fontawesome|facebook-square'
              size={70}
              color='#3b5998'
              style={styles.facebook}
          />
          <Icon
              name='foundation|lightbulb'
              size={30}
              color='#777777'
              style={styles.lightbulb}
          />
      </ScrollView>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  beer : {
    flex: 1,
    flexDirection: 'column',
    width: 150,
    height: 150
  },
    github : {
        flex: 1,
        flexDirection: 'column',
        width: 70,
        height: 70
    },
    facebook : {
        flex: 1,
        flexDirection: 'column',
        width: 70,
        height: 70
    },
    lightbulb : {
        flex: 1,
        flexDirection: 'column',
        width: 30,
        height: 30
    }
});

AppRegistry.registerComponent('ReactNativeIcons', () => ReactNativeIcons);
