package com.smixx.reactnativeicons;

import android.content.Context;
import android.graphics.Typeface;
import android.text.Html;
import android.text.Spanned;
import android.text.SpannedString;
import android.util.Log;

import com.facebook.react.uimanager.BaseViewManager;
import com.facebook.react.uimanager.ReactProp;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.views.text.ReactTextShadowNode;
import com.facebook.react.views.text.ReactTextView;

import org.json.JSONException;
import org.json.JSONObject;

import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import javax.annotation.Nullable;

//public class IconManager extends BaseViewManager<ReactTextView, ReactTextShadowNode> {
public class IconManager extends SimpleViewManager<ReactTextView> {

    public static final String REACT_CLASS = "SMXIconImage";
    private static final String TAG = "IconManager";
    private HashMap<String, IconFont> mAllIconFonts = new HashMap<>();
//    private ThemedReactContext mContext;

    @Override
    public String getName() {
        return REACT_CLASS;
    }

    @ReactProp(name = "color", customType = "Color")
    public void setColor(ReactTextView view, @Nullable Integer color) {
        if (color != null) {
            view.setTextColor(color);
        }
    }

    @ReactProp(name = "size")
    public void setSize(ReactTextView view, @Nullable Integer size) {
        if (size != null) {
            view.setTextSize(size);
        }
    }

    @ReactProp(name = "name")
    public void setName(ReactTextView view, @Nullable String name) {
        if (name == null) {
            Log.d(TAG, "name was null");
        } else {
            String[] parts = name.split("\\|");
            String fontName = parts[0];
            String iconName = parts[1];
//            Log.d(TAG, "setName: font: " + fontName + " icon: " + iconName);

            IconFont font = mAllIconFonts.get(fontName);

            Typeface typeface = font.getTypeFaceForFont(view.getContext(), font);
            if (typeface != null) {
                view.setTypeface(typeface);
                view.setText(font.getCharCodeForIconName(view.getContext(), iconName));
            }
        }
    }

    public IconManager(List<IconFont> allIconFonts) {
        for (IconFont font : allIconFonts) {
            mAllIconFonts.put(font.getPrefix(), font);
        }
    }

    @Override
    public ReactTextView createViewInstance(ThemedReactContext context) {
//        mContext = context;
//        Log.d(TAG, "createViewInstance");
        ReactTextView textView = new ReactTextView(
                context);
        return textView;
    }

    @Override
    public void updateExtraData(ReactTextView view, Object extraData) {
        Log.d(TAG, "updateExtraData" + "|" + extraData.toString());
        //        view.setText((Spanned) extsdfsa");
    }

//    @Override
//    public ReactTextShadowNode createCSSNodeInstance() {
//        return new ReactTextShadowNode(false);
//    }
}