import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { ScrollView, StatusBar, Platform, Linking } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { ListItem, Separator } from '../components/Lists/List';

const ICON_PREFIX = Platform.OS === 'ios' ? 'ios' : 'md';
const ICON_COLOR = '#868686';
const ICON_SIZE = 23;

class Settings extends Component {

    static propTypes = {
        navigation: PropTypes.object,
    }

    handleThemesPress = () => {
        this.props.navigation.navigate('Themes', { title: 'Themes' });
    }

    handleSitePress = () => {
        Linking.openURL('https://www.facebook.com/StudySpacePk/').catch(() => alert('An error occured'));
    }

    render() {
        return (
            <ScrollView style={{ width: '100%' }}>
                <StatusBar translucent={false} barStyle='default' />
                <ListItem
                    text='Themes'
                    onPress={this.handleThemesPress}
                    customIcon={(<Icon name={`${ICON_PREFIX}-arrow-forward`} size={ICON_SIZE} color={ICON_COLOR} />)}
                />
                <Separator />
                <ListItem
                    text='Facebook'
                    onPress={this.handleSitePress}
                    customIcon={(<Icon name={`${ICON_PREFIX}-link`} size={ICON_SIZE} color={ICON_COLOR} />)}
                />
            </ScrollView>
        )
    }
}

export default Settings;