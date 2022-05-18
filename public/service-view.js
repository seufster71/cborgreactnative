import React from 'react';
import PropTypes from 'prop-types';
import {Text, View } from 'react-native';

export default function ServiceView({currentState, fields }) {

    return (
      <View><Text> Services Page </Text></View>
    );
}

ServiceView.propTypes = {
  currentState: PropTypes.object,
	fields: PropTypes.object
};
