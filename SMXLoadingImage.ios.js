/**
 *
 * @providesModule SMXLoadingImage
 * @flow
 */
'use strict';

var React = require('react-native');
var { StyleSheet, View, requireNativeComponent, Animated, Easing, processColor } = React;

var shimAssert = require('./shim-assert');

var SMXLoadingImage = React.createClass({
  propTypes: {
    name: React.PropTypes.string,
    size: React.PropTypes.number,
    color: React.PropTypes.string,

    /**
     * accessible - Whether this element should be revealed as an accessible
     * element.
     */
    accessible: React.PropTypes.bool,
    /**
     * accessibilityLabel - Custom string to display for accessibility.
     */
    accessibilityLabel: React.PropTypes.string,

    /**
     * testID - A unique identifier for this element to be used in UI Automation
     * testing scripts.
     */
    testID: React.PropTypes.string,
    icon: React.PropTypes.object
  },

  getInitialState: function () {
    return {
      angle: new Animated.Value(0)
    };
  },

  setNativeProps(props:Object) {

  },

  _animate: function () {
    this.state.angle.setValue(0);
    Animated.timing(this.state.angle, {
      toValue: 360,
      duration: 1200,
      easing: Easing.linear
    }).start(this._animate);
  },

  componentDidMount: function () {
    this._animate();
  },

  render: function ():ReactElement {
    var transformStyle = {
      transform: [
        {
          rotate: this.state.angle.interpolate({
            inputRange: [0, 360],
            outputRange: ['0deg', '360deg']
          })
        }
      ]
    };

    var style = [styles.base, this.props.style];

    shimAssert.basic(style, 'style must be initialized');

    var name = this.props.name;
    shimAssert.basic(name, 'name must be initialized');

    var size = this.props.size;
    shimAssert.basic(size, 'size must be initialized');

    var color = this.props.color;

    var nativeProps = Object.assign({},this.props);
    nativeProps.icon = {
      name: name,
      size: size,
      color: processColor(color)
    };

    return <Animated.View style={[styles.base, style, transformStyle]}>
      <SMXLoadingImageView style={{backgroundColor: 'transparent'}} {...nativeProps} />
    </Animated.View>;
  }
});


var styles = StyleSheet.create({
  base: {
    overflow: 'hidden'
  }
});
var SMXLoadingImageView = requireNativeComponent('FAKIconImage', SMXLoadingImage);

module.exports = SMXLoadingImage;
