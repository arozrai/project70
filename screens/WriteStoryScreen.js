import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function WriteStoryScreen() {
    const [value, onChangeText] = React.useState('Useless Placeholder');
    return (
        <View>
        <TextInput
            style={{ padding: 30, borderColor: 'black', borderWidth: 1 }}
            onChangeText={text => onChangeText(text)}
            value={value}
        />
        <TextInput
            style={{ padding: 30, borderColor: 'black', borderWidth: 1 }}
            onChangeText={text => onChangeText(text)}
            value={value}
            multiline={true}
        />
        <TextInput
            style={{ padding: 30, borderColor: 'black', borderWidth: 1 }}
            onChangeText={text => onChangeText(text)}
            value={value}
        />
        <TouchableOpacity>
            <Text>
                Sumbit Story
            </Text>
        </TouchableOpacity>
        </View>
    );
  }