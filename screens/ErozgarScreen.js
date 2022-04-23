import React from 'react';
import {SafeAreaView, TouchableOpacity, Text, View, Image, StyleSheet, ScrollView} from 'react-native';
import logo from './e-rozgaar-logo.jpg'

const ErozgarScreen = (props) => {

    return( 
        <ScrollView>
        <SafeAreaView  style={styles.container}>

        
        <View style={styles.nav}>
            <Image source={logo} style={styles.logos} />
        </View>            
        <View style={styles.head1} >
            <Text style={styles.title}>E-Rozgar Experience</Text>
            <Text style={styles.para}>It was one of my great Experiences in learning and exploring things. 
            I am really excited for comming classes to learn new technologies.{"\n"}
            I really appriciate E-Rozgar team to launch new courses for out Youth. Hoefully In future
            we will see emerging technologies and startups in Pakistan. Thanks.</Text>
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
        backgroundColor:'white',
        paddingTop:40,
        // justifyContent:'center',
        // alignItems:'center'
      },
      nav:{
        flex:1, 
        justifyContent:'center',
        alignItems:'center'
      },
      logos:{
        width: '50%', 
        height: 140
      },
      head1:{
        marginLeft:20, 
        marginRight:20, 
        marginTop:20
      },
      title: {
        color:'#20b2aa', 
        padding: 15, 
        fontSize:22, 
        fontWeight:'bold', 
        textDecorationLine:'underline',
      },
      para:{
        fontSize: 14,
        paddingLeft: 15,
        lineHeight:25 
      },
    button: {
        flex:1,
      alignItems: "center",
      marginLeft:'auto',
      marginRight:'auto',
      backgroundColor: "#20b2aa",
      padding: 10,
      marginBottom:170,
      marginTop:50,
      width:'30%'
    },
})

export default ErozgarScreen;

