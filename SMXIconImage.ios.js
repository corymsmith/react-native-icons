/**
 *
 * @providesModule SMXIconImage
 * @flow
 */
'use strict';

var React = require('react-native');
var { StyleSheet, View, requireNativeComponent, processColor } = React;
var shimAssert = require('./shim-assert');

var ICON_REF = 'icon';

var SMXIconImage = React.createClass({
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

  setNativeProps(props:Object) {
    this.refs[ICON_REF].setNativeProps(props);
  },

  render: function () {
    var style = [styles.base, this.props.style];
    shimAssert.basic( style, 'style must be initialized');

    var name = this.props.name;
    shimAssert.basic( name, 'name must be initialized');

    var size = this.props.size;
    shimAssert.basic( size, 'size must be initialized');

    if(name.indexOf('|') == -1) {
      throw Error('icon name "' + name + '" doesn\'t specify a font prefix. ex. "ion|beer"');
    }

    var color = this.props.color;

    var nativeProps = Object.assign({},this.props);

    if(!color && style.color) {
      color = style.color;
    }

    nativeProps.style = style;
    nativeProps.icon = {
      name: name,
      size: size,
      color: processColor(color)
    };

    return <SMXIconImageView {...nativeProps} ref={ICON_REF} />;
  }
});

var styles = StyleSheet.create({
  base: {
    overflow: 'hidden'
  }
});

var SMXIconImageView = requireNativeComponent('FAKIconImage', SMXIconImage);

module.exports = SMXIconImage;
