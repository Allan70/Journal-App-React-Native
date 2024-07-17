import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, TextInput, Pressable, Image} from 'react-native';
import QuillEditor, { QuillToolbar } from 'react-native-cn-quill';

export default function Writing() {
  const [currentTime, setCurrentTime] = React.useState("");
  const [currentDate, setCurrentDate] = React.useState("");
  const [categories, setCategories] = React.useState(["work", "home", "school"])
  const [newCategory, setNewCategory] = React.useState("");
  
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

 
  let currentDateTime = new Date();

  useEffect(() => {
    if (currentDate === "" && currentTime === "") {
      setCurrentDate(currentDateTime.toDateString());
      setCurrentTime(currentDateTime.toLocaleTimeString());
    }
  }, [currentDateTime]);

  const addCategory = () => {
    if (newCategory && categories.length < 7) {
      setCategories([...categories, newCategory]);
      setNewCategory("");
    }
  };

  const deleteCategory = (categoryToDelete) => {
    setCategories(categories.filter(category => category !== categoryToDelete));
  };
  
  return (
    <SafeAreaView style={[styles.root, { paddingTop: 40 }]}>
      {/* Writing UI */}
      <View>
        <TextInput
          style={styles.titleInput}
          placeholder='Title'
        />
      </View>
      {/* Categories */}
      <View style={{ flexDirection: "row", padding: 10, marginLeft: 15, width: "100%", alignItems: 'center'}}>
        {/* Categories Items */}
        <View style={{ flexDirection: "row", maxWidth: "90%", flexWrap: 'wrap'}}>
            {/* Add category */}
        <View style={{flexDirection: "row", borderWidth: .5, borderColor: 'black', alignItems: 'cneter', height: 35, bordreRadius: 15, marginRight: 10, marginBottom: 5}}>
          <TextInput
            style={styles.customCategoryInput}
            placeholder="New Category"
            value={newCategory}
            onChangeText={setNewCategory}
          />
          <Pressable style={{ padding: 0,borderColor: 'black', borderWidth: 1, paddingHorizontal: 7, margin: 5, height: 25}} onPress={addCategory}>
            <Text style={{color: 'black'}}>+</Text>
          </Pressable>
        </View>
          {/* Category Items */}
          {categories.map((element, index) => (
            <View key={index} style={styles.category}>
              <Text>{element}</Text>
              <Pressable
                onPress={() => deleteCategory(element)} style={styles.deleteButton}
              ><Text style={styles.catClose}>x</Text></Pressable>

            </View>
          ))}
        </View>
      
      </View>
      <View style={styles.createdAt}>
        <Text style={{ color: 'gray' }}>Created at {currentTime} {currentDate}</Text>
      </View>

      <View style={styles.toolbarHolder}>
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
  },
  category: {
    paddingHorizontal: 10,
    flexDirection: 'row',
    borderColor: 'black',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginRight: 5, 
    marginBottom: 5,
    height: 33,
  },
  customCategoryInput: {
    height: 40,
    borderRadius: 5,
    marginRight: 5, 
    paddingHorizontal: 10,
    alignSelf: 'center',
  },
  catClose: {
    flexDirection: 'row',
    paddingHorizontal: 7,
    backgroundColor: 'lightgray',
    borderColor: 'black', 
    borderRadius: 4, 
    marginLeft: 7, 
    justifyContent: 'center', 
    alignItems: 'center',
    color: 'gray',
    paddingBottom: 2,
  }
});