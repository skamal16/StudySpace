import { StyleSheet } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
    $underlayColor: '#FFF0F0',
    row: {
        width: '100%',
        paddingHorizontal: '5%',
        paddingVertical: '15%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-start',
        borderTopWidth: StyleSheet.hairlineWidth * 3,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderColor: '$red',
    },
    text: {
        fontSize: 30,
        fontWeight: '500',
        color: '$softRed',
        fontStyle: 'italic',
    },
    separator: {
        marginLeft: 10,
        flex: 1,
        height: StyleSheet.hairlineWidth * 10,
        backgroundColor: '$lightRed',
    },
    icon: {
        backgroundColor: 'transparent',
        width: 60,
        height: 60,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    iconVisible: {
        backgroundColor: '$white',
    },
    checkIcon: {
        width: 60,
    },
});

export default styles;