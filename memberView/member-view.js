import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';


export default function MemberView(props) {

    return (
      <View>
        {props.children}
      </View>
    );
}


MemberView.propTypes = {
  children: PropTypes.array
};
