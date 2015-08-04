/**
 *
 * @providesModule SMXLoadingImage
 * @flow
 */
'use strict';

var React = require('react-native');
var { StyleSheet, View, requireNativeComponent, Animated, Easing } = React;

var merge = require('merge');

var shimAssert = require('./shim-assert');

var ICON_REF = 'icon';

var TIMES = 400;

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
      theta: new Animated.Value(45),
      rotate: new Animated.Value('0deg'),
      enter: new Animated.Value(0),
      angle: new Animated.Value(0)
    };
  },

  setNativeProps(props) {
    console.warn('setNativeProps');
    console.warn(props);
    this.refs[ICON_REF].setNativeProps(props);
  },

  _animate: function () {
    this.state.angle.setValue(0);
    this._anim = Animated.timing(this.state.angle, {
      toValue: 360 * TIMES,
      duration: 1200 * TIMES,
      easing: Easing.linear
    }).start(this._animate);
  },

  componentDidMount: function () {
    this._animate();
  },

  _animateEntrance: function () {
    Animated.spring(
      this.state.enter,
      {toValue: 1, friction: 8}
    ).start();
  },

  render: function () {
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
    console.log(style);

    shimAssert.basic(style, 'style must be initialized');

    var name = this.props.name;
    shimAssert.basic(name, 'name must be initialized');

    var size = this.props.size;
    shimAssert.basic(size, 'size must be initialized');

    var color = this.props.color;

    var nativeProps = merge(this.props, {
      icon: {
        name: name,
        size: size,
        color: color
      }
    });
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
