import { View,Text,TextInput, Pressable,StyleSheet,Modal,Alert } from "react-native"
import { Image } from 'expo-image';
import { useState } from "react"
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Link } from "expo-router";

const marks = () => {
  const [search,setSearch] = useState('')
  const [showModal,setShowModal] = useState(false)
  const studentsList = [
    {
      name:"Natalie",
      reg:"SCT222-0123/2020",
      status:"Passed"
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
          const {name,reg,status} = d
          return (
          <View 
          key={i}
          style={{
            display:"flex",
            flexDirection:"row",
            alignItems:"center",
            justifyContent:"space-between",
            width:"90%",
            backgroundColor:"white",
            paddingVertical:10,
            paddingHorizontal:10,
            borderWidth:2,
            borderRadius:4
          }}>
            <View>
              <Text style={{fontWeight:"400",fontSize:18}}>{name}</Text>
              <Text style={{fontWeight:"400",fontSize:18}}>{reg}</Text>
            </View>
            
            {status == 'Passed' ?
              <View>
                <Text style={{fontWeight:"400",fontSize:18,color:"green"}}>{status}</Text>
              </View>
              :
              <View>
                <Text style={{fontWeight:"400",fontSize:18,color:"red"}}>{status}</Text>
              </View>
            }
            
          </View>
          )
        })}
      </View>
    </View>
  )
}

export default marks

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