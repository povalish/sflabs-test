import { Colors } from '@ui/theme/Colors';
import { Units } from '@ui/theme/Units';
import { StyleSheet } from 'react-native';



export const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.Black,
  },

  heading: {
    marginVertical: Units.Spacers.x1,
    fontSize: 32,
    fontWeight: 'bold',
    color: Colors.White,
    textAlign: 'center',
  },
});
