import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import styles from './style'

export default function index() {
  return (

    <View style={styles.form}>
    <View>
        <TextInput placeholder="E-mail" style={styles.label}>
        </TextInput>
        <TextInput placeholder="Senha" style={styles.label}>   
        </TextInput>
        <Text style={styles.input}>
            Entrar
        </Text>
        <Text style={styles.usuario}>
            Criar usuário
        </Text>
    </View>


</View>

  )
}