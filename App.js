import * as React from 'react';
import { Text, View, SafeAreaView, Image, TouchableOpacity, ScrolllView } from 'react-native';
//Navigation-Imports--------------------------------------------------------------------------
import { NavigationContainer } from '@react-navigation/native'; 
import{ createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
//Screen-Imports-------------------------------------------------------------------------------------
import  IndexScreen  from './src/screens/IndexScreen';
import ShowScreen from './src/screens/blogscreens/ShowScreen';
import CreateScreen from './src/screens/blogscreens/CreateScreen';
import EditScreen from './src/screens/blogscreens/EditScreen';
import { Provider } from './src/components/context/BlogContext';
import CoverScreenComponent from './src/screens/coverscreen/coverScreenComponent';
import ShopCateogoriesComponent from './src/screens/ShopScreens/ShopCateogoriesScreen';
import SelectedListComponent from './src/screens/ShopScreens/SelectedListScreen';
import ItemDetailsComponent from './src/screens/ShopScreens/ItemDetailsScreen';
import CartComponent from './src/screens/ShopScreens/CartScreen';
//Custom-Functions---------------------------------------------------------------------------------

function CustomHeader({ title, isHome, navigation }){
  return (
        <View style={{ flexDirection: 'row', height:50 }}>
       {
        isHome ?
           <View style={{ flex:1, justifyContent: 'center' }}>
           <Image style={{ width:30, height: 30, marginLeft: 5 }}
             source={require('./assets/left-chevron.png')}
             resizeMode='contain'
           />
           </View>
            :  
           <TouchableOpacity style={{ flexDirection:'row', alignItem:'center' }}
             onPress={() => navigation.goBack()}
           >
           <Image style={{ width:20, height:20, marginLeft:5 }}
             source={require('./assets/left-chevron.png')}
             resizeMode='contain'
           />
           <Text>Back</Text>
           </TouchableOpacity>
       }
           <View style={{ flex: 1.5, justifyContent: 'center' }}>
           <Text style={{ textAlign: 'center' }}>{title}</Text>
           </View>
           <View style={{ flex:1 }}></View>
       </View>
  )
}

const navOptionHandler = () => {
  headerShown: false
}


//Temp-Home-Screens---------------------------------------------------------

// function HomeScreen({ navigation }){
//   return (
//     <SafeAreaView style={{ flex: 1 }}>
//       <CustomHeader title="Home" isHome={true} navigation={navigation} />
//         <View style={{ flex:1, justifyContent:'center', alignItems: 'center' }}>
//         <Text>Home</Text>
//           <TouchableOpacity
//            style={{ marginTop:20 }}
//            onPress={() => navigation.navigate('HomeDetail')}
//           >
//         <Text>Go home detail</Text>
//           </TouchableOpacity>
//         </View>
//     </SafeAreaView>
//   )
// }

function HomeScreenDetail({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CustomHeader title="Home Detail" navigation={navigation} />
      <View style={{ flex:1, justifyContent:'center', alignItems: 'center' }}>
        <Text>Home Details</Text>  
      </View>
    </SafeAreaView>
  );
}

//Temp-Settings-Screens---------------------------------------------------------

function SettingsScreen({ navigation }){
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CustomHeader title="Setting" isHome={true} />
      <View style={{ flex:1, justifyContent:'center', alignItems: 'center' }}>
        <Text>Home</Text>
         <TouchableOpacity
           style={{ marginTop:20 }}
           onPress={() => navigation.navigate('SettingDetail')}
         >
          <Text>Go setting detail</Text>
         </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

function SettingsScreenDetail({ navigation }){
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CustomHeader title="Setting detail" navigation={navigation} />
      <View style={{ flex:1, justifyContent:'center', alignItems: 'center' }}>
          <Text> settings detail</Text>
      </View>
    </SafeAreaView>
  )
}

//Temp-Shop-Screens---------------------------------------------------------



function ShopItem({ navigation }){
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CustomHeader title="SettingDetail" navigation={navigation} />
      <View style={{ flex:1, justifyContent:'center', alignItems: 'center' }}>
      <TouchableOpacity
           style={{ marginTop:20 }}
           onPress={() => navigation.navigate('OrderDetails')}
         >
           <Text> shop</Text>
         </TouchableOpacity> 
      </View>
    </SafeAreaView>
  )
}
function OrderDetails({ navigation }){
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CustomHeader title="Order details" navigation={navigation} />
      <View style={{ flex:1, justifyContent:'center', alignItems: 'center' }}>
      <TouchableOpacity
           style={{ marginTop:20 }}
           onPress={() => navigation.navigate('SettingDetail')}
         >
           <Text> shop</Text>
         </TouchableOpacity> 
      </View>
    </SafeAreaView>
  )
}

//Temp-Video-Screens---------------------------------------------------------

function VideoScreen({ navigation }){
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CustomHeader title="Video" navigation={navigation} />
      <View style={{ flex:1, justifyContent:'center', alignItems: 'center' }}>
          <Text>Video Screen</Text>
      </View>
    </SafeAreaView>
  )
}

function VideoEdit({ navigation }){
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CustomHeader title="Video Edit" navigation={navigation} />
      <View style={{ flex:1, justifyContent:'center', alignItems: 'center' }}>
          <Text> Edit video</Text>
      </View>
    </SafeAreaView>
  )
}

//Temp-Navigations-Screens---------------------------------------------------------

function ReplyScreen({ navigation }){
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CustomHeader title="Replys" navigation={navigation} />
      <View style={{ flex:1, justifyContent:'center', alignItems: 'center' }}>
          <Text> Replys</Text>
      </View>
    </SafeAreaView>
  )
}


//Home-Stack-------------------------------------------------------------------------------------

const StackHome = createStackNavigator();

function HomeStack() {
  return (
    <StackHome.Navigator initialRouteName="Home">
       <StackHome.Screen name="Home" component={CoverScreenComponent} options={navOptionHandler} />
       <StackHome.Screen name="HomeDetail" component={HomeScreenDetail} options={navOptionHandler} />
    </StackHome.Navigator>

  )
}

//Settings-Stack-----------------------------------------------------------------------

const StackSetting = createStackNavigator();

function SettingStack() {
  return (
    <StackSetting.Navigator initialRouteName="Setting">
       <StackSetting.Screen name="Setting" component={SettingsScreen} options={navOptionHandler}/>
       <StackSetting.Screen name="SettingDetail" component={SettingsScreenDetail} options={navOptionHandler} />
    </StackSetting.Navigator>

  )
}

//Shop-Stack-------------------------------------------------------------------------

const StackShop = createStackNavigator();

function ShopStack() {
  return (
    <StackShop.Navigator initialRouteName="Shop">
      <StackShop.Screen name="Shop" component={ShopCateogoriesComponent} />
      <StackShop.Screen name="Selected" component={SelectedListComponent} />
      <StackShop.Screen name="Details" component={ItemDetailsComponent}/>
      <StackShop.Screen name="Cart" component={CartComponent} />
    </StackShop.Navigator>
  )
}

//Video-Stack-----------------------------------------------------------------------

const StackVideo = createStackNavigator();

function VideoStack() {
  return (
    <StackVideo.Navigator initialRouteName="Video">
      <StackShop.Screen name="Video" component={VideoScreen} />
      <StackShop.Screen name="VideoEdit" component={VideoEdit} />
    </StackVideo.Navigator>
  )
}

//Notifications-Stack-----------------------------------------------------------------

const StackNotifications = createStackNavigator();

function NotificationsStack() {
  return (
    <StackNotifications.Navigator initialRouteName="Notifications">
      <StackNotifications.Screen name="Notifications" component={IndexScreen} />
      <StackNotifications.Screen name="Create" component={CreateScreen} />
      <StackNotifications.Screen name="Edit" component={EditScreen} />
      <StackNotifications.Screen name="Show" component={ShowScreen} />
    </StackNotifications.Navigator>
  )
}
//Bottom-Tabs---------------------------------------------------------------------------

const Tab = createBottomTabNavigator();

 const App=()=>{
  return (

      <NavigationContainer>
      <Provider>
        <Tab.Navigator 
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? require('./assets/house.png')
                : require('./assets/home.png');
            }  if (route.name === 'Settings') {
              iconName = focused ? 
              require('./assets/controls.png')
              : require('./assets/controls.png');
            } if (route.name === 'Shop') {
              iconName = focused ? 
              require('./assets/asset-management.png')
              : require('./assets/carnival-mask.png');
            }if (route.name === 'Notifications') {
              iconName = focused ? 
              require('./assets/speech-bubble.png')
              : require('./assets/notifications-bell-button.png');
            } if (route.name === 'Video') {
              iconName = focused ? 
              require('./assets/photo-camera.png')
              : require('./assets/photo-camera.png');
            }

            // You can return any component that you like here!
            return <Image source={iconName} style={{ width: 20, height:20 }}
            resizeMode="contain" />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}>
          <Tab.Screen name="Home" component={HomeStack} />
          <Tab.Screen name="Shop" component={ShopStack} />
          <Tab.Screen name="Video" component={VideoStack} />
          <Tab.Screen name="Notifications" component={NotificationsStack} />
          <Tab.Screen name="Settings" component={SettingStack} />
        </Tab.Navigator>

        </Provider>
      </NavigationContainer>
  )}

 
export default () => {
  return(
    <Provider>
      <App/>
    </Provider>
  )
}