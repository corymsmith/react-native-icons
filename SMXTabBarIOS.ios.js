/**
 *
 * @providesModule SMXTabBarIOS
 * @flow
 */
'use strict';

var React = require('React');
var ReactNativeViewAttributes = require('ReactNativeViewAttributes');
var SMXTabBarIconItemIOS = require('SMXTabBarItemIOS');
var StyleSheet = require('StyleSheet');
var merge = require('merge');

var createReactNativeComponentClass = require('createReactNativeComponentClass');

var SMXTabBarIOS = React.createClass({
  statics: {
    Item: SMXTabBarIconItemIOS,
  },
  render: function () {
    var NativeProps = {
      tintColor : this.props.tintColor,
      barTintColor : this.props.barTintColor,
      translucent : this.props.translucent
    };
    return (
      <SMXIconTabBar style={[styles.tabGroup, this.props.style]} {...NativeProps}>
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

var config = {
  validAttributes: merge(ReactNativeViewAttributes.UIView, {
    tintColor: true,
    barTintColor: true,
    translucent: true
  }),
  uiViewClassName: 'SMXTabBar',
};
var SMXIconTabBar = createReactNativeComponentClass(config);

module.exports = SMXTabBarIOS;
