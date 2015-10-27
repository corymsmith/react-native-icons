/**
 *
 * @providesModule SMXTabBarIOS
 * @flow
 */
'use strict';

var React = require('react-native');
var { StyleSheet, requireNativeComponent, PropTypes, processColor } = React;
var SMXTabBarIconItemIOS = require('./SMXTabBarIconItemIOS.ios.js');

var SMXTabBarIOS = React.createClass({
  propTypes: {
    tintColor: PropTypes.string,
    barTintColor: PropTypes.string,
    translucent: PropTypes.bool,
  },

  statics: {
    Item: SMXTabBarIconItemIOS,
  },

  render: function () {
    var nativeProps = {
      tintColor : this.props.tintColor,
      barTintColor : this.props.barTintColor,
      translucent : this.props.translucent
    };

    return (
      <SMXIconTabBar style={[styles.tabGroup, this.props.style]} {...nativeProps}>
        {this.props.children}
      </SMXIconTabBar>
    );
  }
});

var styles = StyleSheet.create({
  tabGroup: {
    flex: 1
  }
});

var SMXIconTabBar = requireNativeComponent('SMXTabBar', SMXTabBarIOS);

module.exports = SMXTabBarIOS;
