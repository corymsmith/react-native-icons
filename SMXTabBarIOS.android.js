/**
 *
 * @providesModule SMXTabBarIOS
 */

'use strict';

var React = require('react-native');
var { StyleSheet, View, Dimensions} = React;

var DummyTabBarIOS = React.createClass({
  render: function() {
    return (
      <View style={[this.props.style, styles.tabGroup]}>
        {this.props.children}
      </View>
    );
  }
});

var styles = StyleSheet.create({
  tabGroup: {
    flex: 1,
  }
});

module.exports = DummyTabBarIOS;
