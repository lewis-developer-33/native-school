import { View,Text,TextInput, Pressable,StyleSheet } from "react-native"
import { useState } from "react"
import { router,Link } from 'expo-router';


const register = () => {
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
    router.push("/student-sign")
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
        <Text style={{
          fontWeight:"bold",
          fontSize:28
        }}>Register</Text>
        <View
        style={{
          display:"flex",
          gap:10,
          marginVertical:20
        }}
        >
          <TextInput              
              placeholder="First Name"
              onChangeText={(e) =>setFname(e)}
              style={styles.input}
              inputMode="text"
          />
          <TextInput              
              placeholder="Last Name"
              onChangeText={(e) => setLname(e) }
              style={styles.input}
              inputMode="text"
          />
          <TextInput              
              placeholder="Username"
              onChangeText={(e) => setUsername(e) }
              style={styles.input}
              inputMode="text"
          />
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
          >Register</Text>
        </Pressable>
        <View
        style={{
          display:"flex",
          flexDirection:"column",
          gap:4,
          marginTop:20

        }}
        >
          
          <Pressable
          onPress={() => router.navigate('/student')}
          >
          <Text style={{fontWeight:"bold"}}>Already have an account? 
            <Text style={{color:'orange'}}>Sign up</Text>
          </Text>
          </Pressable>
          
          <Pressable
          onPress={() => router.navigate('/student')}
          >
            <Text style={{fontWeight:"bold"}}>Are you a teacher? <Text style={{color:'orange'}}>Click Here</Text></Text>
          </Pressable>
        </View>
      </View>
    </View>
  )
}

export default register

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