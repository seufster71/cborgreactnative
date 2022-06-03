import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Text, View } from 'react-native';

export default function ServiceView({currentState, fields }) {

    return (
      <View style={styles.Container} ><Text> Rapid Application Development platform  </Text></View>
    );
}

const styles = StyleSheet.create({
	Container: {
		zIndex: 1
	}
});


ServiceView.propTypes = {
  currentState: PropTypes.object,
	fields: PropTypes.object
};
