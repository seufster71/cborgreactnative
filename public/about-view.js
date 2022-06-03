import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Text, View } from 'react-native';

export default function AboutView({currentState, fields }) {

    return (
      <View style={styles.Container} ><Text> About Toasthub  </Text></View>
    );
}

const styles = StyleSheet.create({
	Container: {
		zIndex: 1
	}
});


AboutView.propTypes = {
  currentState: PropTypes.object,
	fields: PropTypes.object
};
