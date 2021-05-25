// import { StatusBar } from 'expo-status-bar';
import React ,{useState} from 'react';
import { StyleSheet, Text, View ,StatusBar, TextInput,TouchableOpacity ,KeyboardAvoidingView} from 'react-native';
import { Button } from 'react-native-paper';


export default function SignUpScreen(props) {
  const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [loading,setLoading]=useState('');

  const sendCred=()=>
  {
    // console.log(email,password)
    setLoading(true)

    fetch("http://localhost:8000/api/signup",
    {
      method:"POST",
      headers:{
        mode: 'no-cors',
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        "name":name,
        "email":email,
        "password":password
      })

    })
    .then(res=>res.json())
    .then(data=>{
      // console.log(data);
      setLoading(false)
      alert("SUCCESSFULLY SIGNUP,Please Login ")
      props.navigation.navigate("Login")

    })
  }

  return (
    <KeyboardAvoidingView behavior="position">
      <View style={styles.container}>
        
        
      <Text style={{marginLeft:18,fontSize:35,color:"grey"}}>Welcome to </Text>
        <Text style={styles.row}>React Native CRUD</Text>
        <Text style={{marginLeft:18,fontSize:30,color:"grey"}}>Create Account</Text>
        {/* <Text >Email</Text> */}
        <TextInput
            style={styles.input}
            placeholder="name"
            value={name}
            onChangeText={(text)=>setName(text)}
          />
     

        <TextInput
         style={styles.input}
         value={email}
        placeholder=" Email"
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
           SignUp
           </Button>
           
           <Text style={styles.loading}>{loading?'Loading... ,Please Wait ':''}</Text>
          <TouchableOpacity>
          <Text 
          onPress={()=>props.navigation.navigate("Login")}
          >Already Have an account ?
          </Text>
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
  loading:
  {
    fontSize:40,
    color:'blue'
  }
});
