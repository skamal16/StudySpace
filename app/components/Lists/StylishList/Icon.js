import { PropTypes } from 'prop-types';
import React from 'react';
import { View, Image } from 'react-native';

import styles from './styles';

const Icon = ({ checkmark, visible }) => {
    const iconStyles = [styles.icon];
    if (visible) {
        iconStyles.push(styles.iconVisible);
    }

    return <View style={iconStyles}>
        {checkmark ? <Image style={styles.checkIcon} resizeMode='contain' source={require('../images/graduation_cap_red.png')} /> : null}
    </View>
};

Icon.propTypes = {
    checkmark: PropTypes.bool,
    visible: PropTypes.bool,
};

export default Icon;