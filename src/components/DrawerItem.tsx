import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  StyleProp,
  TextStyle,
  ViewStyle,
  Text,
} from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

type Props = {
  onPress?: () => void;
  disabled?: boolean;
  iconName?: string;
  iconColor?: string;
  iconSize?: number;
  iconContainerStyle?: StyleProp<ViewStyle>;
  iconComponent?: React.ReactNode;
  text: string;
  textStyle?: StyleProp<TextStyle>;
};

const DrawerItem = ({
  onPress,
  disabled = false,
  text,
  iconColor,
  iconComponent,
  iconContainerStyle,
  iconName,
  iconSize,
  textStyle,
}: Props) => {
  return (
    <>
      <TouchableOpacity onPress={onPress} disabled={disabled}>
        <View style={styles.drawerItemContainer}>
          {iconComponent ? (
            iconComponent
          ) : (
            <View style={[styles.iconContainer, iconContainerStyle]}>
              <FontAwesome
                name={iconName || ''}
                size={iconSize || 14}
                color={iconColor}
              />
            </View>
          )}
          <Text style={[textStyle, styles.textStyle]}>{text}</Text>
        </View>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  drawerItemContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    color: '#FFF',
  },
});

export {DrawerItem};
