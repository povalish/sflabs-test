import { Colors } from '@ui/theme/Colors';
import React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { styles } from './GradientCard.styles';



interface IGradientCard {
  style?: StyleProp<ViewStyle>;
}

export const GradientCard: React.FC<IGradientCard> = ({ children, style }) => {
  const i = 0;

  return (
    <View style={style}>
      <LinearGradient
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 1 }}
        colors={[Colors.Gradient[0], Colors.Gradient[1]]}
        style={styles.card}
      >
        {children}
      </LinearGradient>
    </View>
  );
};
