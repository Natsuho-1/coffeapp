import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View, Text, } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Form from './src/components/Form';
import colors from './src/utils/colors';
import Footer from './src/components/Footer';
import Result from './src/components/Result';

export default function App() {
  const [Cafet, setCafet] = useState(null);
  const [Cafetii, setCafetii] = useState(null);
  const [Cafeti, setCafeti] = useState(null);
  const [cant, setcant] = useState(null);
  const [pago, setpago] = useState(null);
  return (
    <>
      <SafeAreaView style={styles.Header}>
        <Text style={styles.titleText}>StarBosco App</Text>
        <Form>
        setcant={setcant}
        setpago={setpago}
        setCafet={setCafet}
        setCafeti={setCafeti}
        setCafetii={setCafetii}
        </Form>
      </SafeAreaView>
      <Result>
        cafet={Cafet}
      </Result>
      <Footer></Footer>
    </>
  )
}
const styles = StyleSheet.create({
  Header: {
    backgroundColor: '#D3D3D3',
    height: 320,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    alignItems: 'center'
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold"
  }
})
