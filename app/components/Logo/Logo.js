import React from 'react';
import { View, Image } from 'react-native';

import styles from './styles';

const Logo = () => (
    <View style={styles.container}>
        <Image resizeMode="contain" style={styles.gradcap} source={require('./images/graduation_cap.png')} />
        <Image resizeMode="contain" style={styles.logo} source={require('./images/study_space_logo.png')} />
    </View>
)

export default Logo;