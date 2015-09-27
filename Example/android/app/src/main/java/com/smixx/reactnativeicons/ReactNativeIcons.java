package com.smixx.reactnativeicons;

import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.JavaScriptModule;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViewManager;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

public class ReactNativeIcons implements ReactPackage {

    private ArrayList<IconFont> mAllIconFonts;

    public ReactNativeIcons(List<IconFont> customIconFonts) {
        this();
        if (customIconFonts != null) {
            mAllIconFonts.addAll(customIconFonts);
        }
    }

    public ReactNativeIcons() {
        addIncludedFonts();
    }

    private void addIncludedFonts() {
        mAllIconFonts = new ArrayList<>(Arrays.<IconFont>asList(
                new IconFont("fontawesome", "FontAwesome.otf"),
                new IconFont("ion", "ionicons.ttf"),
                new IconFont("zocial", "zocial.ttf"),
                new IconFont("foundation", "foundation-icons.ttf"),
                new IconFont("material", "Material-Design-Iconic-Font.ttf")
        ));
    }

    @Override
    public List<NativeModule> createNativeModules(
            ReactApplicationContext reactContext) {
        return new ArrayList<>();
    }

    @Override
    public List<Class<? extends JavaScriptModule>> createJSModules() {
        return Collections.emptyList();
    }

    @Override
    public List<ViewManager> createViewManagers(ReactApplicationContext reactContext) {
        return Arrays.<ViewManager>asList(
                new IconManager(mAllIconFonts)
        );
    }
}
