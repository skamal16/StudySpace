import PropTypes from 'prop-types';
import React from 'react';
import { View, Text, TouchableHighlight, TextInput } from 'react-native';

import styles from './styles';

const InputWithButton = (props) => {
    const { onPress, buttonText, editable = true } = props;

    const containerStyles = [styles.container];
    if ({ editable } === false) {
        containerStyles.push(styles.containerDisabled);
    }

    return (
        <View style={containerStyles}>
            <TouchableHighlight underlayColor='#E7E7E7' style={styles.buttonContainer} onPress={onPress}>
                <Text style={styles.buttonText}>{buttonText}</Text>
            </TouchableHighlight>
            <View style={styles.border} />
            <TextInput style={styles.input} underlineColorAndroid='transparent'{...props} />
        </View >
    );
};

InputWithButton.propTypes = {
    onPress: PropTypes.func,
    onButtonText: PropTypes.string,
    editable: PropTypes.bool,
};

export default InputWithButton;