import React, {useRef} from 'react';
import {TouchableOpacity, Text, View, StyleSheet, Animated} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface checkBoxProps{
    text : string,
    onPress : () => void 
    isChecked : boolean,
}

const Checkbox:React.FC<checkBoxProps> = ({
  text,
  onPress,
  isChecked,
 
}) => {
  const animatedWidth = useRef(new Animated.Value(0)).current;

  const startAnimation = () => {
    const toValue = isChecked ? 0 : 30;
    Animated.timing(animatedWidth, {
      toValue: toValue,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  return (
    <View style={[styles.container]}>
      <TouchableOpacity
        onPress={() => {
          startAnimation();
          onPress();
        }}
        style={[
          styles.checkbox,
          isChecked && styles.checkboxSelected,
        ]}>
        <Animated.View style={{width: animatedWidth}}>
          <Icon name="checkmark" size={20} style={{color: 'white'}} />
        </Animated.View>
      </TouchableOpacity>
      <Text style={[styles.checkboxText]}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    borderColor: '#FF8C00',
    borderWidth: 1,
    borderRadius: 5,
    height: 20,
    width: 20,
  },
  checkboxSelected: {
    backgroundColor: '#FF8C00',
  },
  checkboxText: {
    fontSize: 12,
    fontWeight:'400',
    marginLeft: 10,
  },
});

export default Checkbox;