module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: ['.ios.ts', '.android.ts', '.ts', '.ios.tsx', '.android.tsx', '.tsx', '.jsx', '.js', '.json', '.svg'],
        alias: {
          '@domain': `${__dirname}/src/domain`,
          '@screens': `${__dirname}/src/screens`,
          '@ui': `${__dirname}/src/ui`,
        },
      },
    ],
  ],
};
