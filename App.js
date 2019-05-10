import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Home from './src/components/Home';
import Explore from './src/components/Explore';
import Likes from './src/components/Likes';
import Profile from './src/components/Profile';

import { Router, Scene, Tabs } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';


const iconn = (focused, name) => { 
   return <Icon color={focused ? 'red' : 'black'} name={name} size={name == 'plus' ? 35 : 25} /> 
}

export default class App extends React.Component {
  render() {
    return (
      <Router>
         <Tabs key="main" tabBarStyle={styles.tabBar} showLabel={false}>
                      <Scene  key="home"
                              title="Home"
                              icon={(icon) => iconn(icon.focused, 'home')}
                              component={Home}
                              initial
                      />
                      <Scene  key="explore"
                              title="Keşfet"
                              icon={(icon) => iconn(icon.focused, 'search')}
                              component={Explore}
                      />
                        <Scene  key="plus"
                          icon={(icon) => iconn(icon.focused, 'plus')}
                            title={'Beğeniler'}
                            
                            component={() => {
                              console.log('Olalala');
                              return null
                            }
                            } 
                            tabBarOnPress={() => console.log('asasd')}
                            />    

                    <Scene  key="likes"
                          icon={(icon) =>iconn(icon.focused, 'heart')}
                            
                            title={'Beğeniler'}
                            component={Likes} />


                    <Scene key="profile"
                          icon={(icon) => iconn(icon.focused, 'user')}
                          title={'Profil'}
                          component={Profile} />
              </Tabs>
      </Router>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabBar: {
    borderTopColor: 'darkgrey',
    borderTopWidth: 0.3,
    backgroundColor: 'ghostwhite',
  },
  navigationBarStyle: {
    backgroundColor: 'red',
  },
  navigationBarTitleStyle: {
    color:'white',
  },
});
