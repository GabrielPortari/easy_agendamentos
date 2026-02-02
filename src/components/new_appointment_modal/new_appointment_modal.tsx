import { themes } from '@/src/global/themes';
import { MaterialIcons } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';
import React, { useState } from 'react';
import {
    Alert,
    KeyboardAvoidingView,
    Modal,
    Platform,
    Text,
    TextInput,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View
} from 'react-native';
import { styles } from './styles';

type Props = {
  visible: boolean;
  onClose: () => void;
  onAdd: (appointment: { client: string; date: Date; price: string }) => void;
};

export default function NewAppointmentModal({ visible, onClose, onAdd }: Props) {
  const [client, setClient] = useState('');
  const [date, setDate] = useState(new Date());
  const [price, setPrice] = useState('');
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);

  const onChangeDate = (_: any, selected?: Date) => {
    const current = selected || date;
    setShowDatePicker(Platform.OS === 'ios');
    const now = new Date();
    // normalize dates to compare only date parts when needed
    const selectedDateOnly = new Date(current.getFullYear(), current.getMonth(), current.getDate());
    const todayOnly = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    if (selectedDateOnly < todayOnly) {
      Alert.alert('Data inválida', 'Não é possível agendar em data anterior à de hoje.');
      setDate(now);
      return;
    }
    setDate(current);
  };

  const onChangeTime = (_: any, selected?: Date) => {
    const selectedTime = selected || date;
    setShowTimePicker(Platform.OS === 'ios');
    const now = new Date();
    // combine selected hours/minutes with currently selected date
    const combined = new Date(date);
    combined.setHours(selectedTime.getHours(), selectedTime.getMinutes(), 0, 0);
    if (combined < now) {
      Alert.alert('Horário inválido', 'Não é possível agendar em horário anterior ao atual.');
      return;
    }
    setDate(combined);
  };

  const submit = () => {
    if (!client.trim()) return;
    onAdd({ client: client.trim(), date, price: price.trim() });
    setClient('');
    setPrice('');
    setDate(new Date());
    onClose();
  };

  const onChangePrime = (text: string) => {
    // remove tudo que não for dígito
    const digits = text.replace(/\D/g, '');
    if (!digits) {
      setPrice('');
      return;
    }
    // interpreta os dígitos como centavos
    const number = parseInt(digits, 10);
    const cents = String(number % 100).padStart(2, '0');
    const integerPart = String(Math.floor(number / 100));
    // aplica separador de milhares (ponto) no inteiro
    const intFormatted = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    const formatted = `${intFormatted},${cents}`;
    setPrice(formatted);
  };

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose} // Android back
    >
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.backdrop}>
          <KeyboardAvoidingView
            style={styles.wrapper}
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          >
            <TouchableWithoutFeedback /* prevent modal closing when tapping inside */>
              <View style={styles.modal}>
                <Text style={styles.title}>Novo Agendamento</Text>

                <View style={styles.row}>
                    <MaterialIcons name="person" size={20} color={themes.colors.gray} />
                    <Text style={styles.label}>Cliente</Text>
                </View>
                <TextInput
                  value={client}
                  onChangeText={setClient}
                  placeholder="Nome do cliente"
                  style={styles.input}
                />

                <View style={styles.inputRow}>
                  <View style={{ flex: 1 }}>
                    <View style={styles.row}>
                        <MaterialIcons name="date-range" size={20} color={themes.colors.gray} />
                        <Text style={styles.label}>Data</Text>
                    </View>
                    <TouchableOpacity
                      style={styles.pickerButton}
                      onPress={() => setShowDatePicker(true)}
                    >
                      <Text>{date.toLocaleDateString()}</Text>
                    </TouchableOpacity>
                  </View>

                  <View style={{ width: 12 }} />

                  <View style={{ flex: 1 }}>

                    <View style={styles.row}>
                        <MaterialIcons name="access-time" size={20} color={themes.colors.gray} />
                        <Text style={styles.label}>Horário</Text>
                    </View>
                    
                    <TouchableOpacity
                      style={styles.pickerButton}
                      onPress={() => setShowTimePicker(true)}
                    >
                      <Text>{date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</Text>
                    </TouchableOpacity>
                  </View>
                </View>

                <View style={styles.row}>
                    <MaterialIcons name="attach-money" size={20} color={themes.colors.gray} />
                    <Text style={styles.label}>Valor</Text>
                </View>
                <TextInput
                  value={price}
                  onChangeText={onChangePrime}
                  placeholder="R$ 0,00"
                  keyboardType="numeric"
                  style={styles.input}
                />

                <View style={styles.actions}>
                  <TouchableOpacity onPress={onClose} style={[styles.btn, styles.btnCancel]}>
                    <Text style={styles.btnCancelText}>Cancelar</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={submit} style={[styles.btn, styles.btnAdd]}>
                    <Text style={styles.btnAddText}>Adicionar</Text>
                  </TouchableOpacity>
                </View>

                {showDatePicker && (
                  <DateTimePicker
                    value={date}
                    mode="date"
                    display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                    minimumDate={new Date()}
                    onChange={onChangeDate}
                  />
                )}

                {showTimePicker && (
                  <DateTimePicker
                    value={date}
                    mode="time"
                    display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                    onChange={onChangeTime}
                  />
                )}

              </View>
            </TouchableWithoutFeedback>
          </KeyboardAvoidingView>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}

