import { StyleSheet, View, TouchableOpacity, Text, } from 'react-native'
import React from 'react'
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { Drawer, } from 'react-native-paper';
import { Ionicons, MaterialIcons, AntDesign } from '@expo/vector-icons';

const DrawerContent = (props) => {

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>

        <View style={styles.drawerContent}>
          {/* Close Menu button  */}
          <TouchableOpacity onPress={() => props.navigation.closeDrawer()} style={{ alignSelf: 'flex-end', marginBottom: 10, marginTop: 10, marginRight: 20 }}>
            <AntDesign name="close" size={24} color="black" />
          </TouchableOpacity>

          {/* HOME  */}
          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              labelStyle={{ fontSize: 16, fontWeight: 'bold', color: '#000' }}
              label={'HOME'}
              onPress={() => { props.navigation.navigate('Home') }}
            />
          </Drawer.Section>

          {/*  DA INVIARE */}
          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              labelStyle={{ fontSize: 16, fontWeight: 'bold', color: '#000' }}
              label={'DA INVIARE'}
              onPress={() => { }}
            />

            {/* LE TUE RICHIESTE */}
            <DrawerItem
              labelStyle={{ fontSize: 16, fontWeight: 'bold', color: '#000' }}
              label={'LE TUE RICHIESTE'}
              onPress={() => { }}
            />
          </Drawer.Section>

          <Drawer.Section style={styles.drawerSection}>

            {/* CAMPAGNE DI RESO */}
            <DrawerItem
              labelStyle={{ fontSize: 16, fontWeight: 'bold', color: '#000' }}
              label={'CAMPAGNE DI RESO'}
              onPress={() => { }}
            />
          </Drawer.Section>

          <Drawer.Section style={styles.drawerSection}>
            {/* LISTE DI ETICHETTE */}
            <DrawerItem
              labelStyle={{ fontSize: 16, fontWeight: 'bold', color: '#000' }}
              label={'LISTE DI ETICHETTE'}
              onPress={() => { }}
            />
          </Drawer.Section>
        </View>

        {/* BOTTONS */}
        <Drawer.Section style={styles.drawerSection}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}><Ionicons name={'camera'} size={24} color="#000" /> INQUADRA</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}><Ionicons name={'search'} size={24} color="#000" /> CERCA</Text>
          </TouchableOpacity>

        </Drawer.Section>

      </DrawerContentScrollView>

      <Drawer.Section style={styles.bottomDrawerSection}>
        <Drawer.Section style={styles.drawerSection}>

          {/* IMPOSTAZIONI */}
          <DrawerItem
            icon={() => (
              <Ionicons name="settings" size={24} color="black" />
            )}
            label={'Impostazioni'}
            onPress={() => { }}
          />
        </Drawer.Section>

        <Drawer.Section style={styles.drawerSection}>
          {/* SUPPORTO */}
          <DrawerItem
            icon={() => (
              <AntDesign name="questioncircleo" size={24} color="black" />
            )}
            label={'Supporto'}
            onPress={() => { }}
          />
        </Drawer.Section>

        {/* LOGOUT */}
        <DrawerItem
          icon={() => (
            <MaterialIcons name="logout" size={24} color="black" />
          )}
          label="Logout"
        />
      </Drawer.Section>
    </View>
  )
}

export default DrawerContent

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  drawerSection: {
    marginTop: 2,
  },
  bottomDrawerSection: {
    marginBottom: 5,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  // Button Menu
  button: { width: 230, height: 50, borderRadius: 50, borderWidth: 1, alignSelf: 'center', alignItems: 'center', justifyContent: 'center', marginTop: 10, marginBottom: 10 },
  // Button Text
  buttonText: { fontSize: 16, color: '#000' }
})