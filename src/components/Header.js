import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Ionicons, Octicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Header = () => {

    const [notifica, setNotifica] = useState(true)
    const navigation = useNavigation();
    return (
        <View style={styles.header}>
            {/* Icona Notifiche  sinistra */}
            <TouchableOpacity style={styles.headerLeft}>
                {notifica ? <Text style={styles.greenIncon}>.</Text> : null}
                <Ionicons name="notifications-outline" size={24} color="black" />
            </TouchableOpacity>

            {/* Logo Centrale */}
            <View style={styles.headerLogo}>
                <Image source={require('../../assets/logo.png')} style={styles.logo} resizeMode='contain' />
                <Text style={styles.logoTextNormal}>Store: <Text style={styles.logoTextBold}>Benetton-N1230986</Text></Text>
            </View>
            {/* Icona menu destra */}
            <View style={styles.headerRight}>
                <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                    <Octicons name="three-bars" size={24} color="black" />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    // Inizio Header
    header: { flexDirection: 'row', paddingHorizontal: 8, width: '100%', height: 109, backgroundColor: '#fff' },
    // Header Left with notification Icon
    headerLeft: { flex: 0.5, alignItems: 'flex-start', justifyContent: 'center' },
    // Green Icon if notification is on
    greenIncon: { position: 'absolute', top: -2, left: 12, color: '#04af15', fontSize: 50, fontWeight: 'bold' },
    // Header Logo
    headerLogo: { flex: 3, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' },
    // Logo Image
    logo: { width: 80, height: 40 },
    // Logo Text Normal
    logoTextNormal: { fontSize: 14, fontWeight: '400', color: '#3d3e3e' },
    // Login Text Bold
    logoTextBold: { fontSize: 14, fontWeight: 'bold', color: '#000' },
    // Menu Icon Right
    headerRight: { flex: 1, alignItems: 'flex-end', justifyContent: 'center' }
})