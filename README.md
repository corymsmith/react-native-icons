# React Native Icons

A React Native wrapper on top of FontAwesomeKit.


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