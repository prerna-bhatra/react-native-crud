// import { StatusBar } from 'expo-status-bar';
import React ,{useState} from 'react';
import { StyleSheet, Text, View ,StatusBar, TextInput,TouchableOpacity ,KeyboardAvoidingView} from 'react-native';
import { Button } from 'react-native-paper';


export default function SignUpScreen(props) {
  
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');

  const sendCred=()=>
  {
    console.log(email,password)
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
});
