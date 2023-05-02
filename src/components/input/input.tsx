import React from 'react';
import { TextInput } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';

import { IPropsInput } from './@types';

export const Input: React.FC<IPropsInput> = ({
    autoCapitalize,
    textAlign,
    placeholder,
    value,
    onChangeText,
    mask,
    type,
    options,
    keyboardType,
    editable,
    multiline,
    secureTextEntry,
    className,
    defaultValue,
    testID,
}) => {
    if (mask) {
        return (
            <TextInputMask
                className={className !== undefined ? className : ''}
                testID={testID}
                placeholderTextColor="#407f8a"
                autoCapitalize={autoCapitalize}
                textAlign={textAlign}
                placeholder={placeholder}
                value={value}
                defaultValue={defaultValue}
                multiline={multiline !== undefined && multiline}
                onChangeText={onChangeText}
                secureTextEntry={
                    secureTextEntry !== undefined && secureTextEntry
                }
                type={type === undefined ? 'custom' : type}
                options={options}
                editable={editable}
                keyboardType={
                    keyboardType !== undefined ? keyboardType : 'default'
                }
            />
        );
    }

    if (type === 'cpf') {
        return (
            <TextInputMask
                className={className !== undefined ? className : ''}
                testID={testID}
                placeholderTextColor="#407f8a"
                autoCapitalize={autoCapitalize}
                textAlign={textAlign}
                placeholder={placeholder}
                value={value}
                defaultValue={defaultValue}
                multiline={multiline !== undefined && multiline}
                onChangeText={onChangeText}
                secureTextEntry={
                    secureTextEntry !== undefined && secureTextEntry
                }
                type="cpf"
                editable={editable}
                autoFocus={!!(value !== undefined && value.length > 5)}
                keyboardType={
                    keyboardType !== undefined ? keyboardType : 'default'
                }
            />
        );
    }

    if (type === 'cnpj') {
        return (
            <TextInputMask
                className={className !== undefined ? className : ''}
                testID={testID}
                placeholderTextColor="#407f8a"
                autoCapitalize={autoCapitalize}
                textAlign={textAlign}
                placeholder={placeholder}
                value={value}
                defaultValue={defaultValue}
                multiline={multiline !== undefined && multiline}
                onChangeText={onChangeText}
                secureTextEntry={
                    secureTextEntry !== undefined && secureTextEntry
                }
                type="cnpj"
                autoFocus
                editable={editable}
                keyboardType={
                    keyboardType !== undefined ? keyboardType : 'default'
                }
            />
        );
    }

    return (
        <TextInput
            className={className !== undefined ? className : ''}
            testID={testID}
            placeholderTextColor="#407f8a"
            autoCapitalize={autoCapitalize}
            textAlign={textAlign}
            placeholder={placeholder}
            editable={editable}
            value={value}
            defaultValue={defaultValue}
            multiline={multiline !== undefined && multiline}
            onChangeText={onChangeText}
            secureTextEntry={secureTextEntry !== undefined && secureTextEntry}
            keyboardType={keyboardType !== undefined ? keyboardType : 'default'}
        />
    );
};
