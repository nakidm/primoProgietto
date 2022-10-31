import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';


const Button = ({ icon, name }) => {
    return (
        <TouchableOpacity style={styles.button}>
            <Text style={styles.text}><Ionicons name={icon} size={24} color="#fff" />  {name}</Text>
        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({
    button: { width: 145, height: 50, borderRadius: 40, backgroundColor: 'rgba(4,175,21,0.6278886554621849)', alignItems: 'center', justifyContent: 'center', position: 'absolute', bottom: 5, right: 10 },
    // TExt Button
    text: { fontSize: 16, color: '#fff' }
})