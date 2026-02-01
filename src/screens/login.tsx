import { MaterialIcons, Octicons } from "@expo/vector-icons";
import { useState } from "react";
import { Alert, Image, Text, View } from "react-native";
import { Button } from "../components/button";
import { Input } from "../components/input";
import { themes } from "../global/themes";
import { styles } from "../styles/styles";

export default function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    
    async function handleLogin(email: string, password: string) {
        try{
            setLoading(true);
            
            if(!email || !password){
                Alert.alert("Atenção", "Por favor, preencha todos os campos.");
                setLoading(false);
                return;
            }
            setTimeout(() => {
                Alert.alert("Sucesso", "Login realizado com sucesso!");
                setLoading(false);
            }, 1000);

        }catch(error){
            Alert.alert("Ops!", "Ocorreu um erro ao tentar fazer login.");
        }
    }

    return (
        <View style={styles.container}>

            <View style={styles.boxTop}>
                <Image source={require("../assets/easy_logo.png")} style={styles.logo_illustration} />
                <Text style={styles.textHeader}>Bem vindo!</Text>
                <Text>Faça login para continuar</Text>
            </View>

            <View style={styles.boxMiddle}>
                <Input 
                    title="Endereço de email"
                    placeholder="Digite aqui"
                    iconRightName="email"
                    IconRight={MaterialIcons}
                    value={email}
                    onChangeText={setEmail}
                />
                <Input 
                    title="Senha"
                    placeholder="Digite aqui"
                    iconRightName={showPassword ? "eye" : "eye-closed"}
                    IconRight={Octicons}
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry={!showPassword}
                    onIconRightPress={() => setShowPassword(!showPassword)}
                />
            </View>

            <View style={styles.boxBottom}>
                <Button 
                    title={"Entrar"}
                    loading={loading}
                    disabled={loading}
                    onPress={() => handleLogin(email, password)}
                />
            </View>
            <Text style={styles.textFooter}>Não tem uma conta? <Text style={{color: themes.colors.primary, textDecorationLine: "underline"}}>Cadastre-se</Text></Text>
        </View>
    );
}