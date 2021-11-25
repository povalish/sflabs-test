import { StyleSheet } from 'react-native';
import { Colors } from '@ui/theme/Colors';


export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },

  sliderItem: {
    flex: 1,
    justifyContent: 'center',
  },

  loader: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  loaderText: {
    textAlign: 'center',
    color: Colors.White,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
