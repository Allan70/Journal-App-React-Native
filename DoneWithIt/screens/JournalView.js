import React from 'react'
import {SafeAreaView,  View, Text, Pressable, Image, ScrollView} from 'react-native';
import Navbar from './components/Navbar';

export default function JournalView() {
  return (
    <SafeAreaView>
      <Navbar />
     {/* Scroll View */}
         <ScrollView>
            {/* Present your journal here */}
         </ScrollView>
    </SafeAreaView>
  )
}
