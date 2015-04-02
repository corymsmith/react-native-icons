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

var Icon = require('FAKIconImage');
var NativeModules = require('NativeModules');
var SMXTabBarIOS = require('SMXTabBarIOS');
var SMXTabBarItemIOS = SMXTabBarIOS.Item;

var ReactNativeIcons = React.createClass({
  getInitialState: function() {
    return {
      selectedTab: 'home',
      notifCount: 0,
      presses: 0,
    };
  },
  render: function () {
    return (
      <SMXTabBarIOS
        selectedTab={this.state.selectedTab}
        tintColor={'#c1d82f'}
        barTintColor={'#000000'}
        styles={styles.tabBar}>
        <SMXTabBarItemIOS
          name="home"
          iconName={'ion|ios-home-outline'}
          title={''}
          accessibilityLabel="Home Tab"
          selected={this.state.selectedTab === 'home'}
          onPress={() => {
            this.setState({
              selectedTab: 'home',
            });
          }}>
          {this._renderContent()}
        </SMXTabBarItemIOS>
        <SMXTabBarItemIOS
            name="articles"
            iconName={'ion|ios-paper-outline'}
            title={''}
            iconSize={28}
            accessibilityLabel="Articles Tab"
            selected={this.state.selectedTab === 'articles'}
            onPress={() => {
            this.setState({
              selectedTab: 'articles',
            });
          }}>
          {this._renderContent()}
        </SMXTabBarItemIOS>
        <SMXTabBarItemIOS
            name="messages"
            iconName={'ion|chatboxes'}
            title={''}
            iconSize={28}
            accessibilityLabel="Messages Tab"
            selected={this.state.selectedTab === 'messages'}
            onPress={() => {
            this.setState({
              selectedTab: 'messages',
            });
          }}>
          {this._renderContent()}
        </SMXTabBarItemIOS>
        <SMXTabBarItemIOS
            name="settings"
            iconName={'ion|ios-gear'}
            title={''}
            iconSize={28}
            accessibilityLabel="Settings Tab"
            selected={this.state.selectedTab === 'settings'}
            onPress={() => {
            this.setState({
              selectedTab: 'settings',
            });
          }}>
          {this._renderContent()}
        </SMXTabBarItemIOS>
      </SMXTabBarIOS>
    );
  },
  _renderContent: function () {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.topContainer}>
          <Icon
            name='ion|beer'
            size={40}
            color='#887700'
            style={styles.beer}
          />
          <Icon
            name='zocial|github'
            size={40}
            color='black'
            style={styles.github}
          />
          <Icon
            name='fontawesome|facebook-square'
            size={40}
            color='#3b5998'
            style={styles.facebook}
          />
          <Icon
            name='foundation|lightbulb'
            size={40}
            style={styles.lightbulb}/>
        </View>

        <Text style={styles.header}>
            {'Stacked Icons!'}
        </Text>
        <Icon
          name='fontawesome|square'
          size={70}
          color='#55acee'
          style={styles.twitterOutline}>
          <Icon
            name='fontawesome|twitter'
            size={40}
            color='#ffffff'
            style={styles.twitterIcon}/>
        </Icon>

        <Text style={styles.header}>
            {'Create social sign in buttons'}
        </Text>
        <View
          style={styles.signInWithTwitterButton}>
          <Icon
            name='fontawesome|twitter'
            size={28}
            color='#ffffff'
            style={styles.signInWithTwitterIcon}/>
          <Text style={styles.signInText}>
            {'Sign in with Twitter'}
          </Text>
        </View>

        <View
          style={styles.signInWithFacebookButton}>
          <Icon
            name='fontawesome|facebook'
            size={28}
            color='#ffffff'
            style={styles.signInWithFacebookIcon}/>
          <Text style={styles.signInText}>
            {'Sign in with Facebook'}
          </Text>
        </View>

      </ScrollView>
    );
  }
});

var styles = StyleSheet.create({
  tabBar : {
    backgroundColor: '#dfdfdf',
    flex: 1,
    color: '#ff0000',
    tintColor: '#877324'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  topContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  header: {
    flexDirection: 'column',
    backgroundColor: 'transparent',
    fontSize: 18,
    marginTop: 20,
    marginBottom: 10,
    color: '#555555',
  },
  beer: {
    width: 70,
    height: 70,
    margin: 10
  },
  github: {
    width: 70,
    height: 70,
    margin: 10
  },
  facebook: {
    width: 70,
    height: 70,
    margin: 10
  },
  lightbulb: {
    width: 70,
    height: 70,
    margin: 10
  },
  twitterOutline: {
    flexDirection: 'column',
    width: 70,
    height: 70,
    alignItems: 'center'
  },
  twitterIcon: {
    flex: 1,
    width: 40,
    height: 40
  },
  signInWithTwitterButton: {
    backgroundColor: '#55acee',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: 210,
    padding: 5,
    borderRadius: 3
  },
  signInWithTwitterIcon: {
    width: 28,
    height: 28,
    marginLeft: 5
  },
  signInText: {
    color: 'white',
    marginLeft: 5,
    fontFamily: 'HelveticaNeue-Medium',
    fontSize: 15
  },
  signInWithFacebookButton: {
    backgroundColor: '#3b5998',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: 210,
    padding: 5,
    borderRadius: 3,
    marginTop: 10
  },
  signInWithFacebookIcon: {
    width: 28,
    height: 28,
    marginLeft: 5
  }
});

AppRegistry.registerComponent('ReactNativeIcons', () => ReactNativeIcons);
