// import { StatusBar } from 'expo-status-bar';
import React ,{useState}from 'react';
import { StyleSheet, Text, View ,StatusBar, TextInput,TouchableOpacity ,KeyboardAvoidingView} from 'react-native';
import { Button } from 'react-native-paper';

export default function LoginScreen(props) {
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [loading,setLoading]=useState('');

  
  const sendCred=()=>
  {
    // console.log(email,password)
    setLoading(true)

    fetch("http://localhost:8000/api/signin",
    {
      method:"POST",
      headers:{
        mode: 'no-cors',
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        "email":email,
        "password":password
      })

    })
    .then(res=>res.json())
    .then(data=>{
      setLoading(false)
      console.log(data)
      // alert("SUCCESSFULLY SIGNUP,Please Login ")
      // props.navigation.navigate("Login")

    })
  }


  return (
    <KeyboardAvoidingView behavior="position">
      <View style={styles.container}>
      <Text style={{marginLeft:18,fontSize:35,color:"grey"}}>Welcome to </Text>
        <Text style={styles.row}>React Native CRUD</Text>
        <Text style={{marginLeft:18,fontSize:30,color:"grey"}}>Login </Text>
        {/* <Text >Email</Text> */}
        <TextInput
         style={styles.input}
        placeholder=" Email"
        value={email}
        onChangeText={(text)=>setEmail(text)}

      />
      <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={(text)=>setPassword(text)}

          />
        <Button
          onPress={() => sendCred()}
          >
           Login
           </Button>

          <TouchableOpacity>
          <Text 
             onPress={()=>props.navigation.navigate("SignUp")}
          >Not having account ?</Text>
          </TouchableOpacity>
      </View>
      </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    padding: 4,
    borderBottomColor: "blue",
    borderBottomWidth: 10
  },
  input: {
    paddingLeft:10,
    height: 30,
    margin: 12,
    borderWidth: 1,
  },
});
