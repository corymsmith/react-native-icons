/**
 *
 * @providesModule SMXIconImage
 * @flow
 */
'use strict';

var React = require('react-native');
var { StyleSheet, View, requireNativeComponent, processColor} = React;
var shimAssert = require('./shim-assert');

var ICON_REF = 'icon';

class IconImage extends React.Component {

  setNativeProps(props:Object) {
    this.refs[ICON_REF].setNativeProps(props);
  }

  render() {
    var style = [styles.base, this.props.style];
    shimAssert.basic( style, 'style must be initialized');

    var name = this.props.name;
    shimAssert.basic( name, 'name must be initialized');

    var size = this.props.size;
    shimAssert.basic( size, 'size must be initialized');

    if(name.indexOf('|') == -1) {
      throw Error('icon name "' + name + '" doesn\'t specify a font name prefix. ex. "ion|beer"');
    }

    var color = this.props.color;

    var nativeProps = Object.assign({},this.props);
    if(!color && style.color) {
     nativeProps.color = processColor(style.color);
    }
    nativeProps.style = style;

    return <RCTMyCustomView {...nativeProps} ref={ICON_REF} />;
  }
}

var styles = StyleSheet.create({
  base: {
    overflow: 'hidden'
  }
});
IconImage.propTypes = {
  name: React.PropTypes.string,
  color: React.PropTypes.string,
  size: React.PropTypes.number,
  scaleX: React.PropTypes.number,
  scaleY: React.PropTypes.number,
  translateX: React.PropTypes.number,
  translateY: React.PropTypes.number,
  rotation: React.PropTypes.number,
  renderToHardwareTextureAndroid: React.PropTypes.bool,
  onLayout: React.PropTypes.bool,
  accessibilityLiveRegion: React.PropTypes.string,
  accessibilityComponentType: React.PropTypes.string,
  importantForAccessibility: React.PropTypes.string,
  accessibilityLabel: React.PropTypes.string,
  testID: React.PropTypes.string,
};

var RCTMyCustomView = requireNativeComponent('SMXIconImage', IconImage);
module.exports = IconImage;
