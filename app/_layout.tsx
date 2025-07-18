import { useFonts } from 'expo-font'
import { Stack } from 'expo-router'
import * as SplashScreen from 'expo-splash-screen'
import React, { useEffect, useState } from 'react'
import 'react-native-reanimated'
import mobileAds, { MaxAdContentRating } from 'react-native-google-mobile-ads'

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  })
  const [adsLoaded, setAdsLoaded] = useState(false)

  useEffect(() => {
    mobileAds()
      .setRequestConfiguration({
        // Update all future requests suitable for parental guidance
        maxAdContentRating: MaxAdContentRating.PG,
        // Indicates that you want your content treated as child-directed for purposes of COPPA.
        tagForChildDirectedTreatment: false,
        // Indicates that you want the ad request to be handled in a
        // manner suitable for users under the age of consent.
        tagForUnderAgeOfConsent: false,
        // An array of test device IDs to allow.
        testDeviceIdentifiers: ['EMULATOR'],
      })
      .then(() => mobileAds().initialize())
      .then(() => {
        // Initialization complete!
        setAdsLoaded(true)
      })
      .catch((error: unknown) => {
        setAdsLoaded(false)
      })
  }, [])

  useEffect(() => {
    if (loaded && adsLoaded) {
      SplashScreen.hideAsync()
    }
  }, [loaded, adsLoaded])

  if (!loaded || !adsLoaded) {
    return null
  }

  return (
    <Stack>
      <Stack.Screen name='index' options={{ title: 'Tiny Dose' }} />
      <Stack.Screen name='medicineCalculator' options={{ headerTitle: 'Tiny Dose' }} />
    </Stack>
  )
}
