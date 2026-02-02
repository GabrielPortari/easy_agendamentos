import { themes } from "@/src/themes";
import { StyleSheet } from "react-native";

export const inputStyles = StyleSheet.create({
    titleInput: {
        marginLeft: 8,
        marginTop: 16,
        fontSize: 16,
        fontWeight: "500",
    },
    textInput: {
        width: "90%",
        height: "100%",
        color: themes.colors.gray,
    },
    icon:{
        width: "100%",
    },
    button:{
        width: "10%",
    },
    boxInput: {
        width: "100%",
        height: 40,
        borderWidth: 1,
        borderRadius: 16,
        backgroundColor: themes.colors.lightGray,
        borderColor: themes.colors.gray,
        marginTop: 10,
        paddingHorizontal: 8,
        flexDirection: "row",
        alignItems: "center",
    },
});