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

var IconImage = require('./FAKIconImage.ios');

var ReactNativeIcons = React.createClass({
  render: function() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
          <IconImage
              icon={icons.beer}
              style={styles.icon}
          />
          <IconImage
              icon={icons.idea}
              style={styles.icon}
          />
          <IconImage
              icon={icons.github}
              style={styles.icon}
          />
          <IconImage
              icon={icons.facebook}
              style={styles.icon}
          />
      </ScrollView>
    );
  }
});

var iconSize = 100;
var icons = {
    idea: {
        name: 'foundation|lightbulb',
        size: iconSize,
        color: 'green'
    },
    facebook: {
        name: 'fontawesome|facebook-square',
        size: iconSize,
        color: '#3b5998'
    },
    beer: {
        name: 'ion|beer',
        size: iconSize,
        color: 'orange'
    },
    github: {
        name: 'zocial|github',
        size: iconSize,
        color: 'black'
    }
};

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
    icon : {
        flex: 1,
        flexDirection: 'column',
        width: iconSize,
        height: iconSize
    }
});

AppRegistry.registerComponent('ReactNativeIcons', () => ReactNativeIcons);
