import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        height: '10%',
        borderBottomWidth: 2,
        borderRightWidth: 2,
        borderTopWidth: 0.5,
        borderLeftWidth: 0.5,
        borderColor: '$lightGrey',
    },
    wrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    icon: {
        width: 50,
        //marginRight: 2,
    },
    text: {
        color: '$red',
        fontSize: 14,
        fontWeight: '300',
        fontStyle: 'italic',
        paddingHorizontal: 10,
    },
});