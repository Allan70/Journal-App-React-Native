import React from 'react';
import { StyleSheet, View} from 'react-native';

const BoxContainer = props => {
    return (
        <View style={{...styles.boxContainer, ...props.style}}>
            {props.children}
        </View>
    );
};

const styles = StyleSheet.create({
    boxContainer:{
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        height:200,
        margin: 20,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default BoxContainer;