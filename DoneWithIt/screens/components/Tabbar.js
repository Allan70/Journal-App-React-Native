import React from 'react';
import { View, Text, Pressable, Dimensions, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window');

export default function Tabbar({ state, descriptors, navigation }) {
  return (
    <View style={styles.mainContainer}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <View key={index} style={[styles.mainItemContainer, { borderRightWidth: label === "notes" ? 3 : 0 }]}>
            <Pressable
              onPress={onPress}
              style={{ backgroundColor: isFocused ? "#030D16" : "#182028", borderRadius: 20 }}>
              <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1, padding: 15 }}>
                <Text style={{ color: isFocused ? "#FFFFFF" : "#A0A0A0" }}>{label}</Text>
              </View>
            </Pressable>
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 25,
    backgroundColor: "#182028",
    borderRadius: 25,
    marginHorizontal: width * 0.1
  },
  mainItemContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    borderRadius: 1,
    borderColor: "#333B42"
  },
});
