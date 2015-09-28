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

var { Icon, Spinner } = require('react-native-icons');

var BrandColors = {
  Facebook: '#3b5998',
  Twitter: '#55acee'
};

var example = React.createClass({
  //render: function () {
  //  return (
  //    <View style={styles.container}>
  //
  //      <Icon
  //        name='ion|alert'
  //        size={100}
  //        style={styles.beerIcon}
  //        color='#8077ff'
  //        />
  //
  //      <Icon
  //        name='typicons|adjust-contrast'
  //        size={100}
  //        style={styles.beerIcon}
  //        color='#8077ff'
  //        />
  //
  //      <Icon
  //        name='ion|android-bicycle'
  //        size={100}
  //        style={styles.beerIcon}
  //        color='#8077ff'
  //        />
  //
  //    </View>
  //  );
  //
  //},
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
              color='#887700'
              style={styles.beer}
              />
          </TouchableHighlight>
          <Icon
            name='material|face'
            size={40}
            color='black'
            style={styles.github}
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
            style={styles.lightbulb}
            />
          <Icon
            name='zocial|twitter'
            size={40}
            color='gray'
            style={styles.lightbulb}
            />
        </View>

        <View style={styles.topContainer}>

          <Spinner name='fontawesome|spinner' size={24} style={{width: 24, height: 24, backgroundColor: 'transparent'}}
                   color='#777'/>
          <Spinner name='ion|load-a' size={24} style={{width: 24, height: 24, backgroundColor: 'transparent'}}
                   color='#777'/>
          <Spinner name='ion|load-b' size={24} style={{width: 24, height: 24, backgroundColor: 'transparent'}}
                   color='#777'/>
          <Spinner name='ion|load-c' size={24} style={{width: 24, height: 24, backgroundColor: 'transparent'}}
                   color='#777'/>
          <Spinner name='ion|load-d' size={24} style={{width: 24, height: 24, backgroundColor: 'transparent'}}
                   color='#777'/>
        </View>

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
