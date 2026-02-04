import { themes } from '@/src/global/themes';
import { MaterialIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Modal, Pressable, Text, View } from 'react-native';
import { styles } from './styles';

type Props = {
  title: string;
  time: string;
  client: string;
  price: string;
  status?: 'pending' | 'done' | 'canceled';
  onChangeStatus?: (status: 'pending' | 'done' | 'canceled') => void;
}

export default function ShowAppointmentCard({ title, time, client, price, status, onChangeStatus }: Props) {
  const [menuVisible, setMenuVisible] = useState(false);

  function handleSelect(newStatus: 'done' | 'canceled') {
    setMenuVisible(false);
    onChangeStatus?.(newStatus);
  }

  return (
    <>
      <View style={styles.card}>
        <Pressable
          style={styles.menuButton}
          android_ripple={{ color: 'rgba(0,0,0,0.08)', borderless: true }}
          onPress={() => setMenuVisible(true)}
          accessibilityRole="button"
          accessibilityLabel="Abrir ações"
        >
          <MaterialIcons name="more-vert" size={20} color={themes.colors.darkGray} />
        </Pressable>

        <View style={[styles.top, { backgroundColor: themes.colors.lightBlue }] }>
          <Text style={[styles.title, { color: themes.colors.darkGray }]}>{title}</Text>
        </View>
        <View style={[styles.divider, { backgroundColor: themes.colors.lightGray }]} />
        <View style={styles.content}>
          <View style={styles.row}>
            <View style={[styles.iconBox, { backgroundColor: themes.colors.primaryLight }]}>
              <MaterialIcons name="access-time" size={24} color={themes.colors.primary} />
            </View>
            <View>
              <Text style={[styles.valueText, { color: themes.colors.primary }]}>{time}</Text>
              <Text style={[styles.smallText, { color: themes.colors.gray }]}>Horário</Text>
            </View>
          </View>

          <View style={styles.row}>
            <View style={[styles.iconBox, { backgroundColor: themes.colors.secondaryLight }]}>
              <MaterialIcons name="person" size={24} color={themes.colors.secondary} />
            </View>
            <View>
              <Text style={[styles.valueText]}>{client}</Text>
              <Text style={[styles.smallText, { color: themes.colors.gray }]}>Cliente</Text>
            </View>
          </View>

          <View style={styles.row}>
            <View style={[styles.iconBox, { backgroundColor: themes.colors.successLight }]}>
              <MaterialIcons name="attach-money" size={24} color={themes.colors.success} />
            </View>
            <View>
              <Text style={[styles.valueText, { color: themes.colors.success }]}>{price}</Text>
              <Text style={[styles.smallText, { color: themes.colors.gray }]}>Valor</Text>
            </View>
          </View>
        </View>
      </View>

      <Modal visible={menuVisible} transparent animationType="fade" onRequestClose={() => setMenuVisible(false)} statusBarTranslucent presentationStyle="overFullScreen">
        <Pressable style={styles.modalOverlay} onPress={() => setMenuVisible(false)}>
          <Pressable style={styles.modalBox} onPress={() => {}}>
            <Pressable style={styles.menuItem} android_ripple={{ color: 'rgba(0,0,0,0.06)' }} onPress={() => handleSelect('done')}>
              <View style={styles.menuRow}>
                <MaterialIcons name="check-circle" size={18} color={themes.colors.success} />
                <Text style={[styles.menuText, { color: themes.colors.success }]}>Concluir</Text>
              </View>
            </Pressable>

            <Pressable style={styles.menuItem} android_ripple={{ color: 'rgba(0,0,0,0.06)' }} onPress={() => handleSelect('canceled')}>
              <View style={styles.menuRow}>
                <MaterialIcons name="cancel" size={18} color={themes.colors.error} />
                <Text style={[styles.menuText, { color: themes.colors.error }]}>Cancelar</Text>
              </View>
            </Pressable>

            <View style={{ height: 1, backgroundColor: 'rgba(0,0,0,0.06)' }}></View>

            <Pressable style={styles.menuItem} android_ripple={{ color: 'rgba(0,0,0,0.06)' }} onPress={() => setMenuVisible(false)}>
              <View style={styles.menuRow}>
                <MaterialIcons name="close" size={24} color={themes.colors.darkGray} />
                <Text style={[styles.menuText, { fontSize: 18, color: themes.colors.gray }]}>Fechar</Text>
              </View>
            </Pressable>
          </Pressable>
        </Pressable>
      </Modal>
    </>
  );
}

 
