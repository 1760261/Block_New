import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  lagreImage: {
    // width: Math.round(Dimensions.get("window").width) / 2,
    // height: Math.round(Dimensions.get("window").width) / 2,

    width: '100%',
    height: Math.round(Dimensions.get('window').width) / 2 - 10,
    borderRadius: 20,
    top: -10,
    left: -10,
  },
  smaleImage: {
    width: 80,
    height: 80,
    marginRight: 7,
  },
});

export default styles;
