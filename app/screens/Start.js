import React, { Component } from 'react';
import { StatusBar, View } from 'react-native';

import { Container } from '../components/Container';
import { Logo } from '../components/Logo';

class Start extends Component {
    render() {
        return (
            <Container>
                <StatusBar translucent={false} barStyle="light-content" />
                <View style={{ flex: 1, justifyContent: 'center' }}>
                    <Logo />
                </View>
            </Container>
        );
    }
}

export default Start;