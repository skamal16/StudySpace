import { Dimensions } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const imageWidth = Dimensions.get('window').width / 2;

export default EStyleSheet.create({
    container: {
        alignItems: 'center',
    },
    gradcap: {
        width: imageWidth * 0.8,
        height: imageWidth * 0.8,
    },
    logo: {
        alignItems: 'center',
        justifyContent: 'center',
        width: imageWidth * 1.5,
        height: imageWidth * 0.5,
    },
});