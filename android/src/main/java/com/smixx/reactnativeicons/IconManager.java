package com.smixx.reactnativeicons;

import android.content.Context;
import android.graphics.Typeface;
import android.util.Log;
import android.view.Gravity;

import com.facebook.react.uimanager.ReactProp;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.views.text.ReactTextView;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Nullable;

public class IconManager extends SimpleViewManager<ReactTextView> {

    private static final Map<String, Typeface> sTypefaceCache = new HashMap<String, Typeface>();
    public static final String REACT_CLASS = "SMXIconImage";
    private static final String TAG = "IconManager";
    private HashMap<String, IconFont> mAllIconFonts = new HashMap<String, IconFont>();

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

            IconFont font = mAllIconFonts.get(fontName);

            if (font != null) {
                Typeface typeface;
                if (sTypefaceCache.get(fontName) == null) {
                    Log.d(TAG, fontName + " not in cache");
                    typeface = font.getTypeFaceForFont(view.getContext(), font);
                } else {
                    Log.d(TAG, fontName + " from cache");
                    typeface = sTypefaceCache.get(fontName);
                }
                if (typeface != null) {
                    sTypefaceCache.put(fontName, typeface);
                    view.setTypeface(typeface);
                    view.setText(font.getCharCodeForIconName(view.getContext(), iconName));
                }
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
        //logAssets(context);

        ReactTextView textView = new ReactTextView(
                context);
        textView.setGravity(Gravity.CENTER);
        return textView;
    }

    private void logAssets(Context context) {
        Log.d(TAG, "createViewInstance: assets");
        Log.d(TAG, "----------------------------");
        try {
            String[] list = context.getAssets().list("");
            for (String str : list) {
                Log.d(TAG, str);
            }
            Log.d(TAG, "---- END ASSETS");
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
