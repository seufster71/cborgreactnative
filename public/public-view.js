import React from 'react';
import PropTypes from 'prop-types';
import {Text, View } from 'react-native';

export default function PublicView({currentState, fields }) {


    return (
      <View><Text> Public Page </Text>
      </View>
    );
}


PublicView.propTypes = {
  currentState: PropTypes.object,
	fields: PropTypes.object
};
