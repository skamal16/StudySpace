import React, { Component } from 'react';
import { ScrollView, StatusBar, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { ListItem, Separator } from '../components/Lists/List';
import { Navbar } from '../components/Navbar';

const ICON_PREFIX = Platform.OS === 'ios' ? 'ios' : 'md';
const ICON_COLOR = '#868686';
const ICON_SIZE = 23;

class Settings extends Component {

    handleThemesPress = () => {
        console.log('press theme');
    }

    handleSitePress = () => {
        console.log('press site');
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
                    text='Study Space'
                    onPress={this.handleSitePress}
                    customIcon={(<Icon name={`${ICON_PREFIX}-link`} size={ICON_SIZE} color={ICON_COLOR} />)}
                />
            </ScrollView>
        )
    }
}

export default Settings;