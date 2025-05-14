import { Link, router } from "expo-router";
import { useState } from "react";
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";


export default function register(){
    
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")
    const [nome, setNome] = useState("")

    const onPress = () => {
            router.push("/")
    }

    return(
        <>
           <SafeAreaView style={styles.container}>
                <Text style={styles.title}>Register</Text>
               
                <TextInput style={styles.input} onChangeText={setNome} placeholder="Digite seu nome" keyboardType="email-address"/>
             
                <TextInput style={styles.input} onChangeText={setEmail} placeholder="Digite seu email" keyboardType="email-address"/>
                
                <TextInput style={styles.input} onChangeText={setPass} placeholder="Digite seu senha" keyboardType="default"/>
                
                <TextInput style={styles.input} onChangeText={setPass} placeholder="Confirme sua senha" keyboardType="default"/>

                <View>
                <TouchableOpacity style={styles.btn} onPress={onPress}>
                    <Text  style={styles.btnText}>Entrar</Text>
                </TouchableOpacity>
                </View>
            </SafeAreaView>
           
        </>
    )
}


const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        paddingBottom: 30
    },
    container: {
        width: '100vw',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: 30,

    
    },
    
    input: {
        paddingHorizontal: 10,
        paddingVertical: 3,
        width: 300,
        height: 35,
        borderRadius: 16,
        color: 'white',
        backgroundColor: 'black'
    },
    btn: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
        width: 150,
        height: 35,
        borderRadius: 16,
    },
    btnText: {
        
        color: 'white'
    }

})