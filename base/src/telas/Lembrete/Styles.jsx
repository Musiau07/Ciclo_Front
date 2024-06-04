import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    resizeMode: 'cover',
  },
  tabela: {
    backgroundColor: '#FFE4E1',
    paddingVertical: 40,
    paddingHorizontal: 30,
    borderRadius: 30,
    elevation: 25,
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
  },
  linhas: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  linha: {
    width: '100%',
    height: 60,
    backgroundColor: '#FFB6C1',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
  },
  texto: {
    fontSize: 18,
    color: '#000000',
  },
  status: {
    fontSize: 16,
    color: '#000000',
  },
});

export default styles;