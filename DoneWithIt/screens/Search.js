import { StyleSheet, Text, View, Image, ScrollView, Pressable, TextInput} from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
// import { } from 'react-native-gesture-handler';

export default function Search() { 
  const [search, onChangeSearch] = React.useState("");

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.search}>
        <TextInput 
          onChangeText={onChangeSearch} 
          value={search}
          placeholder="Search journals"
          style={styles.input}
        />
        <Pressable style={styles.searchButton}>
          <Ionicons name="search-outline" size={24} color="black" />
        </Pressable>
      </View>

      {/* Journal Chips */}
      <ScrollView horizontal={true} style={[styles.journalChips, {backgroundColor: 'red'}]}>
        <Pressable style={[styles.chipItem, {backgroundColor: 'lightgray', borderColor: 'lightgray'}]}>
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
      <View style={styles.journalListContainer}>
        <ScrollView style={styles.journalList}>
          {/* Add other Journal Cards here */}
          <Pressable style={styles.journalCard}>
            {/* Journal Card Title */}
            <View>
              <Text style={styles.journalTitle}>
                All the King's horses and all the King's men...
              </Text>
            </View>
            {/* Journal Card Details */}
            <View style={styles.journalDetails}>
              <View style={styles.chipContainer}>
                <View style={styles.journalChip}>
                  <Text style={styles.chipText}>Work</Text>
                </View>
              </View>
              <View>
                <Text>4 Hours ago</Text>
              </View>
            </View>
          </Pressable>  
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  search: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white', 
    paddingVertical: 10, 
    marginBottom: 20,
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#F5F5F5',
    marginRight: 10,
  },
  searchButton: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'lightgray',
  },
  journalChips: {
    flexDirection: 'row',
    marginBottom: 0,
    minHeight: 100, // Ensures the ScrollView occupies at least 100 pixels in height
  },
  chipItem: {
    height: 40,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginRight: 10,
    borderWidth: 1, 
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  journalListContainer: {
    flex: 1
  },
  journalList: {
    flex: 1,
  },
  journalCard: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'black', 
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  journalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  journalDetails: {
    flexDirection: 'row', 
    marginTop: 5, 
    alignItems: 'center',
  },
  chipContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginRight: 10,
  },
  journalChip: {
    backgroundColor: 'steelblue', 
    borderRadius: 100, 
    paddingHorizontal: 10, 
    paddingVertical: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5,
  },
  chipText: {
    color: 'white',
  },
});
