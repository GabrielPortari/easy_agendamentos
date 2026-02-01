import { themes } from "@/src/global/themes";
import { FontAwesome, MaterialIcons, Octicons } from "@expo/vector-icons";
import React, { forwardRef, Fragment, Ref } from "react";
import { Text, TextInput, TextInputProps, TouchableOpacity, View } from "react-native";
import { inputStyles } from "./styles";

type IconComponent = React.ComponentType<React.ComponentProps<typeof MaterialIcons>> |
    React.ComponentType<React.ComponentProps<typeof FontAwesome>> |
    React.ComponentType<React.ComponentProps<typeof Octicons>>;

type Props = TextInputProps & {
    IconLeft?: IconComponent,
    IconRight?: IconComponent,
    iconLeftName?: string,
    iconRightName?: string,
    title?: string,
    placeholder?: string,
    onIconLeftPress?: () => void,
    onIconRightPress?: () => void,
};

export const Input = forwardRef((props: Props, ref: Ref<TextInput> | null) => {
    const { IconLeft, IconRight, iconLeftName, iconRightName, title, placeholder, onIconLeftPress, onIconRightPress, ...rest } = props;
    
    const calculateSizeWidth = () => {
        if (IconLeft && iconLeftName && IconRight && iconRightName) {
            return '80%';
        } else if (IconLeft && iconLeftName) {
            return '90%';
        } else if (IconRight && iconRightName) {
            return '90%';
        } else {
            return '100%';
        }
    };

    const calculatePaddingLeft = () => {
        if (IconLeft && IconRight) {
            return 0;
        } else if (IconRight || IconLeft) {
            return 10;
        }else{
            return 20;
        }
    };

    return <Fragment>
        <Text 
            style={inputStyles.titleInput}>{title}</Text>
        <View 
            style={[inputStyles.boxInput, { paddingLeft: calculatePaddingLeft() }]}>
            {IconLeft && iconLeftName && (
                <TouchableOpacity onPress={onIconLeftPress} style={inputStyles.button}>
                
                    <IconLeft 
                        name={iconLeftName as any} 
                        size={20} 
                        color={themes.colors.gray}
                        style={inputStyles.icon} 
                    />
                </TouchableOpacity>
            )}
            
            <TextInput style={[inputStyles.textInput, { width: calculateSizeWidth() }]} {...rest} />

            {IconRight && iconRightName && (
                <TouchableOpacity onPress={onIconRightPress} style={inputStyles.button}>
                    <IconRight 
                        name={iconRightName as any} 
                        size={20} 
                        color={themes.colors.gray}
                        style={inputStyles.icon} 
                    />
                </TouchableOpacity>
            )}
        </View>
    </Fragment>;
});