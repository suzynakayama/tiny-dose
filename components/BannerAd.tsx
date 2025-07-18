import React, { useRef } from 'react'
import { Platform } from 'react-native'
import { BannerAd, BannerAdSize, TestIds, useForeground } from 'react-native-google-mobile-ads'

const admobAndroidAppId = process.env.ADMOB_ANDROID_APP_ID

const adUnitId = !__DEV__ && admobAndroidAppId ? admobAndroidAppId : TestIds.ADAPTIVE_BANNER

export default function BannerAdComponent() {
  const bannerRef = useRef<typeof BannerAd>(null)
  // (iOS) WKWebView can terminate if app is in a "suspended state", resulting in an empty banner when app returns to foreground.
  // Therefore it's advised to "manually" request a new ad when the app is foregrounded (https://groups.google.com/g/google-admob-ads-sdk/c/rwBpqOUr8m8).
  useForeground(() => {
    Platform.OS === 'ios' && bannerRef.current?.load()
  })

  return (
    <BannerAd
      ref={bannerRef}
      unitId={adUnitId}
      size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
      requestOptions={{
        requestNonPersonalizedAdsOnly: true,
      }}
    />
  )
}
