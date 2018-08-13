import { StyleSheet } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
    $underlayColor: '$lightGrey',
    row: {
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '$white',
    },
    text: {
        fontSize: 16,
        color: '$black',
    },
    separator: {
        marginLeft: 20,
        flex: 1,
        height: StyleSheet.hairlineWidth,
        backgroundColor: '$lightGrey',
    },
    icon: {
        backgroundColor: 'transparent',
        width: 30,
        height: 30,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    iconVisible: {
        backgroundColor: '$lightBlue',
    },
    checkIcon: {
        width: 18,
    },
});

export default styles;