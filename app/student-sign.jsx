import { View,Text,TextInput, Pressable,StyleSheet } from "react-native"
import { useState } from "react"
import { FontAwesome5 } from '@expo/vector-icons';
import { router,Link } from 'expo-router';

const student = () => {
  const [fname,setFname] = useState('')
  const [lname,setLname] = useState('')
  const [username,setUsername] = useState('')
  const [email,setEmail] = useState('')
  const [pass,setPass] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const user = {
      fname,
      lname,
      username,
      email,
      pass
    }
    console.log(user)
    router.push("/tabs")
  }
  return (
    <View
    style={{
      flex:1,
      display:"flex",
      flexDirection:"column",
      alignItems:"center",
      justifyContent:"center"
    }}
    >
      <View
      style={{
        paddingHorizontal:20,
        paddingVertical:20,
        borderRadius:5,
        width:"80%",
        display:'flex',
        flexDirection:"column",
        
      }}
      >
        <View style={{
          borderWidth:2,
          width:50,
          height:50,
          borderRadius:12,
          alignItems:"center",
          justifyContent:"center",
          marginBottom:4
        }}>
          <FontAwesome5 name="school" size={24} color="black" />
        </View>
        <Text style={{
          fontWeight:"bold",
          fontSize:28
        }}>Sign in as student</Text>
        <View
        style={{
          display:"flex",
          gap:10,
          marginVertical:20
        }}
        >
          
          <TextInput              
              placeholder="Email"
              onChangeText={(e) => setEmail(e) }
              style={styles.input}
              inputMode="email"
          />
          <TextInput              
              placeholder="Password"
              onChangeText={(e) => setPass(e) }
              style={styles.input}
              inputMode="text"
          />
          
          
        </View>
        <Pressable 
        style={{
          backgroundColor:'orange',
          paddingVertical:10,
          borderRadius:8,
          width:"40%",
          display:"flex",
          alignItems:"center",
          justifyContent:"center",
        }}
        onPress={handleSubmit}
        >
          <Text
          style={{
            color:"white",
            fontWeight:"bold",
          }}
          >Sign in</Text>
        </Pressable>
        <View
        style={{
          display:"flex",
          flexDirection:"column",
          gap:4,
          marginTop:20

        }}
        >
          <Text style={{fontWeight:"bold"}}>Don't have an account? <Text style={{color:'orange'}}>Register</Text></Text>
          <Text style={{fontWeight:"bold"}}>Are you a teacher? <Text style={{color:'orange'}}>Click Here</Text></Text>
        </View>
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