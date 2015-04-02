/**
 *
 * @providesModule FAKIconImage
 * @flow
 */
'use strict';

var EdgeInsetsPropType = require('EdgeInsetsPropType');
var NativeMethodsMixin = require('NativeMethodsMixin');
var NativeModules = require('NativeModules');
var PropTypes = require('ReactPropTypes');
var ImageResizeMode = require('ImageResizeMode');
var ImageStylePropTypes = require('ImageStylePropTypes');
var React = require('React');
var ReactIOSViewAttributes = require('ReactIOSViewAttributes');
var StyleSheet = require('StyleSheet');
var StyleSheetPropType = require('StyleSheetPropType');

var createReactIOSNativeComponentClass = require('createReactIOSNativeComponentClass');
var flattenStyle = require('flattenStyle');
var insetsDiffer = require('insetsDiffer');
var invariant = require('invariant');
var merge = require('merge');
var warning = require('warning');

var FAKIconImage = React.createClass({
    propTypes: {
        name: PropTypes.string,
        size: PropTypes.number,
        color: PropTypes.string,

        /**
         * accessible - Whether this element should be revealed as an accessible
         * element.
         */
        accessible: PropTypes.bool,
        /**
         * accessibilityLabel - Custom string to display for accessibility.
         */
        accessibilityLabel: PropTypes.string,

        style: StyleSheetPropType(ImageStylePropTypes),
        /**
         * testID - A unique identifier for this element to be used in UI Automation
         * testing scripts.
         */
        testID: PropTypes.string,
    },

    mixins: [NativeMethodsMixin],

    ///**
    // * `NativeMethodsMixin` will look for this when invoking `setNativeProps`. We
    // * make `this` look like an actual native component class.
    // */
    viewConfig: {
        uiViewClassName: 'UIView',
        validAttributes: ReactIOSViewAttributes.UIView
    },

    render: function() {

        var style = flattenStyle([styles.base, this.props.style]);
        invariant(style, "style must be initialized");

        var name = this.props.name;
        invariant(name, "name must be initialized");

        var size = this.props.size;
        invariant(size, "size must be initialized");

        var color = this.props.color;


        var nativeProps = merge(this.props, {
            style,
            icon : {
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

var CommonImageViewAttributes = merge(ReactIOSViewAttributes.UIView, {
    accessible: true,
    accessibilityLabel: true,
    icon: true,
    testID: PropTypes.string
});

var FAKIconImageView = createReactIOSNativeComponentClass({
    validAttributes: CommonImageViewAttributes,
    uiViewClassName: 'FAKIconImage'
});

module.exports = FAKIconImage;