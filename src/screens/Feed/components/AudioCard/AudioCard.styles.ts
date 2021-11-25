import { Colors } from '@ui/theme/Colors';
import { StyleSheet } from 'react-native';



export const styles = StyleSheet.create({
  card: {
    position: 'relative',
    width: '100%',
    aspectRatio: 3 / 4,
  },

  cardText: {
    color: Colors.White,
    fontWeight: 'bold',
    fontSize: 26,
  },

  cardButton: {
    color: Colors.Black,
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 10,
  },
});
