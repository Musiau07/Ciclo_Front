import React, { useState } from 'react';
import { View, Image, Text, TextInput, Button, Alert } from 'react-native';
import styles from './Styles';
import axios from 'axios';

const Perguntas = () => {
    const [symptoms, setSymptoms] = useState({});

    const handleTextInput = (name, value) => {
        setSymptoms((prevSymptoms) => ({ ...prevSymptoms, [name]: value }));
    };

    const handleSave = async () => {
        if (!setSymptoms.name) {
            Alert.alert('Todos os campos são obrigatórios')
        }

        const data = {
            nome:symptoms.sintomas,
            frequencia:symptoms.frequencia
        }


        //envio de informações para a API cadastrar no banco de dados
        try {
            await axios.post('http://10.0.2.2:8085/api/sintomas', data);
            Alert.alert('Salvo com sucesso');
        } catch (error) {

            console.log(error);
        }
    };

    return (
        <View style={styles.container}>

            <View style={styles.logoContainer}>
                <Image source={require('../../../res/img/logo.jpg')} style={styles.logo} />
            </View>
            <View style={styles.formContainer}>
                <Text style={styles.label}>Sinais e sintomas:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Fale sobre seus sintomas"
                    value={symptoms.sintomas}
                    onChangeText={(text) => handleTextInput('sintomas', text)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Houve dores frequentes?"
                    value={symptoms.frequencia}
                    onChangeText={(text) => handleTextInput('frequencia', text)}
                />
                <View>
                    <Button title="Salvar" styleradius={"sm"} type="solid" color="#FA8072" onPress={handleSave} />
                </View>
            </View>
        </View>
    );
};

export default Perguntas;