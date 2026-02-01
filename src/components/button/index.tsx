import { ActivityIndicator, Text, TouchableHighlightProps, TouchableOpacity } from "react-native";
import { buttonStyles } from "./styles";

type Props = TouchableHighlightProps & {
    title: string;
    onPress: () => void;
    loading?: boolean;
};

export function Button({...rest}: Props) {
    return (
        <TouchableOpacity style={buttonStyles.button} {...rest} activeOpacity={0.6}>
            {rest.loading ? <ActivityIndicator color="white"/> : <Text style={buttonStyles.textButton}>{rest.title}</Text>}
        </TouchableOpacity>
    );
}