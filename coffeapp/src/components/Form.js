import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Text, } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import colors from '../utils/colors';

export default function Form(props) {
    const { setcant,setpago } = props;
    const [Cafeti, setCafeti] = useState(['Mocha $2.00', 'Te chai $2.50', 'Americano $1.50', 'Frapper $3.00'])
    const [cafetiSeleccionado, setcafetiSeleccionado] = useState([])
    const [Cafetii, setCafetii] = useState(['Targeta', 'Efectivo'])
    const [cafetiiSeleccionado, setcafetiiSeleccionado] = useState([])
    const [Cafet, setCafet] = useState('');
    const updatecafet = (optionPicked) => {
        if(optionPicked=='1'){
          optionPicked = optionPicked;
        }else if(optionPicked=='1.5'){
            optionPicked = optionPicked;
        }else if(optionPicked=='2'){
            optionPicked = optionPicked;
        }
        setCafet(optionPicked);
     };

    return (
        <View style={styles.viewForm}>
            <Text>Seleccione Tamaño de cafe:</Text>
            <Picker 
            selectedValue = {Cafet} 
            onValueChange = {updatecafet}>
               <Picker.Item label = "Short 8 onz. $1.00" value = "1" />
               <Picker.Item label = "Tall 12 onz $1.50" value = "1.5" />
               <Picker.Item label = "Grande 16 onz $2.00" value = "2" />
            </Picker>
            <Text>Seleccione Tipo de Cafe:</Text>
            <Picker
                selectedValue={cafetiSeleccionado}
                onValueChange={(itemValue) =>
                    setcafetiSeleccionado(itemValue)
                }>
                {
                    Cafeti.map(cr => {
                        return <Picker.Item label={cr} value={cr} />
                    })
                }
            </Picker>
            <Text>Seleccione Tipo de Pago:</Text>
            <Picker
                selectedValue={cafetiiSeleccionado}
                onValueChange={(itemValue) =>
                    setcafetiiSeleccionado(itemValue)
                }>
                {
                    Cafetii.map(cr => {
                        return <Picker.Item label={cr} value={cr} />
                    })
                }
            </Picker>
            <View style={styles.viewInputs}>
            <Text>          Cantidad:         </Text>
                <TextInput
                    placeholder="#"
                    keyboardType="numeric"
                    style={[styles.input, styles.inputPercentage]}
                    onChange={(e) => setcant(e.nativeEvent.text)}
                />
            </View>
        </View>

    );
}
const styles = StyleSheet.create({
    viewForm: {
        position: 'absolute',
        bottom: 40,
        width: '100%',
        paddingHorizontal: 50,
        backgroundColor: colors.PRIMARY_COLOR_DARK,
        borderRadius: 30,
        height: 180,
        justifyContent: 'center',
    },
    viewInputs: {
        flexDirection: 'row',
    },
    input: {
        height: 40,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: colors.PRIMARY_COLOR,
        borderRadius: 10,
        width: '60%',
        marginRight: 5,
        marginLeft: -5,
        marginBottom: 20,
        color: '#000',
        paddingHorizontal: 20,
    },
    inputPercentage: {
        width: '40%',
        marginLeft: 5,
    },
});
const picketSelectStyles = StyleSheet.create({
    inputIOS: {
        fontSize: 16,
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 4,
        color: 'black',
        paddingRight: 30,
        backgroundColor: '#FFFFFF',
        marginLeft: -5,
        marginRight: -5,
    },
    inputAndroid: {
        fontSize: 16,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderWidth: 0.5,
        borderColor: 'grey',
        borderRadius: 8,
        color: 'black',
        paddingRight: 30,
        backgroundColor: '#fff',
    },
});
