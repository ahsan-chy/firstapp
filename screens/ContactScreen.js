import React from 'react';
import {SafeAreaView, TouchableOpacity, Text,View, Button, TextInput, Alert, StyleSheet, ScrollView, ImageBackground} from 'react-native';
import { useState } from 'react';
// import image from '../../firstapp/assets/contact.jpg'

const ContactScreen = (props) => {
    const [Fname,setFname] = useState(null);
    const [Lname, setLname] = useState(null);
    const [Email, setEmail] = useState(null);
    const [age,setage] = useState(null)
    const [Gender, setGender] = useState(null);
    const [Password, setPassword] = useState(null);

    return(
        <ScrollView>
         <SafeAreaView style={styles.container}>

         {/* <ImageBackground source={image} resizeMode="cover" style={{width:'100%',}}> */}
       
        <Text style={styles.head}> Contact Us </Text>
            <TextInput 
              style={styles.inputvalue}
              placeholder="First Name"
              onChangeText={(f)=> 
                setFname(f)}
            />
            <TextInput
              style={styles.inputvalue}
              placeholder="Last Name"
              onChangeText={(l) =>
                setLname (l)
            }/>
            <TextInput
              style={styles.inputvalue}
              placeholder="Email"
              onChangeText={(l) =>
                setEmail (l)
            }/>
            <TextInput
              style={styles.inputvalue}
              placeholder="Age"
              onChangeText={(a) =>
                setage(a)
            }/>
            <TextInput
              style={styles.inputvalue}
              placeholder="Gender"
              onChangeText={(l) =>
                setGender (l)
            }/>
            <TextInput
              style={styles.inputvalue}
              placeholder="Password"
              onChangeText={(l) =>
                setPassword (l)
            }/>
            
            <View
              style={{
                width:'90%',
                paddingBottom:20
              }}
            >          
            <Text style={styles.head2}>Display:  </Text>
            <Text style={styles.txt}>First Name: {Fname}</Text>
            <Text style={styles.txt}>Last Name: {Lname}</Text>
            <Text style={styles.txt}>Email: {Email}</Text> 
            <Text style={styles.txt}>age: {age}</Text>
            <Text style={styles.txt}>Gender: {Gender}</Text>
            <Text style={styles.txt}>Password: {Password}</Text>       
            </View>

            <TouchableOpacity
             style={styles.button}
             onPress={() => {
              props.navigation.navigate('Home')
             }}
             >
            <Text style={{color:"#ffffff"}}>Back to Home</Text>
            </TouchableOpacity>

            </SafeAreaView>
            </ScrollView>
    )

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop:1,
      backgroundColor:'white',
      alignItems:'center',
      justifyContent: 'center',
    },
   head: {
    fontSize:30,
    textAlign:'center',
    color:`#20b2aa`,
    fontWeight:'bold',
    padding: 12,
   },
   head2: {
    fontSize:20,
    color:`#20b2aa`,
    fontWeight:'bold',
    padding: 10,
    
   },
   txt: {
    fontSize:15,
    paddingLeft:15,
    lineHeight: 30,
    color: '#565656'
   },

    inputvalue: {
        width:'93%', 
        height: 40, 
        backgroundColor:'white',
        margin: 12,
        borderWidth: 1,
        padding: 10,
        color:'black',
        borderRadius:4,
        borderWidth: 1,
        borderColor: "#565656",
      },
      button: {
        alignItems: "center",
        backgroundColor: "#20b2aa",
        padding: 10,
        marginBottom:50,
        
      },
    
})

export default ContactScreen;

