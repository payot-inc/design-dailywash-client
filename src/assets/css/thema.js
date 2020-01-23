import {StyleSheet} from 'react-native';

const MainColor = '#396eee';
const SubColor = '#172959'

export default StyleSheet.create({
  shadowBox: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 0,
    borderWidth: 1,
    borderColor: '#e2e2e2',
  },

  inputBox: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#d2d2d2',
    height: 40,
    backgroundColor: '#f8f8f8',
  },
});
