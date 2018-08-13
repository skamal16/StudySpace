import PropTypes from 'prop-types';
import React from 'react';
import { FlatList } from 'react-native';

import StylishListItem from './StylishListItem';
import Separator from './Separator';

const StylishList = ({ list, selected, handlePress }) => (
    <FlatList
        style={{ width: '100%' }}
        data={list}
        renderItem={({ item }) => (
            <StylishListItem
                onPress={handlePress}
                text={item}
                selected={item === selected}
            />
        )}
        keyExtractor={item => item}
        ItemSeparatorComponent={Separator}
    />
);

StylishList.propTypes = {
    list: PropTypes.array,
    selected: PropTypes.string,
    handlePress: PropTypes.func,
};

export default StylishList;