import { View,Text,TextInput, Pressable,StyleSheet,Modal,Alert } from "react-native"
import { Image } from 'expo-image';
import { useState } from "react"
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Link } from "expo-router";

const student = () => {
  const [search,setSearch] = useState('')
  const [showModal,setShowModal] = useState(false)
  const studentsList = [
    {
      name:"Natalie",
      email:"natalie@gmail.com",
      status:"Inactive"
    },
  ]
  return (
    <View
    style={{
      flex:1,
      display:"flex",
      flexDirection:"column",
      alignItems:"center",
      paddingVertical:20
    }}
    >
      
      <View>
        {studentsList.map((d,i) => {
          const {name,email,status} = d
          return (
          <View 
          key={i}
          style={{
            display:"flex",
            flexDirection:"row",
            alignItems:"center",
            gap:20,
            width:"100%",
            backgroundColor:"white",
            paddingVertical:10,
            paddingHorizontal:10,
            borderWidth:2,
            borderRadius:4
          }}>
            <View>
              <Text style={{fontWeight:"400",fontSize:18}}>{name}</Text>
            </View>
            <View>
              <Text style={{fontWeight:"400",fontSize:18}}>{email}</Text>
            </View>
            {status == 'Active' ?
              <View>
                <Text style={{fontWeight:"400",fontSize:18,color:"green"}}>{status}</Text>
              </View>
              :
              <View>
                <Text style={{fontWeight:"400",fontSize:18,color:"red"}}>{status}</Text>
              </View>
            }
            <Link href="/modal">
            <MaterialCommunityIcons name="dots-horizontal" size={24} color="black" />
            </Link>
          </View>
          )
        })}
      </View>
    </View>
  )
}

export default student

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