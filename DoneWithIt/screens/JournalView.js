import React from 'react'
import {SafeAreaView,  View, Text, Pressable, Image, ScrollView} from 'react-native';

export default function JournalView() {
  return (
    <SafeAreaView>
     {/* Scroll View */}
         <View>
            <View>
                <Text>Kalamu</Text>
            </View>
            <View>
                <Pressable>
                    <Image source=""/>
                </Pressable>
            </View>
         </View>
         <ScrollView>
            {/* Present your journal here */}
         </ScrollView>
    </SafeAreaView>
  )
}
