
import { themes } from "@/src/global/themes";
import { StyleSheet } from "react-native";

export const buttonStyles = StyleSheet.create({
    button:{
        width: 250,
        height: 50,
        backgroundColor: themes.colors.primary,
        borderRadius: 24,
        alignItems: "center",
        justifyContent: "center",
        shadowColor: "#000",
        shadowOffset: { 
            width: 0, 
            height: 3 
        },
        shadowOpacity: 0.3,
        shadowRadius: 4.5,
        elevation: 5,
    },
    textButton:{
        fontSize: 16,
        color: "white",
        fontWeight: "bold",
    },
    activityIndicator:{
        color: "white",
    },
});