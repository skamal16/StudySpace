import { StyleSheet } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
    $underlayColor: '$primaryRed',
    container: {
        flex: 1,
        justifyContent: 'space-around',
        flexDirection: 'row',
        alignItems: 'center',
    },
    home: {
        width: StyleSheet.hairlineWidth * 100,
        height: StyleSheet.hairlineWidth * 100,
    },
    settings: {
        width: 30,
        height: 30,
        borderRadius: 15,
        backgroundColor: '$white',
    },
    one: {
        width: 30,
        height: 30,
        borderRadius: 15,
        backgroundColor: '$white',
    },

});