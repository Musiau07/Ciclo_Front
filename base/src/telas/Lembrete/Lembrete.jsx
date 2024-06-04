import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './Styles';

const Lembrete = () => {
  const [perguntas, setPerguntas] = useState([
    { id: 1, texto: 'Comprar absorvente', concluida: false },
    { id: 2, texto: 'Remedios', concluida: false },
    { id: 3, texto: 'Coletor menstrual', concluida: false },
    // ...
  ]);

  const handleConcluir = (id) => {
    setPerguntas((perguntas) =>
      perguntas.map((pergunta) => {
        if (pergunta.id === id) {
          return { ...pergunta, concluida: true };
        }
        return pergunta;
      })
    );
  };

  return (
    <View style={styles.container}>
      <Image source={require('../../../res/img/background.jpg')} style={styles.background} />
      <View style={styles.tabela}>
        <Text style={styles.titulo}>𝑳𝒆𝒎𝒃𝒓𝒆𝒕𝒆</Text>
        <View style={styles.linhas}>
          {perguntas.map((pergunta) => (
            <TouchableOpacity key={pergunta.id} onPress={() => handleConcluir(pergunta.id)} style={styles.linha}>
              <Text style={styles.texto}>{pergunta.texto}</Text>
              <Text style={styles.status}>{pergunta.concluida ? '𝗖𝗼𝗻𝗰𝗹𝘂𝗶́𝗱𝗼✔️' : 'Não Concluída'}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
};

export default Lembrete;