import React, { useEffect, useState } from 'react';
import { KeyboardAvoidingView, Modal, Platform, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import { styles } from './styles';

type Props = {
	visible: boolean;
	initialValue?: string;
	onClose: () => void;
	onSave: (name: string) => void;
};

export default function NameChangeModal({ visible, initialValue = '', onClose, onSave }: Props) {
	const [name, setName] = useState(initialValue);

	useEffect(() => setName(initialValue), [initialValue, visible]);

	return (
		<Modal visible={visible} transparent animationType="fade" onRequestClose={onClose} statusBarTranslucent presentationStyle="overFullScreen">
			<TouchableWithoutFeedback onPress={onClose}>
				<View style={styles.backdrop}>
					<KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined} style={styles.wrapper}>
						<TouchableWithoutFeedback>
							<View style={styles.modal}>
								<Text style={styles.title}>Editar nome</Text>
								<TextInput
									value={name}
									onChangeText={setName}
									placeholder="Digite seu nome"
									style={styles.input}
								/>

								<View style={styles.actions}>
									<TouchableOpacity onPress={onClose} style={[styles.btn, styles.btnCancel]}>
										<Text style={styles.btnCancelText}>Cancelar</Text>
									</TouchableOpacity>
									<TouchableOpacity onPress={() => { onSave(name.trim() || initialValue); }} style={[styles.btn, styles.btnAdd]}>
										<Text style={styles.btnAddText}>Salvar</Text>
									</TouchableOpacity>
								</View>
							</View>
						</TouchableWithoutFeedback>
					</KeyboardAvoidingView>
				</View>
			</TouchableWithoutFeedback>
		</Modal>
	);
}

