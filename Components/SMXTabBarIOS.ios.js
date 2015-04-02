/**
 *
 * @providesModule SMXTabBarIOS
 * @flow
 */
'use strict';

var React = require('React');
var ReactIOSViewAttributes = require('ReactIOSViewAttributes');
var SMXTabBarIconItemIOS = require('SMXTabBarItemIOS');
var StyleSheet = require('StyleSheet');
var merge = require('merge');

var createReactIOSNativeComponentClass = require('createReactIOSNativeComponentClass');

var SMXTabBarIOS = React.createClass({
  statics: {
    Item: SMXTabBarIconItemIOS,
  },
  render: function () {
    var NativeProps = {
      tintColor : this.props.tintColor,
      barTintColor : this.props.barTintColor
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
  validAttributes: merge(ReactIOSViewAttributes.UIView, {
    tintColor: true,
    barTintColor: true
  }),
  uiViewClassName: 'SMXTabBar',
};
var SMXIconTabBar = createReactIOSNativeComponentClass(config);

module.exports = SMXTabBarIOS;
