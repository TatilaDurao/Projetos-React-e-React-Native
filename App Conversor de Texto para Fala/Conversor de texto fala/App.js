import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  TextInput,
  TouchableOpacity,
  Image
} from 'react-native';

import * as Speech from 'expo-speech';
import { Header } from 'react-native-elements';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
    };
  }

  speak = () => {
    var thingToSay = this.state.name;

    this.state.name === ''
      ? alert('Por favor digite uma palavra')
      : Speech.speak(thingToSay);
  };

  render() {
    return (
      <View style={styles.textContainer1}>
        <Header
          backgroundColor={'#07B89E'}
          centerComponent={{
            text: 'Conversor de Texto Para Fala',
            style: { color: 'black', fontSize:13, fontWeight:"bold"},
          }}
        />

        <Image
          style={styles.imageIcon}
          source={{
            uri:
              'https://img.utdstc.com/icons/voice-to-text-text-to-speech-android.png:225',
          }}
        />

        <Text style={styles.text2}> Digite a Palavra </Text>
        <TextInput
          style={styles.inputBox}
          onChangeText={(text) => {
            this.setState({ name: text });
          }}
          value={this.state.name}
        />

        <View>
          <TouchableOpacity style={styles.button} onPress={this.speak}>
            <Text style={styles.text2}> Clique Aqui Para Ouvir </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputBox: {
    marginTop: 20,
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
    outline: 'none',
  },
  textContainer1: {
    backgroundColor: 'white',
    justifyContent: 'center',
  },

  text2: {
    color: 'black',

    fontSize: 20,
    textAlign: 'center',
    fontStyle: 'bold',
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  button: {
    padding: 20,
    fontSize: 20,
    textAlign: 'center',
    backgroundColor: '#07B89E',
    marginTop: 80,
    borderRadius: 50,
    width: '80%',
    alignSelf: 'center',
    height: 80,
  },
  imageIcon: {
    width: 150,
    height: 150,
    marginLeft: 95,
  },
});
