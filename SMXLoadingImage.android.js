/**
 *
 * @providesModule SMXLoadingImage
 * @flow
 */
'use strict';

var React = require('react-native');
var { StyleSheet, requireNativeComponent, Animated, Easing, processColor } = React;

var shimAssert = require('./shim-assert');

class LoadingImage extends React.Component {

  constructor() {
    super();
    this._animate = this._animate.bind(this);
    this.state = {
      angle: new Animated.Value(0)
    };
  }

  setNativeProps(props:Object) {

  }

  _animate() {
    this.state.angle.setValue(0);
    Animated.timing(this.state.angle, {
      toValue: 360,
      duration: 1200,
      easing: Easing.linear
    }).start(this._animate);
  }

  componentDidMount() {
    this._animate();
  }

  render() {
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

    var nativeProps = Object.assign({}, this.props);
    nativeProps.icon = {
      name: name,
      size: size,
      color: processColor(color)
    };

    return <Animated.View style={[styles.base, style, transformStyle]}>
      <SMXLoadingImageView style={{backgroundColor: 'transparent'}} {...nativeProps} />
    </Animated.View>;
  }
}

var styles = StyleSheet.create({
  base: {
    overflow: 'hidden'
  }
});

LoadingImage.propTypes = {
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

var SMXLoadingImageView = requireNativeComponent('SMXIconImage', LoadingImage);

module.exports = LoadingImage;
