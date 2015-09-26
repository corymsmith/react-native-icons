package com.smixx.reactnativeicons;

import android.content.Context;
import android.graphics.Typeface;
import android.text.Html;
import android.text.Spanned;
import android.text.SpannedString;
import android.util.Log;

import org.json.JSONException;
import org.json.JSONObject;

import java.io.IOException;
import java.io.InputStream;
import java.util.HashMap;

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
            } catch (JSONException e) {

        } catch (IOException e) {
            // Handle exceptions here
            Log.d(TAG, e.toString());

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
        Log.d(TAG, "getCharCodeForIconName");
        Spanned htmlText = new SpannedString("112");
//            Log.d(TAG, charMap.toString(2));
        String character = null;
        try {
            character = getCharacterMap(context).get(iconName).toString();
            Log.d(TAG, character);
            Log.d(TAG, "++++");
            Log.d(TAG, character.charAt(0) + "\n");
            Log.d(TAG, new SpannedString(character) + "");
            Log.d(TAG, Html.fromHtml(character) + "");
            Log.d(TAG, "\f101");
            Log.d(TAG, "--------------");
//            return new SpannedString(character);
            return Html.fromHtml(character.charAt(0)+"");
        } catch (JSONException e) {
            e.printStackTrace();
        }

        return htmlText;
    }

    public Typeface getTypeFaceForFont(Context context, IconFont font) {
        if (font.getFileName() != null) {
            try {
                Typeface typeface = Typeface.createFromAsset(context.getAssets(), font.getFileName());
                Log.d(TAG, "Loaded font file : " + font.getFileName() + " from assets");
                return typeface;
            } catch (Exception ex) {
                Log.e(TAG, "Error: " + ex.toString());
            }
        }
        Log.e(TAG, "Error loading font file  " + font.getFileName() + " from assets");
        return null;
    }

//    public HashMap<String, String> getCharacterMap() {
//        return mNameToCharacterMap;
//    }
}
