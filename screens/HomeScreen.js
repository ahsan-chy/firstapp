import React from 'react';
import {SafeAreaView, TouchableOpacity, Text,View, Image, backgroundColor,  Button, TextInput, Alert, StyleSheet, ScrollView, ImageBackground} from 'react-native';
import logo from '../assets/Logo.png'

const HomeScreen = (props) => {

    return(
        <ScrollView>
        <SafeAreaView style={styles.container}>
            
            <View style={styles.nav}>
                <Image source={logo} style={styles.log} />
                
                <Text style={styles.name}>Ahsan Iqbal</Text>
                <Text style={styles.title}>React Js Developer</Text>
            </View>

            <View style={styles.box}>
            <TouchableOpacity
             style={styles.button}
             onPress={() => {
                props.navigation.navigate('Education')
             }}
             >
            <Text style={{color:"#20b2aa"}}>Education</Text>
            </TouchableOpacity>
            
            <TouchableOpacity
             style={styles.button}
             onPress={() => {
                props.navigation.navigate('Skills')
             }}
             >
            <Text style={{color:"#20b2aa"}}>Skills</Text>
            </TouchableOpacity>
            
            <TouchableOpacity
             style={styles.button}
             onPress={() => {
                props.navigation.navigate('Erozgar')
             }}
             >
            <Text style={{color:"#20b2aa"}}>Erozgar</Text>
            </TouchableOpacity>

            <TouchableOpacity
             style={styles.button}
             onPress={() => {
                props.navigation.navigate('Contact')
             }}
             >
            <Text style={{color:"#20b2aa"}}>Contact Me</Text>
            </TouchableOpacity>
            </View>

            <View style={styles.fixToText}>
                <TouchableOpacity
                    style={styles.btn}
                    onPress={() => {
                        Alert.alert('Wait Please! We are working on Sign Up page')
                    }}
                    >
                    <Text style={{color:"#fff"}}>Sign Up</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.btn}
                    onPress={() => {
                        Alert.alert('Wait Please! We are working on Sign In page')
                    }}
                    >
                    <Text style={{color:"#fff"}}>Sign In</Text>
                </TouchableOpacity>
            </View>

        </SafeAreaView>
        </ScrollView>
    )

}
const styles = StyleSheet.create({
    container:{
        flex:1, 
        alignItems:'center', 
        justifyContent:'center',
        backgroundColor:'white',
        paddingTop:40,
        paddingBottom:50,

    },
    nav:{
      flex:1, 
      alignItems:'center', 
      justifyContent: 'center'
    },
    log:{
      width: 140, 
      height: 140
    },
    name:{
      color:'#ffa500', 
      padding: 10,
    },
    title: {
      color:"#20b2aa", 
      padding: 10,
    },
    box: {
        marginTop:20,
        width:'90%',
        flex:1,
        alignItems:'center'
    },
    button: {
        alignItems: "center",
        backgroundColor: "#Ffffff",
        padding: 10,
        marginTop:20,
        marginBottom:10,
        width:'90%',
        borderWidth: 1,
        borderRadius:4,
        borderColor: "#20b2aa",
      },

    fixToText: {
        flex:1,  
        flexDirection: 'row', 
        padding:15,
        marginTop:25
      },

    btn:{
        marginLeft: 10,
        marginRight: 10,
        backgroundColor:'#20b2aa',
        paddingLeft:15,
        paddingRight:15,
        paddingTop:5,
        paddingBottom:6,
        borderWidth: 1,
        borderRadius:2,
        borderColor: "#20b2aa",
      }

})

export default HomeScreen;

