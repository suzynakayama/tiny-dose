import { ExpoConfig, ConfigContext } from 'expo/config'
import path from 'path'
import dotenv from 'dotenv'

// eas doesn't load values from `.env`, so make sure they are loaded here
// fix from: https://github.com/expo/eas-cli/issues/2222
dotenv.config({
  path: [path.resolve(__dirname, '.env.local'), path.resolve(__dirname, '.env')],
})

export default ({ config }: ConfigContext): ExpoConfig => {
  if (
    !process.env.ADMOB_ANDROID_APP_ID ||
    !process.env.ADMOB_IOS_APP_ID ||
    !process.env.EAS_PROJECT_ID
  ) {
    throw new Error(
      `ADMOB_ANDROID_APP_ID or ADMOB_IOS_APP_ID or EAS_PROJECT_ID environment variable not defined`
    )
  }
  return {
    ...config,
    name: 'tiny-dose',
    slug: 'tiny-dose',
    version: '1.0.0',
    orientation: 'portrait',
    icon: './assets/images/tinyDose.png',
    scheme: 'myapp',
    userInterfaceStyle: 'automatic',
    newArchEnabled: true,
    ios: {
      icon: './assets/images/icon.png',
      supportsTablet: true,
      bundleIdentifier: 'com.tinydose.app',
      infoPlist: {
        ITSAppUsesNonExemptEncryption: false,
      },
    },
    android: {
      adaptiveIcon: {
        foregroundImage: './assets/images/icon.png',
        backgroundColor: '#ffffff',
      },
      package: 'com.tinydose.app',
    },
    web: {
      bundler: 'metro',
      output: 'static',
      favicon: './assets/images/favicon.png',
    },
    plugins: [
      'expo-router',
      [
        'expo-splash-screen',
        {
          image: './assets/images/tinyDose.png',
          imageWidth: 200,
          resizeMode: 'contain',
          backgroundColor: '#ffffff',
        },
      ],
      [
        'react-native-google-mobile-ads',
        {
          androidAppId: process.env.ADMOB_ANDROID_APP_ID,
          iosAppId: process.env.ADMOB_IOS_APP_ID,
        },
      ],
    ],
    experiments: {
      typedRoutes: true,
    },
    extra: {
      eas: {
        projectId: process.env.EAS_PROJECT_ID,
      },
    },
  }
}
