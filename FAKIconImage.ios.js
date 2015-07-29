/**
 *
 * @providesModule FAKIconImage
 * @flow
 */
'use strict';

var React = require('react-native');
var { NativeModules, Text, StyleSheet, requireNativeComponent } = React;

var EdgeInsetsPropType = React.EdgeInsetsPropType;
var NativeMethodsMixin = React.NativeMethodsMixin;
var ImageStylePropTypes = React.ImageStylePropTypes;

var ReactNativeViewAttributes = require('ReactNativeViewAttributes');
var StyleSheetPropType = require('StyleSheetPropType');

var createReactNativeComponentClass = require('createReactNativeComponentClass');

var deepDiffer = require('deepDiffer');

var invariant = require('invariant');
var merge = require('merge');


var FAKIconImage = React.createClass({
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

    style: StyleSheetPropType(ImageStylePropTypes),
    /**
     * testID - A unique identifier for this element to be used in UI Automation
     * testing scripts.
     */
    testID: React.PropTypes.string,
  },

  mixins: [NativeMethodsMixin],

  ///**
  // * `NativeMethodsMixin` will look for this when invoking `setNativeProps`. We
  // * make `this` look like an actual native component class.
  // */
  viewConfig: {
      uiViewClassName: 'UIView',
      validAttributes: ReactNativeViewAttributes.UIView
  },

  render: function () {

    var style = [styles.base, this.props.style];
    invariant(style, "style must be initialized");

    var name = this.props.name;
    invariant(name, "name must be initialized");

    var size = this.props.size;
    invariant(size, "size must be initialized");

    var color = this.props.color;

    var nativeProps = merge(this.props, {
      style,
      icon: {
        name: name,
        size: size,
        color: color
      }
    });
        return <FAKIconImageView {...nativeProps} />;
  }
});

var styles = StyleSheet.create({
  base: {
    overflow: 'hidden'
  }
});

var CommonImageViewAttributes = merge(ReactNativeViewAttributes.UIView, {
  accessible: true,
  accessibilityLabel: true,
  icon: {diff: deepDiffer},
  testID: React.PropTypes.string
});

var FAKIconImageView = createReactNativeComponentClass({
  validAttributes: CommonImageViewAttributes,
  uiViewClassName: 'FAKIconImage'
});

module.exports = FAKIconImage;
