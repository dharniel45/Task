import React from 'react';
import { View, ImageBackground, Text, StyleSheet, TouchableHighlight, Image, TouchableOpacity } from 'react-native';
import { Feather, Entypo, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';

const landingpage = props => {
       return (
        
           <ImageBackground 
              style={styles.img}
              blurRadius={1}
              source={{uri:
                    "https://images.unsplash.com/photo-1527201987695-67c06571957e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHw%3D&w=1000&q=80"
              }}>
                  <Text style={styles.room} size={15} color="white">9:41</Text>
                  <FontAwesome name="wifi" size={15} color="white" style={[styles.dey]}/>
                  <FontAwesome name="battery-4" size={15} color="white" style={[styles.there]}/>
                  <MaterialCommunityIcons name="network-strength-4" size={15} color="white" style={[styles.form]}/>
                  <Feather name="x" size={32} color="white" style={[styles.men]}/>
                  

                  <TouchableHighlight
                              style={[styles.profileImgContainer, { borderColor: 'black', borderWidth: 1 }]} >
                                  <Image source={{ uri:"https://i.pinimg.com/474x/04/09/a5/0409a5ef84ed74b8cc64fab52c1e015e.jpg" }} style={styles.profileImg} />
                                  </TouchableHighlight>
                  <View
                style={styles.mon}>

                 <Text
                     style={styles.head}
                 > 
                  You can keep Neenna in the house?
                  </Text>

                  <Text
                     style={styles.tail}
                 > 
                  Vote the much you can to keep in the house
                  </Text>
              
              </View>

              <TouchableOpacity>
              <View style={styles.btn1}  > 
                 
                 <View
                style={styles.true}>
                  
                 <Text
                     style={styles.false}
                 > 
                  Choose Amount
                  </Text>

                  <Text
                     style={styles.yup}
                 > 
                  Select amount to choose the number of votes
                  </Text>

                  <Text
                     style={styles.jus}
                 > 
                  you would like to cast for Nnenna
                  </Text>
                  
                  <Text
                     style={styles.one}
                 > 
                  1000
                  </Text>

                  <Text
                     style={styles.two}
                 > 
                  VOTES
                  </Text>

                  <Feather name="minus" size={32} color="white" style={[styles.three]}/>
                  <Feather name="plus" size={32} color="white" style={[styles.four]}/>


                  </View>
              
               
               <TouchableOpacity>
               <View style={styles.five}> 
               <View style={styles.five1}>
                     <Text style={styles.five2}>₦750</Text>
               </View>
               
               </View>
               </TouchableOpacity>

               <TouchableOpacity>
               <View style={styles.six}> 
               <View style={styles.six1}>
                     <Text style={styles.six2}>₦2,500</Text>
               </View>
               
               </View>
               </TouchableOpacity>

               <TouchableOpacity>
               <View style={styles.seven}> 
               <View style={styles.seven1}>
                     <Text style={styles.seven2}>₦7,500</Text>
               </View>
               
               </View>
               </TouchableOpacity>

               <TouchableOpacity>
               <View style={styles.eight}> 
               <View style={styles.eight1}>
                     <Text style={styles.eight2}>Submit</Text>
               </View>
               
               </View>
               </TouchableOpacity>
                


            
              </View>
              </TouchableOpacity>

              
              </ImageBackground>
              
       )
}

const styles = StyleSheet.create({
    img: {
        flex: 1,
        backgroundColor: "black",
    },
    mon: {
         fontFamily: "Open Sans",
         position: "absolute",
         bottom: 635,
         
         marginLeft: 75,
        
         
          },
   head: {
       fontSize: 19,
       fontWeight: "bold",
       color: "white",
       
      
   },
   tail: {
       fontSize: 15,
       color: "white",
   },
   profileImgContainer: {
       marginLeft: 9,
       height: 50,
       width: 50,
       borderRadius: 35,
       bottom: 5,
   },
   profileImg: {
       height: 50,
       width: 50,
       borderRadius: 35,
   },
   men: {
       bottom: 20,
       marginLeft: 15,
   },
   btn1: {
        backgroundColor: "#00755E",
        opacity: 0.8,
        marginTop: "80%",
        fontFamily: "Roboto",
        
        height: 700,

        
   },
   true: {
        color: "white",
        fontFamily: "Open Sans",
        opacity: 100,
        
        
   },

   false: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    fontFamily: "Open Sans",
    marginLeft: 20,
    bottom: -45,
   },
   
   yup: {
    fontFamily: "Roboto",
    color: "white",
    bottom: -45,
    marginLeft: 20,
    
    fontSize: 15,

   },
   
   jus: {
    color: "white",
    fontFamily: "Roboto",
    bottom: -45,
    marginLeft: 20,
    
    fontSize: 15,
   },

   one: {
    fontWeight: "bold",
    color: "white",
    fontSize: 50,
    textAlign: "center",
    bottom: -60,
    letterSpacing: 0.2,
   },

   two: {
    fontWeight: "bold",
    fontSize: 18,
    color: "white",
    textAlign: "center",
    bottom: -56,
   },
    three: {
    bottom: 0,
    marginLeft: 40,
},
    four: {
    bottom: 35,
    marginLeft: 290,
},
  five: {
   bottom: -10,
   marginLeft: 30,
   fontFamily: "Roboto",
  },
  five1: {
    color: "white",
    borderColor: "white",
     borderWidth: 1,
     height: 40,
    width: 80,
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    borderRadius: 9,
      },
  five2: {
color: "white",
fontSize: 20,
fontWeight: "bold",
 fontFamily: "Roboto",
  },

  six: {
    bottom: 30,
    marginLeft: 135,
    fontFamily: "Roboto",
   },
   six1: {
     color: "white",
     borderColor: "white",
     borderWidth: 1,
     height: 40,
    width: 80,
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    borderRadius: 9,
       },
   six2: {
 color: "white",
 textAlign: "center",
 fontSize: 20,
 fontWeight: "bold",
 fontFamily: "Roboto",
   },
   seven: {
    bottom: 70,
    marginLeft: 240,
    fontFamily: "Roboto",
   },
   seven1: {
    color: "white",
    backgroundColor: "white",
    height: 40,
    width: 80,
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    borderRadius: 9,
       },
   seven2: {
 color: "black",
 fontSize: 20,
 fontWeight: "bold",
 fontFamily: "Roboto",
   },
   eight: {
    bottom: 60,
    alignItems: "center",
    fontFamily: "Roboto", 
   },
   eight1: {
     color: "white",
     backgroundColor: "#00FA9A",
     height: 50,
     width: 300,
     justifyContent: "center",
     textAlign: "center",
     alignItems: "center",
     borderRadius: 9,
       },
   eight2: {
 color: "white",
 textAlign: "center",
 fontWeight: "bold",
 fontFamily: "Roboto",
 fontSize: 30,
   },
 dey: {
    bottom: 0,
    marginLeft: 300,
 },
 there: {
    bottom: 15,
    marginLeft: 325,
 },
 form: {
    bottom: 30,
    marginLeft: 275,
 },
   room: {
    bottom: -20,
    marginLeft: 20,
    color: "white",
    fontWeight: "bold", 
   }
})


export default landingpage;