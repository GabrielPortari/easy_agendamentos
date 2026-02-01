import { Dimensions, StyleSheet } from "react-native";
import { themes } from "../global/themes";

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 16,
    },
    logo_illustration:{
        width: 150,
        height: 150,
        resizeMode: "contain",
    },
    textHeader:{
        fontSize: 24,
        fontWeight: "bold",
        marginTop: 8,
    },
    boxTop:{
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        height: Dimensions.get("window").height / 3,
    },
    boxMiddle:{
        width: "100%",
        height: Dimensions.get("window").height / 4,
        paddingLeft: 16,
    },
    boxBottom:{
        width: "100%",
        height: Dimensions.get("window").height / 3,
        alignItems: "center",
    },
    textFooter:{
        marginBottom: 16,
        color: themes.colors.gray,
    }
});