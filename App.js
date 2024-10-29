import { useState } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

setTimeout(() => {
  SplashScreen.hideAsync();
}, 2000)

function App() {

  const [img, setImg] = useState(require('./src/biscoito.png'));
  const [textoFrase, setTextoFrase] = useState('');

  let frases = [
    'Siga os bons e aprenda com eles.',
    'O bom-senso vale mais do que muito conhecimento.',
    'O riso é a menor distância entre duas pessoas.',
    'Deixe de lado as preocupações e seja feliz.',
    'Realize o óbvio, pense no improvável e conquiste o impossível.',
    'Acredite em milagres, mas não dependa deles.',
    'A maior barreira para o sucesso é o medo do fracasso.',
    'Deus é bom o tempo todo. O tempo todo Deus é bom.',
    'Conhecimento é a única coisa que ninguém pode te tomar na vida.',
    'É importante agradecer pelo hoje sem nunca desistir do amanhã !',
    'Lute. Acredite. Conquiste. Perca. Deseje. Espere. Alcance. Invada. Caia. Seja tudo o quiser ser, mas, acima de tudo, seja você sempre.',
    'Se expressarmos gratidão pelo que temos, teremos mais pelo que expressar gratidão.',
    'Desejar algo maior pra sua vida não significa que você está insatisfeito com o que tem.',
    'Lembre-se do seu passado com carinho. Afinal, é por causa dele que você está aqui hoje !',
    'Feliz de quem recebeu do céu um pedaço de pão e não precisa de agradecer a ninguém além do próprio céu.',
    'Não fui eu que lhe ordenei? Seja forte e corajoso! Não se apavore, nem se desanime, pois o Senhor, o seu Deus, estará com você por onde você andar. Josué 1:9',

  ]

  function quebraBiscoito(){
    let numeroAleatorio = Math.floor(Math.random() * frases.length);

    setTextoFrase(' "' + frases[numeroAleatorio] + '" ');
    setImg(require('./src/biscoitoAberto.png'));
  }

  function reiniciarBiscoito(){
    setTextoFrase('');
    setImg(require('./src/biscoito.png'));
  }

  return (
    <View style={styles.container} >
      <Image 
      source={img}
      style={styles.img}
      />

      <Text style={styles.textofrase} > {textoFrase}</Text>

      <TouchableOpacity style={styles.botao} onPress={ quebraBiscoito } >
        <View style={styles.btnArea} >
          <Text style={styles.btnTexto} > Quebrar Biscoito </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.botao, { marginTop:15, borderColor: '#121212' } ]} onPress={ reiniciarBiscoito } >
        <View style={styles.btnArea} >
          <Text style={[styles.btnTexto, { color: '#121212' } ]} > Reiniciar Biscoito </Text>
        </View>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  img:{
    width: 230,
    height: 230,
  },
  textofrase:{
    fontSize: 22,
    color: '#dd7b22',
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center'
  },
  botao:{
    width: 230,
    height: 50,
    borderColor: '#dd7b22',
    borderWidth: 2,
    borderRadius: 25
  },
  btnArea:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnTexto:{
    fontSize: 18,
    fontWeight: 'bold',
    color: '#dd7b22'
  }
})

export default App;