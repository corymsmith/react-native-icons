/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule FAKIconImageOld
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

/**
 * A react component for displaying icon fonts as images.
 * Currently supports FontAwesome, Ion Icons, Foundation, and Zocial
 *
 * Example usage:
 *
 * ```
 * renderImages: function() {
 *   return (
 *     <View>
 *       <Image
 *         style={styles.icon}
 *         source={require('image!myIcon')}
 *       />
 *       <Image
 *         style={styles.logo}
 *         source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}
 *       />
 *     </View>
 *   );
 * },
 * ```
 */
//
//render: function () {
//    //<FAKIconImage iconName={'fontawesome:circle-o-notch'} source={this.getImageSource()} style={styles.iconImage} />
//    return (
//        <View style={styles.mainSection}>
//            <FAKIconImage
//                icon={this.getIcon()}
//                style={styles.iconImage}
//            />
//        </View>
//    );
//},
//getIcon : function

var FAKIconImage = React.createClass({
    propTypes: {
        icon: PropTypes.shape({
            name: PropTypes.string,
            size: PropTypes.number,
            color: PropTypes.string
        }),
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

        //console.log(NativeModules);
        var style = flattenStyle([styles.base, this.props.style]);
        invariant(style, "style must be initialized");

        invariant(this.props.icon, "style must be initialized");

        //TODO: Validate width
        //TODO: Validate height

        //console.log("props");
        //console.log(this.props);



        var nativeProps = merge(this.props, {
            style
        });
        //nativeProps.icon.color = style.color;
        //
        return <FAKIconImageView {...nativeProps} />;
    }
});

var styles = StyleSheet.create({
    base: {
        overflow: 'hidden',
    },
});

var CommonImageViewAttributes = merge(ReactIOSViewAttributes.UIView, {
    accessible: true,
    accessibilityLabel: true,
    icon: true,
    testID: PropTypes.string,
});

var FAKIconImageView = createReactIOSNativeComponentClass({
    validAttributes: CommonImageViewAttributes,
    uiViewClassName: 'FAKIconImage',
});

module.exports = FAKIconImage;