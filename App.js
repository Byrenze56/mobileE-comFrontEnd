import * as React from 'react';
import { Text, View, SafeAreaView, Image, TouchableOpacity, ScrolllView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
  
import{ createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';





function CustomHeader({ title, isHome, navigation }){
  return (
        <View style={{ flexDirection: 'row', height:50 }}>
       {
        isHome ?
           <View style={{ flex:1, justifyContent: 'center' }}>
           <Image style={{ width:30, height: 30, marginLeft: 5 }}
             source={require('./assets/money-bag.png')}
             resizeMode='contain'
           />
           </View>
            :  
           <TouchableOpacity style={{ flexDirection:'row', alignItem:'center' }}
             onPress={() => navigation.goBack()}
           >
           <Image style={{ width:20, height:20, marginLeft:5 }}
             source={require('./assets/money-bag.png')}
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

function HomeScreen({ navigation }){
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CustomHeader title="Home" isHome={true} navigation={navigation} />
        <View style={{ flex:1, justifyContent:'center', alignItems: 'center' }}>
        <Text>Home</Text>
          <TouchableOpacity
           style={{ marginTop:20 }}
           onPress={() => navigation.navigate('HomeDetail')}
          >
        <Text>Go home detail</Text>
          </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}

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

function SettingsScreen({ navigation }){
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CustomHeader title="Setting" isHome={true} />
      <View style={{ flex:1, justifyContent:'center', alignItems: 'center' }}>
        <Text>Home</Text>
         <TouchableOpacity
           style={{ marginTop:20 }}
           onPress={() => navigation.navigate('settingDetail')}
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

function ShopScreen({ navigation }){
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CustomHeader title="Shop screen" navigation={navigation} />
      <View style={{ flex:1, justifyContent:'center', alignItems: 'center' }}>
          <Text> shop</Text>
      </View>
    </SafeAreaView>
  )
}

function ShopItem({ navigation }){
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CustomHeader title="Setting detail" navigation={navigation} />
      <View style={{ flex:1, justifyContent:'center', alignItems: 'center' }}>
          <Text> shop item</Text>
      </View>
    </SafeAreaView>
  )
}
function OrderDetails({ navigation }){
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CustomHeader title="Order details" navigation={navigation} />
      <View style={{ flex:1, justifyContent:'center', alignItems: 'center' }}>
          <Text> order details</Text>
      </View>
    </SafeAreaView>
  )
}

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

function NotificationsScreen({ navigation }){
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CustomHeader title="Notifications" navigation={navigation} />
      <View style={{ flex:1, justifyContent:'center', alignItems: 'center' }}>
          <Text>Notifications</Text>
      </View>
    </SafeAreaView>
  )
}

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

const Tab = createBottomTabNavigator();

const navOptionHandler = () => {
  headerShown: false
}

const StackHome = createStackNavigator();

function HomeStack() {
  return (
    <StackHome.Navigator initialRouteName="Home">
       <StackHome.Screen name="Home" component={HomeScreen} options={navOptionHandler} />
       <StackHome.Screen name="HomeDetail" component={HomeScreenDetail} options={navOptionHandler} />
    </StackHome.Navigator>

  )
}

const StackSetting = createStackNavigator();

function SettingStack() {
  return (
    <StackSetting.Navigator initialRouteName="Setting">
       <StackSetting.Screen name="Setting" component={SettingsScreen} options={navOptionHandler}/>
       <StackSetting.Screen name="SettingDetail" component={SettingsScreenDetail} options={navOptionHandler} />
    </StackSetting.Navigator>

  )
}

const StackShop = createStackNavigator();

function ShopStack() {
  return (
    <StackShop.Navigator initialRouteName="Shop">
      <StackShop.Screen name="Shop" component={ShopScreen} />
      <StackShop.Screen name="ShopItem" component={ShopItem} />
      <StackShop.Screen name="OrderDetails" component={OrderDetails}/>
    </StackShop.Navigator>
  )
}

const StackVideo = createStackNavigator();

function VideoStack() {
  return (
    <StackVideo.Navigator initialRouteName="Video">
      <StackShop.Screen name="Video" component={VideoScreen} />
      <StackShop.Screen name="VideoEdit" component={VideoEdit} />
    </StackVideo.Navigator>
  )
}

const StackNotifications = createStackNavigator();

function NotificationsStack() {
  return (
    <StackNotifications.Navigator initialRouteName="Notifications">
      <StackNotifications.Screen name="Notifications" component={NotificationsScreen} />
      <StackNotifications.Screen name="Replys" component={ReplyScreen} />
    </StackNotifications.Navigator>
  )
}

 function App(){
  return (
      <NavigationContainer>
        <Tab.Navigator 
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? require('./assets/house.png')
                : require('./assets/home.png');
            } else if (route.name === 'Settings') {
              iconName = focused ? 
              require('./assets/controls.png')
              : require('./assets/money-bag.png');
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
      </NavigationContainer>
  )}

  export default App;

  // const App = createAppContainer(StackNav);

  // export default () => {
  //   return(
  //     <Provider>
  //        <App/>
  //     </Provider>
     
  //   )
  // }