import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';

import {useForm, Controller } from 'react-hook-form';

export default function App(){
  const { control, handleSubmit, formState: {errors}, reset } = useForm({
    
    defaultValues: {
      username: '',
      email: '',
      password: '',
    },

  })

  function handleSignIn(data){
    if (!data.username || !data.email || !data.password) {
      Alert.alert('Campos obrigatórios', 'Preencha todos os campos!');
      return;
    }

    reset()
  
    console.log(data);
  }

  return (
    <View style={styles.container}>

      <View>

        <Text style={styles.title}>Cadastre-se</Text>

      </View>

      <View style={styles.form}>
        
        <Controller
          control={control}
          name='username'
          render={({field: {onChange,onBlur,value}}) =>(
            <TextInput
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              style={styles.input}
              placeholder='Digite seu Nome'
            />
          )}
        />
        {errors.username && <Text>Insira seu nome</Text>}

        <Controller
          control={control}
          name='email'
          render={({field: {onChange,onBlur,value}}) =>(
            <TextInput
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              style={styles.input}
              placeholder='Digite seu Email'
            />
          )}
        />

        <Controller
          control={control}
          name='password'
          render={({field: {onChange,onBlur,value}}) =>(
            <TextInput
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              style={styles.input}              
              placeholder='Digite sua Senha'
              secureTextEntry={true}
            />
          )}
        />

        <TouchableOpacity onPress={handleSubmit(handleSignIn)} style={styles.button}>
          <Text style={styles.buttonText}>Acessar</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:'auto',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  form:{
    width:380,
    height:'auto',
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#DBDBDB',
    borderRadius:30,
    marginTop:20,
    padding:30,
  },

  input:{
    backgroundColor:'#C7C7C7',
    padding:10,
    borderRadius:10,
    margin:8,
    width:300,
    fontSize:16,
  },

  button:{
    marginTop:15,
    backgroundColor:'#7A58F9',
    width:300,
    padding:10,
    alignItems:'center',
    borderRadius:10,
  },

  buttonText:{
    color:'#FFF',
    fontSize:22,
    fontWeight:'500',
  },

  title:{
    fontSize:34,
    fontWeight:'bold',
    color:'#7A58F9',
  },
});
