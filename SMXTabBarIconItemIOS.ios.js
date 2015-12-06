/**
 *
 * @providesModule SMXTabBarItemIOS
 * @flow
 */
'use strict';

var React = require('react-native');
var { Image, StyleSheet, View, requireNativeComponent, PropTypes, Dimensions} = React;

var onlyChild = React.Children.only;

// Copy this right in here from react-contrib
class StaticContainer extends React.Component {

  shouldComponentUpdate(nextProps) {
    return !!nextProps.shouldUpdate;
  }

  render() {
    var child = this.props.children;
    return (child === null || child === false) ? null : onlyChild(child);
  }

}

var SmixxTabBarItemIOS = React.createClass({
  propTypes: {
    onPress: PropTypes.func.isRequired,
    selected: PropTypes.bool.isRequired,
    badgeValue: PropTypes.string,
    title: PropTypes.string,
    icon: PropTypes.object,
    selectedIcon: PropTypes.object,
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
    tabContents = (
      <StaticContainer shouldUpdate={this.props.selected}>
        {this.props.children}
      </StaticContainer>
    );
  } else {
    tabContents = <View />;
  }

  var iconName = this.props.iconName;
  var iconSize = this.props.iconSize || 28;

  // defaults selectedIconName to iconName, selectedIconSize to iconSize
  var selectedIconName = this.props.selectedIconName || this.props.iconName;
  var selectedIconSize = this.props.selectedIconSize || this.props.iconSize;


  if(iconName.indexOf('|') == -1) {
    throw Error('iconName "' + name + '" doesn\'t specify a font name prefix. ex. "ion|beer"');
  }

  if(selectedIconName.indexOf('|') == -1) {
    throw Error('selectedIconName "' + name + '" doesn\'t specify a font name prefix. ex. "ion|beer"');
  }

  var icon = {name : iconName, size: iconSize};
  var selectedIcon = {name: selectedIconName, size: selectedIconSize};

  return (
    <SmixxTabBarItem
      icon={icon}
      selectedIcon={selectedIcon}
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
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  }
});

var SmixxTabBarItem = requireNativeComponent('SMXTabBarItem', SmixxTabBarItemIOS);
module.exports = SmixxTabBarItemIOS;
