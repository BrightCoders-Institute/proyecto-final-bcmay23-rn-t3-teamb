import React, {useState} from 'react';
import {TextInput, View, Text} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {styles} from './styles';

export const Input = props => {
  const {
    field: {name, onBlur, onChange, value},
    form: {errors, touched, setFieldTouched},
    label,
    icon='',
    ...inputProps
  } = props;

  const hasError = errors[name] && touched[name];

  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => {
    setIsFocused(false);
    setFieldTouched(name);
    onBlur(name);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{label}</Text>
      <TextInput
        style={[
          styles.input,
          {
            borderColor: isFocused ? '#ffc300' : '#003566',
          },
          hasError && styles.errorInput,
        ]}
        value={value}
        onChangeText={text => onChange(name)(text)}
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...inputProps}
      />
      {icon ? <Ionicons name={icon} size={24} color={'#000'} /> : null}

      {hasError && <Text style={{color: 'red'}}>{errors[name]}</Text>}
    </View>
  );
};
