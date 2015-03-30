# React Native Icons

A React Native wrapper on top of [https://github.com/PrideChung/FontAwesomeKit].

Currently FontAwesomeKit supports **4** different icon fonts.

- [FontAwesome 4.2](http://fortawesome.github.io/Font-Awesome/) Contains **479** icons
- [ionicons 2.0.0](http://ionicons.com/) Contains **733** icons, lots of iOS 7 style outlined icons.
- [Foundation icons](http://zurb.com/playground/foundation-icon-fonts-3) Contains **283** icons.
- [Zocial](http://zocial.smcllns.com/) Contains **99** social icons.


Not sure how best to package these types of components so example project will suffice.

```
<IconImage
    icon={icons.beer}
    style={styles.icon}
/>
```


An icon has a name, size, and a color which is optional

```
var icons = {
    idea: {
        name: 'foundation|lightbulb',
        size: iconSize,
        color: 'green'
    },
    facebook: {
        name: 'fontawesome|facebook-square',
        size: iconSize,
        color: '#3b5998'
    },
    beer: {
        name: 'ion|beer',
        size: iconSize,
        color: 'orange'
    },
    github: {
        name: 'zocial|github',
        size: iconSize,
        color: 'black'
    }
};
```