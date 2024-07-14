import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, Pressable} from 'react-native';
import Navbar from './components/Navbar';

export default function Dashboard() {
  return (
    <View style={styles.container}>
        {/* Dashboard UI */}
        {/* Navbar */}
        <Navbar />

        {/* Image recent journal */}
        <View style={{
          backgroundColor: 'black',
          height: '60%',
          width: '100%',
          marginTop: "-50%",
        }}>
          <Image source={require("../assets/vintage.jpg")} 
            style={{
              width: '100%',
              height: '100%'
            }}
          />
        </View>

        {/* Journal Chips */}
        <ScrollView  horizontal={true} style={styles.journalChips}>
          <Pressable style={[styles.chipItem, {backgroundColor: 'lightgray', borderColor: 'lightgray', }]}>
            <Text style={{color: 'black'}}>All</Text>
          </Pressable>
          <Pressable style={styles.chipItem}>
            <Text>Work</Text>
          </Pressable>
          <Pressable style={styles.chipItem}>
            <Text>School</Text>
          </Pressable>
          <Pressable style={styles.chipItem}>
            <Text>Lab</Text>
          </Pressable>
        </ScrollView>

        {/* Journal Items */}
        <View style={{
          height: '57%',
          width: '100%',
        }}>
          <ScrollView style={{
              marginHorizontal: 20,
              height: '100%',
              padding: 0
          }}>
              {/* Journal Card */}
              <Pressable style={styles.journalCard}>
                {/* Journal Card Title */}
                <View>
                  <Text style={{fontSize: 21, fontWeight: 'bold'}}>
                    All the King's horses and all the King's men...
                  </Text>
                </View>
                {/* Journal Card Details */}
                <View style={{
                    flexDirection:'row', 
                    marginTop: 5, 
                    alignItems: 'center'
                  }}>
                  
                  {/* Journal Card Topic Chips and Time stamp */}
                  <View style={{maxWidth: '70%', flexWrap: 'wrap', flexDirection: 'row'}}>
                    {/* Journal Card Chip */}
                    <View style={{
                        marginRight: 10,
                        marginTop: 2, 
                        backgroundColor: 'steelblue', 
                        borderRadius: 100, 
                        paddingHorizontal: 10, 
                        paddingVertical: 1,
                        justifyContent: 'center',
                        alignItems: 'center'
                      }}>
                      <Text style={{color: 'white'}}>Work</Text>
                    </View>
                  </View>
                  {/* Journal Card Timestamp */}
                  <View>
                    <Text>4 Hours ago</Text>
                  </View>
                </View>
              </Pressable>  
              {/* Add other Journal Cards here */}

          </ScrollView>
        </View>

        {/* Bottom Navigation */}
    </View>
);
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: "100%",
    height:"100%"
  },
  textStyle: {
    fontSize: 40,
    fontWeight: "bold"
  },
  journalChips: {
    backgroundColor: 'white', 
    zIndex: 100, 
    height: 25, 
    width: '100%', 
    paddingHorizontal: 10,
  },
  chipItem: {
    height: 45,
    paddingHorizontal: 25,
    paddingVertical: 0,
    borderRadius: 40,
    marginRight: 10,
    borderWidth: 1, 
    borderColor:'black',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
  },
  journalCard: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'black', 
    width: '100%', 
    minHeight: 86, 
    maxHeight: 200, 
    marginBottom: 10,
    padding: 10,
    maxWidth: '100%',
    borderRadius: 10,
  }
});
