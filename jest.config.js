module.exports = {
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transformIgnorePatterns: [
    'node_modules/(?!(@react-native' +
      '|react-native' +
      '|react-native-size-matters' +
      '|react-native-ratings' +
      '|react-native-gesture-handler' +
      '|react-navigation/native' +
      '|react-navigation/stack' +
      '|react-navigation-tabs' +
      '|react-native-splash-screen' +
      '|react-native-screens' +
      '|react-native-reanimated' +
      '|react-native-elements' +
      ')/)',
  ],
};
