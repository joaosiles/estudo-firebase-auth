import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'; 

// Configurações do Firebase (substitua pelos seus valores)
const firebaseConfig = {
  apiKey: "AIzaSyAoElYED2Mw15LwhM4eM1aSH2te3q5MUCU",
  authDomain: "meuprimeirofirestore-cf632.firebaseapp.com",
  projectId: "meuprimeirofirestore-cf632",
  storageBucket: "meuprimeirofirestore-cf632.appspot.com",
  messagingSenderId: "90584426914",
  appId: "1:90584426914:web:9eef85214bc1635f55eafb"
};

// Inicialize o Firebase antes de qualquer uso
firebase.initializeApp(firebaseConfig);

const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const auth = getAuth();
      await signInWithEmailAndPassword(auth, email, password);   

      console.log('Usuário logado com sucesso!');
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <View>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        placeholder="Senha"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

export default App;