import { Dimensions, Image, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Feather } from '@expo/vector-icons';

const { height } = Dimensions.get('screen')

const Login = () => {

    const [utente, setUtente] = useState('')
    const [password, setPassword] = useState('')
    const [showP, setShowP] = useState(true)

    return (
        <View style={styles.body}>
            {/* logo */}
            <View style={styles.headerLogo}>
                <Image source={require('../../assets/logoGrande.png')} style={styles.logo} resizeMode='center' />
                <Text style={styles.logoText}>PHOENIX</Text>
                <Text style={styles.logoTextNormal}>by Benetton</Text>
            </View>
            {/* // Footer */}
            <View style={styles.footer}>
                <Text style={styles.loginText}>Login</Text>
                <Text style={styles.logoTextNormal}>Inserisci il tuo utente e password</Text>

                <Text style={styles.label}>Utente</Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        onChangeText={setUtente}
                        value={utente}
                        placeholder="mario.rossi@benetton.it"
                        keyboardType="address"
                    />
                </View>

                <Text style={styles.label}>Password</Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        onChangeText={setPassword}
                        value={password}
                        placeholder="************"
                        keyboardType="address"
                        secureTextEntry={showP}
                    />

                    <TouchableOpacity style={styles.inputIcon} onPress={() => setShowP(!showP)}>
                        {showP ?
                            <Feather name='eye-off' color='grey' size={20} />
                            :
                            <Feather name='eye' color='green' size={20} />
                        }
                    </TouchableOpacity>
                </View>
                {/* // bottons */}
                <View style={styles.buttons}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Accedi</Text>
                    </TouchableOpacity>
                </View>
                {/* Password Dimenticata */}
                <View style={styles.buttons}>
                    <TouchableOpacity >
                        <Text style={styles.loginText}>Ho dimenticato la password</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    // Body
    body: { flex: 1, borderStartColor: '#fff' },
    // Header Logo
    headerLogo: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' },
    // Logo Image
    logo: { width: 200, height: 81 },
    // Logo Text Bold
    logoText: { fontSize: height * 0.05, fontWeight: '500' },
    // Logo Text Normal
    logoTextNormal: { fontSize: height * 0.02, fontWeight: '400', color: '#3d3e3e' },
    // Login Text
    loginText: { fontSize: height * 0.025, fontWeight: '400', color: '#000' },
    // Footer
    footer: { flex: 2, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' },
    // InputContainer
    inputContainer: { flexDirection: 'row', margin: 12, borderWidth: 1, padding: 15, borderRadius: 5, width: '80%', },
    // Input
    input: { borderWidth: 0, flex: 1, alignItems: 'flex-start', justifyContent: 'center', color: '#000' },
    // InputIcon
    inputIcon: { flex: 0.5, alignItems: 'flex-end', justifyContent: 'center' },
    label: { fontSize: 15, fontWeight: 'bold', color: '#babbbb', alignSelf: 'flex-start', paddingHorizontal: 10 },
    // Buttons 
    buttons: { marginTop: 20 },
    // Botton
    button: { width: 328, height: 58, padding: 10, alignItems: 'center', justifyContent: 'center', backgroundColor: '#029322', borderRadius: 58 },
    // Button Text
    buttonText: { fontSize: 16, fontWeight: '500', color: '#fff' },
})