import React, { Component } from 'react';
import { View } from 'react-native';

import { Page } from '../components/Page';
import Input from '../components/TextInput/Input';
import { ClearButton } from '../components/Buttons';

const LABEL_TEXT1 = 'Name';
const DEFAULT_DISPLAY1 = 'First M. Last';
const LABEL_TEXT2 = 'Gender';
const DEFAULT_DISPLAY2 = 'Male, Female, Robot';
const LABEL_TEXT3 = 'Age';
const DEFAULT_DISPLAY3 = '20';
const TITLE = 'Registration Form';

class RegistrationForm extends Component {

    handleChangeText1 = () => {
        console.log('change text1');
    };

    handleChangeText2 = () => {
        console.log('change text2');
    };

    handleChangeText3 = () => {
        console.log('change text3');
    };

    handleClearButton = () => {
        console.log('press clear button');
    };

    render() {
        return (
            <Page title={TITLE}>
                <View style={{ flex: 1, justifyContent: 'center' }}>
                    <Input
                        labelText={LABEL_TEXT1}
                        defaultValue={DEFAULT_DISPLAY1}
                        keyboardType="default"
                        onChangeText={this.handleChangeText1}
                    />
                    <Input
                        labelText={LABEL_TEXT2}
                        defaultValue={DEFAULT_DISPLAY2}
                        keyboardType="default"
                        onChangeText={this.handleChangeText2}
                    />
                    <Input
                        labelText={LABEL_TEXT3}
                        defaultValue={DEFAULT_DISPLAY3}
                        keyboardType="numeric"
                        onChangeText={this.handleChangeText3}
                    />
                    <ClearButton
                        text="Clear Form"
                        onPress={this.handleClearButton}
                    />
                </View>
            </Page>
        );
    }
}

export default RegistrationForm;