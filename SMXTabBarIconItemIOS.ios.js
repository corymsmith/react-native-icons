/**
 *
 * @providesModule SMXTabBarItemIOS
 * @flow
 */
'use strict';

var Image = require('Image');
var React = require('React');
var ReactIOSViewAttributes = require('ReactIOSViewAttributes');
var Dimensions = require('Dimensions');
var StaticContainer = require('StaticContainer.react');
var StyleSheet = require('StyleSheet');
var View = require('View');

var createReactIOSNativeComponentClass = require('createReactIOSNativeComponentClass');
var merge = require('merge');

var SmixxTabBarItemIOS = React.createClass({
  propTypes: {
    //icon: Image.propTypes.source.isRequired,
    onPress: React.PropTypes.func.isRequired,
    selected: React.PropTypes.bool.isRequired,
    badgeValue: React.PropTypes.string,
    title: React.PropTypes.string,
    style: View.propTypes.style,
  },

  getInitialState: function() {
    return {
      hasBeenSelected: false,
    };
  },

  componentWillMount: function() {
    if (this.props.selected) {
      this.setState({hasBeenSelected: true});
    }
  },

  componentWillReceiveProps: function(nextProps: { selected: boolean }) {
  if (this.state.hasBeenSelected || nextProps.selected) {
    this.setState({hasBeenSelected: true});
  }
},

render: function() {
  var tabContents = null;
  // if the tab has already been shown once, always continue to show it so we
  // preserve state between tab transitions
  if (this.state.hasBeenSelected) {
    tabContents =
      <StaticContainer shouldUpdate={this.props.selected}>
          {this.props.children}
      </StaticContainer>;
  } else {
    tabContents = <View />;
  }

  var icon = {name : this.props.iconName, size: this.props.iconSize ? this.props.iconSize : 28};

  return (
    <SmixxTabBarItem
      icon={icon}
      selectedIcon={icon}
      onPress={this.props.onPress}
      selected={this.props.selected}
      badgeValue={this.props.badgeValue}
      title={this.props.title}
      style={[styles.tab, this.props.style]}>
        {tabContents}
    </SmixxTabBarItem>
  );
}
});

var styles = StyleSheet.create({
  tab: {
    position: 'absolute',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  }
});

var SmixxTabBarItem = createReactIOSNativeComponentClass({
  validAttributes: merge(ReactIOSViewAttributes.UIView, {
    title: true,
    icon: true,
    selectedIcon: true,
    selected: true,
    badgeValue: true,
  }),
  uiViewClassName: 'SMXTabBarItem'
});

module.exports = SmixxTabBarItemIOS;
