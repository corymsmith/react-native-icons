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
        <View style={styles.topContainer}>
          <TouchableHighlight
            underlayColor="transparent"
            onPress={() => alert('Beer!')}>
            <Icon
              name='ion|beer'
              size={40}
              style={styles.beer}
              />
          </TouchableHighlight>
          <Icon
            name='material|face'
            size={40}
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
            name='typicons|anchor'
            size={40}
            color='gray'
            style={styles.anchor}
            />
          <Icon
            name='zocial|twitter'
            size={40}
            color='gray'
            style={styles.lightbulb}
            />
        </View>


        <Icon
          name='octicons|alert'
          size={40}
          color='black'
          style={styles.alert}
        />

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

//<Text style={styles.header}>
//  {'Stacked Icons!'}
//</Text>
//<Icon
//name='fontawesome|square'
//size={70}
//color={BrandColors.Twitter}
//style={styles.twitterOutline}>
//<Icon
//  name='fontawesome|twitter'
//  size={40}
//  color='#ffffff'
//  style={[styles.twitterIcon, {backgroundColor: 'transparent'}]}/>
//</Icon>

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
    width: 50,
    height: 50,
    margin: 5,
    color: '#887700'
  },
  face: {
    width: 50,
    height: 50,
    margin: 5
  },
  facebook: {
    width: 50,
    height: 50,
    margin: 5
  },
  lightbulb: {
    width: 50,
    height: 50,
    margin: 5
  },
  anchor: {
    width: 50,
    height: 50,
    margin: 5
  },

  alert: {
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
    backgroundColor: BrandColors.Twitter,
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
    backgroundColor: BrandColors.Facebook,
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

AppRegistry.registerComponent('example', () => example);
