# React Native Icons

[![Join the chat at https://gitter.im/corymsmith/react-native-icons](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/corymsmith/react-native-icons?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

A React Native wrapper on top of [https://github.com/PrideChung/FontAwesomeKit].

Currently FontAwesomeKit supports **4** different icon fonts.

- [FontAwesome 4.2](http://fortawesome.github.io/Font-Awesome/) Contains **479** icons
- [ionicons 2.0.0](http://ionicons.com/) Contains **733** icons, lots of iOS 7 style outlined icons.
- [Foundation icons](http://zurb.com/playground/foundation-icon-fonts-3) Contains **283** icons.
- [Zocial](http://zocial.smcllns.com/) Contains **99** social icons.


Not sure how best to package these types of components so example project will suffice.

```
<Icon
  name='ion|beer'
  size={150}
  color='#887700'
  style={styles.beer}
/>
<Icon
  name='zocial|github'
  size={70}
  color='black'
  style={styles.github}
/>
<Icon
  name='fontawesome|facebook-square'
  size={70}
  color='#3b5998'
  style={styles.facebook}
/>
<Icon
  name='foundation|lightbulb'
  size={30}
  color='#777777'
  style={styles.lightbulb}
/>
```


An icon has a name, size, and a color which is optional
