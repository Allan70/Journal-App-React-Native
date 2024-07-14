import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, TextInput } from 'react-native';
import QuillEditor, { QuillToolbar } from 'react-native-cn-quill';

export default function Writing() {
  const [currentTime, setCurrentTime] = React.useState("");
  const [currentDate, setCurrentDate] = React.useState("");
  const _editor = React.createRef();

  const customStyles = {
    toolbar: {
      provider: (provided) => ({
        ...provided,
        backgroundColor: 'white',
      }),
      root: (provided) => ({
        ...provided,
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 5,
        borderWidth: 0,
        borderColor: 'white',
        paddingLeft: 25,
        backgroundColor: 'white',
        marginVertical: -11,
      }),
      toolset: {
        root: (provided) => ({
          ...provided,
        }),
        listButton: {
          overlay: (provided) => ({
            ...provided,
          }),
          tool: (provided) => ({
            ...provided,
          }),
          text: (provided) => ({
            ...provided,
          }),
          image: (provided) => ({
            ...provided,
          }),
        },
        colorListButton: {
          overlay: (provided) => ({
            ...provided,
          }),
          tool: (provided) => ({
            ...provided,
          }),
          image: (provided) => ({
            ...provided,
          }),
        },
      },
    },
    separator: (provided) => ({
      ...provided,
    }),
    selection: {
      root: (provided) => ({
        ...provided,
      }),
      scroll: (provided) => ({
        ...provided,
      }),
      close: {
        view: (provided) => ({
          ...provided,
        }),
        text: (provided) => ({
          ...provided,
        }),
      },
      textToggle: {
        overlay: (provided) => ({
          ...provided,
        }),
        tool: (provided) => ({
          ...provided,
        }),
        text: (provided) => ({
          ...provided,
        }),
      },
      iconToggle: {
        overlay: (provided) => ({
          ...provided,
        }),
        tool: (provided) => ({
          ...provided,
        }),
        image: (provided) => ({
          ...provided,
        }),
      },
      colorToggle: {
        overlay: (provided) => ({
          ...provided,
        }),
        tool: (provided) => ({
          ...provided,
        }),
        noColor: (provided) => ({
          ...provided,
        }),
      },
    },
  };

  const currentDateTime = new Date();

  useEffect(()=>{
    if(currentDate == "" && currentTime == "")
    {
      setCurrentDate(currentDateTime.toDateString())
      setCurrentTime(currentDateTime.toLocaleTimeString())
    }
  }, [])
  return (
    <SafeAreaView style={styles.root}>
      {/* Writing UI */}
      <View>
        <TextInput
          style={styles.titleInput}
          placeholder='Title'
        />
      </View>
      <View>
        {/* Add categories here */}
      </View>
      <View style={styles.createdAt}>
        <Text style={{ color: 'lightgray' }}>Created at {currentTime} {currentDate}</Text>
      </View>

      <View style={styles.toolbarHolder}>
        {/* Add categories here */}
        <QuillToolbar
          editor={_editor}
          options="basic"
          theme="light"
          styles={customStyles}
        />
      </View>

      <QuillEditor
        style={styles.editor}
        ref={_editor}
        initialHTML="<h1>Quill Editor for react-native</h1>"
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  textStyle: {
    fontSize: 40,
    fontWeight: "bold"
  },
  titleInput: {
    fontSize: 25,
    margin: 5,
    marginBottom: 10,
    fontWeight: 'bold',
    paddingVertical: 10,
    width: "100%",
    paddingLeft: 25
  },
  createdAt: {
    fontSize: 25,
    margin: 5,
    fontWeight: 'bold',
    paddingVertical: 5,
    width: "100%",
    paddingLeft: 25,
  },
  root: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: 'white',
  },
  editor: {
    flex: 1,
    padding: 10,
    borderColor: 'white',
    borderWidth: 1,
    marginHorizontal: 20,
    marginVertical: 10,
    backgroundColor: 'white',
  },
  toolbarHolder: {
    marginLeft: -10,
    marginVertical: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  }
});
