import { Link } from "expo-router";
import { Image, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, View } from "react-native";
import { Button } from "../components/button";
import { Input } from "../components/input";

export default function Register(){
    return(
        <KeyboardAvoidingView 
        style={{flex: 1}}
        behavior={Platform.select({ios: "padding", android: "height"})} >

            <ScrollView 
            contentContainerStyle={{flexGrow: 1}} 
            keyboardShouldPersistTaps="handled">

                <View style={styles.container}>
                            
                            <Image 
                                source={require("../assets/easy_logo.png")}
                                style={styles.illustration}/>
                            <Text style={styles.title}>Cadastrar</Text>
                            <Text style={styles.subtitle}>Crie sua conta</Text>

                            <View style={styles.form}>
                                <Input placeholder="Nome" keyboardType="default"/>
                                <Input placeholder="Email" keyboardType="email-address"/>
                                <Input placeholder="Senha" secureTextEntry={true}/>
                                <Input placeholder="Confirmar senha" secureTextEntry={true}/>
                                <Button label="Cadastrar"/>
                            </View>
                            
                            <View>
                                <Link href="/">
                                    <Text style={styles.footerText}>Já possui uma conta? Entre aqui</Text>
                                </Link>
                            </View>

                        </View>
            </ScrollView>

        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 32,
        justifyContent: "center",
        backgroundColor: "#FFFFFF"
    },
    title: {
        fontSize: 32,
        fontWeight: "bold",
    },
    subtitle: {
        fontSize: 16,
        fontWeight: "800",
    },
    illustration: {
        width: "100%",
        height: 160,
        resizeMode: "contain",
        marginTop: 62
    },
    form:{
        marginTop: 24,
        gap: 10,
        marginBottom: 24
    },
    footerText:{
        textAlign: "center",
        color: "#0b6dff"
    }
})