import { Image, StyleSheet, Text, View } from "react-native";
import { Input } from "../components/input";

export default function Index(){
    return(
        <View style={styles.container}>
            
            <Image 
                source={require("../assets/easy_logo.png")}
                style={styles.illustration}/>
            <Text style={styles.title}>Entrar</Text>

            <View style={styles.form}>
                <Input placeholder="Digite aqui seu Email"/>
                <Input placeholder="Digite aqui sua Senha" secureTextEntry={true}/>
            </View>

            <Text style={styles.subtitle}>Acesse sua conta</Text>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 32,
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
    }
})