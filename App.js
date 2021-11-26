import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import  Landingpage from './screens/landingpage';
import {  Feather, FontAwesome } from "@expo/vector-icons";

export default function App() {
  return (
   <Landingpage>
     <FontAwesome name="battery-4" size={24} color="white"  />
    <Feather name="x"  size={24} color="white"   />
    </Landingpage>
    
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    
    opacity: 0.5,
  },
     
    
});

