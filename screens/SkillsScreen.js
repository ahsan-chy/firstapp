import React from 'react';
import {SafeAreaView, TouchableOpacity, Text, View, Image, StyleSheet, ScrollView} from 'react-native';
import logo from '../assets/Logo.png'

const SkillsScreen = (props) => {

    return(
        <ScrollView>
        <SafeAreaView style={styles.container}>
            
            <View style={styles.nav}>
                <Image source={logo} style={styles.logos} />
                
                <Text style={styles.name}>Ahsan Iqbal</Text>
                <Text style={styles.title}>React Js Developer</Text>
            </View>

            <View style={styles.head1} >
            <Text style={styles.edu}>Technical Skills:</Text>
            
            <View style={styles.row1}>
            <View style={styles.btn}>
                <Text style={{color:"#565656"}}>HTML, CSS</Text>
            </View>
            <View style={styles.btn}>
                <Text style={{color:"#565656"}}>React JS</Text>
            </View>
            <View style={styles.btn}>
                <Text style={{color:"#565656"}}>Photoshop</Text>
            </View>
            </View>
            <View style={styles.row2}>
            <View style={styles.btn}>
                <Text style={{color:"#565656"}}>My SQL</Text>
            </View>
            <View style={styles.btn}>
                <Text style={{color:"#565656"}}>Node JS</Text>
            </View>
            <View style={styles.btn}>
                <Text style={{color:"#565656"}}>Mongo DB</Text>
            </View>
            </View>
            </View>

            <View style={styles.head2} >
            <Text style={styles.edu}>Soft Skills:</Text>
            
            <View style={styles.row1}>
            <View style={styles.btn}>
                <Text style={{color:"#565656"}}>Critical Thinking</Text>
            </View>
            <View style={styles.btn}>
                <Text style={{color:"#565656"}}>Communication</Text>
            </View>
            </View>
            <View style={styles.row2}>
            <View style={styles.btn}>
                <Text style={{color:"#565656"}}>Problem Solving</Text>
            </View>
            <View style={styles.btn}>
                <Text style={{color:"#565656"}}>Enthusiasms</Text>
            </View>
            
            </View>
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
      },
      nav:{
        flex:1, 
        alignItems:'center', 
        justifyContent: 'center'
      },
      logos:{
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
      edu:{
        color:'#20b2aa', 
        padding: 15, 
        fontSize:20, 
        fontWeight:'bold', 
        textDecorationLine:'underline'
    },
    head1:{
      marginLeft:20, 
      marginRight:20, 
      marginTop:20
    },
    head2:{
        marginLeft:20, 
        marginRight:20, 
        marginTop:20
      },
    row1:{
        flex:1, 
        flexDirection:'row', 
        justifyContent:'center', 
        marginTop:5, 
      },
      row2:{
        flex:1, 
        flexDirection:'row', 
        justifyContent:'center', 
        marginTop:20,
      },
      button: {
        flex:1,
      alignItems: "center",
      marginLeft:'auto',
      marginRight:'auto',
      backgroundColor: "#20b2aa",
      padding: 10,
      marginBottom:20,
      marginTop:50,
      width:'30%'
    },
    btn:{
        marginLeft: 6,
        marginRight: 6,
        backgroundColor:'#fff',
        paddingLeft:15,
        paddingRight:15,
        paddingTop:5,
        paddingBottom:6,
        borderWidth: 1,
        borderRadius:2,
        borderColor: "#E7E9EB",
        flex:1
      }

})


export default SkillsScreen;

