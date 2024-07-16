import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, Pressable, Image, ScrollView, Switch } from 'react-native';
import Userprofile from './components/Settings/Userprofile';
import Passwordchange from './components/Settings/Passwordchange';
import DropDownPicker from 'react-native-dropdown-picker';

export default function Settings() {
  const [isEnabled, setIsEnabled] = React.useState(false);

  const [dateOpen, setDateOpen] = React.useState(false);
  const [soundOpen, setSoundOpen] = React.useState(false);

  const [dateValue, setDateValue] = React.useState(null);
  const [soundValue, setSoundValue] = React.useState(null);

  const [selectDateItems, setSelectDateItems] = React.useState([
    { label: 'yyyy-mm-dd', value: 'yyyy-mm-dd' },
    { label: 'yyyy/mm/dd', value: 'yyyy/mm/dd' },
    { label: 'dd-mm-yyyy', value: 'dd-mm-yyyy' },
    { label: 'dd/mm/yyyy', value: 'dd/mm/yyyy' },
  ]);

  const [selectSoundItems, setSelectSoundItems] = React.useState([
    { label: 'Apple', value: 'apple' },
    { label: 'Banana', value: 'banana' },
    { label: 'Orange', value: 'orange' },
    { label: 'Pawpaw', value: 'pawpaw' },
    { label: 'Dragon Fruit', value: 'dragon fruit' },
  ]);

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <SafeAreaView style={styles.safeAreaScreen}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        {/* User Profile section */}
        <Userprofile styles={styles} />

        {/* Password change section */}
        <Passwordchange styles={styles} />

        <View style={styles.settingsContainer}>
          <Text style={{ fontSize: 20 }}>Journal Settings</Text>
          <View style={{ flexDirection: 'column', width: '100%', paddingHorizontal: 15, marginTop: 10 }}>
            {/* Journal Font size */}
            <View style={[{ flexDirection: 'row', width: '100%', marginBottom: 5, justifyContent: 'space-between', alignItems: 'center' }]}>
              <View>
                <Text>Journal Font Size</Text>
              </View>
              <View style={[{ flexDirection: 'row' }]}>
                <View>
                  <Pressable style={[{backgroundColor: 'lightgray', marginRight: 20, padding: 5, borderRadius: 10}]}>
                    <Image source={require('../assets/font-up.png')} style={[{width: 20, height: 20, margin: 5}]} />
                  </Pressable>
                </View>

                <View>
                  <Pressable style={[{backgroundColor: 'lightgray', marginRight: 10, width: 40, height: 40, padding: 5, borderRadius: 10}]}>
                    <Image source={require('../assets/font-down.png')}  style={[{width: 15, height: 15, margin: 5, alignSelf: 'center', justifySelf: 'center', margin: 'auto'}]} />
                  </Pressable>
                </View>

                <View style={{alignSelf: 'center', marginLeft: 40}}>
                  <Text>Aa</Text>
                </View>
              </View>
            </View>

            {/* 24 Hr time format */}
            <View style={[{ flexDirection: 'row', marginBottom: 15, justifyContent: 'space-between', alignItems: 'center' }]}>
              <Text>24hr time format</Text>
              <View>
                {/* Toggle button */}
                <Switch
                  trackColor={{ false: 'lightgray', true: 'lightblue' }}
                  thumbColor={isEnabled ? 'steelblue' : 'gray'}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleSwitch}
                  value={isEnabled}
                />
              </View>
            </View>

            {/* Date format */}
            <View style={[{ flexDirection: 'row', marginBottom: 15, justifyContent: 'space-between', alignItems: 'center', zIndex: dateOpen ? 1 : 0 }]}>
              <Text>Date format</Text>
              <View style={{ width: 150 }}>
                {/* Text Dropdown : Date formats */}
                <DropDownPicker
                  open={dateOpen}
                  value={dateValue}
                  items={selectDateItems}
                  setOpen={setDateOpen}
                  setValue={setDateValue}
                  setItems={setSelectDateItems}
                  containerStyle={styles.dropdownContainer}
                  style={styles.dropdown}
                  dropDownStyle={styles.dropdownList}
                />
              </View>
            </View>

            {/* Notification sound */}
            <View style={[{ flexDirection: 'row', marginBottom: 5, justifyContent: 'space-between', alignItems: 'center', zIndex: soundOpen ? 1 : 0 }]}>
              <Text>Notification sound</Text>
              <View style={{ width: 150 }}>
                {/* Text Dropdown : Sounds to use */}
                <DropDownPicker
                  open={soundOpen}
                  value={soundValue}
                  items={selectSoundItems}
                  setOpen={setSoundOpen}
                  setValue={setSoundValue}
                  setItems={setSelectSoundItems}
                  containerStyle={styles.dropdownContainer}
                  style={styles.dropdown}
                  dropDownStyle={styles.dropdownList}
                />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaScreen: {
    height: '100%',
    margin: 0,
  },
  scrollView: {
    flexGrow: 1,
  },
  profileStyling: {
    width: 200,
    height: 200,
    borderRadius: 20,
  },
  ImageStyle: {
    width: '100%',
    height: '100%',
    borderRadius: 400,
    marginTop: 10,
  },
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    flexDirection: 'column',
  },
  profileContainer: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'row',
    margin: 20,
    marginBottom: 10,
    padding: 40,
    shadowOffset: { width: -2, height: 0 },
    shadowColor: 'gray',
    shadowOpacity: 0.2,
    shadowRadius: 3,
    borderRadius: 10,
  },
  profileTextInput: {
    width: '100%',
    backgroundColor: 'lightgray',
    padding: 2,
    paddingLeft: 10,
    borderRadius: 5,
    marginBottom: 5,
  },
  passwordContainer: {
    flex: 1,
    backgroundColor: 'white',
    margin: 20,
    marginBottom: 10,
    padding: 20,
    borderRadius: 10,
  },
  settingsContainer: {
    flex: 1,
    backgroundColor: 'white',
    margin: 20,
    marginBottom: 10,
    padding: 20,
    borderRadius: 10,
  },
  dropdownContainer: {
    height: 40,
    width: '100%',
  },
  dropdown: {
    backgroundColor: '#fafafa',
    height: "100%",
  },
  dropdownList: {
    backgroundColor: '#fafafa',
  },
});
