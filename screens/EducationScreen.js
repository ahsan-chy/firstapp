import React from 'react';
import {SafeAreaView, TouchableOpacity, Text, View, Button, TextInput, Alert, Image, StyleSheet, ScrollView} from 'react-native';
import logo from '../assets/Logo.png'
import logo0 from './Education/school.png';
import logo1 from './Education/university.png';
import logo2 from './Education/graduation.png';

const Separator = () => (
    <View style={styles.separator} />
  );
const EducationScreen = (props) => {

    return(
        <ScrollView>
        <SafeAreaView style={styles.container}>
            
            <View style={styles.nav}>
                <Image source={logo} style={styles.logos} />
                
                <Text style={styles.name}>Ahsan Iqbal</Text>
                <Text style={styles.title}>React Js Developer</Text>
            </View>
            
            
            <View>
            <Text style={styles.edu}>Education:</Text>
            
            <View style={styles.row1}> 

                <Image source={logo0}  style={styles.icon}  />
                <Text style={styles.icontext}>Matric</Text>
                <Text style={styles.icontext}>Technical School JBD</Text>
                <Text style={styles.icontextr}>2014</Text>
            </View>
            <Separator />

            <View style={styles.row1}> 
                <Image source={logo1} style={styles.icon} />
                <Text style={styles.icontext}>Inter (I.C.S)</Text>
                <Text style={styles.icontext}>Govt.Colg JBD</Text>
                <Text style={styles.icontextr}>2016</Text>
            </View>
            <Separator />

            <View style={styles.row1}> 
                <Image source={logo2} style={styles.icon} />
                <Text style={styles.icontext}>BSCS</Text>
                <Text style={styles.icontext}>U.O.S</Text>
                <Text style={styles.icontextr}>2021</Text>
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
      row1:{
        flex:1,  
        flexDirection: 'row', 
        padding:15
      },
      button: {
          flex:1,
        alignItems: "center",
        marginLeft:'auto',
        marginRight:'auto',
        backgroundColor: "#20b2aa",
        padding: 10,
        marginBottom:30,
        marginTop:30,
        width:'30%'
         
      },
      icon: {
        width: 40, 
        height: 40
      },
      icontext: {
        flex:1, 
        color:"#20b2aa", 
        padding: 10,
      },
      icontextr: {
        flex:1, 
        color:"#20b2aa", 
        padding: 10,
        textAlign:'right'
      },
      
      separator: {
        marginVertical: 5,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
      },
})

export default EducationScreen;

