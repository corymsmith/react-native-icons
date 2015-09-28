package com.smixx.reactnativeicons;

import android.content.Context;
import android.graphics.Typeface;
import android.text.Html;
import android.text.Spanned;
import android.text.SpannedString;
import android.util.Log;

import org.json.JSONException;
import org.json.JSONObject;

import java.io.FileNotFoundException;
import java.io.InputStream;

public class IconFont {
    private static final String TAG = "IconFont";
    private final String mPrefix;
    private final String mFileName;
    private JSONObject mCharacterMap = null;

    public IconFont(String prefix, String fileName) {
        mPrefix = prefix;
        mFileName = fileName;
    }

    private JSONObject getCharacterMap(Context context) {
        if(mCharacterMap == null) {
            String contents = "";
            try {
                InputStream stream = context.getAssets().open(mPrefix + ".json");
                int size = stream.available();
                byte[] buffer = new byte[size];
                stream.read(buffer);
                stream.close();
                contents = new String(buffer);
                mCharacterMap = new JSONObject(contents);
                return mCharacterMap;
            } catch (Exception e) {

                mCharacterMap = new JSONObject();
                if(e instanceof FileNotFoundException) {
                  Log.e(TAG, e.toString());
                }

                if(e instanceof JSONException) {
                    Log.e(TAG, e.toString());
                }
                e.printStackTrace();
            }

        }
        return mCharacterMap;
    }

    public String getPrefix() {
        return mPrefix;
    }

    public String getFileName() {
        return mFileName;
    }


    public Spanned getCharCodeForIconName(Context context, String iconName) {
        String character = null;
        try {
            character = getCharacterMap(context).get(iconName).toString();
            return Html.fromHtml(character);
        } catch (Exception e) {
            Log.e(TAG, "No icon named '" + iconName + "' is found in font '" + getPrefix() + "'");
            e.printStackTrace();
        }

        return new SpannedString("");
    }

    public Typeface getTypeFaceForFont(Context context, IconFont font) {
        if (font.getFileName() != null) {
            try {
                Typeface typeface = Typeface.createFromAsset(context.getAssets(), font.getFileName());
                return typeface;
            } catch (Exception ex) {
                Log.e(TAG, "Error: " + ex.toString());
            }
        }
        Log.e(TAG, "Error loading font file  " + font.getFileName() + " from assets");
        return null;
    }
}
