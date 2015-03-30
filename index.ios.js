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

var ReactNativeIcons = React.createClass({

  render: function () {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Icon
          name='ion|beer'
          size={100}
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
          style={styles.lightbulb}/>
        <Text style={styles.header}>
            {'Stacked Icons!'}
        </Text>
        <Icon
          name='fontawesome|square'
          size={80}
          color='#55acee'
          style={styles.twitterOutline}>
          <Icon
            name='fontawesome|twitter'
            size={50}
            color='#ffffff'
            style={styles.twitterIcon}/>
        </Icon>

      </ScrollView>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  header: {
    flexDirection: 'column',
    backgroundColor: 'transparent',
    fontSize: 24
  },
  beer: {
    flex: 1,
    flexDirection: 'column',
    width: 100,
    height: 100
  },

  github: {
    flex: 1,
    flexDirection: 'column',
    width: 70,
    height: 70
  },
  facebook: {
    flex: 1,
    flexDirection: 'column',
    width: 70,
    height: 70
  },
  twitterOutline: {
    flex: 1,
    flexDirection: 'column',
    width: 80,
    height: 80,
    alignItems: 'center'
  },
  twitterIcon: {
    flex: 1,
    width: 50,
    height: 50
  },
  lightbulb: {
    flex: 1,
    flexDirection: 'column',
    width: 30,
    height: 30
  }
});

AppRegistry.registerComponent('ReactNativeIcons', () => ReactNativeIcons);
