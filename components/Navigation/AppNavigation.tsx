import  React from "react";
import { View,Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from "../Screen/Home";
import Payment from "../Screen/Payment";
import Vehicle from "../Screen/Vehicle";
import Setting from "../Screen/Setting";
import Icon from 'react-native-vector-icons/AntDesign'
import Icon1 from 'react-native-vector-icons/MaterialIcons'
import Icon2 from 'react-native-vector-icons/FontAwesome5'
const Tab = createBottomTabNavigator();
 const AppNavigation = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator >
                <Tab.Screen name="Home" component={Home} options={{
                    tabBarIcon:({focused}) => (
                        <View style={{
                            alignItems:'center', justifyContent:'center'
                        }}>
                            <Image source={require('../image/home.png')} 
                                style={{width:30,height:30, tintColor:focused? '#e32f45' : '#748c94'}} resizeMode='contain' 
                            />
                        
                        </View>        
                    ),
                    headerShown:false
                }}/>
                <Tab.Screen name="Payment" component={Payment} options={{
                    tabBarIcon:({focused}) => (
                        <View style={{
                            alignItems:'center', justifyContent:'center'
                        }}>
                            <Image source={require('../image/payment.png')} 
                                style={{width:30,height:30, tintColor:focused? '#e32f45' : '#748c94'}} resizeMode='contain' 
                            />    
                        </View>
                    ),
                    headerShown:false
                }}/>
                <Tab.Screen name="Vehicle" component={Vehicle} options={{
                    tabBarIcon:({focused}) => (
                        <View style={{
                            alignItems:'center', justifyContent:'center'
                        }}>
                            <Image source={require('../image/vehicle.png')} 
                                style={{width:30,height:30, tintColor:focused? '#e32f45' : '#748c94'}} resizeMode='contain' 
                            />    
                        </View>
                    ),
                    headerShown:false
                }}/>
                <Tab.Screen name="Setting" component={Setting} options={{
                    tabBarIcon:({focused}) => (
                        <View style={{
                            alignItems:'center', justifyContent:'center'
                        }}>
                            <Image source={require('../image/setting.png')} 
                                style={{width:30,height:30, tintColor:focused? '#e32f45' : '#748c94'}} resizeMode='contain' 
                            />    
                        </View>
                    ),
                    headerShown:false
                
                }}/>
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigation

