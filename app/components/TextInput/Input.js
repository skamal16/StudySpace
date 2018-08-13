import PropTypes from 'prop-types';
import React from 'react';
import { View, Text, TextInput } from 'react-native';

import styles from './styles';

const Input = (props) => {
    const { labelText, editable = true } = props;

    const containerStyles = [styles.container];
    if ({ editable } === false) {
        containerStyles.push(styles.containerDisabled);
    }

    return (
        <View style={containerStyles}>
            <Text style={styles.labelText}>{labelText}</Text>
            <View style={styles.border} />
            <TextInput style={styles.input} underlineColorAndroid='transparent'{...props} />
        </View >
    );
};

Input.propTypes = {
    labelText: PropTypes.string,
    editable: PropTypes.bool,
};

export default Input;