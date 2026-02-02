import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';

export default function Home() {
	const navigation = useNavigation();

	return (
		<View style={styles.container}>
			<View style={styles.boxTop}>
                <Text>Bem vindo, <Text style={{color:"blue"}}>user_name</Text></Text>
            </View>

			<TouchableOpacity
				activeOpacity={0.85}
				style={styles.fab}
				onPress={() => navigation.navigate('Add' as never)}
			>
				<MaterialIcons name="add" size={32} color="#fff" />
			</TouchableOpacity>
		</View>
	);
}


