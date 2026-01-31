import { StyleSheet, TextInput, TextInputProps } from "react-native";

export function Input(props: TextInputProps){
    return (
        <TextInput {...props} style={styles.input}/>
    );
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        width: '100%',
        borderColor: '#DCDCDC',
        borderRadius: 8,
        fontSize: 16,
        borderWidth: 1,
        paddingLeft: 8
    }
})