import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '$softRed',
    },
    text: {
        flex: 1,
        color: '$white',
        fontSize: 25,
        fontWeight: '300',
        fontStyle: 'italic',
        marginLeft: '2%',
    },
});

export default styles;