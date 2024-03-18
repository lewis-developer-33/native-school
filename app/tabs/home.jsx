import { View,Text,TextInput, Pressable,StyleSheet } from "react-native"
import { Image } from 'expo-image';
import { useState } from "react"
import { AntDesign } from '@expo/vector-icons';
import { router } from "expo-router";

const home = () => {
  const [search,setSearch] = useState('')
  const [showDrawer,setShowDrawer] = useState(false)
  return (
    <View
    style={{
      flex:1,
      display:"flex",
      flexDirection:"column",
      alignItems:"center",
    }}
    >
      
      <View style={{
        width:"80%",
        paddingVertical:20
      }}>

      <TextInput              
          placeholder="Search"
          style={styles.input}
          onChangeText={(e) => setSearch(e) }
          inputMode="search"
      />
      <View style={{
        display:"flex",
        gap:10,
        marginVertical:20
      }}>
        <Pressable 
        onPress={() => router.push("/tabs/list")}
        style={{
          width:74,
          height:74,
          borderRadius:5,
          paddingHorizontal:5,
          paddingVertical:5,
          display:"flex",
          alignItems:"center",
          justifyContent:"center",
          borderWidth:2
        }}>
          <AntDesign name="profile" size={24} color="black" />
          <Text>Class List</Text>
        </Pressable>
        <Pressable 
        onPress={() => router.push("/tabs/profile")}
        style={{
          width:74,
          height:74,
          borderRadius:5,
          paddingHorizontal:5,
          paddingVertical:5,
          display:"flex",
          alignItems:"center",
          justifyContent:"center",
          borderWidth:2
        }}>
          <AntDesign name="user" size={24} color="black" />
          <Text>Profile</Text>
        </Pressable>
        <Pressable 
        onPress={() => router.push("/tabs/marks")}
        style={{
          width:74,
          height:74,
          borderRadius:5,
          paddingHorizontal:5,
          paddingVertical:5,
          display:"flex",
          alignItems:"center",
          justifyContent:"center",
          borderWidth:2
        }}>
          <AntDesign name="check" size={24} color="black" />
          <Text>Marks</Text>
        </Pressable>
      </View>
      </View>
    </View>
  )
}

export default home

const styles = StyleSheet.create({
  input: {
    backgroundColor:"transparent",
    width:"100%",
    borderRadius:5,
    paddingHorizontal:10,
    paddingVertical:5,
    fontWeight:"bold",
    borderWidth:2
  },
  
});