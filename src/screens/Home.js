import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Header from '../components/Header'
import { Input } from '@rneui/themed';
import { Ionicons } from '@expo/vector-icons';
import Button from '../components/Button';

const Home = ({ navigation }) => {
    const [req, setReq] = useState(false)

    return (
        <>
            <Header />
            <ScrollView style={styles.scroll}>
                {/* Cerca Input */}
                <View style={styles.contentCard}>
                    <Input
                        placeholder="Cerca un articolo"
                        containerStyle={styles.input}
                        rightIcon={<Ionicons name="search-outline" size={34} color="black" />}
                        onChangeText={() => { }}
                    />
                </View>

                {/*  Da inviare */}
                <View style={styles.contentCard}>
                    <View style={styles.card}>
                        <View style={styles.leftCard}>
                            <TouchableOpacity>
                                <Text style={styles.titleTextCard}>DA INVIARE</Text>
                                <Text style={styles.textCard}>Le richieste di articoli dagli altri store verranno visualizzate qui</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.rightCard}>
                            <TouchableOpacity>
                                <Image source={require('../../assets/shirt.png')} style={styles.icon} resizeMode='contain' />
                            </TouchableOpacity>
                        </View>
                    </View>

                    {
                        req ?
                            <View style={styles.requestContent}>
                                <TouchableOpacity style={styles.leftReq}>
                                    <Text style={styles.reqText}>Richieste ricevute</Text>
                                </TouchableOpacity>
                                <View style={styles.rightReq}>
                                    <Text style={styles.greenIncon}>.</Text>
                                    <Text style={styles.reqText}>4</Text>
                                </View>
                            </View>
                            :
                            <View style={styles.requestContent}>
                                <Text style={styles.textCard}>Non hai nessuna richiesta al momento</Text>
                            </View>
                    }
                </View>

                {/* Le tue Richieste */}
                <View style={styles.contentCard}>
                    <View style={styles.card}>
                        <View style={styles.leftCard}>
                            <TouchableOpacity>
                                <Text style={styles.titleTextCard}>LE TUE RICHIESTE</Text>
                                <Text style={styles.textCard}>Richiedi gli articoli di cui hai bisogno dagli altri store</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.rightCard}>
                            <TouchableOpacity>
                                <Image source={require('../../assets/vector.png')} style={styles.icon} resizeMode='contain' />
                            </TouchableOpacity>
                        </View>
                    </View>

                    {
                        req ?
                            <>
                                <View style={styles.requestContent}>
                                    <TouchableOpacity style={[styles.leftReq, { borderBottomWidth: 0.5, paddingBottom: 10 }]}>
                                        <Text style={styles.reqText}>In arrivo</Text>
                                    </TouchableOpacity>
                                    <View style={[styles.rightReq, { borderBottomWidth: 0.5, paddingBottom: 10 }]}>
                                        <Text style={styles.reqText}>4</Text>
                                    </View>
                                </View>
                                <View style={styles.requestContent}>
                                    <TouchableOpacity style={styles.leftReq}>
                                        <Text style={styles.reqText}>Richiesta inviata</Text>

                                    </TouchableOpacity>
                                    <View style={styles.rightReq}>
                                        <Text style={styles.reqText}>4</Text>
                                    </View>
                                </View>
                            </>

                            :
                            <View style={styles.requestContent}>
                                <Text style={styles.textCard}>Non hai effettuato nessun richiesta</Text>
                            </View>
                    }
                </View>

                {/* Campagne di Reso */}
                <View style={styles.contentCard}>
                    <View style={styles.card}>
                        <View style={styles.leftCard}>
                            <TouchableOpacity>
                                <Text style={styles.titleTextCard}>CAMPAGNE DI RESO</Text>
                                <Text style={styles.textCard}>Le campagna di reso attive verranno visualizzate qui</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.rightCard}>
                            <TouchableOpacity>
                                <Image source={require('../../assets/vector1.png')} style={styles.icon} resizeMode='contain' />
                            </TouchableOpacity>
                        </View>
                    </View>

                    {
                        req ?
                            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollHorisontal}>
                                <View style={styles.horisontalCard}>
                                    <Text style={styles.reqText}>
                                        0000003017 - EOS
                                    </Text>
                                    <Text style={styles.horisontalCardText}>
                                        sisley - 21A
                                    </Text>
                                    <Text style={styles.textCard1}>
                                        Scade tra 8 giorni
                                    </Text>
                                </View>
                                <View style={styles.horisontalCard}>
                                    <Text style={styles.reqText}>
                                        00000030122 - EOS
                                    </Text>
                                    <Text style={{ fontSize: 16, fontWeight: '600', color: 'rgba(0, 0, 0, 0.6)', padding: 5 }}>
                                        sisley - 22A
                                    </Text>
                                    <Text style={styles.textCard1}>
                                        Scade tra 10 giorni
                                    </Text>
                                </View>
                                <View style={styles.horisontalCard}>
                                    <Text style={styles.reqText}>
                                        000000555 - EOS
                                    </Text>
                                    <Text style={{ fontSize: 16, fontWeight: '600', color: 'rgba(0, 0, 0, 0.6)', padding: 5 }}>
                                        sisley - 25A
                                    </Text>
                                    <Text style={styles.textCard1}>
                                        Scade tra 8 giorni
                                    </Text>
                                </View>
                            </ScrollView>
                            :
                            <View style={styles.requestContent}>
                                <Text style={styles.textCard}>Non ci sono campagne attive</Text>
                            </View>
                    }
                </View>

                {/* Le tue liste di etichette */}
                <View style={styles.contentCard}>
                    <View style={styles.card}>
                        <View style={styles.leftCard}>
                            <TouchableOpacity>
                                <Text style={styles.titleTextCard}>LE TUE LISTE DI ETICHETTE</Text>
                                <Text style={styles.textCard}>Crea uno o più gruppi di etichette da inviare comodamente in stampa</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.rightCard}>
                            <TouchableOpacity>
                                <Image source={require('../../assets/vector2.png')} style={styles.icon} resizeMode='contain' />
                            </TouchableOpacity>
                        </View>
                    </View>

                    {
                        req ?
                            <View style={styles.requestContent}>
                                <TouchableOpacity style={styles.leftReq}>
                                    <Text style={styles.reqText}>Richieste ricevute</Text>
                                </TouchableOpacity>
                                <View style={styles.rightReq}>
                                    <Text style={styles.greenIncon}>.</Text>
                                    <Text style={styles.reqText}>4</Text>
                                </View>
                            </View>
                            :
                            <View style={styles.requestContent}>
                                <Text style={styles.textCard}>Al momento non possiedi liste</Text>
                            </View>
                    }
                </View>
            </ScrollView>
            <Button name='INQUADRA' icon='camera' />
        </>
    )
}

export default Home

const styles = StyleSheet.create({
    scroll: { flex: 1, marginBottom: 10 },
    // ContentCard
    contentCard: { flex: 1, backgroundColor: '#fff', marginTop: 10 },
    // Card
    card: { flexDirection: 'row', paddingHorizontal: 15, padding: 5 },
    // Input Container Style
    input: { paddingHorizontal: 15 },
    // Left Card Content
    leftCard: { flex: 2, alignItems: 'flex-start', justifyContent: 'center' },
    //Card  Title Text
    titleTextCard: { fontSize: 18, fontWeight: 'bold', color: '#029322', paddingBottom: 10 },
    // Card Text Normal
    textCard: { fontSize: 14, fontWeight: '400', color: 'rgba(0, 0, 0, 0.6)' },
    // Card Text Normal scadenza
    textCard1: { fontSize: 14, fontWeight: '700', color: '#ED6C02', borderTopWidth: 1, paddingTop: 10, borderTopColor: '#ccc' },
    // Right Card Icon
    rightCard: { flex: 1, alignItems: 'flex-end', justifyContent: 'center' },
    // Icon 
    icon: { width: 35, height: 35 },
    // Request Content 
    requestContent: { marginTop: 20, flexDirection: 'row', paddingHorizontal: 15, paddingBottom: 10 },
    // Request Left
    leftReq: { flex: 2, alignItems: 'flex-start', justifyContent: 'center' },
    // Right Req
    rightReq: { flex: 1, alignItems: 'flex-end', justifyContent: 'center', paddingRight: 10 },
    // Req Text
    reqText: { fontSize: 14, fontWeight: 'bold', color: '#000' },
    // Green Icon if notification is on
    greenIncon: { position: 'absolute', top: -20, right: 7, color: '#04af15', fontSize: 25, fontWeight: 'bold' },
    // Horisontal Scroll in Campagne di reso
    scrollHorisontal: { padding: 10, marginHorizontal: 10 },
    // Horisontal card campagne di reso
    horisontalCard: { width: 250, padding: 10, borderWidth: 1, borderRadius: 10, borderColor: '#ccc', marginRight: 20 },
    // Horisontal card text campagne di reso
    horisontalCardText: { fontSize: 16, fontWeight: '600', color: 'rgba(0, 0, 0, 0.6)', padding: 5 }
})