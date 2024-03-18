import { View,Text,TextInput, Pressable,StyleSheet } from "react-native"
import { Image } from 'expo-image';
import { useState } from "react"
import { AntDesign } from '@expo/vector-icons';


const profile = () => {
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
      
      <View 
      style={{
        backgroundColor:"black",
        width:"100%",
        marginTop:70,
        height:"100%",
        borderTopEndRadius:50,
        position:"relative",
        display:"flex",
        alignItems:"center"
      }}
      >
        <View
        style={{
            position:"absolute",
            left:"35%",
            top:-40,
            display:"flex",
            alignItems:"center"
        }}
        >
            <View style={{
                backgroundColor:"blue",
                width:100,
                height:100,
                borderRadius:60,
                borderWidth:2,
                overflow:"hidden"
            }}>
            </View>
            <View>

                <Text style={{color:"white",fontWeight:"bold",}}>John Doe</Text>
            </View>

        </View>
        <View 
        style={{
            marginTop:90,
            display:"flex",
            justifyContent:"center",
            width:"80%",
            gap:20
        }}
        >
            <View 
            style={{
                paddingVertical:10,
                paddingHorizontal:20,
                backgroundColor:"gray"
            }}
            >
                <Text style={{font:"bold",fontSize:16}}>Personal Details</Text>

            </View>
            <View 
            style={{
                paddingVertical:10,
                paddingHorizontal:20,
                backgroundColor:"gray"
            }}
            >
                <Text style={{font:"bold",fontSize:16}}>Languages</Text>

            </View>
            <View 
            style={{
                paddingVertical:10,
                paddingHorizontal:20,
                backgroundColor:"gray"
            }}
            >
                <Text style={{font:"bold",fontSize:16}}>Log out</Text>

            </View>
        </View>    
      </View>
    </View>
  )
}

export default profile

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