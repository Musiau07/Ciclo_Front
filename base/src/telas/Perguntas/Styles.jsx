import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },

    logoContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 40,
    },
    logo: {
        width: 200,
        height: 100,
    },
    formContainer: {
        padding: 50,
    },
    label: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    input: {
        height: 40,
        borderColor: '#F08080',
        borderWidth: 1,
        padding: 10,
        marginVertical: 10,
    },
});
export default styles;