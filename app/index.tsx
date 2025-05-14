import { Link, router } from "expo-router";
import { useState } from "react";
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function HomeScreen(){
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")

    const onPress = () => {
            router.push("/(tabs)")
    }

    
    return(
        <>
            <SafeAreaView style={styles.container}>
                <Text style={styles.title}>Login</Text>
                <Text>Email</Text>
                <TextInput style={styles.input} onChangeText={setEmail} placeholder="Digite seu email" keyboardType="email-address"/>
                <Text>Senha</Text>
                <TextInput style={styles.input} onChangeText={setPass} placeholder="Digite seu senha" keyboardType="default"/>
           </SafeAreaView>
           <View style={styles.containerView}>
                <TouchableOpacity style={styles.btn} onPress={onPress}>
                    <Text  style={styles.btnText}>Entrar</Text>
                </TouchableOpacity>
                <View>
                    <Link href={"/register"}>Cadastrar novo Usuario</Link>
                </View>
            </View>
           
        </>
    )
}


const styles = StyleSheet.create({
    containerView: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 15
    },
    title: {
        fontSize: 30
    },
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 15,
        paddingTop: 30,
        paddingBottom: 20
    },
    input: {
        paddingHorizontal: 10,
        paddingVertical: 3,
        color: 'white',
        backgroundColor: 'black'
    },
    btn: {
        backgroundColor: 'black',
    },
    btnText: {
        color: 'white'
    }

})