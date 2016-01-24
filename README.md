#### WARNING: Support for this library is being discontinued, I highly recommend using https://github.com/oblador/react-native-vector-icons instead as its more fully featured.

There's far biggger problems to solve in the open source and React Native communities than competing icon libraries so I'll be focusing on pushing forward other initiatives.

## React Native Icons

[![npm version](https://badge.fury.io/js/react-native-icons@2x.png)](http://badge.fury.io/js/react-native-icons)

Includes **5** different icon fonts and **2,444** icons.

## Installation

```bash
npm install react-native-icons@latest --save
```

If you need to support React Native version **< 0.12.0-rc** use:
 
 ```bash
 npm install react-native-icons@0.4.0 --save
 ```
 
 Note that 0.4.0 does not support Android.

## Getting started - iOS

1. In XCode, in the project navigator right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-icons`➜ `ios` and add `ReactNativeIcons.xcodeproj` 
3. Add `libReactNativeIcons.a` (from 'Products' under ReactNativeIcons.xcodeproj) to [your project's](http://www.runscriptbuildphase.com/images/Xcode_6_01.png) `Build Phases` ➜ `Link Binary With Libraries` phase
4. Add the font files you want to use into the `Copy Bundle Resources` build phase of your project (click the '+' and click 'Add Other...' then choose the font files from  `node_modules/react-native-icons/ios/ReactNativeIcons/Libraries/FontAwesomeKit`).
5. Run your project (`Cmd+R`)


## Getting started - Android

* In `android/setting.gradle`

```gradle
...
include ':react-native-icons'
project(':react-native-icons').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-icons/android')
```

* In `android/app/build.gradle`

```gradle
...
dependencies {
    ...
    compile project(':react-native-icons')
}
```

* register module (in MainActivity.java)

```java
import com.smixx.reactnativeicons.ReactNativeIcons;  // <--- import
import java.util.Arrays; // <--- import this if you want to specify which fonts to load
import com.smixx.reactnativeicons.IconFont; // <--- import this if you want to specify which fonts to load

public class MainActivity extends Activity implements DefaultHardwareBackBtnHandler {
  ......

  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    mReactRootView = new ReactRootView(this);

    mReactInstanceManager = ReactInstanceManager.builder()
      .setApplication(getApplication())
      .setBundleAssetName("index.android.bundle")
      .setJSMainModuleName("index.android")
      .addPackage(new MainReactPackage())
      .addPackage(new ReactNativeIcons())              // <------ add here
      .setUseDeveloperSupport(BuildConfig.DEBUG)
      .setInitialLifecycleState(LifecycleState.RESUMED)
      .build();

    mReactRootView.startReactApplication(mReactInstanceManager, "example", null);

    setContentView(mReactRootView);
  }

  ......

}
```

* Copy the font files and .json files for the fonts you want to use into `android/app/src/main/assets` from `node_modules/react-native-icons/fonts`

## Not supported on Android yet:
- Tab Bar
- Stacked Icons

### Custom fonts

## iOS

Custom fonts are not yet supported for iOS

## Android
### 1. Copy the font file to your apps assets directory
### 2. Create a myfontname.json mapping file for the font, this is used to look up the mapping file and is used 
 Create json file (newiconfont.json) that contains a map of css names to HTML encoded unicode characters., examples in /fonts directory
 ```js
 {
   "alert": "&#xf101",
   "alert-circled": "&#xf100",
   "android-add": "&#xf2c7",
   "android-add-circle": "&#xf359",
 ...
 }
 ```
### 3. Include fonts

2. Copy font file and .json file to your apps assets directory
3.) In MainActivity.java, add the icon font, first parameter is the prefix you want to use (ex. typicons|globe), second is the filename of the font.

```java
 mReactInstanceManager = ReactInstanceManager.builder()
                .setApplication(getApplication())
                .setBundleAssetName("index.android.bundle")
                .setJSMainModuleName("index.android")
                .addPackage(new MainReactPackage())
                .addPackage(new ReactNativeIcons(Arrays.asList(
                        new IconFont("typicons", "typicons.ttf")
                )))
                .setUseDeveloperSupport(BuildConfig.DEBUG)
                .setInitialLifecycleState(LifecycleState.RESUMED)
                .build();

```


## Notes

- You only need to include the icon font files you want to use 
- Icon style must set a width and height, or the icon will not be visible
- You may need to restart your node server for the icon font files to be included.
- An icon has a name, size, and a color (optional)
- Color can be provide via the color property or via a style 

## Example of icons

```js
var { Icon, } = require('react-native-icons');


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

<Icon
  name='material|face'
  size={30}
  color='#333333'
  style={styles.face}
/>

```

## Stacked icons

```js
<Icon
  name='fontawesome|square'
  size={80}
  color='#55acee'
  style={styles.twitterOutline}>
  <Icon
    name='fontawesome|twitter'
    size={50}
    color='#ffffff'
    style={styles.twitterIcon}/>
</Icon>
```

With the following styles to center them:

```js
var styles = StyleSheet.create({
  twitterOutline: {
    flexDirection: 'column',
    width: 70,
    height: 70,
    alignItems: 'center'
  },
  twitterIcon: {
    flex: 1,
    width: 40,
    height: 40
  },
});
```

## Custom tab bar

```js

var { TabBarIOS, } = require('react-native-icons');
var TabBarItemIOS = TabBarIOS.Item;

var Example = React.createClass({
  getInitialState: function() {
    return {
      selectedTab: 'home',
      notifCount: 0,
      presses: 0,
    };
  },
  render: function () {
    return (
      <TabBarIOS
        selectedTab={this.state.selectedTab}
        tintColor={'#c1d82f'}
        barTintColor={'#000000'}
        styles={styles.tabBar}>
        <TabBarItemIOS
          name="home"
          iconName={'ion|ios-home-outline'}
          selectedIconName={'ion|ios-home'}
          title={''}
          iconSize={32}
          accessibilityLabel="Home Tab"
          selected={this.state.selectedTab === 'home'}
          onPress={() => {
            this.setState({
              selectedTab: 'home',
            });
          }}>
          {this._renderContent()}
        </TabBarItemIOS>
        <TabBarItemIOS
            name="articles"
            iconName={'ion|ios-paper-outline'}
            selectedIconName={'ion|ios-paper'}
            title={''}
            iconSize={32}
            accessibilityLabel="Articles Tab"
            selected={this.state.selectedTab === 'articles'}
            onPress={() => {
            this.setState({
              selectedTab: 'articles',
            });
          }}>
          {this._renderContent()}
        </TabBarItemIOS>
        <TabBarItemIOS
            name="messages"
            iconName={'ion|chatboxes'}
            title={''}
            iconSize={32}
            accessibilityLabel="Messages Tab"
            selected={this.state.selectedTab === 'messages'}
            onPress={() => {
            this.setState({
              selectedTab: 'messages',
            });
          }}>
          {this._renderContent()}
        </TabBarItemIOS>
        <TabBarItemIOS
            name="settings"
            iconName={'ion|ios-gear-outline'}
            selectedIconName={'ion|ios-gear'}
            title={''}
            iconSize={32}
            accessibilityLabel="Settings Tab"
            selected={this.state.selectedTab === 'settings'}
            onPress={() => {
            this.setState({
              selectedTab: 'settings',
            });
          }}>
          {this._renderContent()}
        </TabBarItemIOS>
      </TabBarIOS>
    );
  }
});
```

**Note:** `selectedIconName` is optional. It defaults to `iconName` if not set. Also, there's another optional property named `selectedIconSize`, if you need to change the icon size when the tab is selected.


# Included icon fonts
- [FontAwesome 4.4](http://fortawesome.github.io/Font-Awesome/) Contains **585** icons
- [ionicons 2.0.0](http://ionicons.com/) Contains **733** icons, lots of iOS 7 style outlined icons.
- [Foundation icons](http://zurb.com/playground/foundation-icon-fonts-3) Contains **283** icons.
- [Zocial](http://zocial.smcllns.com/) Contains **99** social icons.
- [Material design icons](http://zavoloklom.github.io/material-design-iconic-font/icons.html) Contains **777** icons. [View the Cheatsheet](http://zavoloklom.github.io/material-design-iconic-font/cheatsheet.html)

![Screenshot](https://dl.dropboxusercontent.com/u/6721696/stacked-demo.png)
