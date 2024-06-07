export default () => (
  {
    expo: {
      name: 'Renty',
      slug: 'rentalApp',
      version: '1.0.1',
      extra: {
        POSTS_URL1:  null,
        POSTS_URL2:  null,
      },
      orientation: 'portrait',
      icon: './assets/icon.png',
      userInterfaceStyle: 'light',
      splash: {
        image: './assets/splash.png',
        resizeMode: 'contain',
        backgroundColor: '#ffffff',
      },
      updates: {
        fallbackToCacheTimeout: 0,
      },
      assetBundlePatterns: [
        '**/*',
      ],
      ios: {
        bundleIdentifier: 'de.homely.rental',
        buildNumber: '1.0.1',
        supportsTablet: true,
      },
      android: {
        package: 'de.homely.rental',
        versionCode: 2,
        adaptiveIcon: {
          foregroundImage: './assets/adaptive-icon.png',
          backgroundColor: '#FFFFFF',
        },
      },
      web: {
        favicon: './assets/favicon.png',
      },
      extra: {
      eas: {
        "projectId": "959e518a-e477-4275-b31d-9f99c5329755"
      }
    }
    },
  }
);
