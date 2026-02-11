import React from 'react';
import { Text, View, ViewStyle } from 'react-native';
import { styles } from './styles';

type Props = {
  title: string;
  subtitle?: string;
  containerStyle?: ViewStyle | ViewStyle[];
};

function ScreenHeader({ title, subtitle, containerStyle }: Props) {
  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={styles.title}>{title}</Text>
      {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
    </View>
  );
}

export default React.memo(ScreenHeader);
