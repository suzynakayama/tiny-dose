import React, { useRef } from 'react'
import { Platform, StyleSheet, View, ViewStyle } from 'react-native'
import { BannerAd, BannerAdSize, TestIds, useForeground } from 'react-native-google-mobile-ads'

const admobAndroidAppId = process.env.ADMOB_ANDROID_APP_ID

const adUnitId = !__DEV__ && admobAndroidAppId ? admobAndroidAppId : TestIds.ADAPTIVE_BANNER

interface BannerAdsProps {
  extraStyles?: ViewStyle
}

export default function BannerAds({ extraStyles }: BannerAdsProps) {
  const bannerRef = useRef<typeof BannerAd>(null)
  // (iOS) WKWebView can terminate if app is in a "suspended state", resulting in an empty banner when app returns to foreground.
  // Therefore it's advised to "manually" request a new ad when the app is foregrounded (https://groups.google.com/g/google-admob-ads-sdk/c/rwBpqOUr8m8).
  useForeground(() => {
    Platform.OS === 'ios' && bannerRef.current?.load()
  })

  return (
    <View style={[styles.bannerContainer, extraStyles]}>
      <BannerAd
        ref={bannerRef}
        unitId={adUnitId}
        size={BannerAdSize.BANNER}
        requestOptions={{
          requestNonPersonalizedAdsOnly: true,
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  bannerContainer: {
    marginTop: 50,
  },
})
