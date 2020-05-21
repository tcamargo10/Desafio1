import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Picker, Switch } from 'react-native';

export default class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      nome: '',
      idade: '',
      sexo: 0,
      sexos: [
        {sexonome: 'Masculino', valor: 1},
        {sexonome: 'Feminino', valor: 2},
      ],
      estudante: false,
    }
  }

  cadastrar(){

    if(this.state.nome === '' || this.state.idade === '')
    return alert('Preencha todos os dados !!!');

    alert(
      'Conta aberta com sucesso!! \n\n' + 
      'Nome: '+ this.state.nome + '\n' + 
      'Idade: '+ this.state.idade + '\n' +
      'Sexo: '+ this.state.sexos[this.state.sexo].sexonome + '\n'  +
      'Estudante: '+ ((this.state.estudante) ? 'Sim' : 'Não')
      );

      console.log(this.state.estudante)
  }

  render(){

    let carregasexo = this.state.sexos.map( (v,k) => {
      return <Picker.Item key={k} value={k} label={v.sexonome} />
    });

    return (
      <View style={styles.container}>
        
        <Text style={styles.title}>Banco React</Text>

        <View style={styles.box}>
          <Text>Nome: </Text>
          <TextInput style={styles.input} onChangeText={ (val) => this.setState({nome: val})}></TextInput>
        </View>

        <View style={styles.box}>
          <Text>Idade: </Text>
          <TextInput style={styles.input} keyboardType='numeric' onChangeText={ (val) => this.setState({idade: val})}></TextInput>
        </View>
      
        <View style={styles.box}>
          <Text>Sexo: </Text>
          <Picker
          style={styles.pickerSexo}
          selectedValue={this.state.sexo}
          onValueChange={ (value, index) => this.setState({sexo: value}) }
          >
            {carregasexo}
          </Picker>
        </View>

        <View style={styles.boxestudante}>
          <Text style={styles.text}>Estudante: </Text>
          <Switch 
            style={styles.switchestudante}
            value={this.state.estudante}
            onValueChange={ (status) => this.setState({estudante: status})}
          />
        </View>

        <View style={styles.box}>
          <Button style={styles.botao} title="cadastrar" onPress={ () => this.cadastrar() }>
            Cadastrar
          </Button>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 100,
    alignItems: 'center',
  },
  box: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginLeft: 20,
  },
  boxestudante: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginBottom: 50,
  },
  input: {
    borderColor: 'gray',
    borderWidth: 1,
    flex: 1,
    margin: 10,
  },
  botao: {
    margin: 20,
  },
  text: {
    flex: 1,
    marginLeft: 20,
  },
  pickerSexo:{
    flex: 1,
    marginLeft: 10,
  },
  switchestudante: { 
  paddingTop: 15,
  },
  title: {
    fontSize: 30,
    alignItems: 'center',
    fontWeight: 'bold',
    marginBottom: 40,
    justifyContent: 'center',
  }
});
