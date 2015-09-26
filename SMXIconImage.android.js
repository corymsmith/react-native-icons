/**
 *
 * @providesModule SMXIconImage
 * @flow
 */
'use strict';

var React = require('react-native');
var { StyleSheet, View, requireNativeComponent, processColor} = React;
//var shimAssert = require('./shim-assert');

var ICON_REF = 'icon';

//var SMXIconImage = React.createClass({
//  propTypes: {
//    name: React.PropTypes.string,
//    size: React.PropTypes.number,
//    color: React.PropTypes.string,
//
//    /**
//     * accessible - Whether this element should be revealed as an accessible
//     * element.
//     */
//    accessible: React.PropTypes.bool,
//    /**
//     * accessibilityLabel - Custom string to display for accessibility.
//     */
//    accessibilityLabel: React.PropTypes.string,
//
//    /**
//     * testID - A unique identifier for this element to be used in UI Automation
//     * testing scripts.
//     */
//    testID: React.PropTypes.string,
//    icon: React.PropTypes.object
//  },
//
//  setNativeProps(props:Object) {
//    this.refs[ICON_REF].setNativeProps(props);
//  },
//
//  render: function () {
//    console.log('render it!!!!');
//    var style = [styles.base, this.props.style];
//    shimAssert.basic( style, 'style must be initialized');
//
//    var name = this.props.name;
//    shimAssert.basic( name, 'name must be initialized');
//
//    var size = this.props.size;
//    shimAssert.basic( size, 'size must be initialized');
//
//    var color = this.props.color;
//
//    var nativeProps = Object.assign({},this.props);
//    nativeProps.style = style;
//    nativeProps.icon = {
//      name: name,
//      size: size,
//      color: color
//    };
//
//    return <SMXIconImageView {...nativeProps} ref={ICON_REF} />;
//  }
//});

var styles = StyleSheet.create({
  base: {
    overflow: 'hidden'
  }
});

//var SMXIconImageView = requireNativeComponent('SMXIconImage', SMXIconImage);

//module.exports = SMXIconImage;

//var { requireNativeComponent } = require('react-native');

//var iface = {
//  name: 'ImageView',
//  propTypes: {
//    name: React.PropTypes.string,
//    color: React.PropTypes.string,
//    src: React.PropTypes.string,
//    borderRadius: React.PropTypes.number,
//    size: React.PropTypes.number,
//    scaleX: React.PropTypes.number,
//    scaleY: React.PropTypes.number,
//    translateX: React.PropTypes.number,
//    translateY: React.PropTypes.number,
//    rotation: React.PropTypes.number,
//    resizeMode: React.PropTypes.oneOf(['cover', 'contain', 'stretch']),
//  },
//};
//
//module.exports = requireNativeComponent('SMXIconImage', iface);

class IconImage extends React.Component {
  //constructor() {
  //this._onChange = this._onChange.bind(this);
  //}
  //_onChange(event: Event) {
  //  if (!this.props.onChangeMessage) {
  //    return;
  //  }
  //  this.props.onChangeMessage(event.nativeEvent.message);
  //}
  setNativeProps(props:Object) {
    this.refs[ICON_REF].setNativeProps(props);
  }

  render() {
        console.log('render it!!!!');
    var style = [styles.base, this.props.style];
    //shimAssert.basic( style, 'style must be initialized');

    var name = this.props.name;
    //shimAssert.basic( name, 'name must be initialized');

    var size = this.props.size;
    //shimAssert.basic( size, 'size must be initialized');

    var color = this.props.color;

    var nativeProps = Object.assign({},this.props);
    nativeProps.style = style;
    nativeProps.icon = {
      name: name,
      size: size,
      color: color
    };

    return <RCTMyCustomView {...nativeProps} ref={ICON_REF} style={ { height: size, textAlignment: 'center' }} />;
    //return <RCTMyCustomView {...this.props} />;
  }
}
IconImage.propTypes = {
  name: React.PropTypes.string,
  color: React.PropTypes.string,
  size: React.PropTypes.number,
  scaleX: React.PropTypes.number,
  src: React.PropTypes.string,
  scaleY: React.PropTypes.number,
  translateX: React.PropTypes.number,
  translateY: React.PropTypes.number,
  rotation: React.PropTypes.number,
  /**
   * Callback that is called continuously when the user is dragging the map.
   */
  //onChangeMessage: React.PropTypes.func,
  //...
};

//var RCTMyCustomView = requireNativeComponent('SMXIconImage', IconImage, {
//  nativeOnly: {onChange: true}
//});

var RCTMyCustomView = requireNativeComponent('SMXIconImage', IconImage);
module.exports = IconImage;